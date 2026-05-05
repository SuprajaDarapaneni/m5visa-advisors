import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Destinations />
      <Services />
      <Testimonials />
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-brand/10 rounded-full text-brand text-sm font-bold uppercase tracking-widest mb-4">Get Started</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready for your visa?</h2>
          <p className="text-gray-600">Fill out the form below or visit our Hyderabad branch.</p>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
