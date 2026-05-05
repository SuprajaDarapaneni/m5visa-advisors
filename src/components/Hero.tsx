import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
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
            <div className="inline-flex items-center space-x-2 bg-brand/5 border border-brand/10 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span className="text-sm font-semibold text-brand tracking-wide uppercase">Admissions Open 2024-25</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
              Empowering Your <br />
              <span className="gradient-text">Global Ambitions</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Unlock world-class education with M5 Visa Advisors. From university selection to visa approval, we navigate the complex journey for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Link 
                to="/contact"
                className="w-full sm:w-auto bg-brand text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-brand/20 transition-all flex items-center justify-center group"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 rounded-full border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition-all">
                <div className="bg-white shadow-md p-2 rounded-full">
                  <Play className="w-4 h-4 text-brand fill-brand" />
                </div>
                <span>How it works</span>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {['15+ Countries', '500+ Universities', '98% Visa Success'].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium text-gray-600">{feature}</span>
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
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1523050335392-9as8c51b4724?auto=format&fit=crop&q=80&w=1000" 
                alt="Student studying abroad"
                className="w-full h-auto object-cover aspect-4/5 lg:aspect-square"
              />
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-brand-light p-3 rounded-xl">
                  <Globe className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-gray-500 font-medium">Students Placed Globally</div>
                </div>
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
