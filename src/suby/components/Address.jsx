import React, { useState } from 'react';

function Address({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Address:', formData);
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Enter Delivery Address</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <textarea
        name="address"
        placeholder="Address Line"
        value={formData.address}
        onChange={handleChange}
        required
        style={styles.textarea}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
}

const styles = {
  form: {
    width: '360px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    resize: 'vertical',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Address;
