import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Instagram, Linkedin, ChevronDown, MessageCircle, Globe, Youtube } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Study Visas', href: '/services#study-visas' },
    { name: 'Tourist Visas', href: '/services#tourist-visas' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-[1000] bg-white border-b border-gray-100 shadow-sm font-sans">
      {/* Top Bar */}
      <div className="hidden lg:block bg-brand text-white border-b border-white/5 py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.15em]">
            <div className="flex items-center space-x-8">
              <a href="mailto:info@m5visaadvisors.in" className="flex items-center hover:text-accent transition-colors">
                <Mail className="w-3.5 h-3.5 mr-2" />
                info@m5visaadvisors.in
              </a>
              <a href="tel:+918333075544" className="flex items-center hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5 mr-2" />
                +91 83330 75544
              </a>
              <span className="flex items-center">
                <MessageCircle className="w-3.5 h-3.5 mr-2" />
                60ft road, Suryapet, Telangana, 508213
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://youtube.com/@m5visaadvisors?si=iVoRuCIX3QMzz0Yl" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Youtube className="w-4 h-4" /></a>
              <a href="https://x.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.497h2.039L6.486 3.24H4.298l13.313 17.41z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/m5-visa-advisors/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="https://instagram.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://wa.me/918333075544" className="hover:text-accent transition-colors flex items-center">
                <span className="mr-2">Chat with us</span>
                <Globe className="w-4 h-4 text-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white p-1 rounded-xl shadow-lg border border-brand/5 group-hover:rotate-6 transition-transform overflow-hidden flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20">
              <img src="/logo.jpeg" alt="M5 Visa Advisors Logo" className="w-full h-full object-contain transform scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold tracking-tighter text-brand leading-none">
                M5 <span className="text-accent">Visa</span> <span className="font-serif italic font-medium text-brand">Advisors</span>
              </span>
              <span className="text-[9px] lg:text-[10px] font-black text-brand uppercase tracking-[0.25em] mt-1">Study Visas • Tourist Visas</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-brand ${
                location.pathname === '/' ? 'text-brand' : 'text-brand/70'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
            >
              <button
                className={`flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-brand ${
                  location.pathname === '/services' ? 'text-brand' : 'text-brand/70'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Main Services Dropdown */}
              <div className="absolute top-full left-0 w-72 bg-white shadow-[0_30px_60px_-12px_rgba(31,38,135,0.25)] rounded-2xl border border-brand/5 py-6 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-[1001]">
                <div className="relative group/sub">
                  <Link
                    to="/destinations"
                    className="flex justify-between items-center px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-brand hover:bg-brand/5 hover:text-accent transition-all cursor-pointer border-b border-gray-50"
                  >
                    <span>Study Visas</span>
                    <ChevronDown className="w-4 h-4 group-hover/sub:text-accent transition-transform group-hover/sub:-rotate-90" />
                  </Link>
                  {/* Study Countries Submenu */}
                  <div className="absolute left-full top-0 w-80 bg-white shadow-[0_30px_60px_-12px_rgba(31,38,135,0.25)] rounded-2xl border border-brand/5 py-6 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible translate-x-2 group-hover/sub:translate-x-0 transition-all duration-300 ml-2">
                    <div className="grid grid-cols-2 gap-x-3 px-4">
                       {[
                        'United States', 'Canada', 'United Kingdom', 'Ireland', 'Germany', 'France', 
                        'Italy', 'Latvia', 'Austria', 'Spain', 'Finland', 'Switzerland', 
                        'Poland', 'Malta', 'Cyprus', 'Singapore', 'UAE', 'Japan'
                      ].map(country => (
                        <Link 
                          key={country} 
                          to={`/destinations`} 
                          className="px-4 py-2.5 text-[11px] font-bold text-brand hover:text-accent hover:bg-brand/10 rounded-lg whitespace-nowrap transition-all duration-200"
                        >
                          {country}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group/sub2">
                  <Link
                    to="/destinations"
                    className="flex justify-between items-center px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-brand hover:bg-brand/5 hover:text-accent transition-all cursor-pointer"
                  >
                    <span>Tourist Visas</span>
                    <ChevronDown className="w-4 h-4 group-hover/sub2:text-accent transition-transform group-hover/sub2:-rotate-90" />
                  </Link>
                  {/* Tourist Locations Submenu */}
                  <div className="absolute left-full top-0 w-72 bg-white shadow-[0_30px_60px_-12px_rgba(31,38,135,0.25)] rounded-2xl border border-brand/5 py-6 opacity-0 invisible group-hover/sub2:opacity-100 group-hover/sub2:visible translate-x-2 group-hover/sub2:translate-x-0 transition-all duration-300 ml-2">
                    <div className="flex flex-col space-y-2 px-6">
                       {['USA', 'UK', 'Europe', 'Middle East Countries'].map(region => (
                        <Link 
                          key={region} 
                          to="/contact" 
                          className="px-4 py-3.5 text-[11px] font-bold text-brand hover:text-accent hover:bg-brand/10 rounded-lg border-b border-gray-50 last:border-0 transition-all duration-200"
                        >
                          {region}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/destinations"
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-brand ${
                location.pathname === '/destinations' ? 'text-brand' : 'text-brand/70'
              }`}
            >
              Destinations
            </Link>
            
            <Link
              to="/about"
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-brand ${
                location.pathname === '/about' ? 'text-brand' : 'text-brand/70'
              }`}
            >
              About Us
            </Link>
            
            <Link
              to="/contact"
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-brand ${
                location.pathname === '/contact' ? 'text-brand' : 'text-brand/70'
              }`}
            >
              Contact
            </Link>

            <a 
              href="https://wa.me/918333075544" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-brand/20 transition-all border border-transparent hover:border-accent"
            >
              Get Free Guide
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-1">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-4 text-base font-bold text-brand hover:bg-brand-light/20 rounded-xl">Home</Link>
              
              <div className="px-4 py-4 space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand/30">Our Services</div>
                {serviceLinks.map(link => (
                  <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-brand font-bold pl-2">{link.name}</Link>
                ))}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-4 text-base font-bold rounded-xl transition-colors ${
                      location.pathname === link.href ? 'text-brand bg-brand-light/30' : 'text-brand hover:bg-brand-light/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 px-4">
                <a 
                  href="https://wa.me/918333075544" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-brand text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-brand/20 uppercase tracking-widest text-sm"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
