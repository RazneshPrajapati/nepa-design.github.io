const NavItems = (navitems) => {
  let navbarElement = [];
  navitems.forEach((item, index) => {
    navbarElement.push(<div key={index} className="nav-item">{item}</div>);
  });

  return navbarElement;
};

const Navbar = () => {
  return (
    <>
      <nav className="d-sm-flex navbar navbar-expand-lg justify-content-between">
        <div className="col-2 fw-bolder fs-5">Goboost</div>
        <div className="col-7 d-sm-flex justify-content-around">
            {NavItems(["Home", "Feature", "Pricing", "Contact Us"])}
        </div>
        <div className="col-3 d-flex justify-content-end">
            <button className="nav-button no-fill px-4 py-2">Sign In</button>
            <button className="nav-button fill px-4 py-2">Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
