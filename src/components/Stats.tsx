import { motion } from 'motion/react';

const stats = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Partner Universities', value: '500+' },
  { label: 'Successful Visas', value: '12,000+' },
  { label: 'Expert Counselors', value: '50+' },
];

export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand rounded-[40px] p-8 lg:p-12 shadow-2xl shadow-brand/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-brand-light/80 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
