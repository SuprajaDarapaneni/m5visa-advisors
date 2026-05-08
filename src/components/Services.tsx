import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Search, 
  FileText, 
  PlaneTakeoff, 
  CreditCard, 
  Briefcase,
  ShieldCheck
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
    title: 'Visa Services',
    description: 'Comprehensive support for student visas, including documentation, filing, and mock interviews.',
    icon: ShieldCheck,
    color: 'bg-emerald-500',
  },
  {
    title: 'Post-Visa Support',
    description: 'End-to-end support even after visa approval, ensuring a smooth transition to your new country.',
    icon: FileText,
    color: 'bg-indigo-500',
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
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-6">Expert Help</h2>
            <h3 className="text-5xl lg:text-7xl font-medium text-gray-900 mb-8 leading-tight">
              Best Advice for <br />
              <span className="font-serif italic text-brand">Your Future</span>
            </h3>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              We provide personal help to get into top universities abroad. We make sure every part of your application is good.
            </p>
          </div>
          <div className="hidden lg:block pb-4">
             <div className="text-6xl font-serif italic text-gray-100 uppercase tracking-tighter">Services</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-[3rem] overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-12 hover:bg-brand-light/20 transition-colors group cursor-pointer"
            >
              <div className="mb-8">
                <service.icon className="w-10 h-10 text-brand stroke-[1px]" />
              </div>
              <h4 className="text-2xl font-serif text-gray-900 mb-4 group-hover:italic transition-all">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
