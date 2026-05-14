import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-12 lg:pt-14 lg:pb-16 overflow-hidden bg-white">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-light/30 rounded-bl-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-10 -z-10 w-64 h-64 bg-accent/5 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">Admissions Open Now</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-medium text-brand leading-[0.95] mb-5 tracking-tighter">
              <span className="text-brand">Empowering</span> Your <br />
              <span className="text-brand font-serif italic">Global Dreams</span>
            </h1>
            
            <p className="text-xl text-brand/70 mb-6 max-w-lg leading-relaxed font-light">
              Start your study abroad journey with M5 Visa Advisors. We help you pick the best universities and manage your visa process simply and easily.
            </p>
            
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <a 
                  href="https://wa.me/918333075544?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20with%20M5%20Visa%20Advisors." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-brand/20 transition-all flex items-center justify-center group"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#how-it-works"
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 rounded-full border border-brand/10 font-semibold text-brand hover:bg-brand/5 transition-all"
                >
                  <div className="bg-white shadow-md p-2 rounded-full">
                    <Play className="w-4 h-4 text-brand fill-brand" />
                  </div>
                  <span>How it works</span>
                </a>
              </div>

              {/* Consultation Badge */}
              <div className="flex items-center space-x-3 mb-6 text-brand/50">
                <div className="flex -space-x-3">
                  {[
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
                  ].map((url, i) => (
                    <img 
                      key={i}
                      src={`${url}?auto=format&fit=crop&q=80&w=100`}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      alt="Expert"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold tracking-tight">Talk to 25+ Experts Today</span>
              </div>
            
            {/* Features list */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['15+ Countries', '500+ Universities', 'End to End Assistance'].map((feature) => (
                <div key={feature} className="flex items-center space-x-2 bg-brand/5 px-4 py-2 rounded-full border border-brand/10 shadow-sm transition-all hover:border-brand/20">
                  <span className="text-sm font-bold text-brand/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(31,38,135,0.15)] border-[1px] border-brand/10 max-w-[550px] ml-auto bg-brand-light">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
                alt="Students studying"
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Secondary Layered Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -left-12 top-1/4 z-20 hidden lg:block"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white w-64 h-80 bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" 
                  alt="Happy students together"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            {/* Floating stats card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 right-10 z-30 bg-white p-6 rounded-2xl shadow-2xl border border-brand/5 hidden sm:block"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-brand-light p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand">250+</div>
                  <div className="text-sm text-brand/50 font-medium">Students Placed Globally</div>
                </div>
              </div>
            </motion.div>

            {/* Additional Floating Support Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-4 z-30 bg-brand text-white p-4 rounded-2xl shadow-xl hidden lg:block"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="font-bold text-sm">End to End Assistance Guaranteed</span>
              </div>
            </motion.div>
            
            {/* Background blob */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
