import React from 'react';
import { restaurantConfig } from '../data/config';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-brown text-brand-light pt-16 pb-8 border-t-[6px] border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.jpg" alt="Salimto Resto Logo" className="h-12 w-12 rounded-full object-cover border-2 border-brand-gold bg-white" />
              <span className="ml-3 font-serif font-bold text-xl tracking-wider">SALIMTO</span>
            </div>
            <p className="text-brand-sand text-sm leading-relaxed mb-6">
              Une expérience culinaire authentique où la gastronomie sénégalaise rencontre la beauté de l'océan Atlantique.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-brand-gold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Menu', 'Galerie', 'Réservation'].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item === 'Accueil' ? 'home' : item === 'À propos' ? 'about' : item === 'Réservation' ? 'reservation' : item.toLowerCase()} 
                    smooth={true} 
                    className="text-brand-light hover:text-brand-gold transition-colors cursor-pointer text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-brand-gold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>{restaurantConfig.address}</li>
              <li>Tél : {restaurantConfig.phone}</li>
              <li>
                <a href={`https://wa.me/${restaurantConfig.whatsappNumber}`} className="hover:text-brand-gold transition-colors">
                  WhatsApp : {restaurantConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-brand-gold text-lg mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href={restaurantConfig.socials.facebook} className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                Fb
              </a>
              <a href={restaurantConfig.socials.instagram} className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                Ig
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-brand-light/20 pt-8 text-center text-sm text-brand-sand">
          <p>&copy; {new Date().getFullYear()} Salimto Resto — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
