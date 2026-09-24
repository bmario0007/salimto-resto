import { MapPin, ChefHat, Sun, Users } from 'lucide-react';

const reasons = [
  {
    icon: <MapPin size={32} />,
    title: "Emplacement exceptionnel",
    description: "Restaurant situé directement au bord de la mer, sur la magnifique plage de Saly."
  },
  {
    icon: <ChefHat size={32} />,
    title: "Saveurs authentiques",
    description: "Une cuisine inspirée des traditions sénégalaises et africaines avec des produits frais."
  },
  {
    icon: <Sun size={32} />,
    title: "Cadre unique",
    description: "Profitez d'un repas inoubliable les pieds dans le sable sous le soleil ou les étoiles."
  },
  {
    icon: <Users size={32} />,
    title: "Ambiance conviviale",
    description: "Un lieu accueillant adapté aux familles, groupes d'amis, couples et visiteurs."
  }
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-brand-sand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-2">Notre différence</h2>
          <h3 className="font-serif text-4xl text-brand-brown">Pourquoi choisir Salimto ?</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-block p-4 rounded-full bg-brand-sand/20 text-brand-gold mb-6">
                {reason.icon}
              </div>
              <h4 className="font-serif text-xl font-bold text-brand-brown mb-4">{reason.title}</h4>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
