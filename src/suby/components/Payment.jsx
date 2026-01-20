// import React, { useState, useEffect } from 'react';

// const Payment = ({ cartTotal = 0, userEmail }) => {
//   const [paymentMethod, setPaymentMethod] = useState('cod');
//   const [upiId, setUpiId] = useState('');
//   const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();

//     if (paymentMethod === 'upi' && !upiId) {
//       alert('Please enter UPI ID');
//       return;
//     }

//     if (paymentMethod === 'card' &&
//       (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)
//     ) {
//       alert('Please fill in all card details');
//       return;
//     }

//     // Simulate successful order
//     setOrderPlaced(true);

//     // TODO: Send order to backend
//     // fetch('/api/order', { method: 'POST', body: JSON.stringify(...) })

//     console.log('Order placed with:', {
//       user: userEmail,
//       paymentMethod,
//       upiId,
//       cardDetails
//     });
//   };

//   if (orderPlaced) {
//     return (
//       <div className="payment-success">
//         <h2>🎉 Order Placed Successfully!</h2>
//         <p>Your order has been confirmed.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="payment-container">
//       <h2>Checkout</h2>
//       <p>Total Amount: ₹{cartTotal.toFixed(2)}</p>

//       <form onSubmit={handlePlaceOrder}>
//         <h3>Select Payment Method:</h3>

//         <div>
//           <label>
//             <input
//               type="radio"
//               name="paymentMethod"
//               value="cod"
//               checked={paymentMethod === 'cod'}
//               onChange={() => setPaymentMethod('cod')}
//             />
//             Cash on Delivery (COD)
//           </label>
//         </div>

//         <div>
//           <label>
//             <input
//               type="radio"
//               name="paymentMethod"
//               value="upi"
//               checked={paymentMethod === 'upi'}
//               onChange={() => setPaymentMethod('upi')}
//             />
//             UPI
//           </label>
//           {paymentMethod === 'upi' && (
//             <input
//               type="text"
//               placeholder="Enter UPI ID"
//               value={upiId}
//               onChange={(e) => setUpiId(e.target.value)}
//               required
//             />
//           )}
//         </div>

//         <div>
//           <label>
//             <input
//               type="radio"
//               name="paymentMethod"
//               value="card"
//               checked={paymentMethod === 'card'}
//               onChange={() => setPaymentMethod('card')}
//             />
//             Credit/Debit Card
//           </label>
//           {paymentMethod === 'card' && (
//             <div className="card-form">
//               <input
//                 type="text"
//                 placeholder="Card Number"
//                 value={cardDetails.number}
//                 onChange={(e) =>
//                   setCardDetails({ ...cardDetails, number: e.target.value })
//                 }
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Expiry (MM/YY)"
//                 value={cardDetails.expiry}
//                 onChange={(e) =>
//                   setCardDetails({ ...cardDetails, expiry: e.target.value })
//                 }
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="CVV"
//                 value={cardDetails.cvv}
//                 onChange={(e) =>
//                   setCardDetails({ ...cardDetails, cvv: e.target.value })
//                 }
//                 required
//               />
//             </div>
//           )}
//         </div>

//         <button type="submit" className="place-order-btn">
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Payment;




import { API_URL } from "../api";

import React, { useState } from "react";

const Payment = ({ cartTotal = 0, userEmail }) => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load Razorpay script safely
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleOnlinePayment = async () => {
    setLoading(true);

    const sdkLoaded = await loadRazorpay();
    if (!sdkLoaded) {
      alert("Razorpay SDK failed to load");
      setLoading(false);
      return;
    }

    try {
      // ✅ 1. Call YOUR backend (NOT Razorpay API)
      const orderRes = await fetch(
        `${API_URL}/payment/create-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: cartTotal }),
        }
      );

      if (!orderRes.ok) {
        throw new Error("Failed to create order");
      }

      const order = await orderRes.json();

      // ✅ 2. Razorpay checkout (PUBLIC key only)
      const options = {
        key: "rzp_test_xxxxx", // ONLY key_id (never secret)
        amount: order.amount,
        currency: "INR",
        name: "Food Fantasy",
        description: "Food Order Payment",
        order_id: order.id,

        prefill: {
          email: userEmail || "",
          contact: "9999999999", // test mode helper
        },

        handler: async function (response) {
          // ✅ 3. Verify payment via backend
          const verifyRes = await fetch(
            `${API_URL}/payment/verify`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            }
          );

          const result = await verifyRes.json();

          if (result.success) {
            setOrderPlaced(true);
          } else {
            alert("Payment verification failed");
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },

        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong during payment");
    }

    setLoading(false);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (paymentMethod === "cod") {
      setOrderPlaced(true);
    } else {
      handleOnlinePayment();
    }
  };

  if (orderPlaced) {
    return (
      <div className="payment-success">
        <h2>🎉 Order Placed Successfully!</h2>
        <p>Your order has been confirmed.</p>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h2>Checkout</h2>
      <p>Total Amount: ₹{cartTotal.toFixed(2)}</p>

      <form onSubmit={handlePlaceOrder}>
        <h3>Select Payment Method:</h3>

        <label>
          <input
            type="radio"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          Cash on Delivery (COD)
        </label>

        <br /><br />

        <label>
          <input
            type="radio"
            value="online"
            checked={paymentMethod === "online"}
            onChange={() => setPaymentMethod("online")}
          />
          UPI / Card / Wallet (Razorpay)
        </label>

        <br /><br />

        <button
          type="submit"
          className="place-order-btn"
          disabled={loading}
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default Payment;
