import React from 'react';


const offers = [
  {
    id: 1,
    title: "Flat ₹100 OFF",
    description: "On your first order above ₹299",
    code: "FIRST100"
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    description: "On all pizza orders this weekend",
    code: "BOGO"
  },
  {
    id: 3,
    title: "20% OFF",
    description: "Use code during checkout for desserts",
    code: "SWEET20"
  }
];

const OffersSection = () => {
  return (
    <section className="offers-section">
      <h2 className="offers-title">Exclusive Offers</h2>
      <div className="offers-list">
        {offers.map((offer) => (
          <div className="offer-card2" key={offer.id}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <span className="offer-code">Use Code: <strong>{offer.code}</strong></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
