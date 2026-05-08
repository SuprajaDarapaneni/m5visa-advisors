import Hero from '../components/Hero';
import About from '../components/About';
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
      <About />
      <Destinations />
      <Services />
      <Testimonials />
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-brand/10 rounded-full text-brand text-xs font-bold uppercase tracking-widest mb-4">Get Started</div>
          <h2 className="text-4xl font-serif text-gray-900 mb-4 italic">Ready to Apply?</h2>
          <p className="text-gray-500 font-light max-w-lg mx-auto">Fill out the form below or visit our office for a free talk about your future.</p>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
