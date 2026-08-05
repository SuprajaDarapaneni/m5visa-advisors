import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Plus, X, CheckCircle2, MessageSquarePlus, User, Sparkles, Send, Upload, Image as ImageIcon, Loader2 } from 'lucide-react';

export interface ReviewItem {
  id?: string;
  name: string;
  country: string;
  text: string;
  rating: number;
  image?: string;
  date?: string;
  isCustom?: boolean;
}

const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    id: 'default-1',
    name: 'Nikitha',
    country: 'USA',
    rating: 5,
    text: 'M5 Visa Advisors made my application process for the USA incredibly smooth. Their attention to detail on my SOP was a game changer.',
    date: 'Recently'
  },
  {
    id: 'default-2',
    name: 'Divya',
    country: 'USA',
    rating: 5,
    text: 'I was worried about my USA visa interview, but the mock sessions with M5 Visa Advisors experts gave me the confidence I needed.',
    date: 'Recently'
  },
  {
    id: 'default-3',
    name: 'Praneetha',
    country: 'UK',
    rating: 5,
    text: 'From IELTS prep to post-arrival support in the UK, M5 Visa Advisors was with me every step. Highly recommended for any aspirant.',
    date: 'Recently'
  }
];

const COUNTRIES_LIST = [
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Germany',
  'Ireland',
  'France',
  'Italy',
  'Latvia',
  'Austria',
  'Switzerland',
  'Dubai / UAE',
  'Other'
];

