import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Plus, X, CheckCircle2, MessageSquarePlus, User, Sparkles, Send, Upload, Image as ImageIcon, Loader2, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal } from 'lucide-react';

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

const STUDY_COUNTRIES = [
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
  'Other Country'
];

const TOURIST_REGIONS = [
  'Tourist Visa - USA',
  'Tourist Visa - UK',
  'Tourist Visa - Europe (Schengen)',
  'Tourist Visa - Middle East / Dubai',
  'Tourist Visa - Canada',
  'Tourist Visa - Australia',
  'Tourist Visa - Other Region'
];

const formatReviewSubtitle = (c: string) => {
  if (!c) return 'Verified Client';
  if (c.toLowerCase().includes('tourist') || c.toLowerCase().includes('visa')) {
    return c;
  }
  return `Study in ${c}`;
};

export default function Testimonials() {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  // Scroll Container Ref
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  // Load reviews from MongoDB backend and localStorage fallback
  useEffect(() => {
    const handleOpenModal = () => {
      window.dispatchEvent(new CustomEvent('open-review-modal'));
    };

    const handleReviewSubmitted = (e: any) => {
      if (e.detail) {
        const newDoc = {
          ...e.detail,
          id: e.detail._id || e.detail.id || `review-${Date.now()}`,
          isCustom: true
        };
        setReviews(prev => [newDoc, ...prev]);
        setShowSuccessMessage(true);

        setTimeout(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
          }
        }, 150);

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      }
    };

    window.addEventListener('open-review-modal', handleOpenModal);
    window.addEventListener('review-submitted', handleReviewSubmitted);

    async function fetchMongoReviews() {
      setIsLoading(true);
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const dbReviews: ReviewItem[] = await res.json();
          if (Array.isArray(dbReviews)) {
            const formattedDbReviews = dbReviews.map((r: any) => ({
              ...r,
              id: r._id || r.id,
              isCustom: true
            }));
            setReviews(formattedDbReviews);
            setIsLoading(false);
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
          if (Array.isArray(parsed)) {
            setReviews(parsed);
          }
        }
      } catch (e) {
        console.error('Failed to load reviews from localStorage', e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMongoReviews();

    return () => {
      window.removeEventListener('open-review-modal', handleOpenModal);
      window.removeEventListener('review-submitted', handleReviewSubmitted);
    };
  }, []);

  // Calculate average rating
  const totalReviewsCount = reviews.length;
  const averageRating = (
    reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / totalReviewsCount
  ).toFixed(1);

  return (
    <section id="testimonials" className="py-12 bg-brand-light/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Stats Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent/10 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Success Stories</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-brand uppercase tracking-tight">
              What Our Clients Say
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

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle Buttons */}
            <div className="bg-white/80 backdrop-blur border border-brand/10 p-1 rounded-full flex items-center shadow-sm">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-brand text-white shadow-md'
                    : 'text-brand/60 hover:text-brand'
                }`}
                title="Scrolling Carousel View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-accent" />
                <span>Slider</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-brand text-white shadow-md'
                    : 'text-brand/60 hover:text-brand'
                }`}
                title="Scrollable Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-accent" />
                <span>Grid</span>
              </button>
            </div>

            {/* Scroll Navigation Arrows */}
            {viewMode === 'carousel' && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={scrollLeft}
                  className="w-10 h-10 rounded-full bg-white hover:bg-brand hover:text-white border border-brand/10 text-brand shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollRight}
                  className="w-10 h-10 rounded-full bg-white hover:bg-brand hover:text-white border border-brand/10 text-brand shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Write a Review Button */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-review-modal'))}
              className="inline-flex items-center space-x-2 bg-brand text-white hover:bg-brand/90 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              <span>Write a Review</span>
            </button>
          </div>
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
                  <p className="text-xs text-emerald-700">Your review has been published and saved.</p>
                </div>
              </div>
              <button
                onClick={() => setShowSuccessMessage(false)}
                className="text-emerald-500 hover:text-emerald-800 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Container - Horizontal Carousel or Scrollable Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16 bg-white/50 rounded-3xl border border-brand/5">
            <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
            <span className="ml-3 font-semibold text-brand text-sm">Loading reviews...</span>
          </div>
        ) : reviews.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-brand/10 text-center shadow-lg shadow-brand/5 max-w-xl mx-auto my-4">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-200">
              <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-brand mb-2">No Reviews Yet</h3>
            <p className="text-brand/70 text-sm mb-6">
              Be the first student to share your visa success story with M5 Visa Advisors!
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-review-modal'))}
              className="inline-flex items-center space-x-2 bg-brand text-white hover:bg-brand/90 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-accent" />
              <span>Write the First Review</span>
            </button>
          </div>
        ) : (
          <div className="relative group">
            {viewMode === 'carousel' ? (
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory custom-scrollbar scroll-smooth"
              >
                {reviews.map((review, index) => {
                  const initialLetter = (review.name || 'S').charAt(0).toUpperCase();
                  return (
                    <motion.div
                      key={review.id || review.name + index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.4) }}
                      className="w-[300px] sm:w-[360px] md:w-[390px] flex-shrink-0 snap-start bg-white p-7 rounded-3xl shadow-lg shadow-brand/5 relative flex flex-col justify-between border border-brand/5 hover:border-brand/15 transition-all"
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
                              {review.country?.toLowerCase().includes('tourist') ? 'Verified Client' : 'verified client'}
                            </span>
                          ) : (
                            <Quote className="w-8 h-8 text-brand/10" />
                          )}
                        </div>

                        <p className="text-brand/80 italic mb-6 leading-relaxed text-sm sm:text-base">
                          "{review.text}"
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-brand/5">
                        <div className="flex items-center space-x-3">
                          {review.image && review.image.trim() !== '' ? (
                            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-accent/40 bg-brand/5 flex items-center justify-center font-bold text-brand flex-shrink-0 shadow-md">
                              <img
                                src={review.image}
                                alt={review.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
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
                            <div className="text-xs text-brand/50 font-medium">{formatReviewSubtitle(review.country)}</div>
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
            ) : (
              /* Scrollable Grid View */
              <div
                ref={scrollContainerRef}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[650px] overflow-y-auto pr-2 custom-scrollbar p-1"
              >
                {reviews.map((review, index) => {
                  const initialLetter = (review.name || 'S').charAt(0).toUpperCase();
                  return (
                    <motion.div
                      key={review.id || review.name + index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white p-7 rounded-3xl shadow-lg shadow-brand/5 relative flex flex-col justify-between border border-brand/5 hover:border-brand/15 transition-all"
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
                              {review.country?.toLowerCase().includes('tourist') ? 'Verified Client' : 'verified client'}
                            </span>
                          ) : (
                            <Quote className="w-8 h-8 text-brand/10" />
                          )}
                        </div>

                        <p className="text-brand/80 italic mb-6 leading-relaxed text-sm sm:text-base">
                          "{review.text}"
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-brand/5">
                        <div className="flex items-center space-x-3">
                          {review.image && review.image.trim() !== '' ? (
                            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-accent/40 bg-brand/5 flex items-center justify-center font-bold text-brand flex-shrink-0 shadow-md">
                              <img
                                src={review.image}
                                alt={review.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
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
                            <div className="w-11 h-11 rounded-full bg-brand text-accent font-bold text-base border-2 border-accent/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                              <span>{initialLetter}</span>
                            </div>
                          )}
                          <div>
                            <div className="font-bold text-brand text-sm">{review.name}</div>
                            <div className="text-xs text-brand/50 font-medium">{formatReviewSubtitle(review.country)}</div>
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
            )}
          </div>
        )}

      </div>
    </section>
  );
}

