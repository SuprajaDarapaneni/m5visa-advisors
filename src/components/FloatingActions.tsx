import { MessageCircle, Phone, Star } from 'lucide-react';

export default function FloatingActions() {
  const handleOpenReviewModal = () => {
    window.dispatchEvent(new CustomEvent('open-review-modal'));
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end space-y-3">
      {/* Quick Write a Review Floating Button */}
      <button
        onClick={handleOpenReviewModal}
        className="bg-amber-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group cursor-pointer border-2 border-white/20"
        title="Write a Review"
      >
        <Star className="w-5 h-5 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-300 whitespace-nowrap font-bold text-xs uppercase tracking-wider">
          Write a Review
        </span>
      </button>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/918333075544" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 whitespace-nowrap font-bold">
          WhatsApp Us
        </span>
      </a>
      
      <a 
        href="tel:+918333075544"
        className="bg-brand text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center lg:hidden"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
