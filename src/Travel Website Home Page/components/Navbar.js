const navItems = (itemList) => {
  let navElements = [];

  itemList.forEach((item, index) => {
    navElements.push(<div key={index} className="fw-bold"  id="travel-website-navItem"><a href="/" className="text-dark" style={{textDecoration: "none"}} active>{item}</a></div>);
  });

  return navElements;
};

const Navbar = () => {
  return (
    <>
      <nav className="navbar d-flex align-items-center col-12">
        <div className="fw-bold fs-5 col-2">
          Trave<span className="travel-website-primary-color">g</span>
        </div>
        <div className="d-flex flex-row col-6 offset-4 justify-content-between">
          <div className="d-flex flex-row justify-content-between align-items-center col-8">
            {navItems(["Home", "About", "Tour Package", "Contact Us"])}
          </div>
          <div>
              <button className="travel-website-nav-button travel-website-primary-background text-white fw-bold">Book Ticket</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
