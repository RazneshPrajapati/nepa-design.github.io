import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./assets/css/railroadTravelersHomepage.css";

const RailroadTravelersHomepage = () => {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Home />
    </div>
  );
};

export default RailroadTravelersHomepage;
