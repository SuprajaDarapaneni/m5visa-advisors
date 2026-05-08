import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  { 
    id: 'usa',
    name: 'Study in USA', 
    universities: '200+ Institutions', 
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800',
    description: 'The United States offers a diverse range of higher education options, from vocational schools to research universities.'
  },
  { 
    id: 'uk',
    name: 'Study in UK', 
    universities: '100+ Institutions', 
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
    description: 'World-renowned institutions and a rich cultural heritage make the UK a top destination for global students.'
  },
  { 
    id: 'canada',
    name: 'Study in Canada', 
    universities: '80+ Institutions', 
    image: 'https://images.unsplash.com/photo-1519114056088-b877fe073a5e?auto=format&fit=crop&q=80&w=800',
    description: 'Canada is known for its high-quality education, friendly environment, and excellent post-study work opportunities.'
  },
  { 
    id: 'australia',
    name: 'Study in Australia', 
    universities: '40+ Institutions', 
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800',
    description: 'A popular choice for international students offering top-tier universities and a high standard of living.'
  },
  { 
    id: 'ireland',
    name: 'Study in Ireland', 
    universities: '20+ Institutions', 
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=800',
    description: 'Known as the "Land of Saints and Scholars," Ireland offers a vibrant culture and excellent research facilities.'
  },
  { 
    id: 'germany',
    name: 'Study in Germany', 
    universities: '30+ Institutions', 
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
    description: 'Famous for its engineering and technical courses, many German universities offer low to no tuition fees.'
  },
  { 
    id: 'new-zealand',
    name: 'Study in New Zealand', 
    universities: '8+ Institutions', 
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    description: 'New Zealand offers a world-class education system and a safe, welcoming environment for international students.'
  },
  { 
    id: 'france',
    name: 'Study in France', 
    universities: '15+ Institutions', 
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    description: 'France is a global center for art, science, and philosophy, with highly ranked institutions in management and engineering.'
  },
  { 
    id: 'sweden',
    name: 'Study in Sweden', 
    universities: '12+ Institutions', 
    image: 'https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&fit=crop&q=80&w=800',
    description: 'Sweden is known for its unconventional thinking, innovation, and high-quality education system.'
  },
];

export default function DestinationsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-brand py-20 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Countries to Study In</h1>
        <p className="text-brand-light/60 text-lg max-w-2xl mx-auto">Look at the top places to study around the world and find the best one for you.</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {destinations.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-brand/10 shadow-xl shadow-brand/5 hover:shadow-2xl transition-all h-full flex flex-col"
              >
                <div className="h-64 relative">
                  <img 
                    src={country.image} 
                    alt={country.name} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-brand uppercase tracking-wider">
                      {country.universities}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-brand mb-4">{country.name}</h2>
                  <p className="text-brand/70 mb-8 flex-grow leading-relaxed">
                    {country.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {['Top Ranked Universities', 'Flexible Work Options', 'Permanent Residency Paths'].map((point) => (
                      <div key={point} className="flex items-center space-x-2 text-sm text-brand/60 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/destinations/${country.id}`}
                    className="inline-flex items-center justify-center bg-brand text-white font-bold py-4 rounded-2xl hover:bg-brand/90 transition-all hover:shadow-xl hover:shadow-brand/20"
                  >
                    Learn More
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
