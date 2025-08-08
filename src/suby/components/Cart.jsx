import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const email = localStorage.getItem("userEmail") || "";
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      alert("Please log in to view your cart.");
      navigate("/signin");
    } else {
      fetchCart();
    }
  }, [email, navigate]);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/cart/${encodeURIComponent(email)}`);
      if (!res.ok) throw new Error(`GET /cart failed: ${res.status}`);
      const data = await res.json();
      setCartItems(data.items || []);
    } catch (err) {
      console.error("Failed to fetch cart items:", err);
    } finally {
      setLoading(false);
    }
  };

  const getProductId = (item) => {
    if (item.product && typeof item.product === "object") {
      return item.product._id;
    }
    return item.product;
  };

  const handleRemove = async (productId) => {
    if (!productId) return;
    const snapshot = [...cartItems];
    setCartItems((prev) => prev.filter((i) => getProductId(i) !== productId));

    try {
      const res = await fetch(`${API_URL}/cart/item`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, productId }), // ✅ Send via body
      });

      if (!res.ok) throw new Error(`DELETE failed: ${res.status}`);
      const data = await res.json();
      setCartItems(data.cart?.items || []);
    } catch (err) {
      console.error(err);
      alert("Failed to remove item");
      setCartItems(snapshot); // revert
    }
  };
  // const handleRemoveAll = async()=>{
  //   const r = await fetch(`${API_URL}/cart/${email}`,{
  //     method: "DELETE"
  //   }); 
  //   console.log(r);
  // }

  const totalAmount = cartItems.reduce((total, item) => {
    const price = item.product?.price || item.price || 0;
    return total + price * (item.quantity || 0);
  }, 0);

  const handlePayment = () => {
    if (totalAmount <= 0) return alert("Your cart is empty!");
    localStorage.setItem("cartTotal", totalAmount.toString());
    navigate("/payment");
  };

  return (
    <div className="cart">
      <h1>Cart Items</h1>
      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => {
            const product = item.product || {};
            return (
              <div className="productBox" key={getProductId(item)}>
                <div>
                  <strong>{product.productName}</strong>
                  <div>₹{product.price} × {item.quantity}</div>
                  <div>{product.description}</div>
                </div>
                <div className="productGroup">
                  <img
                    src={`${API_URL}/uploads/${product.image}`}
                    alt={product.productName}
                  />
                  <button
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleRemove(getProductId(item))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          {/* <button onClick={handleRemoveAll}>remove all</button> */}
        </div>
      )}

      {cartItems.length > 0 && (
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>
          <p>Total Amount: ₹{totalAmount}</p>
          <button
            onClick={handlePayment}
            style={{
              padding: "10px 20px",
              backgroundColor: "#1e90ff",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
