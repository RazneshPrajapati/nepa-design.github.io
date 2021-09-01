import travelBoyGirl from "../assets/images/travelBoyGirl.png";

const Home = () => {
  return (
    <section>
      <div className="home-window-height d-flex col-12">
        <div className="d-flex col-5 flex-column justify-content-center gap-2">
          <p className="h1 lh-sm">Travel to the any corner of the world.</p>
          <p className="fw-light text-capitalize">
            Treat yourself with a journey to your inner self. Visit a mystique
            tibet and start your spritual adventure.
          </p>
          <div className="d-flex col-10 gap-5 text-capitalize travel-website-primary-color fs-6 mb-5">
            <div>
              <i className="bi bi-check fs-4 lh-1"></i>Make your dreams
            </div>
            <div>
              <i className="bi bi-check fs-4 lh-1"></i>Travel the world
            </div>
          </div>
          <div className="d-flex col-10 search-group justify-content-center gap-3 box-shadow">
            <input
              className="search-input travel-website-primary-color fs-5"
              type="text"
              placeholder="Type something..."
            />
            <button className="travel-website-nav-button travel-website-primary-background text-white fw-bold">
              Search
            </button>
          </div>
        </div>
        <div className="cols-6 offset-1">
          <img src={travelBoyGirl} alt="Girl in a jacket" width="90%"/>
        </div>
      </div>
    </section>
  );
};

export default Home;
