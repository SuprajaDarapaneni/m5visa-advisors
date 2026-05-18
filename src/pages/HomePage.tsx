import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import HowItWorks from '../components/HowItWorks';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Destinations />
      <div className="bg-brand/5 py-8">
        <About />
      </div>
      <HowItWorks />
      <Services />
      <Testimonials />
      <div className="bg-white py-8 border-t border-brand/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-brand/10 rounded-full text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4">Get Started</div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand mb-4 italic">Ready to Apply?</h2>
          <p className="text-brand/60 font-light text-lg md:text-xl max-w-2xl mx-auto">Fill out the form below or visit our office for a free talk about your future.</p>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
