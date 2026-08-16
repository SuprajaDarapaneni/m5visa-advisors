import express from "express";
import path from "path";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

const app = express();

const allowedOrigins = [
  "https://www.m5visaadvisors.in",
  "https://m5visaadvisors.in",
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header
      // such as Postman/server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error(`CORS blocked for origin: ${origin}`)
      );
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());

// ============================================================
// CONFIGURATION
// ============================================================

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;

const CLOUDINARY_CLOUD_NAME =
  process.env.CLOUDINARY_CLOUD_NAME;

const CLOUDINARY_API_KEY =
  process.env.CLOUDINARY_API_KEY;

const CLOUDINARY_API_SECRET =
  process.env.CLOUDINARY_API_SECRET;

// Validate required environment variables
if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is missing");
}

if (
  !CLOUDINARY_CLOUD_NAME ||
  !CLOUDINARY_API_KEY ||
  !CLOUDINARY_API_SECRET
) {
  console.error("❌ Cloudinary environment variables are missing");
}

// ============================================================
// CLOUDINARY CONFIGURATION
// ============================================================

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// ============================================================
// MIDDLEWARE
// ============================================================

app.use(
  express.json({
    limit: "10mb",
  })
);

// ============================================================
// MONGODB CONNECTION
// ============================================================

let isConnected = false;

async function connectDB() {
  // Already connected
  if (
    isConnected &&
    mongoose.connection.readyState === 1
  ) {
    return;
  }

  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI environment variable is missing"
    );
  }

  try {
    await mongoose.connect(MONGODB_URI);

    isConnected = true;

    console.log("========================================");
    console.log("✅ MongoDB connected successfully");
    console.log("========================================");
  } catch (error) {
    isConnected = false;

    console.error(
      "❌ MongoDB connection failed:",
      error
    );

    throw error;
  }
}

// Handle MongoDB connection events
mongoose.connection.on("connected", () => {
  isConnected = true;
  console.log("✅ MongoDB connection established");
});

mongoose.connection.on("disconnected", () => {
  isConnected = false;
  console.log("⚠️ MongoDB disconnected");
});

mongoose.connection.on("error", (error) => {
  console.error("❌ MongoDB error:", error);
});

// ============================================================
// REVIEW SCHEMA
// ============================================================

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
      default: "USA",
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
      default: "",
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

// ============================================================
// HEALTH CHECK
// ============================================================

app.get("/api/health", async (req, res) => {
  try {
    await connectDB();

    return res.status(200).json({
      status: "ok",
      dbConnected: true,
      message: "M5 Visa Advisors backend is running",
    });
  } catch (error) {
    console.error(
      "Health check database error:",
      error
    );

    return res.status(500).json({
      status: "error",
      dbConnected: false,
      message: "Database connection failed",
    });
  }
});

// ============================================================
// CLOUDINARY IMAGE UPLOAD
// ============================================================

app.post("/api/upload", async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        error: "No image data provided",
      });
    }

    if (
      !CLOUDINARY_CLOUD_NAME ||
      !CLOUDINARY_API_KEY ||
      !CLOUDINARY_API_SECRET
    ) {
      return res.status(500).json({
        error:
          "Cloudinary configuration is missing",
      });
    }

    console.log("📤 Uploading image to Cloudinary...");

    const result =
      await cloudinary.uploader.upload(image, {
        folder: "m5visaadvisors_reviews",
        resource_type: "auto",
      });

    console.log(
      "✅ Cloudinary upload successful:",
      result.secure_url
    );

    return res.status(200).json({
      url: result.secure_url,
    });
  } catch (error) {
    console.error(
      "❌ Cloudinary upload error:",
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        "Failed to upload image",
    });
  }
});

// ============================================================
// GET ALL REVIEWS
// ============================================================

app.get("/api/reviews", async (req, res) => {
  try {
    console.log("📥 GET /api/reviews");

    await connectDB();

    let reviews = await Review.find({})
      .sort({
        createdAt: -1,
      })
      .lean();

    // --------------------------------------------------------
    // Add initial reviews if database is empty
    // --------------------------------------------------------

    if (reviews.length === 0) {
      console.log(
        "ℹ️ No reviews found. Creating initial reviews..."
      );

      const initialSeed = [
        {
          name: "Nikitha",
          country: "USA",
          rating: 5,
          text:
            "M5 Visa Advisors made my application process for the USA incredibly smooth. Their attention to detail on my SOP was a game changer.",
          image: "",
          date: "Aug 1, 2026",
          createdAt:
            new Date("2026-08-01T10:00:00Z"),
        },

        {
          name: "Praneetha",
          country: "UK",
          rating: 5,
          text:
            "From IELTS prep to post-arrival support in the UK, M5 Visa Advisors was with me every step. Highly recommended for any aspirant.",
          image: "",
          date: "Aug 3, 2026",
          createdAt:
            new Date("2026-08-03T10:00:00Z"),
        },
      ];

      await Review.insertMany(initialSeed);

      reviews = await Review.find({})
        .sort({
          createdAt: -1,
        })
        .lean();

      console.log(
        `✅ Created ${reviews.length} initial reviews`
      );
    }

    console.log(
      `✅ Returning ${reviews.length} reviews`
    );

    return res.status(200).json(reviews);
  } catch (error) {
    console.error(
      "❌ Error fetching reviews:",
      error
    );

    return res.status(500).json({
      error: "Failed to fetch reviews",
      details:
        process.env.NODE_ENV !== "production"
          ? error?.message
          : undefined,
    });
  }
});

