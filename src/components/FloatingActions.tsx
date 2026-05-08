import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
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
        href="tel:+919515354865"
        className="bg-brand text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center lg:hidden"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
