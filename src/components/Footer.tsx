import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  Globe,
  MessageCircle
} from 'lucide-react';

export default function Footer() {
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Ireland', 'Germany', 'France', 
    'Italy', 'Latvia', 'Austria', 'Spain', 'Finland', 'Switzerland', 'Poland', 
    'Malta', 'Cyprus', 'Singapore', 'United Arab Emirates', 'Japan'
  ];

  return (
    <footer className="bg-brand text-white pt-16 pb-12 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-8">
            <Link to="/" className="flex flex-col space-y-4 group">
              <div className="bg-white p-1 rounded-2xl shadow-xl group-hover:rotate-6 transition-transform overflow-hidden flex items-center justify-center w-24 h-24">
                <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-contain" />
              </div>
                  <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter leading-tight">
                  M5 Visa Advisors <br /> (OPC Private Limited)
                </span>
                <div className="mt-2 text-left">
                  <span className="text-[11px] font-black text-accent uppercase tracking-[0.3em] whitespace-nowrap block">
                    Visa and Educational Consultants
                  </span>
                </div>
                <span className="text-[9px] font-medium text-white/50 uppercase tracking-[0.2em] mt-1">
                  Study Visas • Tourist Visas
                </span>
              </div>
            </Link>
            
            <p className="text-white/40 text-sm leading-relaxed font-light max-w-[240px]">
              Helping students find the best global education paths and manage visa processes easily.
            </p>
            
            <div className="space-y-4">
               <a href="https://wa.me/918333075544" className="inline-flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all border border-white/5 hover:border-accent group">
                 <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-accent transition-colors">Book Free Guide</span>
                 <Globe className="w-4 h-4 text-accent" />
               </a>
                <div className="flex items-center space-x-5 pt-2">
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

          {/* Collections - Countries */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Collections</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {countries.map((country) => (
                <li key={country}>
                  <Link to="/destinations" className="text-white/40 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest leading-tight block">{country}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Our Locations</h4>
            <ul className="space-y-6">
              <li className="flex flex-col space-y-1">
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Suryapet (Head Office)</span>
                <span className="text-xs text-white/40 leading-relaxed font-light">60ft road, Suryapet, Telangana, 508213</span>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Hyderabad</span>
                <span className="text-xs text-white/40 leading-relaxed font-light">Banjara Hills, Hyderabad</span>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">London (UK)</span>
                <span className="text-xs text-white/40 leading-relaxed font-light">Central London Office</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex flex-col space-y-2">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Phone Numbers</div>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919515354865" className="text-xs font-medium hover:text-accent transition-colors">+91 95153 54865</a>
                  <a href="tel:+918333075544" className="text-xs font-medium hover:text-accent transition-colors">+91 83330 75544</a>
                </div>
              </li>
              <li className="flex flex-col space-y-2">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Support</div>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:info@m5visaadvisors.in" className="text-xs font-medium hover:text-accent transition-colors">info@m5visaadvisors.in</a>
                  <a href="mailto:m5visaadvisors@gmail.com" className="text-xs font-medium hover:text-accent transition-colors opacity-50">m5visaadvisors@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
            © 2026 M5 Visa Advisors. Top Quality Service.
          </p>
          <div className="flex items-center space-x-8 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

