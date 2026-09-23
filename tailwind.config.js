/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FAF9F6', // Blanc cassé
          sand: '#E5D3B3', // Beige sable
          brown: '#3E2723', // Brun profond
          gold: '#D4AF37', // Doré
          blue: '#006994', // Bleu océan
          green: '#2E7D32', // Vert naturel
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
