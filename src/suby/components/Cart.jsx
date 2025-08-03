import React, { useEffect, useState } from 'react';
import { expItems } from './ProductMenu';
import { API_URL } from "../api";

function Cart() {
  const [expItem, setItems] = useState([]);

  useEffect(() => {
    setItems(expItems); 
  }, []);

  
  const handleRemove = (idToRemove) => {
    const indexToRemove = expItem.findIndex(item => item._id === idToRemove);
    if (indexToRemove !== -1) {
      const updatedItems = [...expItem];
      updatedItems.splice(indexToRemove, 1); 
      setItems(updatedItems);
      console.log("Removed:", idToRemove);
    }
  };

  
  const totalAmount = expItem.reduce((total, item) => total + parseInt(item.price), 0);

  return (
    <div className='cart'>
      <h1>Cart Items</h1>
      <div className="cart-items">
        {expItem.map((item, index) => (
          <div className="productBox" key={index}>
            <div>
              <div><strong>{item.productName}</strong></div>
              <div>₹{item.price}</div>
              <div>{item.description}</div>
            </div>
            <div className="productGroup">
              <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
              <div className="addButton">
                <button
                  style={{ all: 'unset', cursor: 'pointer', color: 'red' }}
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '18px' }}>
        Total Amount: ₹{totalAmount}
      </div>
    </div>
  );
}

export default Cart;
