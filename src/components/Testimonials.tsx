import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Sharma',
    university: 'University of Southern California, USA',
    text: 'Global Degrees made my application process incredibly smooth. Their attention to detail on my SOP was a game changer.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80',
  },
  {
    name: 'Priya Patel',
    university: 'University of Manchester, UK',
    text: 'I was worried about my visa interview, but the mock sessions with their experts gave me the confidence I needed.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80',
  },
  {
    name: 'Ankit Verma',
    university: 'University of Toronto, Canada',
    text: 'From IELTS prep to post-arrival support, Global Degrees was with me every step. Highly recommended for any aspirant.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-4">Success Stories</h2>
          <h3 className="text-4xl font-bold text-gray-900">What Our Students Say</h3>
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
              
              <p className="text-gray-700 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-500 font-medium">{review.university}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
