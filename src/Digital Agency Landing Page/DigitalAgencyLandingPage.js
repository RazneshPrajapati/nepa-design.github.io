import Home from "./components/Home";
import Navbar from "./components/Navbar";

import './assets/css/digitalAgencyLandingPage.css';

const DigitalAgencyLandingPage = () => {
  return (
  <div className="container">
      <Navbar/>
      <Home/>
  </div>
  );
};

export default DigitalAgencyLandingPage;
