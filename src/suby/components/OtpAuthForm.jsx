import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../api'; // Your backend API base URL

const OtpAuthForm = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [status, setStatus] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [name, setName] = useState('');

  // Loading states
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
      setIsVerified(true);
    }
  }, []);

  const handleSendOtp = async () => {
    setLoadingSend(true);
    setStatus('');
    try {
      const res = await axios.post(`${API_URL}/user/send-otp`, { email });
      setOtpSent(true);
      setStatus(res.data.message);
    } catch (err) {
      setStatus(err.response?.data?.error || 'Failed to send OTP');
    } finally {
      setLoadingSend(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoadingVerify(true);
    setStatus('');
    try {
      let lat = null;
      let lon = null;
      let location = '';

      if (navigator.geolocation) {
        await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(async (pos) => {
            lat = pos.coords.latitude;
            lon = pos.coords.longitude;

            try {
              const locRes = await axios.get(`https://us1.locationiq.com/v1/reverse.php`, {
                params: {
                  key: 'pk.bc1c871249fad49e24c080851f5c9556',
                  lat,
                  lon,
                  format: 'json'
                }
              });

              location =
                locRes.data.address.city ||
                locRes.data.address.town ||
                locRes.data.address.state ||
                '';
            } catch (err) {
              console.warn('Reverse geocoding failed', err);
            }

            resolve();
          }, reject);
        });
      }
      
      const res = await axios.post(`${API_URL}/user/verify-otp`, {
        email,
        otp,
        name: name || 'Guest',
        location,
        lat,
        lon
      });

      setStatus(res.data.message);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('location', location);
      setIsVerified(true);
    } catch (err) {
      console.error(err);
      setStatus(err.response?.data?.error || 'Failed to verify OTP');
    } finally {
      setLoadingVerify(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.clear();
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
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={styles.input}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={styles.input}
                />
                <button 
                  onClick={handleSendOtp} 
                  style={styles.button}
                  disabled={loadingSend}
                >
                  {loadingSend ? 'Sending...' : 'Send OTP'}
                </button>
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
                <button 
                  onClick={handleVerifyOtp} 
                  style={styles.button}
                  disabled={loadingVerify}
                >
                  {loadingVerify ? 'Verifying...' : 'Verify OTP'}
                </button>
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
