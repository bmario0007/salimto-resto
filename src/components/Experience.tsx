
const Experience = () => {
  return (
    <section className="relative py-24 bg-brand-brown text-brand-light overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/salimto-resto/gallery/img-15.jpg')",
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-5xl md:text-6xl text-brand-gold mb-6 drop-shadow-lg">
          Les pieds dans le sable
        </h2>
        <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto">
          "Plus qu'un repas, une expérience."
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-12">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-3">🏖️</span>
            <span className="font-medium">Tables sur la plage</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-3">🌅</span>
            <span className="font-medium">Ambiance coucher de soleil</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-3">🛖</span>
            <span className="font-medium">Paillotes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-3">🥂</span>
            <span className="font-medium">Cadre exceptionnel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
