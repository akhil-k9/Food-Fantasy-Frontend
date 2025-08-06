import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../api';

const OtpAuthForm = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [status, setStatus] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
      setIsVerified(true);
    }
  }, []);

  const handleSendOtp = async () => {
    try {
      const res = await axios.post(`${API_URL}/user/send-otp`, { email });
      setOtpSent(true);
      setStatus(res.data.message);
    } catch (err) {
      setStatus(err.response?.data?.error || 'Failed to send OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post(`${API_URL}/user/verify-otp`, { email, otp });
      setStatus(res.data.message);
      localStorage.setItem('userEmail', email);
      setIsVerified(true);
    } catch (err) {
      setStatus(err.response?.data?.error || 'Failed to verify OTP');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setEmail('');
    setOtp('');
    setOtpSent(false);
    setStatus('Logged out successfully');
    setIsVerified(false);
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.card}>
        <h2 style={styles.title}>OTP Login - Food Fantasy</h2>

        {isVerified ? (
          <>
            <h3 style={styles.welcome}>Welcome, <span>{email}</span> 🎉</h3>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <>
            {!otpSent ? (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={styles.input}
                />
                <button onClick={handleSendOtp} style={styles.button}>Send OTP</button>
              </>
            ) : (
              <>
                <p style={styles.otpInfo}>OTP sent to: <strong>{email}</strong></p>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  style={styles.input}
                />
                <button onClick={handleVerifyOtp} style={styles.button}>Verify OTP</button>
              </>
            )}
          </>
        )}

        {status && <p style={styles.status}>{status}</p>}
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Segoe UI", sans-serif'
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.20)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '400px'
  },
  title: {
    marginBottom: '20px',
    color: '#333'
  },
  input: {
    width: '90%',
    padding: '12px',
    margin: '10px 0',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#ff6f00',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#c62828',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '15px',
    cursor: 'pointer',
    marginTop: '15px'
  },
  status: {
    marginTop: '15px',
    color: '#444',
    fontWeight: '500'
  },
  otpInfo: {
    fontSize: '14px',
    marginBottom: '10px'
  },
  welcome: {
    color: '#2e7d32',
    fontSize: '20px',
    marginBottom: '10px'
  }
};

export default OtpAuthForm;
