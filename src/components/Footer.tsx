import { Link } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-brand p-1.5 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                M5 Visa<span className="text-accent"> Advisors</span>
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              Your trusted partner in international education and visa services.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-white p-2.5 rounded-lg border border-gray-100 text-gray-400 hover:text-brand hover:border-brand/30 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 italic">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-500 hover:text-brand transition-colors text-sm font-medium">About M5 Advisors</Link></li>
              <li><Link to="/destinations/usa" className="text-gray-500 hover:text-brand transition-colors text-sm font-medium">Study in USA</Link></li>
              <li><Link to="/destinations/uk" className="text-gray-500 hover:text-brand transition-colors text-sm font-medium">Study in UK</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-brand transition-colors text-sm font-medium">Admission Guidance</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-brand transition-colors text-sm font-medium">Book Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 italic">Our Offices</h4>
            <ul className="space-y-4">
              {['Suryapet (HO)', 'Hyderabad'].map((city) => (
                <li key={city}>
                  <a href="#" className="text-gray-500 hover:text-brand transition-colors text-sm font-medium">{city}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 italic">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex flex-col space-y-2 text-sm text-gray-500">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-brand" />
                  <span>+91 95153 54865</span>
                </div>
                <div className="flex items-center space-x-3 ml-7">
                  <span>+91 83330 75544</span>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-500">
                <Mail className="w-4 h-4 text-brand" />
                <span>m5visaadvisors@gmail.com</span>
              </li>
            </ul>
            <div className="mt-8">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Newsletter</div>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white border border-gray-200 rounded-l-lg px-4 py-2.5 text-sm outline-none w-full focus:ring-1 focus:ring-brand"
                />
                <button className="bg-brand text-white px-4 py-2.5 rounded-r-lg text-sm font-bold">Go</button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs font-medium">
            © {new Date().getFullYear()} M5 Visa Advisors. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400 font-medium">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
