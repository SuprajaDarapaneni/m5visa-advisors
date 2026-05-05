import { motion } from 'motion/react';
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
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                alt="About M5 Visa Advisors"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute top-10 -right-10 bg-accent text-white p-8 rounded-full shadow-2xl z-20 flex flex-col items-center justify-center animate-bounce duration-[3000ms]">
              <span className="text-3xl font-bold">15+</span>
              <span className="text-xs uppercase font-bold text-center">Years of<br />Excellence</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">About M5 Visa Advisors</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Leading the Way in <br />
              <span className="gradient-text">Global Education</span>
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              M5 Visa Advisors is one of the premier study abroad consultancy firms in Telangana. With years of expertise, we specialize in bridging the gap between students and their global academic dreams.
            </p>

            <div className="space-y-6">
              {[
                { icon: Target, title: 'Our Mission', text: 'To provide transparent and professional guidance for overseas education.' },
                { icon: Award, title: 'Quality Assurance', text: 'Certified counselors with up-to-date knowledge of visa regulations.' },
                { icon: Users, title: 'Personalized Care', text: 'Individual focus on every student profile to ensure best outcomes.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-brand-light p-3 rounded-xl mt-1">
                    <item.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                    <p className="font-medium text-gray-500">{item.text}</p>
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
