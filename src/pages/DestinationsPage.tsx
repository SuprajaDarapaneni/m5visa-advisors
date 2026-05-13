import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  { 
    id: 'usa',
    name: 'Study in USA', 
    universities: '500+ Institutions', 
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800',
    description: 'The USA offers unparalleled opportunities for research, innovation, and diverse campus experiences.'
  },
  { 
    id: 'uk',
    name: 'Study in UK', 
    universities: '150+ Institutions', 
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
    description: 'Experience a world-class education rich in history and tradition with diverse multi-cultural surroundings.'
  },
  { 
    id: 'canada',
    name: 'Study in Canada', 
    universities: '100+ Institutions', 
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800',
    description: 'Canada provides high-quality education and a welcoming multicultural environment for students.'
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
    universities: '400+ Institutions', 
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
    description: 'Germany offers excellent technical and engineering programs often with low or no tuition fees.'
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
    universities: '80+ Institutions', 
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&q=80&w=800',
    description: 'France is a global center for art, science, and philosophy, with highly ranked institutions in management.'
  },
  { 
    id: 'sweden',
    name: 'Study in Sweden', 
    universities: '35+ Institutions', 
    image: 'https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&fit=crop&q=80&w=800',
    description: 'Sweden is known for its unconventional thinking, innovation, and high-quality education system.'
  },
  { 
    id: 'italy',
    name: 'Study in Italy', 
    universities: '15+ Institutions', 
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
    description: 'Italy is a world center for fashion, design, and architecture with historically significant universities.'
  },
  { 
    id: 'latvia',
    name: 'Study in Latvia', 
    universities: '10+ Institutions', 
    image: 'https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?auto=format&fit=crop&q=80&w=800',
    description: 'Latvia offers high-quality education at an affordable cost, with a focus on medicine and social sciences.'
  },
  { 
    id: 'austria',
    name: 'Study in Austria', 
    universities: '12+ Institutions', 
    image: 'https://images.unsplash.com/photo-1521106047354-5a5b85e819ee?auto=format&fit=crop&q=80&w=800',
    description: 'Austria provides a high quality of life and a strong focus on research and the arts.'
  },
  { 
    id: 'spain',
    name: 'Study in Spain', 
    universities: '20+ Institutions', 
    image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&q=80&w=800',
    description: 'Spain has first-class business schools and a vibrant culture that attracts students from everywhere.'
  },
  { 
    id: 'finland',
    name: 'Study in Finland', 
    universities: '10+ Institutions', 
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=800',
    description: 'Finland consistently ranks among the top countries for education quality and student satisfaction.'
  },
  { 
    id: 'switzerland',
    name: 'Study in Switzerland', 
    universities: '15+ Institutions', 
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800',
    description: 'Switzerland is world-famous for its hospitality management, finance, and research programs.'
  },
  { 
    id: 'poland',
    name: 'Study in Poland', 
    universities: '18+ Institutions', 
    image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=800',
    description: 'Poland offers a wide range of degrees in English at very competitive tuition rates.'
  },
  { 
    id: 'malta',
    name: 'Study in Malta', 
    universities: '5+ Institutions', 
    image: 'https://images.unsplash.com/photo-1529680459049-bf0340fa0695?auto=format&fit=crop&q=80&w=800',
    description: 'Malta is an English-speaking island nation with a growing reputation for high-quality higher education.'
  },
  { 
    id: 'cyprus',
    name: 'Study in Cyprus', 
    universities: '8+ Institutions', 
    image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80&w=800',
    description: 'Cyprus offers a safe environment and high-quality programs especially in business and tourism.'
  },
  { 
    id: 'singapore',
    name: 'Study in Singapore', 
    universities: '6+ Institutions', 
    image: 'https://images.unsplash.com/photo-1525625230556-8e8b7e9ed803?auto=format&fit=crop&q=80&w=800',
    description: 'Singapore is a global hub for education, research, and innovation in the heart of Asia.'
  },
  { 
    id: 'uae',
    name: 'Study in UAE', 
    universities: '10+ Institutions', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    description: 'The UAE offers state-of-the-art facilities and branch campuses of the world’s top universities.'
  },
  { 
    id: 'japan',
    name: 'Study in Japan', 
    universities: '12+ Institutions', 
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    description: 'Japan combined high academic standards with a unique cultural experience and career opportunities.'
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-brand py-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Countries to Study In</h1>
        <p className="text-brand-light/60 text-lg max-w-2xl mx-auto">Look at the top places to study around the world and find the best one for you.</p>
      </div>

      <section className="py-10 bg-white">
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
