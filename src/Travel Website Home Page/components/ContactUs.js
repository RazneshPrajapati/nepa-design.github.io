import earth from "../assets/images/earth.png";

const ContactUs = () => {
  return (
    <>
      <div className="window-height d-flex pt-4">
        <div className="d-flex flex-column full-height col-6 gap-5 align-items-around">
          <div className="h1 lh-1 text-capitalize">Why choose us?</div>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex gap-5">
              <div className="d-flex justify-content-center align-items-center fs-1 contact-icon lh-1 primary-color">
                <i className="bi bi-geo-alt icon-margin"></i>
              </div>
              <div className="d-flex flex-column gap-2 col-7">
                <div className="h4">Reliable Tours</div>
                <div className="text-capitalize fw-light">
                  Quickly compare thousands of tours reading genuine reviews
                  from real travellers.
                </div>
              </div>
            </div>
            <div className="d-flex gap-5">
              <div className="d-flex justify-content-center align-items-center fs-1 contact-icon lh-1 text-white primary-background">
                <i className="bi bi-bookmark-dash-fill icon-margin"></i>
              </div>
              <div className="d-flex flex-column gap-2 col-7">
                <div className="h4">Air Ticketing</div>
                <div className="text-capitalize fw-light">
                  Quickly compare thousands of tours reading genuine reviews
                  from real travellers.
                </div>
              </div>
            </div>
            <div className="d-flex gap-5">
              <div className="d-flex justify-content-center align-items-center fs-1 contact-icon lh-1 primary-color">
                <i className="bi bi-star icon-margin"></i>
              </div>
              <div className="d-flex flex-column gap-2 col-7">
                <div className="h4">Five Star Hotel</div>
                <div className="text-capitalize fw-light">
                  Quickly compare thousands of tours reading genuine reviews
                  from real travellers.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex col-6 justify-content-center">
          <img className="overflow-hidden" src={earth} alt="Travel Earth" height="90%"/>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
