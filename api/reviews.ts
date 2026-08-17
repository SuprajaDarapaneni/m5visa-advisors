import type { VercelRequest, VercelResponse } from '@vercel/node';
import mongoose from 'mongoose';

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
      default: 'USA',
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
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'reviews',
  }
);

export interface IReview {
  name: string;
  country: string;
  rating: number;
  text: string;
  image?: string;
  date?: string;
  createdAt?: Date;
}

const Review = (mongoose.models.Review as mongoose.Model<IReview>) || mongoose.model<IReview>('Review', reviewSchema);

// ============================================================
// DB CONNECTION CACHE (Vercel serverless – reuse connection)
// ============================================================

let cachedConnection: typeof mongoose | null = null;

async function connectDB() {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is missing');
  }

  const conn = await mongoose.connect(MONGODB_URI);
  cachedConnection = conn;
  return conn;
}

// ============================================================
// DEFAULT HANDLER
// ============================================================

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();

    // ----------------------------------------------------------
    // GET – Fetch all reviews
    // ----------------------------------------------------------
    if (req.method === 'GET') {
      let reviews = await Review.find({}).sort({ createdAt: -1 }).lean();

      // Seed initial reviews if DB is empty
      if (reviews.length === 0) {
        const initialSeed = [
          {
            name: 'Nikitha',
            country: 'USA',
            rating: 5,
            text: 'M5 Visa Advisors made my application process for the USA incredibly smooth. Their attention to detail on my SOP was a game changer.',
            image: '',
            date: 'Aug 1, 2026',
            createdAt: new Date('2026-08-01T10:00:00Z'),
          },
          {
            name: 'Praneetha',
            country: 'UK',
            rating: 5,
            text: 'From IELTS prep to post-arrival support in the UK, M5 Visa Advisors was with me every step. Highly recommended for any aspirant.',
            image: '',
            date: 'Aug 3, 2026',
            createdAt: new Date('2026-08-03T10:00:00Z'),
          },
        ];

        await Review.insertMany(initialSeed);
        reviews = await Review.find({}).sort({ createdAt: -1 }).lean();
      }

      return res.status(200).json(reviews);
    }

    // ----------------------------------------------------------
    // POST – Create a new review
    // ----------------------------------------------------------
    if (req.method === 'POST') {
      const { name, country, rating, text, image, date } = req.body;

      if (!name || !name.trim()) {
        return res.status(400).json({ error: 'Name is required' });
      }
      if (!text || !text.trim()) {
        return res.status(400).json({ error: 'Review text is required' });
      }

      const newReview = new Review({
        name: name.trim(),
        country: country && country.trim() ? country.trim() : 'USA',
        rating: typeof rating === 'number' ? Math.min(Math.max(rating, 1), 5) : 5,
        text: text.trim(),
        image: image || '',
        date: date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        createdAt: new Date(),
      });

      const savedReview = await newReview.save();
      return res.status(201).json(savedReview);
    }

    // ----------------------------------------------------------
    // DELETE – Remove a review
    // ----------------------------------------------------------
    if (req.method === 'DELETE') {
      const id = req.query.id as string;

      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid review ID' });
      }

      const deletedReview = await Review.findByIdAndDelete(id);
      if (!deletedReview) {
        return res.status(404).json({ error: 'Review not found' });
      }

      return res.status(200).json({ success: true, message: 'Review deleted successfully' });
    }

    // Method not allowed
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({
      error: error?.message || 'Internal server error',
    });
  }
}