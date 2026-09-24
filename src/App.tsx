import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Reservation from './components/Reservation';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <WhyUs />
      <Menu />
      <Experience />
      <Gallery />
      <Reservation />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
