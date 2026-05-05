import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  { id: 'usa', name: 'USA', universities: '200+ Institutions', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800' },
  { id: 'uk', name: 'UK', universities: '100+ Institutions', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
  { id: 'canada', name: 'Canada', universities: '80+ Institutions', image: 'https://images.unsplash.com/photo-1519114056088-b877fe073a5e?auto=format&fit=crop&q=80&w=800' },
  { id: 'australia', name: 'Australia', universities: '40+ Institutions', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800' },
  { id: 'ireland', name: 'Ireland', universities: '20+ Institutions', image: 'https://images.unsplash.com/photo-1550186082-6607ec3a508b?auto=format&fit=crop&q=80&w=800' },
  { id: 'germany', name: 'Germany', universities: '30+ Institutions', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800' },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-4">Study Destinations</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">Choose Your Path</h3>
          </div>
          <Link 
            to="/destinations"
            className="hidden md:flex items-center text-brand font-bold hover:translate-x-1 transition-transform mt-4 md:mt-0 px-6 py-2 border border-brand/20 rounded-full hover:bg-brand-light transition-colors"
          >
            View All Countries <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-200/50"
            >
              <img 
                src={country.image} 
                alt={country.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h4 className="text-3xl font-bold text-white mb-2">{country.name}</h4>
                <p className="text-white/80 text-base font-medium mb-4">{country.universities}</p>
                <Link 
                  to={`/destinations/${country.id}`}
                  className="inline-flex items-center text-white text-sm font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 group-hover:bg-brand group-hover:border-brand transition-all"
                >
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
