import React, { useEffect, useState } from 'react';
import Payment from '../components/Payment';
import axios from 'axios';
import {API_URL} from '../api'
import TopBar from '../components/TopBar';

function PaymentPage() {
  const [cartTotal, setCartTotal] = useState(0);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail'); // Example key for signed-in user
    if (email) {
      setUserEmail(email);

      // Fetch cart from backend
      axios.get(`${API_URL}/cart/${email}`)
        .then(res => {
          const cartItems = res.data?.items || [];
          const total = cartItems.reduce((sum, item) => {
            const price = item.product?.price || 0;
            return sum + price * item.quantity;
          }, 0);
          setCartTotal(total);
        })
        .catch(err => {
          console.error("Failed to load cart:", err);
        });
    }
  }, []);

  if (!userEmail){

   return(
    <div>
    <TopBar/>
    <div className='pay-home'>
        <p>Loading user...</p>
    </div>
    </div>
  )}

  return (
    <div>
    <TopBar/>
    <div className='pay-home'>
        <Payment cartTotal={cartTotal} userEmail={userEmail} />
    </div>
    </div>
    
  );
}

export default PaymentPage;
