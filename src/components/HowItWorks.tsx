import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, MessageSquare, ClipboardCheck, GraduationCap, Plane } from 'lucide-react';

const steps = [
  {
    title: 'Consultation',
    description: 'Personalized guidance from our experts to build your application strategy.',
    icon: MessageSquare,
  },
  {
    title: 'Selection',
    description: 'We help you choose the best courses and universities that fit your profile.',
    icon: MousePointerClick,
  },
  {
    title: 'Admission',
    description: 'End-to-end support with university applications and SOP/LOR preparation.',
    icon: ClipboardCheck,
  },
  {
    title: 'Visa Process',
    description: 'Expert visa counseling and documentation support for maximum success.',
    icon: GraduationCap,
  },
  {
    title: 'Departure',
    description: 'Pre-departure briefing and post-arrival support in your new home.',
    icon: Plane,
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-8 bg-brand-light/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-4">Our Process</h2>
          <h3 className="text-5xl lg:text-7xl font-medium text-brand mb-8 leading-tight tracking-tighter">
            How it <span className="font-serif italic text-accent">Works</span>
          </h3>
          <p className="text-xl text-brand/60 font-light max-w-2xl mx-auto">
            A simple 5-step process to transform your international education dreams into reality.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white border border-brand/5 shadow-xl shadow-brand/5 flex items-center justify-center mb-8 relative transition-transform group-hover:-translate-y-2">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center border-4 border-white">
                    {index + 1}
                  </div>
                  <step.icon className="w-8 h-8 text-brand stroke-[1.5px]" />
                </div>
                <h4 className="text-xl font-bold text-brand mb-4">{step.title}</h4>
                <p className="text-sm text-brand/60 leading-relaxed font-light px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
