import React, { useState, useEffect } from 'react';

const Payment = ({ cartTotal = 0, userEmail }) => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (paymentMethod === 'upi' && !upiId) {
      alert('Please enter UPI ID');
      return;
    }

    if (paymentMethod === 'card' &&
      (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)
    ) {
      alert('Please fill in all card details');
      return;
    }

    // Simulate successful order
    setOrderPlaced(true);

    // TODO: Send order to backend
    // fetch('/api/order', { method: 'POST', body: JSON.stringify(...) })

    console.log('Order placed with:', {
      user: userEmail,
      paymentMethod,
      upiId,
      cardDetails
    });
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

        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={() => setPaymentMethod('cod')}
            />
            Cash on Delivery (COD)
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => setPaymentMethod('upi')}
            />
            UPI
          </label>
          {paymentMethod === 'upi' && (
            <input
              type="text"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          )}
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
            />
            Credit/Debit Card
          </label>
          {paymentMethod === 'card' && (
            <div className="card-form">
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.number}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, number: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Expiry (MM/YY)"
                value={cardDetails.expiry}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiry: e.target.value })
                }
                required
              />
              <input
                type="password"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
                required
              />
            </div>
          )}
        </div>

        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Payment;
