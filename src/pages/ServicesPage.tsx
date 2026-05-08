import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-brand py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-brand-light/70 text-lg max-w-2xl mx-auto px-4">We help you with everything you need to study abroad, including picks schools and getting visas.</p>
        </div>
      </div>
      
      <Services />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 italic">Ready to get started?</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Book a slot for a personalized counseling session with our experts today.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                      href="https://wa.me/919515354865?text=I%20would%20like%20to%20book%20a%20free%20consultation%20slot." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand text-white px-10 py-4 rounded-full font-bold text-lg text-center"
                    >
                      Book Free Slot
                    </a>
                    <a 
                      href="tel:+918333075544" 
                      className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg backdrop-blur-md text-center"
                    >
                      Call Now
                    </a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
