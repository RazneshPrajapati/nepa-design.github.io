import React from "react";

const Footer = () => {
  return (
    <section className="window-height pt-4 gap-5 d-flex flex-column justify-content-between">
      <div className="subscribe-container d-flex flex-row align-items-center gap-5 px-5 primary-background">
        <div className="col-6">
        <div className="fs-1 text-capitalize text-white">
            Subscribe newsletter &amp; get company news.
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between col-5">
          <div className="d-flex gap-2 bg-white subscribe-group">
            <input
              className="subscribe-input p-2 fs-5"
              type="text"
              placeholder="Enter your email"
            />
            <button className="d-flex align-items-center primary-background text-white fs-5 subscribe-button px-4 pb-3 pt-2 gap-1">
              <i className="bi bi-envelope"></i>
              <div style={{ padddingTop: "5px" }}> Subscribe</div>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between footer-container">
        <div className="d-flex flex-column justify-content-between">
          <div className="fw-bold fs-5 col-2">
            Trave<span className="primary-color">g</span>
          </div>
          <div className="fw-light">
            <div>Business Number: + 1554 4435 343</div>
            <div>3131 Doctors Drive. LA, California</div>
            <div>Enquiries: Youremailhere@mail.com</div>
          </div>
          <div className="d-flex gap-4 fs-4">
            <a href="/">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="/">
              <i class="bi bi-youtube"></i>
            </a>
            <a href="/">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="/">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="fs-2">Tour</div>
          <div className="fw-light">Thailand</div>
          <div className="fw-light">Vietnam</div>
          <div className="fw-light">Korea</div>
          <div className="fw-light">Mexico</div>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="fs-2">Support</div>
          <div className="fw-light">Account</div>
          <div className="fw-light">Legal</div>
          <div className="fw-light">Contact</div>
          <div className="fw-light">Affiliation Program</div>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="fs-2">Useful Pages</div>
          <div className="fw-light">Deals</div>
          <div className="fw-light">FAQs</div>
          <div className="fw-light">Why Choose Us</div>
          <div className="fw-light">Subscribe</div>
        </div>
      </div>
      <div className="footer text-center">
        CreativePeoples-2021 All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
