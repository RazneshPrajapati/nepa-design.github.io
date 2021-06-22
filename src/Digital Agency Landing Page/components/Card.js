const Card = ({ cardDetails }) => {
  let cardGroup = [];

  cardDetails.forEach((card, index) => {
    cardGroup.push(
      <div
        key={index}
        className="d-flex flex-column col-3 gap-3 px-3 py-3 round-corner card-holder box-shadow"
      >
        <div>
          <img
            className="card-image box-shadow round-corner"
            src={card.imageSource}
            alt="Beautiful pic"
          />
        </div>
        <div className="d-flex flex-column justify-content-between gap-2 full-height">
          <div>
            <div className="fw-bold fs-5">{card.title}</div>
            <div className="fw-light fs-6">{card.subtitle}</div>
          </div>
          <div className="fw-light fs-6">
            <a href="/#" className="text-decoration-none link-dark">
              Learn more <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
  });
  return cardGroup;
};

export default Card;
