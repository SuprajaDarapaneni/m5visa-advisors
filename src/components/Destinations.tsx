import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  { id: 'usa', name: 'USA', universities: '200+ Institutions', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800' },
  { id: 'uk', name: 'UK', universities: '100+ Institutions', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
  { id: 'canada', name: 'Canada', universities: '80+ Institutions', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800' },
  { id: 'australia', name: 'Australia', universities: '40+ Institutions', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800' },
  { id: 'ireland', name: 'Ireland', universities: '20+ Institutions', image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=800' },
  { id: 'germany', name: 'Germany', universities: '30+ Institutions', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800' },
  { id: 'new-zealand', name: 'New Zealand', universities: '8+ Institutions', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800' },
  { id: 'france', name: 'France', universities: '15+ Institutions', image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&q=80&w=800' },
  { id: 'sweden', name: 'Sweden', universities: '12+ Institutions', image: 'https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&fit=crop&q=80&w=800' },
  { id: 'singapore', name: 'Singapore', universities: '6+ Institutions', image: 'https://images.unsplash.com/photo-1525625230556-8e8b7e9ed803?auto=format&fit=crop&q=80&w=800' },
  { id: 'spain', name: 'Spain', universities: '20+ Institutions', image: 'https://images.unsplash.com/photo-1583779457094-0cdcf221fd88?auto=format&fit=crop&q=80&w=800' },
  { id: 'latvia', name: 'Latvia', universities: '10+ Institutions', image: 'https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?auto=format&fit=crop&q=80&w=800' },
  { id: 'malta', name: 'Malta', universities: '5+ Institutions', image: 'https://images.unsplash.com/photo-1516053303191-23097b6933b9?auto=format&fit=crop&q=80&w=800' },
  { id: 'cyprus', name: 'Cyprus', universities: '8+ Institutions', image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80&w=800' },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-6">Study Abroad</h2>
            <h3 className="text-5xl lg:text-7xl font-medium text-brand mb-0">
              Top <span className="font-serif italic text-brand">Countries</span>
            </h3>
          </div>
          <Link 
            to="/destinations"
            className="hidden md:flex items-center text-xs font-bold uppercase tracking-[0.2em] text-brand hover:shadow-lg transition-colors mt-4 md:mt-0 px-8 py-3 border border-brand/10 rounded-full hover:bg-brand-light transition-all"
          >
            Explore All <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.slice(0, 9).map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[550px] rounded-[3rem] overflow-hidden bg-gray-100"
            >
              <img 
                src={country.image} 
                alt={country.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-12 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="text-[10px] font-bold text-white/60 uppercase tracking-[0.3em] mb-4">{country.universities}</div>
                <h4 className="text-4xl font-serif text-white mb-8 italic">{country.name}</h4>
                <Link 
                  to={`/destinations/${country.id}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white/0 group-hover:text-white transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                >
                  View Details <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
