import { motion } from 'framer-motion';
import { Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="About M5 Visa Advisors"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-6">Discovery</h2>
            <h3 className="text-5xl lg:text-7xl font-medium text-brand mb-8 leading-tight tracking-tight">
              Best Service for <br />
              <span className="font-serif italic text-brand">Your Global Career</span>
            </h3>
            <p className="text-xl text-brand/60 font-light leading-relaxed mb-10">
              M5 Visa Advisors is a top study abroad consultant. We help students find the best schools and universities across the world.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Target, title: 'Our Goal', text: 'Helping students find clear paths to study abroad success.' },
                { icon: Award, title: 'Expert Team', text: 'Our counselors know all about visa rules and admissions.' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col space-y-4">
                  <div className="bg-brand-light w-12 h-12 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-brand mb-2">{item.title}</h4>
                    <p className="text-sm text-brand/60 font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder Section */}
            <div className="bg-brand py-12 px-10 rounded-[2.5rem] shadow-2xl shadow-brand/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-[2s]"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <h4 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-6 flex items-center">
                  <span className="w-8 h-[1px] bg-accent/50 mr-3"></span>
                  Meet our Founder
                </h4>
                
                <p className="text-white/90 italic font-medium text-xl leading-relaxed mb-8 max-w-lg">
                  "Our mission at M5 Visa Advisors is to bridge the gap between global education dreams and reality. We believe every student deserves a chance to excel on the global stage with the right guidance."
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-white p-1.5 shadow-2xl flex-shrink-0 transform group-hover:rotate-3 transition-transform overflow-hidden">
                    <img src="/founder.jpeg" alt="Saketh Lonavath" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white uppercase tracking-tight mb-1">Saketh Lonavath</div>
                    <div className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] bg-white/10 px-3 py-1.5 rounded-lg inline-block">Founder and Managing Director</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
