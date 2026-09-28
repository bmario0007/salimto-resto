export const restaurantConfig = {
  name: "SALIMTO RESTO",
  phone: "76 767 84 84",
  whatsappNumber: "221767678484", // Format international sans le +
  address: "Saly, Sénégal — Plage de Safari",
  googleMapsLink: "https://share.google/Yf8Fwvg9nemX0kc1G",
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
      id: "specialites",
      name: "Nos Spécialités",
      items: [
        { name: "Gambas", description: "", price: 8000 },
        { name: "Dorade gm", description: "Dorade grand modèle", price: 7000 },
        { name: "Dorade pm", description: "Dorade petit modèle", price: 4500 },
        { name: "Dorade vip", description: "Dorade VIP", price: 10000 },
        { name: "Crevettes sautées", description: "", price: 4500 },
        { name: "Filet de lotte", description: "", price: 4500 },
        { name: "Brochette de lotte", description: "", price: 4500 },
        { name: "Thiof", description: "", price: 7000 },
        { name: "Lotte grillé", description: "", price: 4500 },
      ]
    },
    {
      id: "poulet-riz-yassa",
      name: "Poulet, Riz & Yassa",
      items: [
        { name: "Poulet grillé (entier)", description: "", price: 9000 },
        { name: "Demi poulet grillé", description: "", price: 4500 },
        { name: "Riz au poisson", description: "Le fameux Thiéboudjeune", price: 3000 },
        { name: "Yassa poulet", description: "", price: 4000 },
        { name: "Yassa poisson", description: "", price: 3000 },
      ]
    },
    {
      id: "accompagnements",
      name: "Accompagnements",
      items: [
        { name: "Frites", description: "", price: 1500 },
        { name: "Légumes sautés", description: "", price: 1500 },
        { name: "Alloco", description: "Bananes plantains frites", price: 1500 },
        { name: "Riz blanc", description: "", price: 1500 },
      ]
    },
    {
      id: "boissons-chaudes",
      name: "Boissons Chaudes",
      items: [
        { name: "Café Touba", description: "", price: 100 },
        { name: "Café au lait", description: "", price: 500 },
        { name: "Thé", description: "", price: "GRATUIT" },
        { name: "Lait chaud", description: "", price: 500 },
        { name: "Chocolat chaud", description: "", price: 500 },
        { name: "Gingembre chaud", description: "", price: 500 },
      ]
    },
    {
      id: "jus-locaux",
      name: "Jus Locaux (Naturels)",
      items: [
        { name: "Bissap blanc", description: "", price: 1000 },
        { name: "Bissap rouge", description: "", price: 1000 },
        { name: "Bouye", description: "", price: 1000 },
        { name: "Ditakh", description: "", price: 1000 },
        { name: "Ditakas", description: "", price: 1000 },
        { name: "Orange", description: "", price: 1000 },
        { name: "Moringa", description: "", price: 1000 },
        { name: "Tamarin", description: "", price: 1000 },
        { name: "Gingembre", description: "", price: 1000 },
        { name: "Baabab", description: "", price: 1000 },
      ]
    },
    {
      id: "jus-classiques",
      name: "Jus Classiques",
      items: [
        { name: "Jus d'orange", description: "", price: 1500 },
        { name: "Jus d'ananas", description: "", price: 1500 },
        { name: "Jus de pomme", description: "", price: 1500 },
        { name: "Jus de mangue", description: "", price: 1500 },
        { name: "Jus de citron", description: "", price: 1500 },
        { name: "Jus cocktail", description: "", price: 1500 },
      ]
    },
    {
      id: "canettes-eaux",
      name: "Canettes & Eaux",
      items: [
        { name: "Coca Cola", description: "", price: 1000 },
        { name: "Coca Cola Zéro", description: "", price: 1000 },
        { name: "Fanta", description: "", price: 1000 },
        { name: "Sprite", description: "", price: 1000 },
        { name: "Bissap", description: "", price: 1000 },
        { name: "Ginger", description: "", price: 1000 },
        { name: "Schweppes", description: "", price: 1000 },
        { name: "Eau minérale (50cl)", description: "", price: 500 },
        { name: "Eau minérale (1,5L)", description: "", price: 1000 },
        { name: "Sirop à l'eau", description: "", price: 500 },
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
