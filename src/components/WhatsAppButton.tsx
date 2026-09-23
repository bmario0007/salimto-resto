import React from 'react';
import { MessageCircle } from 'lucide-react';
import { restaurantConfig } from '../data/config';

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${restaurantConfig.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 group flex items-center justify-center"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap group-hover:ml-3 group-hover:mr-2 font-medium">
        Réserver via WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
