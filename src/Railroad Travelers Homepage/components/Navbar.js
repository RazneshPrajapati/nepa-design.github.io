import React from "react";

const Navbar = () => {
  return (
    <div className="d-flex flex-row align-items-center px-4 py-1">
      <div className="d-flex flex-row col-6 gap-3">
        <div className="">
          <a className="railroad-secondary-color railroad-nav-items" href="/">
            Journey Finder
          </a>
        </div>
        <div className="">
          <a className="railroad-secondary-color railroad-nav-items" href="/">
            World's Top 25 Trains
          </a>
        </div>
        <div className="">
          <a className="railroad-secondary-color railroad-nav-items" href="/">
            Destinations
          </a>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-end col-6 gap-2">
        <div className="">
          <a href="/">
            <i className="bi bi-search railroad-primary-color search-icon"></i>
          </a>
        </div>
        <button
          className="btn text-uppercase nav-button-outline railroad-secondary-color"
          type="button"
        >
          <i className="bi bi-book-half railroad-primary-color button-icon"></i> Free Brochure
        </button>
        <button className="btn text-uppercase nav-railroad-button" type="button">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
