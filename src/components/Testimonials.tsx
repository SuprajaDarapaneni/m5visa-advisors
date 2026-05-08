import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Nikitha',
    country: 'USA',
    text: 'M5 Visa Advisors made my application process for the USA incredibly smooth. Their attention to detail on my SOP was a game changer.',
  },
  {
    name: 'Divya',
    country: 'USA',
    text: 'I was worried about my USA visa interview, but the mock sessions with M5 Visa Advisors experts gave me the confidence I needed.',
  },
  {
    name: 'Praneetha',
    country: 'UK',
    text: 'From IELTS prep to post-arrival support in the UK, M5 Visa Advisors was with me every step. Highly recommended for any aspirant.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Success Stories</h2>
          <h3 className="text-4xl font-bold text-brand-dark uppercase tracking-tight">What Our Students Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg shadow-brand/5 relative"
            >
              <div className="absolute top-8 right-8">
                <Quote className="w-10 h-10 text-brand/10" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>
              
              <p className="text-brand-dark/70 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand/5 flex items-center justify-center text-brand font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-brand-dark">{review.name}</div>
                  <div className="text-xs text-brand-dark/40 font-medium">Study in {review.country}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
