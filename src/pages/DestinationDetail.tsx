import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, CheckCircle2, Globe, GraduationCap, MapPin, Search } from 'lucide-react';

const destinationData: Record<string, any> = {
  usa: {
    name: 'United States of America',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in USA: The Land of Opportunities',
    description: 'The United States is home to some of the world\'s most prestigious universities and offers a vast array of programs across all disciplines.',
    features: ['Ivy League Institutions', 'Optional Practical Training (OPT)', 'STEM Extensions', 'Diverse Culture'],
    process: [
      { step: 'Research', text: 'Select universities that match your profile and career goals.' },
      { step: 'Tests', text: 'Prepare for GRE/GMAT and TOEFL/IELTS exams.' },
      { step: 'Appilcation', text: 'Submit your application along with SOP and LORs.' },
      { step: 'Visa', text: 'Apply for the F-1 student visa once you receive the I-20.' }
    ]
  },
  uk: {
    name: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in UK: Excellence in Education',
    description: 'The UK has a long-standing reputation for academic excellence. Its degrees are recognized and respected worldwide.',
    features: ['World-Class Research', '2-Year Post Study Work Visa', 'Efficient 1-Year Masters', 'Rich History'],
    process: [
      { step: 'Search', text: 'Find courses that align with your professional aspirations.' },
      { step: 'Apply', text: 'Submit applications through UCAS or directly to universities.' },
      { step: 'Offers', text: 'Wait for conditional or unconditional offer letters.' },
      { step: 'CAS', text: 'Request Confirmation of Acceptance for Studies (CAS) for visa.' }
    ]
  },
  canada: {
    name: 'Canada',
    image: 'https://images.unsplash.com/photo-1519114056088-b877fe073a5e?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Canada: Quality Life & Learning',
    description: 'Canada is consistently ranked as one of the best countries in the world for international students due to its high standard of living.',
    features: ['Post-Graduation Work Permit (PGWP)', 'Pathway to PR', 'Affordable Tuition', 'Safe Environment'],
    process: [
      { step: 'Select', text: 'Choose DLI (Designated Learning Institutions) approved colleges.' },
      { step: 'LOA', text: 'Secure the Letter of Acceptance from your chosen college.' },
      { step: 'Provincial Attestation', text: 'Obtain the required PAL for your study permit.' },
      { step: 'Permit', text: 'Apply for the Canada Study Permit.' }
    ]
  },
  australia: {
    name: 'Australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Australia: Vibrant Living',
    description: 'Australia offers a unique blend of high-quality education and an adventurous lifestyle.',
    features: ['Group of Eight Universities', 'Generous Work Rights', 'High Minimum Wage', 'Great Weather'],
    process: [
      { step: 'Consult', text: 'Choose from a wide range of CRICOS registered courses.' },
      { step: 'GTE', text: 'Pass the Genuine Temporary Entrant requirement.' },
      { step: 'COE', text: 'Receive your Confirmation of Enrolment.' },
      { step: 'Apply', text: 'Lodge your Subclass 500 Visa application.' }
    ]
  }
};

export default function DestinationDetail() {
  const { id } = useParams();
  const data = id ? destinationData[id] : null;

  if (!data) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Destination not found</h1>
        <Link to="/destinations" className="text-brand font-bold underline">Back to Destinations</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-2 bg-brand/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 mx-auto w-fit"
          >
            <Globe className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white uppercase tracking-widest">{data.name}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-bold text-white leading-tight"
          >
            {data.title}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/destinations" className="inline-flex items-center text-gray-500 font-bold mb-12 hover:text-brand transition-colors">
            <ChevronLeft className="mr-1 w-5 h-5" />
            Back to Destinations
          </Link>

          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                {data.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-16">
                {data.features.map((feature: string) => (
                  <div key={feature} className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="bg-emerald-500/10 p-2 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="font-bold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Apply</h2>
              <div className="space-y-8">
                {data.process.map((item: any, i: number) => (
                  <div key={i} className="flex space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand text-white flex items-center justify-center font-bold rounded-xl shadow-lg shadow-brand/20">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.step}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
                <h3 className="text-2xl font-bold mb-6">Need Assistance?</h3>
                <p className="text-gray-400 mb-8">Our expert advisors are ready to help you with the step-by-step process of studying abroad.</p>
                <Link to="/contact" className="block w-full bg-brand text-white text-center py-4 rounded-xl font-bold hover:bg-brand/90 transition-all shadow-lg shadow-brand/20">
                  Talk to an Expert
                </Link>
              </div>

              <div className="bg-brand-light p-8 rounded-[2rem] border border-brand/10">
                <h3 className="text-xl font-bold text-brand mb-6 italic underline">Destinations Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium tracking-tight">Visa Success Rate</span>
                    <span className="font-bold text-brand">98%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium tracking-tight">Avg. Processing Time</span>
                    <span className="font-bold text-brand">3-6 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium tracking-tight">Post-study work</span>
                    <span className="font-bold text-brand">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
