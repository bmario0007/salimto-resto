import React from 'react';
import { Link } from 'react-scroll';

const specialtiesData = [
  {
    name: "Thiéboudienne",
    description: "Le plat national. Riz au poisson parfumé, légumes mijotés.",
    image: "/salimto-resto/gallery/img-12.jpg",
    price: 5000
  },
  {
    name: "Yassa Poulet",
    description: "Poulet mariné au citron et oignons, servi avec riz blanc.",
    image: "/salimto-resto/gallery/img-13.jpg",
    price: 4500
  },
  {
    name: "Poisson Grillé",
    description: "Pêche du jour marinée et grillée au feu de bois.",
    image: "/salimto-resto/gallery/img-14.jpg",
    price: 6000
  },
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-20 bg-brand-sand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-2">À déguster</h2>
          <h3 className="font-serif text-4xl text-brand-brown">Nos Spécialités</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {specialtiesData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-brand-light text-brand-brown font-bold px-3 py-1 rounded-full shadow-md">
                  {item.price} FCFA
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-2xl text-brand-brown mb-2">{item.name}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="menu"
            smooth={true}
            duration={500}
            className="cursor-pointer inline-block bg-brand-brown text-brand-light hover:bg-brand-gold px-8 py-3 rounded-full font-medium transition-colors shadow-md"
          >
            VOIR TOUT LE MENU
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
