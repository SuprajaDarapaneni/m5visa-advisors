import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/10 -skew-x-12 hidden lg:block" />
          
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-16 text-white">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-gray-400 mb-12 text-lg">
                Book a free session with our global education experts and get personalized guidance for your study abroad dreams.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand/20 p-3 rounded-xl border border-brand/30">
                    <Phone className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-brand">Call Us</div>
                    <div className="text-xl">+91 95153 54865</div>
                    <div className="text-xl">+91 83330 75544</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 p-3 rounded-xl border border-emerald-500/30">
                    <Mail className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-emerald-500">Email Us</div>
                    <div className="text-xl">m5visaadvisors@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-xl border border-accent/30">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-accent">Head Office</div>
                    <div className="text-lg">60 feet road, Suryapet, Telangana, 508213</div>
                    <div className="text-sm text-gray-400 mt-1">Branch: Hyderabad, Telangana</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-16 bg-white m-4 lg:m-8 rounded-[2rem]">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand outline-none transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Interested Country</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand outline-none transition-all appearance-none">
                    <option>Select Destination</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <button className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg hover:bg-brand/90 hover:shadow-xl hover:shadow-brand/20 transition-all flex items-center justify-center space-x-2">
                  <span>Submit Inquiry</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
