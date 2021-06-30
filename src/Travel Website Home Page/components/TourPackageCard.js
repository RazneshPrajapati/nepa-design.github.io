const getStar = (value) => {
  let starGroup = [];
  for (let index = 0; index < 5; index += 1) {
    if (value <= index) {
      starGroup.push(<i className="bi bi-star star" key={index}></i>);
    } else {
      starGroup.push(<i className="bi bi-star-fill star" key={index}></i>);
    }
  }
  return starGroup;
};

const TourPackageCard = ({ cards }) => {
  let cardGroup = [];
  for (let index = 0; index < cards.length; index += 1) {
    const card = cards[index];
    cardGroup.push(
      <div className="d-flex flex-column travel-card-group" key={index}>
        <div>
          <img
            className="travel-place travel-card-radius "
            src={card.image}
            alt="Travelling Place"
          />
        </div>
        <div className="travel-details d-flex flex-column gap-1 travel-card-radius box-shadow ">
          <div className="fs-5 lh-sm">{card.title}</div>
          <div className="fw-light fs-6">
            {card.city}, {card.country}
          </div>
          <div className="d-flex align-items-end gap-4">
            <div className="d-flex gap-2 fs-5">{getStar(card.ratings)}</div>
            <button className="button-outline-primary primary-color fs-5 fw-bold">
              {card.price}
            </button>
          </div>
        </div>
      </div>
    );
  }
  return cardGroup;
};

export default TourPackageCard;
