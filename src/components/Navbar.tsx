import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-[1000] bg-white border-b border-gray-100 shadow-sm">
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand p-2 rounded-xl shadow-2xl group-hover:rotate-12 transition-transform">
              <Globe className="w-6 h-6 text-white stroke-[1.5px]" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-gray-900">
              M5 <span className="text-accent">Visa</span> <span className="font-serif italic font-medium text-brand">Advisors</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-brand ${
                  location.pathname === link.href ? 'text-brand' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/919515354865?text=Hello%2C%20I%20would%20like%20to%20get%20the%20Free%20Study%20Abroad%20Guide." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-brand/20 transition-all"
            >
              Get Guide
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
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-4 text-base font-bold rounded-xl transition-colors ${
                      location.pathname === link.href ? 'text-brand bg-brand-light/30' : 'text-gray-800 hover:bg-brand-light/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <a 
                  href="https://wa.me/919515354865?text=Hello%2C%20I%20would%20like%20to%20apply%20for%20a%20student%20visa%20service." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-brand text-white py-3.5 rounded-xl text-center font-bold shadow-lg shadow-brand/20"
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