// ============================================================
// CREATE NEW REVIEW
// ============================================================

app.post("/api/reviews", async (req, res) => {
  try {
    console.log("📥 POST /api/reviews");

    const {
      name,
      country,
      rating,
      text,
      image,
      date,
    } = req.body;

    // --------------------------------------------------------
    // Validation
    // --------------------------------------------------------

    if (!name || !name.trim()) {
      return res.status(400).json({
        error: "Name is required",
      });
    }

    if (!text || !text.trim()) {
      return res.status(400).json({
        error: "Review text is required",
      });
    }

    // --------------------------------------------------------
    // Connect MongoDB
    // --------------------------------------------------------

    await connectDB();

    // --------------------------------------------------------
    // Create review
    // --------------------------------------------------------

    const newReview = new Review({
      name: name.trim(),

      country:
        country && country.trim()
          ? country.trim()
          : "USA",

      rating:
        typeof rating === "number"
          ? Math.min(
              Math.max(rating, 1),
              5
            )
          : 5,

      text: text.trim(),

      image: image || "",

      date:
        date ||
        new Date().toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric",
            year: "numeric",
          }
        ),

      createdAt: new Date(),
    });

    const savedReview =
      await newReview.save();

    console.log(
      "✅ Review saved:",
      savedReview._id.toString()
    );

    return res.status(201).json(
      savedReview
    );
  } catch (error) {
    console.error(
      "❌ Error saving review:",
      error
    );

    return res.status(500).json({
      error: "Failed to save review",
      details:
        process.env.NODE_ENV !== "production"
          ? error?.message
          : undefined,
    });
  }
});

// ============================================================
// DELETE REVIEW
// ============================================================

app.delete(
  "/api/reviews/:id",
  async (req, res) => {
    try {
      const { id } = req.params;

      if (
        !mongoose.Types.ObjectId.isValid(id)
      ) {
        return res.status(400).json({
          error: "Invalid review ID",
        });
      }

      await connectDB();

      const deletedReview =
        await Review.findByIdAndDelete(id);

      if (!deletedReview) {
        return res.status(404).json({
          error: "Review not found",
        });
      }

      console.log(
        "🗑️ Review deleted:",
        id
      );

      return res.status(200).json({
        success: true,
        message: "Review deleted successfully",
      });
    } catch (error) {
      console.error(
        "❌ Error deleting review:",
        error
      );

      return res.status(500).json({
        error: "Failed to delete review",
      });
    }
  }
);

// ============================================================
// PRODUCTION / DEVELOPMENT FRONTEND
// ============================================================

if (process.env.NODE_ENV !== "production") {
  console.log(
    "🔧 Running in development mode"
  );

  const {
    createServer: createViteServer,
  } = await import("vite");

  const vite =
    await createViteServer({
      server: {
        middlewareMode: true,
      },

      appType: "spa",
    });

  app.use(vite.middlewares);
} else {
  console.log(
    "🚀 Running in production mode"
  );

  const distPath = path.join(
    process.cwd(),
    "dist"
  );

  app.use(
    express.static(distPath)
  );

  // SPA fallback
  app.get(
    "/{*splat}",
    (req, res) => {
      res.sendFile(
        path.join(
          distPath,
          "index.html"
        )
      );
    }
  );
}

// ============================================================
// START SERVER
// ============================================================

app.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(
      "========================================"
    );

    console.log(
      `🚀 M5 Visa Advisors server started`
    );

    console.log(
      `🚀 Port: ${PORT}`
    );

    console.log(
      `🚀 Environment: ${
        process.env.NODE_ENV ||
        "development"
      }`
    );

    console.log(
      "========================================"
    );
  }
);

// ============================================================
// GRACEFUL SHUTDOWN
// ============================================================

process.on(
  "SIGTERM",
  async () => {
    console.log(
      "SIGTERM received. Closing server..."
    );

    try {
      await mongoose.connection.close();

      console.log(
        "MongoDB connection closed"
      );

      process.exit(0);
    } catch (error) {
      console.error(
        "Error during shutdown:",
        error
      );

      process.exit(1);
    }
  }
);