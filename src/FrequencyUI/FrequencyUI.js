import React from "react";

import Navbar from "./components/Navbar";

import "./assets/css/FrequencyUI.css";

const FrequencyUI = () => {
  return (
    <section className="window-height backgroundImage">
      <Navbar />
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-container"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active circle-indicator"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className="circle-indicator"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className="circle-indicator"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex flex-column text-white col-10 gap-3">
              <div className="h1">
                One good thing about music, when it hits you, you feel no pain.
              </div>
              <div className="text-light">- Bob Marley</div>
              <button className="carousel-content-button text-capitalize">
                Step forward <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column text-white col-10 gap-3">
              <div className="h1">
                No matter what happens in life, be good to people. Being good to
                people is a wonderful legacy to leave behind.
              </div>
              <div className="text-light">- Taylor Swift</div>
              <button className="carousel-content-button text-capitalize">
                Step forward <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column text-white col-10 gap-3">
              <div className="h1">
                If everything was perfect, you would never learn and you would
                never grow.
              </div>
              <div className="text-light">- Beyonce</div>
              <button className="carousel-content-button text-capitalize">
                Step forward <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-icon-group">
          <button
            className="carousel-control-prev carousel-icon"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next carousel-icon"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        <div className="d-flex flex-column socialmedia-icon-group text-white fs-4 gap-4">
          <i className="bi bi-facebook socialmedia-icon"></i>
          <i className="bi bi-instagram socialmedia-icon"></i>
          <i className="bi bi-twitter socialmedia-icon"></i>
        </div>
      </div>
    </section>
  );
};

export default FrequencyUI;
