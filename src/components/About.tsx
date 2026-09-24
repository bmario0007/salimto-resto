import { Waves, Utensils, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase">Bienvenue chez Salimto Resto</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-brown leading-tight">
              La cuisine sénégalaise rencontre la beauté de l'océan.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Situé directement sur la plage de Saly, Salimto Resto vous accueille dans un cadre chaleureux et décontracté. 
              Découvrez des plats généreux, des produits locaux et les saveurs authentiques de notre terroir, le tout les pieds dans le sable.
            </p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="bg-brand-sand/30 p-3 rounded-full text-brand-blue mb-3">
                  <Waves size={24} />
                </div>
                <h4 className="font-semibold text-brand-brown">Vue sur la mer</h4>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="bg-brand-sand/30 p-3 rounded-full text-brand-gold mb-3">
                  <Utensils size={24} />
                </div>
                <h4 className="font-semibold text-brand-brown">Cuisine locale & africaine</h4>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="bg-brand-sand/30 p-3 rounded-full text-red-500 mb-3">
                  <Heart size={24} />
                </div>
                <h4 className="font-semibold text-brand-brown">Ambiance conviviale</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-brand-gold/20 rounded-2xl transform rotate-3"></div>
            <img 
              src="/salimto-resto/gallery/img-11.jpg" 
              alt="Restaurant Salimto" 
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
