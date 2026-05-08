import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Select Destination'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*M5 Visa Advisors Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Country:* ${formData.country}`;
    const whatsappUrl = `https://wa.me/918333075544?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative border border-white/5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-accent/10 to-transparent -skew-x-12 hidden lg:block" />
          
          <div className="grid lg:grid-cols-2 relative z-10">
            <div className="p-12 lg:p-24 text-white">
              <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-8">Get In Touch</h2>
              <h3 className="text-5xl lg:text-7xl font-medium mb-10 leading-tight">
                Start Your <br />
                <span className="font-serif italic text-accent/50">New Story</span>
              </h3>
              <p className="text-white/40 mb-16 text-xl font-light leading-relaxed max-w-md">
                Book a free session with our experts to plan your study abroad future with M5 Visa Advisors.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Inquiry</div>
                    <div className="flex flex-col space-y-1">
                      <div className="text-lg font-medium text-white/90 hover:text-accent transition-colors">
                        <a href="tel:+919515354865">+91 95153 54865</a>
                      </div>
                      <div className="text-lg font-medium text-white/90 hover:text-accent transition-colors">
                        <a href="tel:+918333075544">+91 83330 75544</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-white">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Direct</div>
                    <div className="text-lg font-medium text-white/90">m5visaadvisors@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-20 lg:m-8">
              <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-brand/40 uppercase tracking-widest">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border-b border-brand/10 py-4 focus:border-brand outline-none transition-all font-light text-lg text-brand"
                      placeholder="Full Name"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-brand/40 uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full border-b border-brand/10 py-4 focus:border-brand outline-none transition-all font-light text-lg text-brand"
                        placeholder="Email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-brand/40 uppercase tracking-widest">Phone</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full border-b border-brand/10 py-4 focus:border-brand outline-none transition-all font-light text-lg text-brand"
                        placeholder="Number"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-brand/40 uppercase tracking-widest">Destination</label>
                    <select 
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className="w-full border-b border-brand/10 py-4 focus:border-brand outline-none transition-all font-light text-lg appearance-none bg-transparent text-brand"
                    >
                      <option>Select Destination</option>
                      <option>USA</option>
                      <option>UK</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="w-full bg-brand text-white py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-2xl shadow-brand/20 hover:-translate-y-1 transition-all flex items-center justify-center space-x-3">
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
