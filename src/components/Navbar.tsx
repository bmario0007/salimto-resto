import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', to: 'home' },
    { name: 'À propos', to: 'about' },
    { name: 'Spécialités', to: 'specialties' },
    { name: 'Menu', to: 'menu' },
    { name: 'Galerie', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-light shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              <img src="/salimto-resto/logo.jpg" alt="Salimto Resto Logo" className="h-12 w-12 rounded-full object-cover border-2 border-brand-gold" />
            </Link>
            <span className={`ml-3 font-serif font-bold text-xl tracking-wider ${scrolled ? 'text-brand-brown' : 'text-brand-light drop-shadow-md'}`}>
              SALIMTO
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer font-medium hover:text-brand-gold transition-colors ${scrolled ? 'text-brand-brown' : 'text-brand-light drop-shadow-md'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="reservation"
              smooth={true}
              duration={500}
              className="cursor-pointer bg-brand-gold text-white px-5 py-2 rounded-full font-medium hover:bg-brand-brown transition-colors shadow-lg"
            >
              Réserver
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-brand-brown' : 'text-brand-light'} hover:text-brand-gold focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-light absolute w-full shadow-lg border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-brand-brown hover:bg-brand-sand/30 block px-3 py-3 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="reservation"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer bg-brand-gold text-white block px-3 py-3 rounded-md text-base font-medium text-center mt-4 mx-2"
            >
              Réserver une table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
