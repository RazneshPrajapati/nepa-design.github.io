import Card from "./Card.js";

import digital1 from "../assets/images/digital1.png";
import digital2 from "../assets/images/digital2.png";
import digital3 from "../assets/images/digital3.png";
import digital4 from "../assets/images/digital4.png";

function Home() {
  const cardDataArray = [
    {
      imageSource: digital4,
      title: "Analytics",
      subtitle: "Google analytics give you free tools you need to analyze",
    },
    {
      imageSource: digital2,
      title: " Analytics 360",
      subtitle: "Get a complete view of your audience with advanced tools",
    },
    {
      imageSource: digital3,
      title: "Market Analytics",
      subtitle:
        "Introducing google marketing platform a unified marketing and analytics",
    },
  ];

  const imgWidth = 450;
  return (
    <>
      <section>
        <div className="d-flex col-12 flex-row" id="main-container">
          {/* left-content */}
          <div className="col-5 d-flex flex-column gap-3 mt-5 pt-5">
            <div>
              <p className="h1 text-capitalize fw-bolder">
                Take a boost for your product
              </p>
              <p>
                Take my traffic quize &amp; get a customized advice that will
                work you through how you
              </p>
            </div>

            <div className="d-flex align-items-center gap-3">
              <button className="col-4 fill px-3 py-2">Start free trial</button>
              <div className="underline">More about us</div>
            </div>

            <div className="d-flex col-7 text-center justify-content-between align-items-center lh-1 mt-5">
              <div>
                <div className="fw-bolder fs-3">1200+</div>
                <span className="smaller-font fw-lighter">Happy Customer</span>
              </div>
              <div className="separate-line"></div>
              <div>
                <div className="fw-bolder fs-3">600+</div>
                <span className="smaller-font fw-lighter">Work Completed</span>
              </div>
            </div>
          </div>

          {/* right-content */}
          <div className="d-flex col-6 gap-3 offset-md-1">
            <div className="col-3 quarter-height round-corner mt-5 box-shadow overflow-hidden">
              <img
                className="object-position-left"
                src={digital1}
                alt=""
                width={imgWidth}
              />
            </div>
            <div className="col-3 quarter-height round-corner mt-3 box-shadow overflow-hidden">
              <img
                className="object-position-center"
                src={digital1}
                alt=""
                width={imgWidth}
              />
            </div>
            <div className="col-3 quarter-height round-corner mt-5 box-shadow overflow-hidden">
              <img
                className="object-position-right"
                src={digital1}
                alt=""
                width={imgWidth}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* card display */}
        <div className="d-flex justify-content-between my-5">
          <Card cardDetails={cardDataArray} />
        </div>
      </section>
    </>
  );
}

export default Home;
