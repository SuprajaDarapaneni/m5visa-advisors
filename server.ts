import express from "express";
import path from "path";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with user credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dz5noprbz",
  api_key: process.env.CLOUDINARY_API_KEY || "571313168125116",
  api_secret: process.env.CLOUDINARY_API_SECRET || "PvZfrwMxJITMJZNeTywsn3sj6B8",
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

  // GET /api/reviews - Fetch all reviews from MongoDB
  app.get("/api/reviews", async (req, res) => {
    try {
      await connectDB();
      const reviews = await Review.find().sort({ createdAt: -1 }).lean();
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews from MongoDB:", error);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  // POST /api/reviews - Save a new review to MongoDB
  app.post("/api/reviews", async (req, res) => {
    try {
      await connectDB();
      const { name, country, rating, text, image, date } = req.body;

      if (!name || !text) {
        return res.status(400).json({ error: "Name and text are required." });
      }

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

      const saved = await newReview.save();
      res.status(201).json(saved);
    } catch (error) {
      console.error("Error saving review to MongoDB:", error);
      res.status(500).json({ error: "Failed to save review to database" });
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

