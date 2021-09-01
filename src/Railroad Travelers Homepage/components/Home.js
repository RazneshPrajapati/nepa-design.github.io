import React from "react";

const Home = () => {
  return (
    <div className="d-flex flex-column">
      <div className="background-image d-flex flex-column justify-content-end align-items-center gap-3 pb-4">
        <div className="h1 text-capitalize col-8 text-white text-center">
          The foremost authority
          <span className="text-lowercase">
            <br />
            on
          </span>{" "}
          Luxury rail travel since 1983
        </div>
        <div className="text-white text-center">
          Continually family-owned &amp; operated, our knowledge <br /> is based
          on our direct experience.
        </div>
      </div>

      {/* search bar */}
      <div
        className="search-bar d-flex flex-row justify-content-center align-items-center col-12 gap-4
      "
      >
        <div className="text-white fw-bold fs-5 text-capitalize">
          Start your journey
        </div>
        <div className="d-flex gap-3">
          <div className="d-flex flex-row gap-2">
            <div className="dropdown">
              <button
                className="btn railroad-secondary-background text-white dropdown-toggle px-5"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Destination
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Item 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Item 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Item 3
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn railroad-secondary-background text-white dropdown-toggle px-5"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Departure Month
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Item 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Item 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Item 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <button className="btn search-button railroad-secondary-color text-uppercase">Search Journeys</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