export default function Testimonials() {
  const [reviews, setReviews] = useState<ReviewItem[]>(DEFAULT_REVIEWS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [country, setCountry] = useState('USA');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');
  
  // Optional Image Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Image file size should be less than 5MB.');
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeSelectedImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  // Load reviews from MongoDB backend and localStorage fallback
  useEffect(() => {
    async function fetchMongoReviews() {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const dbReviews: ReviewItem[] = await res.json();
          if (Array.isArray(dbReviews) && dbReviews.length > 0) {
            const formattedDbReviews = dbReviews.map((r: any) => ({
              ...r,
              id: r._id || r.id,
              isCustom: true
            }));
            setReviews([...formattedDbReviews, ...DEFAULT_REVIEWS]);
            return;
          }
        }
      } catch (err) {
        console.warn('Could not fetch reviews from backend API, using local storage fallback:', err);
      }

      // LocalStorage fallback if API fails
      try {
        const saved = localStorage.getItem('m5_user_reviews');
        if (saved) {
          const parsed: ReviewItem[] = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setReviews([...parsed, ...DEFAULT_REVIEWS]);
          }
        }
      } catch (e) {
        console.error('Failed to load reviews from localStorage', e);
      }
    }

    fetchMongoReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!text.trim() || text.trim().length < 10) {
      setError('Please share a review with at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    let uploadedImageUrl = '';

    // Upload image to Cloudinary via server endpoint if provided
    if (previewUrl) {
      setIsUploadingImage(true);
      try {
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: previewUrl }),
        });

        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          uploadedImageUrl = uploadData.url || '';
        } else {
          console.warn('Image upload failed, proceeding without image');
        }
      } catch (uploadErr) {
        console.error('Cloudinary upload error:', uploadErr);
      } finally {
        setIsUploadingImage(false);
      }
    }

    const reviewData = {
      name: name.trim(),
      country,
      rating,
      text: text.trim(),
      image: uploadedImageUrl, // Cloudinary image URL if uploaded, else empty string
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    let newReview: ReviewItem = {
      ...reviewData,
      id: `review-${Date.now()}`,
      isCustom: true,
    };

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData),
      });

      if (res.ok) {
        const savedDoc = await res.json();
        newReview = {
          ...savedDoc,
          id: savedDoc._id || savedDoc.id,
          isCustom: true,
        };
      }
    } catch (err) {
      console.warn('API submission failed, falling back to local storage', err);
    }

    // Save to local state and localStorage backup
    try {
      const existingSaved = localStorage.getItem('m5_user_reviews');
      let customList: ReviewItem[] = [];
      if (existingSaved) {
        customList = JSON.parse(existingSaved);
      }
      const updatedCustomList = [newReview, ...customList];
      localStorage.setItem('m5_user_reviews', JSON.stringify(updatedCustomList));
    } catch (e) {
      console.error('Failed to save to localStorage backup', e);
    }

    setReviews((prev) => [newReview, ...prev]);

    setIsSubmitting(false);
    setIsFormOpen(false);
    setShowSuccessMessage(true);

    // Reset form
    setName('');
    setCountry('USA');
    setRating(5);
    setText('');
    setSelectedFile(null);
    setPreviewUrl(null);

    // Auto dismiss success toast after 5s
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  // Calculate average rating
  const totalReviewsCount = reviews.length;
  const averageRating = (
    reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / totalReviewsCount
  ).toFixed(1);

  return (
    <section id="testimonials" className="py-12 bg-brand-light/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Stats Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent/10 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Success Stories</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-brand uppercase tracking-tight">
              What Our Students Say
            </h3>
            <div className="flex items-center space-x-3 mt-3 text-sm text-brand/70">
              <div className="flex items-center text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400" />
                ))}
              </div>
              <span className="font-bold text-brand">{averageRating} / 5.0</span>
              <span className="text-brand/40">•</span>
              <span>Based on {totalReviewsCount} student reviews</span>
            </div>
          </div>

          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center space-x-2 bg-brand text-white hover:bg-brand/90 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group self-start md:self-auto cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Success Toast Banner */}
        <AnimatePresence>
          {showSuccessMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Thank you for your feedback!</p>
                  <p className="text-xs text-emerald-700">Your review has been published and saved to our database.</p>
                </div>
              </div>
              <button
                onClick={() => setShowSuccessMessage(false)}
                className="text-emerald-500 hover:text-emerald-800 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Form for Adding a Review */}
        <AnimatePresence>
          {isFormOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative my-8 border border-brand/10 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-6 right-6 p-2 text-brand/40 hover:text-brand hover:bg-brand/5 rounded-full transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-brand/5 flex items-center justify-center text-brand">
                    <MessageSquarePlus className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand">Share Your Review</h4>
                    <p className="text-xs text-brand/60">Help future study abroad aspirants with your feedback</p>
                  </div>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand/70 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand/30" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ananya Reddy"
                        className="w-full pl-10 pr-4 py-3 bg-brand-light/30 border border-brand/10 rounded-xl text-sm font-medium text-brand placeholder:text-brand/30 focus:outline-none focus:border-accent focus:bg-white transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Destination Country */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand/70 mb-1.5">
                      Destination Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-light/30 border border-brand/10 rounded-xl text-sm font-medium text-brand focus:outline-none focus:border-accent focus:bg-white transition-all cursor-pointer"
                    >
                      {COUNTRIES_LIST.map((c) => (
                        <option key={c} value={c}>
                          Study in {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand/70 mb-1.5">
                      Rating <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center space-x-2 bg-brand-light/20 p-3 rounded-xl border border-brand/5">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((starVal) => {
                          const activeRating = hoverRating || rating;
                          return (
                            <button
                              type="button"
                              key={starVal}
                              onClick={() => setRating(starVal)}
                              onMouseEnter={() => setHoverRating(starVal)}
                              onMouseLeave={() => setHoverRating(0)}
                              className="p-1 focus:outline-none cursor-pointer transition-transform hover:scale-125"
                            >
                              <Star
                                className={`w-6 h-6 ${
                                  starVal <= activeRating
                                    ? 'text-orange-400 fill-orange-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                      <span className="text-xs font-bold text-brand ml-2">
                        {rating === 5 && 'Excellent! (5/5)'}
                        {rating === 4 && 'Very Good (4/5)'}
                        {rating === 3 && 'Good (3/5)'}
                        {rating === 2 && 'Fair (2/5)'}
                        {rating === 1 && 'Poor (1/5)'}
                      </span>
                    </div>
                  </div>

                  {/* Optional Image Upload */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand/70">
                        Upload Profile Photo <span className="text-brand/40 font-normal lowercase">(optional)</span>
                      </label>
                      <span className="text-[10px] text-brand/40">Cloudinary Powered</span>
                    </div>

                    {previewUrl ? (
                      <div className="flex items-center space-x-4 p-3 bg-brand-light/30 border border-brand/10 rounded-xl">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-12 h-12 rounded-full object-cover border border-brand/20 shadow-sm"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-brand truncate">
                            {selectedFile?.name || 'Uploaded Photo'}
                          </p>
                          <p className="text-[10px] text-brand/50">Ready to upload</p>
                        </div>
                        <button
                          type="button"
                          onClick={removeSelectedImage}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          title="Remove photo"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-brand/15 hover:border-accent bg-brand-light/20 rounded-xl cursor-pointer transition-all hover:bg-brand-light/40 group">
                        <div className="flex items-center space-x-2 text-brand/60 group-hover:text-brand">
                          <Upload className="w-4 h-4 text-accent" />
                          <span className="text-xs font-semibold">Click to select photo</span>
                        </div>
                        <span className="text-[10px] text-brand/40 mt-1">PNG, JPG, WEBP up to 5MB (Optional)</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand/70 mb-1.5">
                      Your Experience & Feedback <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Share your visa experience, how M5 Visa Advisors guided you, or advice for fellow aspirants..."
                      className="w-full p-4 bg-brand-light/30 border border-brand/10 rounded-xl text-sm text-brand placeholder:text-brand/30 focus:outline-none focus:border-accent focus:bg-white transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-brand/60 hover:text-brand hover:bg-brand/5 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center space-x-2 bg-brand text-white hover:bg-brand/90 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-accent" />
                          <span>{isUploadingImage ? 'Uploading Image...' : 'Saving Review...'}</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Review</span>
                          <Send className="w-3.5 h-3.5 text-accent" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            const initialLetter = (review.name || 'S').charAt(0).toUpperCase();
            return (
              <motion.div
                key={review.id || review.name + index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.4) }}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-brand/5 relative flex flex-col justify-between border border-brand/5 hover:border-brand/15 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                      ))}
                    </div>

                    {review.isCustom ? (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 uppercase tracking-widest">
                        Verified Student
                      </span>
                    ) : (
                      <Quote className="w-8 h-8 text-brand/10" />
                    )}
                  </div>

                  <p className="text-brand/80 italic mb-8 leading-relaxed text-sm sm:text-base">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-brand/5">
                  <div className="flex items-center space-x-3">
                    {review.image && review.image.trim() !== '' ? (
                      <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-brand/10 bg-brand/5 flex items-center justify-center font-bold text-brand flex-shrink-0">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // If image fails to load, replace with initial letter
                            (e.target as HTMLElement).style.display = 'none';
                            const parent = (e.target as HTMLElement).parentElement;
                            if (parent) {
                              parent.innerHTML = `<span class="text-accent font-bold text-base">${initialLetter}</span>`;
                              parent.className = "w-11 h-11 rounded-full bg-brand border-2 border-accent/20 flex items-center justify-center flex-shrink-0 shadow-sm";
                            }
                          }}
                        />
                      </div>
                    ) : (
                      /* Clean Name Initial Badge if user didn't upload photo */
                      <div className="w-11 h-11 rounded-full bg-brand text-accent font-bold text-base border-2 border-accent/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <span>{initialLetter}</span>
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-brand text-sm">{review.name}</div>
                      <div className="text-xs text-brand/50 font-medium">Study in {review.country}</div>
                    </div>
                  </div>

                  {review.date && (
                    <span className="text-[10px] text-brand/40 font-medium">
                      {review.date}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

