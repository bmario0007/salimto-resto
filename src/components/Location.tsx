import React from 'react';
import { restaurantConfig } from '../data/config';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-2">Nous trouver</h2>
              <h3 className="font-serif text-4xl text-brand-brown mb-6">Emplacement & Horaires</h3>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-brand-sand/30 p-3 rounded-full text-brand-brown">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-brown text-lg mb-1">Adresse</h4>
                <p className="text-gray-600">{restaurantConfig.address}</p>
                <a href={restaurantConfig.googleMapsLink} target="_blank" rel="noreferrer" className="text-brand-gold font-medium mt-2 inline-block hover:underline">
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-sand/30 p-3 rounded-full text-brand-brown">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-brown text-lg mb-1">Horaires</h4>
                <p className="text-gray-600">Mar - Ven : {restaurantConfig.openingHours.weekdays}</p>
                <p className="text-gray-600">Sam - Dim : {restaurantConfig.openingHours.weekends}</p>
                <p className="text-gray-600 mt-1 font-medium">Fermé le {restaurantConfig.openingHours.closed}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-sand/30 p-3 rounded-full text-brand-brown">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-brown text-lg mb-1">Contact</h4>
                <p className="text-gray-600">{restaurantConfig.phone}</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            {/* Placeholder for Google Maps. In a real app, embed the iframe here */}
            <div className="w-full h-full bg-brand-sand/20 flex flex-col items-center justify-center text-brand-brown border-2 border-dashed border-brand-gold/50">
              <MapPin size={48} className="mb-4 text-brand-gold opacity-80" />
              <p className="font-medium text-lg">Carte Google Maps</p>
              <p className="text-sm opacity-70">(Emplacement exact à configurer)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
