import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import TourPackage from './components/TourPackage';
import ContactUs from './components/ContactUs';
import Footer from "./components/Footer";

import './assets/css/travelWebsiteHomePage.css';

const TravelWebsiteHomePage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <About />
        <TourPackage />
        <ContactUs/>
        <Footer />
      </div>
    </>
  );
};

export default TravelWebsiteHomePage;
