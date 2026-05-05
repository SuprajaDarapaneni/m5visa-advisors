import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Search, 
  FileText, 
  PlaneTakeoff, 
  CreditCard, 
  Briefcase 
} from 'lucide-react';

const services = [
  {
    title: 'University Selection',
    description: 'We help you choose the right course and university based on your profile and career goals.',
    icon: Search,
    color: 'bg-blue-500',
  },
  {
    title: 'Admission Guidance',
    description: 'Expert assistance with your application process, SOPs, LORs, and documentation.',
    icon: GraduationCap,
    color: 'bg-purple-500',
  },
  {
    title: 'Visa Assistance',
    description: 'End-to-end support for visa applications, including mock interviews and document prep.',
    icon: FileText,
    color: 'bg-emerald-500',
  },
  {
    title: 'Pre-Departure Brief',
    description: 'Vital information about life abroad, culture, and essential travel tips.',
    icon: PlaneTakeoff,
    color: 'bg-orange-500',
  },
  {
    title: 'Financial Counseling',
    description: 'Guidance on education loans, scholarships, and managing expenses abroad.',
    icon: CreditCard,
    color: 'bg-pink-500',
  },
  {
    title: 'Career Support',
    description: 'Post-arrival counseling and guidance on part-time work and internship opportunities.',
    icon: Briefcase,
    color: 'bg-cyan-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Support for Your Journey</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From your first consultation to arriving at your dream campus, we are with you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-brand/5 transition-all group"
            >
              <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
