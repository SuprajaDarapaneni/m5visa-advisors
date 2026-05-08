import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle2, GraduationCap, MapPin, Search } from 'lucide-react';

const destinationData: Record<string, any> = {
  usa: {
    name: 'United States of America',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in USA: Great Opportunities',
    description: 'The United States has some of the best universities in the world and many different courses you can choose from.',
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
    title: 'Study in UK: Top Education',
    description: 'The UK is known for great teaching. A degree from the UK is respected all over the world.',
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
  },
  ireland: {
    name: 'Ireland',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Ireland: Land of Scholars',
    description: 'Ireland is one of the most friendly and welcoming countries in the world, known for its high-quality research institutions.',
    features: ['Hub for Tech Giants', '2-Year Stay Back Option', 'English Speaking Country', 'Global Recognition'],
    process: [
      { step: 'Shortlist', text: 'Identify the top universities in Dublin, Cork, or Galway.' },
      { step: 'Portfolio', text: 'Prepare your academic and professional portfolio.' },
      { step: 'Submit', text: 'Apply through the university portals or agents.' },
      { step: 'Visa', text: 'Apply for the Irish D-type study visa.' }
    ]
  },
  germany: {
    name: 'Germany',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Germany: Precision & Innovation',
    description: 'Germany is a world leader in engineering and technology, offering many tuition-free programs for international students.',
    features: ['Zero/Low Tuition Fees', 'Strong Industry Ties', '18-Month Job Search Visa', 'Cultural Center of Europe'],
    process: [
      { step: 'Uni-Assist', text: 'Submit requirements through the Uni-Assist portal.' },
      { step: 'APS', text: 'Obtain the APS certificate for Indian students.' },
      { step: 'Blocked Account', text: 'Set up the required financial blocked account.' },
      { step: 'Appointment', text: 'Book your VFS appointment for the national visa.' }
    ]
  },
  'new-zealand': {
    name: 'New Zealand',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in New Zealand: Quality Education',
    description: 'New Zealand offers a stunning natural environment combined with world-class education and globally recognized degrees.',
    features: ['NZQF Framework', 'Safe and Welcoming', '3-Year Post Study Work', 'Industry Placements'],
    process: [
      { step: 'Select', text: 'Choose from 8 top universities or various ITPs.' },
      { step: 'Offer Letter', text: 'Apply and secure an unconditional offer.' },
      { step: 'FTS', text: 'Understand the Funds Transfer Scheme for financials.' },
      { step: 'E-Visa', text: 'Apply online for the New Zealand student visa.' }
    ]
  },
  france: {
    name: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in France: Excellence in Management',
    description: 'France is home to some of the best Business Schools in the world, offering a perfect blend of theory and practice.',
    features: ['Top Business Schools', 'Strong Alumni Networks', 'CAF Housing Subsidy', 'Schengen Access'],
    process: [
      { step: 'Campus France', text: 'Create your account on the Campus France portal.' },
      { step: 'Interviews', text: 'Attend the mandatory Campus France interview.' },
      { step: 'Validation', text: 'Receive your Etudes en France validation.' },
      { step: 'VFS', text: 'Submit your documents for the long-stay visa.' }
    ]
  },
  sweden: {
    name: 'Sweden',
    image: 'https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Sweden: Innovate Tomorrow',
    description: 'Sweden is the birthplace of global brands like IKEA and Spotify, emphasizing creative thinking and sustainability.',
    features: ['Innovation Hub', 'Work-Life Balance', 'Job Opportunities', 'Sustainability Focus'],
    process: [
      { step: 'Search', text: 'Find programs through the central UniversityAdmissions.se.' },
      { step: 'Application', text: 'Submit one application for multiple universities.' },
      { step: 'Fee Payment', text: 'Pay the application fee to process credits.' },
      { step: 'Permit', text: 'Apply for the residence permit for studies.' }
    ]
  }
};

export default function DestinationDetail() {
  const { id } = useParams();
  const data = id ? destinationData[id] : null;

  if (!data) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-brand mb-4">Destination not found</h1>
        <Link to="/destinations" className="text-brand font-bold underline">Back to Destinations</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-brand/60" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-2 bg-brand/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 mx-auto w-fit"
          >
            <MapPin className="w-4 h-4 text-white" />
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
          <Link to="/destinations" className="inline-flex items-center text-brand-dark/50 font-bold mb-12 hover:text-brand transition-colors">
            <ChevronLeft className="mr-1 w-5 h-5" />
            Back to Destinations
          </Link>

          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Overview</h2>
              <p className="text-lg text-brand-dark/70 leading-relaxed mb-10">
                {data.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-16">
                {data.features.map((feature: string) => (
                  <div key={feature} className="flex items-center space-x-4 bg-brand/5 p-6 rounded-2xl border border-brand/10">
                    <div className="bg-brand/10 p-2 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-brand" />
                    </div>
                    <span className="font-bold text-brand/80">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-brand mb-8">How to Apply</h2>
              <div className="space-y-8">
                {data.process.map((item: any, i: number) => (
                  <div key={i} className="flex space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand text-white flex items-center justify-center font-bold rounded-xl shadow-lg shadow-brand/20">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand mb-2">{item.step}</h4>
                      <p className="text-brand/70 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-brand p-8 rounded-[2rem] text-white">
                <h3 className="text-2xl font-bold mb-6">Need Assistance?</h3>
                <p className="text-brand-light/60 mb-8">Our expert advisors are ready to help you with the step-by-step process of studying abroad in {data.name}.</p>
                <a 
                  href={`https://wa.me/918333075544?text=I%20need%20assistance%20regarding%20studying%20in%20${encodeURIComponent(data.name)}.`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-brand text-white text-center py-4 rounded-xl font-bold hover:bg-brand/90 transition-all shadow-lg shadow-brand/20"
                >
                  Talk to an Expert
                </a>
              </div>

              <div className="bg-brand-light p-8 rounded-[2rem] border border-brand/10">
                <h3 className="text-xl font-bold text-brand mb-6 italic underline">Destinations Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-brand/50 font-medium tracking-tight">Assistance</span>
                    <span className="font-bold text-brand uppercase text-[10px]">End to End Guaranteed</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-brand/50 font-medium tracking-tight">Avg. Processing Time</span>
                    <span className="font-bold text-brand">3-6 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-brand/50 font-medium tracking-tight">Post-study work</span>
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
