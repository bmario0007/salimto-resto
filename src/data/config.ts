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
        { name: "Fataya", description: "Beignets farcis avec sauce", price: 1500 },
        { name: "Nems", description: "Rouleaux croustillants, servis avec sauce", price: 2000 },
        { name: "Pastels au poisson", description: "Chaussons farcis au poisson avec sauce oignon", price: 2500 },
      ]
    },
    {
      id: "plats-senegalais",
      name: "Plats",
      items: [
        { name: "Riz au poisson (Thiéboudjeune)", description: "Le plat national. Riz parfumé, poisson et légumes.", price: 4000 },
        { name: "Yassa Poulet", description: "Poulet mariné au citron et oignons, servi avec riz blanc.", price: 4000 },
        { name: "C'est bon", description: "Plat savoureux de la maison", price: 3000 },
      ]
    },
    {
      id: "volailles",
      name: "Volailles & Grillades",
      items: [
        { name: "Poulet entier", description: "Poulet entier braisé ou rôti", price: 9000 },
        { name: "1/2 poulet", description: "Demi-poulet braisé ou rôti", price: 4500 },
        { name: "Poisson grillé du jour", description: "Pêche du jour marinée et grillée au feu de bois", price: 6000 },
      ]
    },
    {
      id: "boissons",
      name: "Boissons & Jus",
      items: [
        { name: "Jus d'Orange frais", description: "Jus pressé maison", price: 1500 },
        { name: "Jus de Tamarin", description: "Jus local rafraîchissant", price: 1500 },
        { name: "Jus de Citron", description: "Citronnade maison", price: 1500 },
        { name: "Boisson Soda", description: "Canettes (Coca-Cola, Sprite, Fanta, etc.)", price: 1000 },
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
