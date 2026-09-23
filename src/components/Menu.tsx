import React, { useState } from 'react';
import { menuData } from '../data/config';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);

  return (
    <section id="menu" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-2">Découvrez notre carte</h2>
          <h3 className="font-serif text-4xl text-brand-brown">Le Menu</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-brand-gold text-white shadow-md'
                  : 'bg-brand-sand/20 text-brand-brown hover:bg-brand-sand/40'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          {menuData.categories.map((category) => (
            <div
              key={category.id}
              className={`transition-opacity duration-500 ${activeCategory === category.id ? 'block animate-fade-in' : 'hidden'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {category.items.map((item, index) => (
                  <div key={index} className="flex flex-col border-b border-brand-sand/30 pb-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-xl font-bold text-brand-brown">{item.name}</h4>
                      <div className="flex-grow border-b-2 border-dotted border-brand-sand mx-4 relative top-[-6px]"></div>
                      <span className="font-bold text-brand-gold whitespace-nowrap">{item.price} FCFA</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
