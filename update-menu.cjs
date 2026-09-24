const fs = require('fs');
const path = require('path');

// Fix Menu.tsx
const menuPath = path.join(__dirname, 'src/components/Menu.tsx');
let menuContent = fs.readFileSync(menuPath, 'utf8');
menuContent = menuContent.replace(
  /<span className="font-bold text-brand-gold whitespace-nowrap">\{item\.price\} FCFA<\/span>/g,
  '{item.price && <span className="font-bold text-brand-gold whitespace-nowrap">{item.price} FCFA</span>}'
);
menuContent = menuContent.replace(/DǸcouvrez/g, 'Découvrez');
fs.writeFileSync(menuPath, menuContent, 'utf8');

// Fix Specialties.tsx
const specialtiesPath = path.join(__dirname, 'src/components/Specialties.tsx');
let specialtiesContent = fs.readFileSync(specialtiesPath, 'utf8');
specialtiesContent = specialtiesContent.replace(
  /<div className="absolute top-4 right-4 bg-brand-light text-brand-brown font-bold px-3 py-1 rounded-full shadow-md">\s*\{item\.price\} FCFA\s*<\/div>/g,
  '{item.price && <div className="absolute top-4 right-4 bg-brand-light text-brand-brown font-bold px-3 py-1 rounded-full shadow-md">{item.price} FCFA</div>}'
);
// Fix corrupted characters
specialtiesContent = specialtiesContent.replace(/ThiǸboudjeune/g, 'Thiéboudjeune');
specialtiesContent = specialtiesContent.replace(/parfumǸ/g, 'parfumé');
specialtiesContent = specialtiesContent.replace(/lǸgumes/g, 'légumes');
specialtiesContent = specialtiesContent.replace(/mijotǸs/g, 'mijotés');
specialtiesContent = specialtiesContent.replace(/marinǸ/g, 'mariné');
specialtiesContent = specialtiesContent.replace(/DǸlicieux/g, 'Délicieux');
specialtiesContent = specialtiesContent.replace(/braisǸ/g, 'braisé');
specialtiesContent = specialtiesContent.replace(/rti/g, 'rôti');
specialtiesContent = specialtiesContent.replace(/\? dǸguster/g, 'À déguster');
specialtiesContent = specialtiesContent.replace(/SpǸcialitǸs/g, 'Spécialités');
fs.writeFileSync(specialtiesPath, specialtiesContent, 'utf8');

// Write config.ts
const configPath = path.join(__dirname, 'src/data/config.ts');
const configData = `export const restaurantConfig = {
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
        { name: "Fataya", description: "Beignets farcis avec sauce", price: null },
        { name: "Nems", description: "Rouleaux croustillants, servis avec sauce", price: null },
        { name: "Pastels au poisson", description: "Chaussons farcis au poisson avec sauce oignon", price: null },
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
        { name: "Poisson grillé du jour", description: "Pêche du jour marinée et grillée au feu de bois", price: null },
      ]
    },
    {
      id: "boissons",
      name: "Boissons & Jus",
      items: [
        { name: "Jus d'Orange frais", description: "Jus pressé maison", price: 1500 },
        { name: "Jus de Tamarin", description: "Jus local rafraîchissant", price: 1500 },
        { name: "Jus de Citron", description: "Citronnade maison", price: 1500 },
        { name: "Boisson Soda", description: "Canettes (Coca-Cola, Sprite, Fanta, etc.)", price: null },
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
`;
fs.writeFileSync(configPath, configData, 'utf8');

// Check Navbar.tsx for corruption too
const navbarPath = path.join(__dirname, 'src/components/Navbar.tsx');
if (fs.existsSync(navbarPath)) {
  let navbarContent = fs.readFileSync(navbarPath, 'utf8');
  navbarContent = navbarContent.replace(/\? propos/g, 'À propos');
  navbarContent = navbarContent.replace(/SpǸcialitǸs/g, 'Spécialités');
  navbarContent = navbarContent.replace(/RǸserver/g, 'Réserver');
  fs.writeFileSync(navbarPath, navbarContent, 'utf8');
}

console.log("Done");
