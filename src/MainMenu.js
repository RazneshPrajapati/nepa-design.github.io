import React from "react";

const webpageDetails = [
  {
    name: "Digital Agency Landing Page",
    link: "/digitalAgencyLandingPage",
  },
  {
    name: "Travel Website Home Page",
    link: "/travelWebsiteHomePage",
  },
  {
    name: "FrequencyUI",
    link: "/frequencyUI",
  },
  {
    name: "Railroad Travelers Home Page",
    link: "/railroadTravelersHomepage",
  },
];

const MainMenu = () => {
  const generateList = (webpageList) => {
    let webpageElement = [];
    webpageList.forEach((webpage) => {
      webpageElement.push(
        <a href={webpage.link} class="list-group-item list-group-item-action">
          {webpage.name}
        </a>
      );
    });

    return webpageElement;
  };

  return (
    <div className="container d-flex flex-column gap-5">
      <div className="h1 text-center">Welcome</div>
      <div class="list-group">{generateList(webpageDetails)}</div>
    </div>
  );
};

export default MainMenu;
