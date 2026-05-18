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
    <footer className="bg-brand text-white pt-14 pb-4 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 items-start text-left">
          {/* Brand Info */}
          <div className="space-y-6 lg:pr-8">
            <Link to="/" className="flex flex-col space-y-4 group">
              <div className="bg-white p-1 rounded-2xl shadow-xl group-hover:rotate-6 transition-transform overflow-hidden flex items-center justify-center w-20 h-20">
                <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter leading-tight">
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
          </div>

          <div className="lg:col-span-1 border-white/5 lg:border-l lg:pl-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Collections</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {countries.map((country) => (
                <li key={country}>
                  <Link to="/destinations" className="text-white/60 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-widest leading-tight block">{country}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 border-white/5 lg:border-l lg:pl-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Our Locations</h4>
            <ul className="space-y-6">
              <li className="flex flex-col space-y-1.5 border-l-2 border-accent/30 pl-4 group">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Suryapet (Head Office)</span>
                <span className="text-xs text-white/70 leading-relaxed font-light">60ft road, Suryapet, Telangana, 508213</span>
              </li>
              <li className="flex flex-col space-y-1.5 border-l-2 border-accent/30 pl-4 group">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Hyderabad Branch</span>
                <span className="text-xs text-white/70 leading-relaxed font-light">Kuntloor, Hayathnagar, Hyderabad, Telangana, 501505.</span>
              </li>
              <li className="flex flex-col space-y-1.5 border-l-2 border-accent/30 pl-4 group">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">London (UK)</span>
                <span className="text-xs text-white/70 leading-relaxed font-light">Central London Office</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1 border-white/5 lg:border-l lg:pl-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Contact Us</h4>
            <ul className="space-y-6 mb-8">
              <li className="flex flex-col space-y-3 border-l-2 border-accent/30 pl-4">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Phone Numbers</div>
                <div className="flex flex-col space-y-2">
                  <a href="tel:+918333075544" className="text-sm font-medium text-white/90 hover:text-accent transition-colors flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>+91 83330 75544</span>
                  </a>
                  <a href="tel:+919515354865" className="text-sm font-medium text-white/90 hover:text-accent transition-colors flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>+91 95153 54865</span>
                  </a>
                </div>
              </li>
              <li className="flex flex-col space-y-3 border-l-2 border-accent/30 pl-4">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Support</div>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:info@m5visaadvisors.in" className="text-sm font-medium text-white/90 hover:text-accent transition-colors flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>info@m5visaadvisors.in</span>
                  </a>
                </div>
              </li>
            </ul>

            <div className="space-y-6 pt-4 border-t border-white/5">
                <a href="https://wa.me/918333075544" className="inline-flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all border border-white/10 hover:border-accent group w-full justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-accent transition-colors">Book Free Guide</span>
                  <Globe className="w-4 h-4 text-accent animate-pulse" />
                </a>
                <div className="flex items-center justify-between px-2">
                  <a href="https://youtube.com/@m5visaadvisors?si=iVoRuCIX3QMzz0Yl" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-red-600 transition-all">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.497h2.039L6.486 3.24H4.298l13.313 17.41z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/m5-visa-advisors/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#0077b5] transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/918333075544" className="text-white/40 hover:text-[#25D366] transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col justify-center items-center text-center">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.5em]">
            © 2026 M5 Visa Advisors. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

