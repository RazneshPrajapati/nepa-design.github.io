import TourPackageCard from "./TourPackageCard";

import place1 from "../assets/images/place1.jpg";
import place2 from "../assets/images/place2.jpg";
import place3 from "../assets/images/place3.jpg";

const TourPackage = () => {
  const cards = [
    {
      image: place1,
      title: "Enojy the thread and world famous beauty",
      city: "Agra",
      country: "India",
      ratings: 3,
      price: "$777",
    },

    {
      image: place2,
      title: "Enojy the thread and world famous Arabian",
      city: "Mishor",
      country: "Saudi Arabia",
      ratings: 5,
      price: "$999",
    },

    {
      image: place3,
      title: "Come to Delhi and enjoy your day",
      city: "Delhi",
      country: "India",
      ratings: 3,
      price: "$777",
    },
  ];
  return (
    <section>
      <div className="window-height d-flex flex-column gap-5 pt-4">
        <div className="d-flex col-12">
          <div className="h1 lh-sm col-5 text-capitalize">
            We provide world best destinations for you
          </div>
          <div className="d-flex col-2 offset-5 justify-content-end fs-1 gap-3">
            <i className="bi bi-arrow-left-circle circle-arrow"></i>
            <i className="bi bi-arrow-right-circle-fill circle-arrow"></i>
          </div>
        </div>
        <div className="d-flex justify-content-between col-12 pt-4">
          <TourPackageCard cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default TourPackage;
