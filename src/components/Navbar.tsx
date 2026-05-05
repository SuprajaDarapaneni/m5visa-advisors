import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 hidden lg:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-6">
            <a href="tel:+919515354865" className="flex items-center hover:text-brand transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2 text-brand" />
              +91 95153 54865
            </a>
            <a href="mailto:m5visaadvisors@gmail.com" className="flex items-center hover:text-brand transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2 text-brand" />
              m5visaadvisors@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Follow us:</span>
            <a href="#" className="hover:text-brand"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-brand"><Instagram className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-brand p-1.5 rounded-lg shadow-lg shadow-brand/20">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                M5 Visa<span className="text-accent"> Advisors</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[15px] font-semibold transition-colors ${
                    location.pathname === link.href ? 'text-brand' : 'text-gray-700 hover:text-brand'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-brand text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-xl hover:shadow-brand/20 transition-all"
              >
                Get Free Guide
              </Link>
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
        </div>

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
                  <Link 
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-brand text-white py-3.5 rounded-xl text-center font-bold shadow-lg shadow-brand/20"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
