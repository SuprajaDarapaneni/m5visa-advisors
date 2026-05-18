import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  Globe,
  MessageCircle,
  Youtube
} from 'lucide-react';

export default function Footer() {
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Ireland', 'Germany', 'France', 
    'Italy', 'Latvia', 'Austria', 'Spain', 'Finland', 'Switzerland', 'Poland', 
    'Malta', 'Cyprus', 'Singapore', 'United Arab Emirates', 'Japan'
  ];

  return (
    <footer className="bg-brand text-white pt-14 pb-6 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 items-start">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col space-y-4 group">
              <div className="bg-white p-1 rounded-2xl shadow-xl group-hover:rotate-6 transition-transform overflow-hidden flex items-center justify-center w-24 h-24">
                <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tighter leading-tight">
                  M5 Visa Advisors <br /> (OPC) Private Limited
                </span>
                <div className="mt-1.5 text-left">
                  <span className="text-[10px] font-black text-accent uppercase tracking-[0.22em] block italic border-l-2 border-accent pl-3">
                    Visa and Educational Consultants
                  </span>
                </div>
                <span className="text-[9px] font-medium text-white/50 uppercase tracking-[0.2em] mt-2 block">
                  Study Visas • Tourist Visas
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-xs leading-relaxed font-light italic">
              Creating global education opportunities for students through reliable study visa guidance and expanding M5 Visa Advisors across India and worldwide.
            </p>
            
            <div className="space-y-6 pt-4">
               <a href="https://wa.me/918333075544" className="inline-flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-full transition-all border border-white/10 hover:border-accent group shadow-lg">
                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-accent transition-colors">Book Free Guide</span>
                 <Globe className="w-4 h-4 text-accent animate-pulse" />
               </a>
                <div className="flex items-center space-x-6 pt-2">
                <a href="https://youtube.com/@m5visaadvisors?si=iVoRuCIX3QMzz0Yl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://x.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.497h2.039L6.486 3.24H4.298l13.313 17.41z" />
                  </svg>
                </a>
                <a href="https://instagram.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-brand transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/m5-visa-advisors/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://wa.me/918333075544" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Collections</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {countries.map((country) => (
                <li key={country}>
                  <Link to="/destinations" className="text-white/60 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-widest leading-tight block">{country}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Our Locations</h4>
            <ul className="space-y-6">
              <li className="flex flex-col space-y-1.5 border-l border-white/10 pl-4">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Suryapet (Head Office)</span>
                <span className="text-xs text-white/70 leading-relaxed font-light">60ft road, Suryapet, Telangana, 508213</span>
              </li>
              <li className="flex flex-col space-y-1.5 border-l border-white/10 pl-4">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Hyderabad Branch</span>
                <span className="text-xs text-white/70 leading-relaxed font-light">Kuntloor, Hayathnagar, Hyderabad, Telangana, 501505.</span>
              </li>
              <li className="flex flex-col space-y-1.5 border-l border-white/10 pl-4">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest">London (UK)</span>
                <span className="text-xs text-white/70 leading-relaxed font-light">Central London Office</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex flex-col space-y-2 border-l border-white/10 pl-4">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Phone Numbers</div>
                <div className="flex flex-col space-y-2">
                  <a href="tel:+918333075544" className="text-sm font-medium text-white/90 hover:text-accent transition-colors">+91 83330 75544</a>
                  <a href="tel:+919515354865" className="text-sm font-medium text-white/90 hover:text-accent transition-colors">+91 95153 54865</a>
                </div>
              </li>
              <li className="flex flex-col space-y-2 border-l border-white/10 pl-4">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Support</div>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:info@m5visaadvisors.in" className="text-sm font-medium text-white/90 hover:text-accent transition-colors">info@m5visaadvisors.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col justify-center items-center text-center">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">
            © 2026 M5 Visa Advisors
          </p>
        </div>
      </div>
    </footer>
  );
}

