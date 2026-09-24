import { useState } from 'react';
import { restaurantConfig } from '../data/config';
import { Send } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp MVP
    const text = `Nouvelle réservation :
Nom: ${formData.name}
Téléphone: ${formData.phone}
Personnes: ${formData.guests}
Date: ${formData.date}
Heure: ${formData.time}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="reservation" className="py-20 bg-brand-brown text-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-5/12">
            <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-2">Venez nous voir</h2>
            <h3 className="font-serif text-4xl md:text-5xl mb-6">Réservez votre table</h3>
            <p className="text-brand-sand mb-8 leading-relaxed">
              Assurez-vous d'avoir la meilleure place sur la plage en réservant à l'avance. 
              Pour les groupes de plus de 10 personnes ou les événements spéciaux, n'hésitez pas à nous contacter directement.
            </p>
            
            <div className="bg-brand-brown/50 border border-brand-gold/30 p-6 rounded-xl">
              <h4 className="font-serif text-xl mb-4 text-brand-gold">Réservation rapide</h4>
              <p className="mb-6">Vous préférez réserver directement par message ?</p>
              <a 
                href={`https://wa.me/${restaurantConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#128C7E] transition-colors w-full justify-center"
              >
                <Send size={20} />
                Réserver via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="bg-white text-brand-brown p-8 md:p-10 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow" placeholder="Votre numéro" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Personnes</label>
                  <select name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Personne' : 'Personnes'}</option>
                    ))}
                    <option value="plus">Plus de 10</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Heure</label>
                  <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Message (optionnel)</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow resize-none" placeholder="Demande spéciale, allergie..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-gold text-white text-lg font-bold py-4 rounded-lg hover:bg-brand-brown transition-colors shadow-lg">
                CONFIRMER LA RÉSERVATION
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reservation;
