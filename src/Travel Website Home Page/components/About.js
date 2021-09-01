import company1 from "../assets/images/company1.png";
import company2 from "../assets/images/company2.png";
import company3 from "../assets/images/company3.png";
import company4 from "../assets/images/company4.png";
import company5 from "../assets/images/company5.png";
import company6 from "../assets/images/company6.png";
import company7 from "../assets/images/company7.png";
import company8 from "../assets/images/company8.png";

import travelTeenBoyGirl from "../assets/images/travelTeenBoyGirl.png";

import face1 from "../assets/images/face1.png";
import face2 from "../assets/images/face2.png";
import face3 from "../assets/images/face3.png";
import face4 from "../assets/images/face4.png";

const getFace = () => {
  const faceSources = [face1, face2, face3, face4];
  const backgroundColor = [
    "#00719d",
    "#e6e2b9",
    "#ec9995",
    "#a6ddfd",
    "#54645f",
    "#e3e3e3",
  ];
  let faceElement = [];

  const imageGap = 50;

  faceSources.forEach((faceSource, index) => {
    faceElement.push(
      <img
        src={faceSource}
        alt="face"
        className="circle-image"
        width="50px"
        key={index}
        style={{
          transform: `translate(${index * imageGap}px, 0px)`,
          backgroundColor: `${backgroundColor[index % backgroundColor.length]}`,
        }}
      />
    );
  });

  faceElement.push(
    <div
      className="circle-image travel-website-primary-color fw-bold fs-4"
      key={faceElement.length}
      style={{
        transform: `translate(${faceElement.length * imageGap}px, 0px)`,
        backgroundColor: `${backgroundColor[backgroundColor.length - 1]}`,
      }}
    >
      4.7
    </div>
  );

  return faceElement;
};

const About = () => {
  return (
    <section className="pt-4">
      <div className="d-flex flex-column window-height col-12">
        <div className="d-flex flex-wrap col-12 round-corner travel-website-secondary-background justify-content-center align-items-center pb-2">
          <img src={company1} className="px-3" alt="Company 1" width="120px" />
          <img src={company2} className="px-3" alt="Company 2" width="120px" />
          <img src={company3} className="px-3" alt="Company 3" width="120px" />
          <img src={company4} className="px-3" alt="Company 4" width="120px" />
          <img src={company5} className="px-3" alt="Company 5" width="120px" />
          <img src={company6} className="px-3" alt="Company 6" width="200px" />
          <img src={company7} className="px-3" alt="Company 7" width="120px" />
          <img src={company8} className="px-3" alt="Company 8" width="140px" />
        </div>

        <div className="d-flex col-12">
          <div className="cols-6 offset-1">
            <img
              src={travelTeenBoyGirl}
              className="mt-5"
              alt="Girl in a jacket"
              width="80%"
            />
          </div>
          <div className="d-flex col-5 flex-column justify-content-center gap-4">
            <p className="h1 lh-sm text-capitalize">
              Take the best weekend and enjoy your place
            </p>
            <p className="text-capitalize">
              Travel is the movement of people between distant geographicaly
              locations. Travel can be done by foot, bicycle, automobile, a
              train, boat, bus, airplane, ship or other means, with into the
              find or without luggage can round trip.
            </p>
            <div className="d-flex col-10">{getFace()}</div>
            <div className="d-flex col-10">
              <button className="travel-website-nav-button travel-website-primary-background text-white fw-bold px-5">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
