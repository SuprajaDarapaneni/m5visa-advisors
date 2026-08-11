import express from "express";
import path from "path";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

const app = express();

// =====================================================
// CONFIGURATION
// =====================================================

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is not configured");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// =====================================================
// MIDDLEWARE
// =====================================================

app.use(express.json({ limit: "10mb" }));

// =====================================================
// MONGODB CONNECTION
// =====================================================

let isConnected = false;

async function connectDB() {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  try {
    await mongoose.connect(MONGODB_URI);

    isConnected = true;

    console.log("✅ Connected to MongoDB");
  } catch (error) {
    isConnected = false;

    console.error("❌ MongoDB connection error:", error);

    throw error;
  }
}

// =====================================================
// REVIEW SCHEMA
// =====================================================

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    rating: {
      type: Number,
      required: true,
      default: 5,
      min: 1,
      max: 5,
    },

    text: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    date: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "reviews",
  }
);

const Review =
  mongoose.models.Review ||
  mongoose.model("Review", reviewSchema);

// =====================================================
// HEALTH CHECK
// =====================================================

app.get("/api/health", async (req, res) => {
  try {
    await connectDB();

    res.json({
      status: "ok",
      dbConnected: true,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      dbConnected: false,
      error: "Database connection failed",
    });
  }
});

// =====================================================
// CLOUDINARY IMAGE UPLOAD
// =====================================================

app.post("/api/upload", async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        error: "No image data provided",
      });
    }

    const result = await cloudinary.uploader.upload(image, {
      folder: "m5visaadvisors_reviews",
      resource_type: "auto",
    });

    return res.json({
      url: result.secure_url,
    });
  } catch (error) {
    console.error("❌ Cloudinary upload error:", error);

    return res.status(500).json({
      error:
        error?.message ||
        "Failed to upload image to Cloudinary",
    });
  }
});

// =====================================================
// GET REVIEWS
// =====================================================

app.get("/api/reviews", async (req, res) => {
  try {
    await connectDB();

    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .lean();

    // Seed initial reviews if database is empty
    if (reviews.length === 0) {
      const initialSeed = [
        {
          name: "Nikitha",
          country: "USA",
          rating: 5,
          text:
            "M5 Visa Advisors made my application process for the USA incredibly smooth. Their attention to detail on my SOP was a game changer.",
          image: "",
          date: "Aug 1, 2026",
          createdAt: new Date("2026-08-01T10:00:00Z"),
        },
        {
          name: "Praneetha",
          country: "UK",
          rating: 5,
          text:
            "From IELTS prep to post-arrival support in the UK, M5 Visa Advisors was with me every step. Highly recommended for any aspirant.",
          image: "",
          date: "Aug 3, 2026",
          createdAt: new Date("2026-08-03T10:00:00Z"),
        },
      ];

      await Review.insertMany(initialSeed);

      const seededReviews = await Review.find()
        .sort({ createdAt: -1 })
        .lean();

      return res.json(seededReviews);
    }

    return res.json(reviews);
  } catch (error) {
    console.error("❌ Error fetching reviews:", error);

    return res.status(500).json({
      error: "Failed to fetch reviews",
    });
  }
});

// =====================================================
// CREATE REVIEW
// =====================================================

app.post("/api/reviews", async (req, res) => {
  try {
    const {
      name,
      country,
      rating,
      text,
      image,
      date,
    } = req.body;

    if (!name || !text) {
      return res.status(400).json({
        error: "Name and text are required.",
      });
    }

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

    const savedReview = await newReview.save();

    console.log("✅ Review saved:", savedReview._id);

    return res.status(201).json(savedReview);
  } catch (error) {
    console.error("❌ Error saving review:", error);

    return res.status(500).json({
      error: "Failed to save review",
    });
  }
});

// =====================================================
// VITE DEVELOPMENT / PRODUCTION
// =====================================================

if (process.env.NODE_ENV !== "production") {
  const { createServer: createViteServer } =
    await import("vite");

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: "spa",
  });

  app.use(vite.middlewares);
} else {
  const distPath = path.join(process.cwd(), "dist");

  app.use(express.static(distPath));

  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
