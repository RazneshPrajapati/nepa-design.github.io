import React from "react";

const Navbar = () => {
  return (
    <nav className="d-flex flex-row col-12 justify-content-around text-white p-3">
      <div className="text-uppercase col-2 fs-5 fw-bold">Frequency</div>
      <div className="d-flex flex-row col-4 offset-5">
        <div className="d-flex justify-content-between col-7">
          <div className="fs-5"><a href="/">Home</a></div>
          <div className="fs-5"><a href="/">Product</a></div>
          <div className="fs-5"><a href="/">About</a></div>
        </div>
        <div className="d-flex col-3 offset-1 justify-content-around">
          <i className="bi bi-person-fill fs-5"></i>
          <i className="bi bi-bag fs-5"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
