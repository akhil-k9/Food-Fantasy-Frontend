// import React, { useEffect, useState } from 'react';
// import { API_URL } from "../api";
// import { useNavigate } from "react-router-dom";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
//   const navigate = useNavigate();

//   // Redirect if not logged in
//   useEffect(() => {
//     if (!email) {
//       alert("Please log in to view your cart.");
//       window.location.href = "/signin";
//     }
//   }, [email]);

//   // Fetch cart items
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const res = await fetch(`${API_URL}/cart/${email}`);
//         const data = await res.json();
//         setCartItems(data.items || []);
//       } catch (err) {
//         console.error("Failed to fetch cart items:", err);
//       }
//     };

//     fetchCart();
//   }, [email]);

//   // Sync cart count to localStorage + notify others
//   useEffect(() => {
//     localStorage.setItem('cartCount', cartItems.length.toString());
//     window.dispatchEvent(new Event("cartCountUpdated"));
//   }, [cartItems]);

//   // Remove item from cart
//   const handleRemove = async (productId) => {
//     try {
//       const res = await fetch(`${API_URL}/cart/item`, {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, productId }),
//       });

//       if (res.ok) {
//         setCartItems(prev => prev.filter(item => item.product._id !== productId));
//       }
//     } catch (err) {
//       console.error("Error removing item:", err);
//     }
//   };

//   const totalAmount = cartItems.reduce(
//     (total, item) => total + parseInt(item.product.price) * item.quantity,
//     0
//   );

//   const handlePayment = () => {
//     // Optionally save total amount, items etc.
//     localStorage.setItem("cartTotal", totalAmount.toString());
//     navigate("/payment"); // or open a Razorpay/Stripe dialog here
//   };

//   return (
//     <div className="cart">
//       <h1>Cart Items</h1>

//       <div className="cart-items">
//         {cartItems.length === 0 ? (
//           <p>No items in cart.</p>
//         ) : (
//           cartItems.map((item, index) => (
//             <div className="productBox" key={index}>
//               <div>
//                 <div><strong>{item.product.productName}</strong></div>
//                 <div>₹{item.product.price} × {item.quantity}</div>
//                 <div>{item.product.description}</div>
//               </div>
//               <div className="productGroup">
//                 <img
//                   src={`${API_URL}/uploads/${item.product.image}`}
//                   alt={item.product.productName}
//                 />
//                 <div className="addButton">
//                   <button
//                     style={{ all: 'unset', cursor: 'pointer', color: 'red' }}
//                     onClick={() => handleRemove(item.product._id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {cartItems.length > 0 && (
//         <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '18px' }}>
//           <p>Total Amount: ₹{totalAmount}</p>
//           <button
//             onClick={handlePayment}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#1e90ff',
//               color: 'white',
//               fontWeight: 'bold',
//               borderRadius: '5px',
//               border: 'none',
//               cursor: 'pointer',
//               marginTop: '10px'
//             }}
//           >
//             Proceed to Payment
//           </button>
//           <div className='cart-buttom'></div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;





import React, { useEffect, useState } from 'react';
import { API_URL } from "../api";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!email) {
      alert("Please log in to view your cart.");
      window.location.href = "/signin";
    }
  }, [email]);

  // Fetch cart items
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`${API_URL}/cart/${email}`);
        const data = await res.json();
        setCartItems(data.items || []);
      } catch (err) {
        console.error("Failed to fetch cart items:", err);
      }
    };

    fetchCart();
  }, [email]);

  // Sync cart count to localStorage + notify others
  useEffect(() => {
    localStorage.setItem('cartCount', cartItems.length.toString());
    window.dispatchEvent(new Event("cartCountUpdated"));
  }, [cartItems]);

  // Remove item from cart
  const handleRemove = async (productId) => {
    if (!productId) {
      console.error("Product ID is missing. Cannot remove item.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/cart/item`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, productId }),
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("Failed to remove item:", errData.message || "Unknown error");
        return;
      }

      // Update UI
      setCartItems(prev => prev.filter(item => item.product._id !== productId));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + parseInt(item.product.price) * item.quantity,
    0
  );

  const handlePayment = () => {
    localStorage.setItem("cartTotal", totalAmount.toString());
    navigate("/payment");
  };

  return (
    <div className="cart">
      <h1>Cart Items</h1>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="productBox" key={index}>
              <div>
                <div><strong>{item.product.productName}</strong></div>
                <div>₹{item.product.price} × {item.quantity}</div>
                <div>{item.product.description}</div>
              </div>
              <div className="productGroup">
                <img
                  src={`${API_URL}/uploads/${item.product.image}`}
                  alt={item.product.productName}
                />
                <div className="addButton">
                  <button
                    style={{ all: 'unset', cursor: 'pointer', color: 'red' }}
                    onClick={() => handleRemove(item.product._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '18px' }}>
          <p>Total Amount: ₹{totalAmount}</p>
          <button
            onClick={handlePayment}
            style={{
              padding: '10px 20px',
              backgroundColor: '#1e90ff',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Proceed to Payment
          </button>
          <div className='cart-buttom'></div>
        </div>
      )}
    </div>
  );
}

export default Cart;
