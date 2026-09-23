export const restaurantConfig = {
  name: "SALIMTO RESTO",
  phone: "76 767 84 84",
  whatsappNumber: "221767678484", // Format international sans le +
  address: "Saly, Sénégal — Plage de Safari",
  googleMapsLink: "https://maps.google.com/?q=Saly+Senegal", // À mettre à jour
  socials: {
    facebook: "#", // À mettre à jour
    instagram: "#", // À mettre à jour
  },
  openingHours: {
    weekdays: "11:00 - 23:00",
    weekends: "11:00 - 00:00",
    closed: "Lundi"
  }
};

export const menuData = {
  categories: [
    {
      id: "entrees",
      name: "Entrées",
      items: [
        { name: "Pastels au poisson", description: "Chaussons farcis au poisson avec sauce oignon", price: 2500 },
        { name: "Accras de niébé", description: "Beignets de haricots locaux avec sauce piquante", price: 2000 },
        { name: "Salade fraîcheur", description: "Tomates, concombres, avocat et mangue", price: 3000 },
      ]
    },
    {
      id: "plats-senegalais",
      name: "Plats Sénégalais",
      items: [
        { name: "Thiéboudienne", description: "Le plat national. Riz au poisson, légumes frais (carottes, choux, manioc, aubergines), sauce tomate et tamarin.", price: 5000, image: "https://images.unsplash.com/photo-1604329760661-e71c0c144ce1?auto=format&fit=crop&q=80&w=1000" },
        { name: "Yassa Poulet", description: "Poulet mariné au citron et oignons, grillé puis mijoté, servi avec du riz blanc.", price: 4500, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1000" },
        { name: "Yassa Poisson", description: "Poisson frais mariné au citron et oignons, servi avec du riz blanc.", price: 5000 },
        { name: "Mafé Viande", description: "Viande de bœuf mijotée dans une onctueuse sauce à la pâte d'arachide, avec pommes de terre et carottes.", price: 4500 },
      ]
    },
    {
      id: "grillades",
      name: "Grillades & Poissons",
      items: [
        { name: "Poisson grillé du jour", description: "Pêche du jour marinée et grillée au feu de bois", price: 6000 },
        { name: "Brochettes de lotte", description: "Lotte fraîche marinée aux épices douces", price: 7000 },
        { name: "Poulet rôti braisé", description: "Demi-poulet braisé à la sénégalaise", price: 5000 },
      ]
    },
    {
      id: "boissons",
      name: "Jus Naturels",
      items: [
        { name: "Bissap", description: "Jus de fleurs d'hibiscus", price: 1000 },
        { name: "Bouye", description: "Jus de pain de singe (fruit du baobab)", price: 1500 },
        { name: "Ditakh", description: "Jus de ditakh frais", price: 1500 },
        { name: "Gingembre", description: "Jus de gingembre ananas", price: 1500 },
      ]
    }
  ]
};

// Placeholder images for the gallery
export const galleryImages = [
  "/salimto-resto/gallery/img-1.jpg",
  "/salimto-resto/gallery/img-2.jpg",
  "/salimto-resto/gallery/img-3.jpg",
  "/salimto-resto/gallery/img-4.jpg",
  "/salimto-resto/gallery/img-5.jpg",
  "/salimto-resto/gallery/img-6.jpg",
  "/salimto-resto/gallery/img-7.jpg",
  "/salimto-resto/gallery/img-8.jpg",
  "/salimto-resto/gallery/img-9.jpg"
];
