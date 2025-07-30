// import React from 'react';

// const OfferCard = () => {
//   return (
//     <div className="offer-card">
//       <div className="offer-text">
//         <h2>Flat ₹100 Off</h2>
//         <p>on your First Order!</p>
//         <button>Order Now</button>
//         <p>wi</p>
//       </div>
//     </div>
//   );
// };

// export default OfferCard;


import React from 'react';


const OfferCard = () => {
  return (
    <div className="offer-card">
      <div className="offer-text">
        <h2>Flat ₹100 Off</h2>
        <p>on your First Order!</p>
        <p className="details">
          Sign up today and enjoy a delicious meal delivered to your doorstep at an unbeatable price. No code needed. 
        </p>
        <p className="validity">*Valid on orders above ₹249 | First-time users only</p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default OfferCard;
