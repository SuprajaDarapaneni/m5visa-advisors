import { motion } from 'framer-motion';
import About from '../components/About';
import Stats from '../components/Stats';

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-brand py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 -skew-y-6 transform translate-y-12" />
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">About Our Team</h1>
          <p className="text-brand-light/60 text-lg max-w-2xl mx-auto px-4">Learn more about M5 Visa Advisors and how we help students succeed abroad.</p>
        </div>
      </div>
      
      <About />
      <Stats />

      <section className="py-24 bg-brand-light/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-brand mb-6 italic">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-brand/10">
                    <div className="text-brand font-bold text-xl mb-2">Integrity</div>
                    <p className="text-sm text-brand/50">Honest guidance for every student application.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-brand/10">
                    <div className="text-brand font-bold text-xl mb-2">Excellence</div>
                    <p className="text-sm text-brand/50">Striving for 100% visa success results.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-brand/10">
                    <div className="text-brand font-bold text-xl mb-2">Support</div>
                    <p className="text-sm text-brand/50">End-to-end assistance from day one.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
