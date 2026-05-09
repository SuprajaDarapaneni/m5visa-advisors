import { motion } from 'framer-motion';

const stats = [
  { label: 'Partner Universities', value: '500+' },
  { label: 'Successful Visas', value: '250+' },
  { label: 'Expert Counselors', value: '25+' },
];

export default function Stats() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-md">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 lg:p-14 text-center border-white/10 ${
                index !== stats.length - 1 ? 'border-r sm:border-r-0 md:border-r' : ''
              } ${index < 2 ? 'border-b md:border-b-0' : ''}`}
            >
              <div className="text-4xl lg:text-6xl font-serif text-accent mb-4 tracking-tighter italic">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs font-bold uppercase tracking-[0.25em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
