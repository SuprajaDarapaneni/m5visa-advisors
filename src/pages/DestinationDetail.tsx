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
  },
  italy: {
    name: 'Italy',
    image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cbaf?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Italy: Art & Design',
    description: 'Italy offers a unique cultural heritage and world-class education in fashion, design, and architecture.',
    features: ['Historic Universities', 'Design Capitals', 'Affordable Living', 'Rich Culture'],
    process: [
      { step: 'Universitaly', text: 'Register and apply through the Universitaly portal.' },
      { step: 'Pre-Enrolment', text: 'Complete the pre-enrolment process at the embassy.' },
      { step: 'Acceptance', text: 'Receive your admission letter from the university.' },
      { step: 'Visa', text: 'Apply for the national study visa (Type D).' }
    ]
  },
  latvia: {
    name: 'Latvia',
    image: 'https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Latvia: Baltic Excellence',
    description: 'Latvia provides high-quality European education with very competitive tuition fees and living costs.',
    features: ['Schengen Country', 'English Programs', 'Focus on Research', 'Safe Environment'],
    process: [
      { step: 'Admission', text: 'Apply directly to the university of your choice.' },
      { step: 'Verification', text: 'Undergo academic document verification (AIC).' },
      { step: 'Agreement', text: 'Sign the study agreement and pay tuition fees.' },
      { step: 'Stay Permit', text: 'Apply for the residence permit at the embassy.' }
    ]
  },
  austria: {
    name: 'Austria',
    image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Austria: Heart of Europe',
    description: 'Austria offers a high standard of education and living, with a strong emphasis on music, art, and research.',
    features: ['Central Location', 'High Quality of Life', 'Rich History', 'Safe Environment'],
    process: [
      { step: 'Search', text: 'Find courses through the official OeAD database.' },
      { step: 'Admission', text: 'Apply directly to the university and secure an offer.' },
      { step: 'Insurance', text: 'Obtain the necessary health insurance coverage.' },
      { step: 'Residence', text: 'Apply for the "Student" residence permit.' }
    ]
  },
  spain: {
    name: 'Spain',
    image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Spain: Sun & Learning',
    description: 'Spain has some of the world\'s top business schools and a vibrant cultural experience for students.',
    features: ['Top Business Schools', 'Strong Alumni Networks', 'Vibrant Lifestyle', 'Schengen Access'],
    process: [
      { step: 'Pre-evaluation', text: 'Have your academic credentials evaluated by UNEDasiss.' },
      { step: 'Admission', text: 'Apply to universities and receive your acceptance letter.' },
      { step: 'Medical', text: 'Provide a medical certificate for the visa process.' },
      { step: 'Visa', text: 'Apply for the Spanish long-stay student visa.' }
    ]
  },
  finland: {
    name: 'Finland',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Finland: World\'s Best Education',
    description: 'Finland is globally recognized for its innovation and student-centric approach to higher education.',
    features: ['Top PISA Rankings', 'Focus on Equality', 'Work Opportunities', 'Clean Environment'],
    process: [
      { step: 'Joint App', text: 'Apply through the national Studyinfo.fi portal.' },
      { step: 'Entrance', text: 'Prepare for entrance exams or interview sessions.' },
      { step: 'Acceptance', text: 'Secure your place and pay the tuition fee.' },
      { step: 'Residence', text: 'Apply online for the study residence permit.' }
    ]
  },
  switzerland: {
    name: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Switzerland: Peak of Excellence',
    description: 'Switzerland is a world leader in finance, hospitality, and research, offering top-tier academic programs.',
    features: ['Hospitality Hub', 'Banking Center', 'Global Research', 'Safe and Neutral'],
    process: [
      { step: 'Admission', text: 'Apply directly to the university and obtain an offer.' },
      { step: 'Motivation', text: 'Submit a detailed motivation letter and CV.' },
      { step: 'Financials', text: 'Show proof of sufficient funds for living in Switzerland.' },
      { step: 'Stay Permit', text: 'Apply for the visa through the Swiss consulate.' }
    ]
  },
  poland: {
    name: 'Poland',
    image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Poland: Central Value',
    description: 'Poland offers affordable European degrees in a rapidly growing economy with a rich cultural history.',
    features: ['Low Tuition Fees', 'Affordable Living', 'Dynamic Economy', 'Schengen Country'],
    process: [
      { step: 'Admission', text: 'Apply online to the university\'s international office.' },
      { step: 'Verification', text: 'Ensure your previous degrees are recognized in Poland.' },
      { step: 'Offer Letter', text: 'Secure the offer letter and pay the initial fee.' },
      { step: 'Visa', text: 'Apply for the national visa (Type D) for studies.' }
    ]
  },
  malta: {
    name: 'Malta',
    image: 'https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Malta: Island Education',
    description: 'Malta is a safe, English-speaking destination in the heart of the Mediterranean with high quality education.',
    features: ['English Speaking', 'Mediterranean Lifestyle', 'Safe Environment', 'Lower Costs'],
    process: [
      { step: 'Application', text: 'Submit your application to a recognized institution.' },
      { step: 'Acceptance', text: 'Receive your Letter of Acceptance and payfees.' },
      { step: 'Identity', text: 'Register with Identity Malta upon arrival.' },
      { step: 'E-Residence', text: 'Apply for your E-Residence card for studies.' }
    ]
  },
  cyprus: {
    name: 'Cyprus',
    image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Cyprus: Crossroads of Continents',
    description: 'Cyprus offers modern education facilities and an international atmosphere in a beautiful island setting.',
    features: ['High Standards', 'Safe Environment', 'Growing Tech Scene', 'Rich Tourism'],
    process: [
      { step: 'Eligibility', text: 'Verify your academic documents from the Ministry.' },
      { step: 'Admission', text: 'Secure admission from a private or public university.' },
      { step: 'Approval', text: 'Receive the final approval from the Migration Dept.' },
      { step: 'Arrival', text: 'Undergo mandatory medical screening on arrival.' }
    ]
  },
  singapore: {
    name: 'Singapore',
    image: 'https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Singapore: Global Hub',
    description: 'Singapore combined eastern and western influences to provide a top-class education environment.',
    features: ['Asian Powerhouse', 'Safety and Cleanliness', 'Innovation Leader', 'Multicultural'],
    process: [
      { step: 'Apply', text: 'Submit your application directly to the university.' },
      { step: 'IPA', text: 'Receive your In-Principle Approval (IPA) letter.' },
      { step: 'Student Pass', text: 'Apply for the Student Pass through the ICA portal.' },
      { step: 'Registration', text: 'Complete your registration at the university campus.' }
    ]
  },
  uae: {
    name: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in UAE: Modern Excellence',
    description: 'The UAE offers a safe and luxurious lifestyle with branch campuses of prestigious global universities.',
    features: ['Tax-Free Environment', 'Modern Infrastructure', 'Safe and Secure', 'Global Hub'],
    process: [
      { step: 'Select', text: 'Choose from international branch or local campuses.' },
      { step: 'Sponsorship', text: 'Ensure the university sponsors your student visa.' },
      { step: 'Visa Process', text: 'Submit medical and security clearance documents.' },
      { step: 'ID card', text: 'Apply for the Emirates ID card on arrival.' }
    ]
  },
  japan: {
    name: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
    title: 'Study in Japan: Tradition & Tech',
    description: 'Japan offers a unique opportunity to study in one of the world\'s most technologically advanced countries.',
    features: ['Cutting-Edge Tech', 'Rich Tradition', 'Part-Time Work Permit', 'Safe Society'],
    process: [
      { step: 'COE', text: 'Obtain the Certificate of Eligibility from Immigration.' },
      { step: 'Language', text: 'Meet minimum Japanese language requirements if needed.' },
      { step: 'Admission', text: 'Secure admission from your chosen Japanese university.' },
      { step: 'Visa', text: 'Lodge your visa application at the local consulate.' }
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
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/destinations" className="inline-flex items-center text-brand-dark/50 font-bold mb-8 hover:text-brand transition-colors">
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
                    <span className="font-bold text-brand">7-9 Weeks</span>
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
