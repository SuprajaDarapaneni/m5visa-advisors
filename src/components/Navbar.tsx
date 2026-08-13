import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Instagram, Linkedin, ChevronDown, MessageCircle, Globe, Youtube, Star, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileStudyOpen, setIsMobileStudyOpen] = useState(false);
  const [isMobileTouristOpen, setIsMobileTouristOpen] = useState(false);
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

  const studyCountries = [
    'United States', 'Canada', 'United Kingdom', 'Ireland', 'Germany', 'France', 
    'Italy', 'Latvia', 'Austria', 'Spain', 'Finland', 'Switzerland', 
    'Poland', 'Malta', 'Cyprus', 'Singapore', 'UAE', 'Japan'
  ];

  const touristRegions = ['USA', 'UK', 'Europe', 'Middle East Countries'];

  return (
    <header className="sticky top-0 left-0 right-0 z-[1000] bg-white border-b border-gray-100 shadow-sm font-sans">
      {/* Top Bar - Desktop & Mobile Quick Access */}
      <div className="bg-brand text-white border-b border-white/5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Contact info: Full on LG, compact on mobile/tablet */}
            <div className="flex items-center space-x-3 sm:space-x-6 overflow-x-auto custom-scrollbar py-0.5">
              <a href="tel:+918333075544" className="flex items-center hover:text-accent transition-colors whitespace-nowrap">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-accent" />
                <span>+91 83330 75544</span>
              </a>
              <a href="mailto:info@m5visaadvisors.in" className="hidden sm:flex items-center hover:text-accent transition-colors whitespace-nowrap">
                <Mail className="w-3.5 h-3.5 mr-1.5 text-accent" />
                <span>info@m5visaadvisors.in</span>
              </a>
              <span className="hidden lg:flex items-center whitespace-nowrap">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-accent" />
                <span>60ft road, Suryapet, Telangana, 508213</span>
              </span>
            </div>

            {/* Social & Chat Quick Links */}
            <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-review-modal'))}
                className="hidden sm:flex bg-amber-500 hover:bg-amber-600 text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider items-center space-x-1 cursor-pointer transition-transform hover:scale-105 shadow-sm"
              >
                <Star className="w-3 h-3 fill-white text-white" />
                <span>Write A Review</span>
              </button>

              <div className="flex items-center space-x-2.5">
                <a href="https://youtube.com/@m5visaadvisors?si=iVoRuCIX3QMzz0Yl" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="YouTube"><Youtube className="w-3.5 h-3.5" /></a>
                <a href="https://x.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="X (Twitter)">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden="true">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.497h2.039L6.486 3.24H4.298l13.313 17.41z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/m5-visa-advisors/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="LinkedIn"><Linkedin className="w-3.5 h-3.5" /></a>
                <a href="https://instagram.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Instagram"><Instagram className="w-3.5 h-3.5" /></a>
                <a href="https://wa.me/918333075544" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center bg-emerald-600/80 hover:bg-emerald-600 text-white px-2 py-0.5 rounded text-[9px] font-bold">
                  <span className="hidden xs:inline mr-1">Chat</span>
                  <Globe className="w-3 h-3 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="bg-white p-1 rounded-xl shadow-lg border border-brand/5 group-hover:rotate-6 transition-transform overflow-hidden flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <img src="/logo.jpeg" alt="M5 Visa Advisors Logo" className="w-full h-full object-contain transform scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tighter text-brand leading-none">
                M5 <span className="text-accent">Visa</span> <span className="font-serif italic font-medium text-brand">Advisors</span>
              </span>
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-black text-brand uppercase tracking-[0.2em] mt-1">Study Visas • Tourist Visas</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link
              to="/"
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-brand ${
                location.pathname === '/' ? 'text-brand' : 'text-brand/70'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
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
                       {studyCountries.map(country => (
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
                       {touristRegions.map(region => (
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

            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-review-modal'))}
              className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] flex items-center space-x-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-white/20"
            >
              <Star className="w-3.5 h-3.5 fill-white text-white" />
              <span>Write A Review</span>
            </button>

            <a 
              href="https://wa.me/918333075544" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-brand/20 transition-all border border-transparent hover:border-accent"
            >
              Get Free Guide
            </a>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-review-modal'))}
              className="bg-amber-500 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase flex items-center space-x-1 shadow-sm"
            >
              <Star className="w-3 h-3 fill-white" />
              <span>Review</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-brand hover:bg-brand-light/30 rounded-xl transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Comprehensive Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-5 pt-4 pb-8 space-y-3 divide-y divide-gray-100">
              
              {/* Primary Nav Links */}
              <div className="space-y-1 pb-3">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-colors ${
                    location.pathname === '/' ? 'text-brand bg-brand-light/30' : 'text-brand hover:bg-brand-light/20'
                  }`}
                >
                  Home
                </Link>

                {/* Services Expandable Accordion */}
                <div className="rounded-xl border border-brand/10 bg-brand-light/10 overflow-hidden my-2">
                  <div className="p-3 bg-brand/5 flex justify-between items-center text-xs font-black uppercase tracking-wider text-brand">
                    <span>Our Services</span>
                  </div>

                  {/* Study Visas Collapsible */}
                  <div className="border-t border-brand/5">
                    <button
                      onClick={() => setIsMobileStudyOpen(!isMobileStudyOpen)}
                      className="w-full flex justify-between items-center px-4 py-3 text-xs font-bold text-brand hover:text-accent transition-colors cursor-pointer"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>Study Visas (18 Destinations)</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileStudyOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isMobileStudyOpen && (
                      <div className="grid grid-cols-2 gap-1.5 p-3 bg-white border-t border-brand/5 text-[11px]">
                        {studyCountries.map(country => (
                          <Link
                            key={country}
                            to="/destinations"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-2.5 py-2 font-semibold text-brand/80 hover:text-accent hover:bg-brand/5 rounded-lg border border-gray-100"
                          >
                            {country}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tourist Visas Collapsible */}
                  <div className="border-t border-brand/5">
                    <button
                      onClick={() => setIsMobileTouristOpen(!isMobileTouristOpen)}
                      className="w-full flex justify-between items-center px-4 py-3 text-xs font-bold text-brand hover:text-accent transition-colors cursor-pointer"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>Tourist Visas</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileTouristOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isMobileTouristOpen && (
                      <div className="flex flex-col space-y-1 p-3 bg-white border-t border-brand/5 text-[11px]">
                        {touristRegions.map(region => (
                          <Link
                            key={region}
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-3 py-2 font-semibold text-brand/80 hover:text-accent hover:bg-brand/5 rounded-lg border border-gray-100"
                          >
                            {region}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <Link
                  to="/destinations"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-colors ${
                    location.pathname === '/destinations' ? 'text-brand bg-brand-light/30' : 'text-brand hover:bg-brand-light/20'
                  }`}
                >
                  Destinations
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-colors ${
                    location.pathname === '/about' ? 'text-brand bg-brand-light/30' : 'text-brand hover:bg-brand-light/20'
                  }`}
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-colors ${
                    location.pathname === '/contact' ? 'text-brand bg-brand-light/30' : 'text-brand hover:bg-brand-light/20'
                  }`}
                >
                  Contact Us
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('open-review-modal'));
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl text-center font-bold uppercase tracking-wider text-xs flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                >
                  <Star className="w-4 h-4 fill-white" />
                  <span>Write a Student Review</span>
                </button>

                <a 
                  href="https://wa.me/918333075544" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-brand hover:bg-brand/90 text-white py-3 rounded-xl text-center font-bold uppercase tracking-wider text-xs shadow-md"
                >
                  Get Free Visa Guide
                </a>
              </div>

              {/* Contact Info & Address */}
              <div className="pt-4 space-y-2.5 text-xs text-brand/80">
                <div className="text-[10px] font-black uppercase tracking-widest text-brand/40 mb-1">Direct Contact</div>
                
                <a href="tel:+918333075544" className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg hover:bg-brand/5">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="font-bold">+91 83330 75544</span>
                </a>

                <a href="mailto:info@m5visaadvisors.in" className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg hover:bg-brand/5">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="font-medium break-all">info@m5visaadvisors.in</span>
                </a>

                <div className="flex items-start space-x-3 p-2.5 bg-gray-50 rounded-lg">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-[11px]">60ft road, Suryapet, Telangana, 508213</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-brand/40 mb-3">Connect With Us</div>
                <div className="flex items-center justify-between bg-brand text-white p-3 rounded-xl">
                  <a href="https://youtube.com/@m5visaadvisors?si=iVoRuCIX3QMzz0Yl" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent transition-colors" title="YouTube"><Youtube className="w-5 h-5" /></a>
                  <a href="https://x.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent transition-colors" title="X (Twitter)">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.497h2.039L6.486 3.24H4.298l13.313 17.41z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/m5-visa-advisors/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent transition-colors" title="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                  <a href="https://instagram.com/m5visaadvisors" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent transition-colors" title="Instagram"><Instagram className="w-5 h-5" /></a>
                  <a href="https://wa.me/918333075544" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 bg-emerald-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-500 transition-colors">
                    <span>WhatsApp</span>
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

