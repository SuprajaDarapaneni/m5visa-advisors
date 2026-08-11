import express from "express";
import path from "path";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with user credentials
let cloudName = process.env.CLOUDINARY_CLOUD_NAME || "dz5noprbz";
let apiKey = process.env.CLOUDINARY_API_KEY || "571313168125116";
let apiSecret = process.env.CLOUDINARY_API_SECRET || "PvZfrwMxJITMJZNeTywsn3sj6B8";

// Handle swapped env vars if key and secret are reversed
if (apiKey.length > 20 && /^\d+$/.test(apiSecret)) {
  const temp = apiKey;
  apiKey = apiSecret;
  apiSecret = temp;
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:admin@cluster0.cpyh5.mongodb.net/m5visaadvisors?retryWrites=true&w=majority&appName=Cluster0";

// Define Review Mongoose Schema & Model
const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  rating: { type: Number, required: true, default: 5 },
  text: { type: String, required: true },
  image: { type: String, default: "" },
  date: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("Connected to MongoDB cluster0 (m5visaadvisors)");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Trigger connection asynchronously
  connectDB().catch((err) => console.error("Initial DB connection failed:", err));

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", dbConnected: isConnected });
  });

  // POST /api/upload - Upload image to Cloudinary
  app.post("/api/upload", async (req, res) => {
    try {
      const { image } = req.body;
      if (!image) {
        return res.status(400).json({ error: "No image data provided" });
      }

      const result = await cloudinary.uploader.upload(image, {
        folder: "m5visaadvisors_reviews",
        resource_type: "auto",
      });

      res.json({ url: result.secure_url });
    } catch (error: any) {
      console.error("Cloudinary upload error:", error);
      res.status(500).json({ error: error?.message || "Failed to upload image to Cloudinary" });
    }
  });

  // GET /api/reviews - Fetch reviews from Render backend or local MongoDB
  app.get("/api/reviews", async (req, res) => {
    try {
      // First try fetching from live Render backend
      const renderRes = await fetch("https://m5visa-advisors.onrender.com/api/reviews", {
        signal: AbortSignal.timeout(6000),
      });
      if (renderRes.ok) {
        const renderReviews = await renderRes.json();
        if (Array.isArray(renderReviews) && renderReviews.length > 0) {
          return res.json(renderReviews);
        }
      }
    } catch (err) {
      console.warn("Render backend fetch timed out or failed, falling back to direct MongoDB:", err);
    }

    try {
      await connectDB();
      let reviews = await Review.find().lean();

      // Also check if any documents exist in 'm5visaadvisors' collection
      if (mongoose.connection.db) {
        const altDocs = await mongoose.connection.db.collection("m5visaadvisors").find().toArray();
        if (altDocs && altDocs.length > 0) {
          const existingIds = new Set(reviews.map((r: any) => r._id.toString()));
          for (const doc of altDocs) {
            if (!existingIds.has(doc._id.toString())) {
              reviews.push(doc as any);
            }
          }
        }
      }

      if (reviews.length === 0) {
        const initialSeed = [
          {
            name: "Nikitha",
            country: "USA",
            rating: 5,
            text: "M5 Visa Advisors made my application process for the USA incredibly smooth. Their attention to detail on my SOP was a game changer.",
            image: "",
            date: "Aug 1, 2026",
            createdAt: new Date("2026-08-01T10:00:00Z")
          },
          {
            name: "Praneetha",
            country: "UK",
            rating: 5,
            text: "From IELTS prep to post-arrival support in the UK, M5 Visa Advisors was with me every step. Highly recommended for any aspirant.",
            image: "",
            date: "Aug 3, 2026",
            createdAt: new Date("2026-08-03T10:00:00Z")
          }
        ];
        await Review.insertMany(initialSeed);
        reviews = await Review.find().lean();
      }

      // Sort by createdAt or date descending
      reviews.sort((a: any, b: any) => {
        const tA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const tB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return tB - tA;
      });

      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews from MongoDB:", error);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  // POST /api/reviews - Save a new review to Render backend and local MongoDB
  app.post("/api/reviews", async (req, res) => {
    const { name, country, rating, text, image, date } = req.body;

    if (!name || !text) {
      return res.status(400).json({ error: "Name and text are required." });
    }

    let savedReviewFromRender = null;

    // 1. Post to Render backend
    try {
      const renderRes = await fetch("https://m5visa-advisors.onrender.com/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, country, rating, text, image, date }),
        signal: AbortSignal.timeout(8000),
      });
      if (renderRes.ok) {
        savedReviewFromRender = await renderRes.json();
      }
    } catch (err) {
      console.warn("Posting to Render backend failed or timed out:", err);
    }

    // 2. Also save to direct MongoDB connection for safety
    let savedLocal = null;
    try {
      await connectDB();
      const newReview = new Review({
        name,
        country: country || "USA",
        rating: rating || 5,
        text,
        image: image || "",
        date:
          date ||
          new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
      });
      savedLocal = await newReview.save();
    } catch (error) {
      console.error("Error saving review to local MongoDB connection:", error);
    }

    if (savedReviewFromRender) {
      return res.status(201).json(savedReviewFromRender);
    } else if (savedLocal) {
      return res.status(201).json(savedLocal);
    } else {
      return res.status(500).json({ error: "Failed to save review to database" });
    }
  });

  // Vite middleware for development vs static fallback for production
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

