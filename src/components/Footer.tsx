import { Link } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-32 pb-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="flex flex-col space-y-1 group">
              <div className="flex items-center space-x-3">
                <div className="bg-brand p-2 rounded-xl shadow-2xl transition-transform group-hover:rotate-12">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tighter">
                  M5 Visa Advisors <span className="text-brand">(OPC)</span>
                </span>
              </div>
              <p className="text-white/90 font-medium text-sm">Private Limited</p>
            </Link>
            <div className="space-y-1 pt-4">
              <p className="text-accent font-bold uppercase tracking-[0.1em] text-xs">Visa and Educational Consultants</p>
              <p className="text-white/50 font-light text-[11px] uppercase tracking-[0.2em]">Study Visas • Tourist Visas</p>
            </div>
            <p className="text-white/30 leading-relaxed font-light text-sm max-w-xs">
              Helping students find the best global education paths and manage visa processes easily.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/m5-visa-advisors/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-10">Collections</h4>
            <ul className="space-y-5">
              <li><Link to="/destinations/usa" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Study in USA</Link></li>
              <li><Link to="/destinations/uk" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Study in UK</Link></li>
              <li><Link to="/destinations/canada" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Study in Canada</Link></li>
              <li><Link to="/destinations/australia" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Study in Australia</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-10">Our Locations</h4>
            <ul className="space-y-5">
              {['Suryapet (HO)', 'Hyderabad', 'Bangalore'].map((city) => (
                <li key={city}>
                  <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">{city}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-10">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex flex-col space-y-3">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Phone Numbers</div>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919515354865" className="text-sm font-medium hover:text-brand transition-colors">+91 95153 54865</a>
                  <a href="tel:+918333075544" className="text-sm font-medium hover:text-brand transition-colors">+91 83330 75544</a>
                </div>
              </li>
              <li className="flex flex-col space-y-3">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Support</div>
                <a href="mailto:m5visaadvisors@gmail.com" className="text-sm font-medium hover:text-brand transition-colors">m5visaadvisors@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} M5 Visa Advisors. Top quality service.
          </p>
        </div>
      </div>
    </footer>
  );
}
