import { motion } from 'framer-motion';
import { Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
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
            <h3 className="text-5xl lg:text-7xl font-medium text-gray-900 mb-8 leading-tight tracking-tight">
              Best Service for <br />
              <span className="font-serif italic text-brand">Your Global Career</span>
            </h3>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-10">
              M5 Visa Advisors is a top study abroad consultant. We help students find the best schools and universities across the world.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Target, title: 'Our Goal', text: 'Helping students find clear paths to study abroad success.' },
                { icon: Award, title: 'Expert Team', text: 'Our counselors know all about visa rules and admissions.' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col space-y-4">
                  <div className="bg-brand-light w-12 h-12 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
