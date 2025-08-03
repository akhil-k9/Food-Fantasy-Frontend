import React from "react";


const HelpSection = () => {
  return (
    <div className="help-container">
      <h1 className="hh1">Help & Support</h1>
      
      <section className="faq">
        <h2 className="hh1">Frequently Asked Questions</h2>
        <div className="question">
          <h3 className="hh3">🛒 How do I place an order?</h3>
          <p>Choose a item, add items to cart, and proceed to checkout.</p>
        </div>
        <div className="question">
          <h3 className="hh3">🚚 What are the delivery charges?</h3>
          <p>Delivery is free for orders above ₹299. Else, ₹30 applies.</p>
        </div>
        <div className="question">
          <h3 className="hh3">⏰ How long does delivery take?</h3>
          <p>Average delivery time is 30–45 minutes based on your location.</p>
        </div>
        <div className="question">
          <h3 className="hh3">💳 What payment methods do you accept?</h3>
          <p>We accept UPI, Credit/Debit Cards, and Cash on Delivery.</p>
        </div>
      </section>

      <section className="contact">
        <h2 className="hh2">Still Need Help?</h2>
        <p>Email us at <a className='f-name' href="mailto:akhilkandayala@gmail.com">akhilkandayala@gmail.com</a></p>
        <p>Call us: <strong>+91 9515644391</strong></p>
        <p>Available from 9 AM – 10 PM, all days.</p>
      </section>
    </div>
  );
};

export default HelpSection;
