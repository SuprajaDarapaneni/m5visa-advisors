import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Upload, User, MessageSquarePlus, CheckCircle2, Loader2 } from 'lucide-react';

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

export default function ReviewModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [country, setCountry] = useState('USA');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');

  // Image Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
      setShowSuccess(false);
      setError('');
    };

    window.addEventListener('open-review-modal', handleOpenModal);
    return () => {
      window.removeEventListener('open-review-modal', handleOpenModal);
    };
  }, []);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

  const closeModal = () => {
    setIsOpen(false);
    setError('');
    setShowSuccess(false);
  };

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

    // Upload image if provided
    if (previewUrl) {
      setIsUploadingImage(true);
      try {
        const uploadRes = await fetch('https://m5visa-advisors.onrender.com/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: previewUrl }),
        });

        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          uploadedImageUrl = uploadData.url || previewUrl;
        } else {
          uploadedImageUrl = previewUrl;
        }
      } catch (uploadErr) {
        console.error('Image upload error:', uploadErr);
        uploadedImageUrl = previewUrl;
      } finally {
        setIsUploadingImage(false);
      }
    }

    const reviewData = {
      name: name.trim(),
      country,
      rating,
      text: text.trim(),
      image: uploadedImageUrl,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    try {
      const res = await fetch('https://m5visa-advisors.onrender.com/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData),
      });

      if (res.ok) {
        const savedDoc = await res.json();
        // Dispatch event so Testimonials component updates
        window.dispatchEvent(new CustomEvent('review-submitted', { detail: savedDoc }));
        
        setShowSuccess(true);
        // Reset form
        setName('');
        setCountry('USA');
        setRating(5);
        setText('');
        setSelectedFile(null);
        setPreviewUrl(null);

        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        throw new Error('Failed to post review');
      }
    } catch (err) {
      console.error('Error submitting review:', err);
      setError('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
          {/* Overlay click to close */}
          <div className="fixed inset-0" onClick={closeModal} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="bg-white w-full max-w-lg rounded-3xl p-5 sm:p-7 shadow-2xl relative my-auto border border-brand/10 z-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
          >
            {/* Header Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 text-brand/40 hover:text-brand hover:bg-brand/5 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="flex items-center space-x-3 mb-5 pr-8">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 flex-shrink-0">
                <MessageSquarePlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-brand leading-tight">Write a Review</h3>
                <p className="text-xs text-brand/60">Share your visa experience with M5 Visa Advisors</p>
              </div>
            </div>

            {/* Success Message Banner */}
            {showSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8 text-center space-y-3"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-brand">Thank You!</h4>
                <p className="text-sm text-brand/70 max-w-xs mx-auto">
                  Your review has been successfully submitted and saved.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium">
                    {error}
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand/70 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand/30" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Divya Reddy"
                      className="w-full pl-10 pr-4 py-2.5 bg-brand-light/30 border border-brand/10 rounded-xl text-sm font-medium text-brand placeholder:text-brand/30 focus:outline-none focus:border-accent focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Visa Service Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand/70 mb-1">
                    Visa Category / Destination <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-brand-light/30 border border-brand/10 rounded-xl text-sm font-medium text-brand focus:outline-none focus:border-accent focus:bg-white transition-all cursor-pointer"
                  >
                    <optgroup label="🎓 STUDY VISAS">
                      {STUDY_COUNTRIES.map((c) => (
                        <option key={c} value={c}>
                          Study in {c}
                        </option>
                      ))}
                    </optgroup>

                    <optgroup label="✈️ TOURIST VISAS">
                      {TOURIST_REGIONS.map((tr) => (
                        <option key={tr} value={tr}>
                          {tr}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Star Rating */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand/70 mb-1">
                    Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-2 bg-brand-light/20 p-2.5 rounded-xl border border-brand/5">
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
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-xs font-bold text-brand ml-2">
                      {rating === 5 && '5/5 (Excellent!)'}
                      {rating === 4 && '4/5 (Very Good)'}
                      {rating === 3 && '3/5 (Good)'}
                      {rating === 2 && '2/5 (Fair)'}
                      {rating === 1 && '1/5 (Poor)'}
                    </span>
                  </div>
                </div>

                {/* Optional Image Upload */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand/70 mb-1">
                    Upload Profile Photo <span className="text-brand/40 font-normal lowercase">(optional)</span>
                  </label>

                  {previewUrl ? (
                    <div className="flex items-center space-x-3 p-2.5 bg-brand-light/30 border border-brand/10 rounded-xl">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-10 h-10 rounded-full object-cover border border-brand/20 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-brand truncate">
                          {selectedFile?.name || 'Uploaded Photo'}
                        </p>
                        <p className="text-[10px] text-emerald-600 font-semibold">Photo selected</p>
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
                    <label className="flex items-center justify-center space-x-2 p-3 border-2 border-dashed border-brand/15 hover:border-accent bg-brand-light/10 hover:bg-brand-light/30 rounded-xl cursor-pointer transition-all group">
                      <Upload className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-bold text-brand/70 group-hover:text-brand">Choose Photo (PNG / JPG)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Written Review */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand/70 mb-1">
                    Your Feedback & Review <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={3}
                    placeholder="Tell us about your visa guidance experience with M5 Visa Advisors..."
                    className="w-full p-3 bg-brand-light/30 border border-brand/10 rounded-xl text-sm font-medium text-brand placeholder:text-brand/30 focus:outline-none focus:border-accent focus:bg-white transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{isUploadingImage ? 'Uploading Image...' : 'Submitting Review...'}</span>
                      </>
                    ) : (
                      <span>Submit Review</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
