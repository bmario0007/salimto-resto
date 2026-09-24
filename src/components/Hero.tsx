import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/salimto-resto/gallery/img-10.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-brand-brown/40 bg-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-brand-light mb-4 drop-shadow-lg">
          SALIMTO RESTO
        </h1>
        <p className="text-xl md:text-3xl text-brand-sand font-light mb-6 drop-shadow-md">
          Les saveurs du Sénégal au bord de l'océan
        </p>
        <p className="text-lg md:text-xl text-brand-light mb-10 max-w-2xl mx-auto drop-shadow-sm">
          Une expérience culinaire authentique dans un cadre exceptionnel à Saly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="menu"
            smooth={true}
            duration={500}
            className="cursor-pointer border-2 border-brand-gold text-brand-light hover:bg-brand-gold px-8 py-3 rounded-full font-medium transition-all w-full sm:w-auto"
          >
            VOIR LE MENU
          </Link>
          <Link
            to="reservation"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-brand-gold text-white hover:bg-white hover:text-brand-brown px-8 py-3 rounded-full font-medium transition-all shadow-lg w-full sm:w-auto"
          >
            RÉSERVER UNE TABLE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
