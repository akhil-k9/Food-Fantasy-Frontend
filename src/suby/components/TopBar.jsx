// import React from 'react'
// import { Link } from 'react-router-dom'
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { BiSolidOffer } from "react-icons/bi";
// import { MdOutlineHelp } from "react-icons/md";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaShoppingCart } from "react-icons/fa";
// import { expItems } from './ProductMenu';

// const TopBar = () => {
//   let cart=expItems.length;
//   return (
//    <section className="topBarSection">
//         <div className='lpng'>
//           <img src="/assets/logo3.jpg" alt="logo" />
//         </div>
        
//         <div className="companyTitle">
//             <Link to='/' className='link'>
//             <h2>Food Fantasy</h2>
//             </Link>
        
//         <div className="loc">
//           <CiLocationOn className="loc-icon" />
//           <p>MREC,Maisammaguda,Hyderabad,Telangana</p>
//           <MdOutlineKeyboardArrowDown className="loc-arrow"/>
//         </div>
//         </div>

//         <div className="navright">
//           <Link to='/offers'className='top-links navr'>
//             <BiSolidOffer />
//             <p>Offers</p>
//           </Link>
//           <Link to='/help'className='top-links navr'>
//             <MdOutlineHelp />
//             <p>Help</p>
//           </Link>
//           <Link to='/singin'className='top-links navr'>
//             <BsFillPersonFill />
//             <p>Sign In</p>
//           </Link>
//           <Link to='/cart'className='top-links navr'>
//             <FaShoppingCart />
//             <p className='cart-all'><span>Cart</span>{cart === 0 ? "" : <span className='cart-n'>{cart}</span>}</p>
//           </Link>
//         </div>
//    </section>
//   )
// }

// export default TopBar




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { BiSolidOffer } from "react-icons/bi";
// import { MdOutlineHelp } from "react-icons/md";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaShoppingCart } from "react-icons/fa";

// const TopBar = () => {
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     // Load cart count from localStorage
//     const count = parseInt(localStorage.getItem('cartCount')) || 0;
//     setCartCount(count);

//     // Optional: Listen for changes from other tabs
//     const handleStorage = () => {
//       const updatedCount = parseInt(localStorage.getItem('cartCount')) || 0;
//       setCartCount(updatedCount);
//     };

//     window.addEventListener('storage', handleStorage);
//     return () => window.removeEventListener('storage', handleStorage);
//   }, []);

//   return (
//     <section className="topBarSection">
//       <div className='lpng'>
//         <img src="/assets/logo3.jpg" alt="logo" />
//       </div>

//       <div className="companyTitle">
//         <Link to='/' className='link'>
//           <h2>Food Fantasy</h2>
//         </Link>

//         <div className="loc">
//           <CiLocationOn className="loc-icon" />
//           <p>MREC, Maisammaguda, Hyderabad, Telangana</p>
//           <MdOutlineKeyboardArrowDown className="loc-arrow" />
//         </div>
//       </div>

//       <div className="navright">
//         <Link to='/offers' className='top-links navr'>
//           <BiSolidOffer />
//           <p>Offers</p>
//         </Link>
//         <Link to='/help' className='top-links navr'>
//           <MdOutlineHelp />
//           <p>Help</p>
//         </Link>
//         <Link to='/signin' className='top-links navr'>
//           <BsFillPersonFill />
//           <p>Sign In</p>
//         </Link>
//         <Link to='/cart' className='top-links navr'>
//           <FaShoppingCart />
//           <p className='cart-all'>
//             <span>Cart</span>
//             {cartCount > 0 && <span className='cart-n'>{cartCount}</span>}
//           </p>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default TopBar;






// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { BiSolidOffer } from "react-icons/bi";
// import { MdOutlineHelp } from "react-icons/md";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaShoppingCart } from "react-icons/fa";

// const TopBar = () => {
//   const [cartCount, setCartCount] = useState(0);

//   const updateCartCount = () => {
//     const count = parseInt(localStorage.getItem('cartCount')) || 0;
//     setCartCount(count);
//   };

//   useEffect(() => {
//     updateCartCount();

//     // For changes from Cart.jsx within same tab
//     const handleCartUpdate = () => updateCartCount();

//     // For changes from other browser tabs
//     const handleStorage = () => updateCartCount();

//     window.addEventListener('cartCountUpdated', handleCartUpdate);
//     window.addEventListener('storage', handleStorage);

//     return () => {
//       window.removeEventListener('cartCountUpdated', handleCartUpdate);
//       window.removeEventListener('storage', handleStorage);
//     };
//   }, []);

//   return (
//     <section className="topBarSection">
//       <div className='lpng'>
//         <img src="/assets/logo3.jpg" alt="logo" />
//       </div>

//       <div className="companyTitle">
//         <Link to='/' className='link'>
//           <h2>Food Fantasy</h2>
//         </Link>

//         <div className="loc">
//           <CiLocationOn className="loc-icon" />
//           <p>MREC, Maisammaguda, Hyderabad, Telangana</p>
//           <MdOutlineKeyboardArrowDown className="loc-arrow" />
//         </div>
//       </div>

//       <div className="navright">
//         <Link to='/offers' className='top-links navr'>
//           <BiSolidOffer />
//           <p>Offers</p>
//         </Link>
//         <Link to='/help' className='top-links navr'>
//           <MdOutlineHelp />
//           <p>Help</p>
//         </Link>
//         <Link to='/signin' className='top-links navr'>
//           <BsFillPersonFill />
//           <p>Sign In</p>
//         </Link>
//         <Link to='/cart' className='top-links navr'>
//           <FaShoppingCart />
//           <p className='cart-all'>
//             <span>Cart</span>
//             {cartCount > 0 && <span className='cart-n'>{cartCount}</span>}
//           </p>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default TopBar;







// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { BiSolidOffer } from "react-icons/bi";
// import { MdOutlineHelp } from "react-icons/md";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaShoppingCart } from "react-icons/fa";

// const TopBar = () => {
//   const [cartCount, setCartCount] = useState(0);
//   const [location,setLocation] = useState("add location")

//   // Update cart count from localStorage
//   const updateCartCount = () => {
//     const count = parseInt(localStorage.getItem('cartCount')) || 0;
//     setCartCount(count);
//   };
//   const updateLocation = () => {
//     const loc = localStorage.getItem('location') || "add location";
//     setLocation(loc);
//   };


//   useEffect(() => {
//     updateCartCount();

//     // Handle custom event (from Cart component) in same tab
//     const handleCartUpdate = () => updateCartCount();

//     // Handle localStorage update across different tabs
//     const handleStorage = () => updateCartCount();

//     window.addEventListener('cartCountUpdated', handleCartUpdate);
//     window.addEventListener('storage', handleStorage);

//     return () => {
//       window.removeEventListener('cartCountUpdated', handleCartUpdate);
//       window.removeEventListener('storage', handleStorage);
//     };
//   }, []);


//   return (
//     <section className="topBarSection">
//       <div className='lpng'>
//         <img src="/assets/logo3.jpg" alt="logo" />
//       </div>

//       <div className="companyTitle">
//         <Link to='/' className='link'>
//           <h2>Food Fantasy</h2>
//         </Link>

//         <div className="loc">
//           <CiLocationOn className="loc-icon" />
//           {/* <p>MREC, Maisammaguda, Hyderabad, Telangana</p> */}
//           <p>{location}</p>
//           <MdOutlineKeyboardArrowDown className="loc-arrow" />
//         </div>
//       </div>

//       <div className="navright">
//         <Link to='/offers' className='top-links navr'>
//           <BiSolidOffer />
//           <p>Offers</p>
//         </Link>
//         <Link to='/help' className='top-links navr'>
//           <MdOutlineHelp />
//           <p>Help</p>
//         </Link>
//         <Link to='/signin' className='top-links navr'>
//           <BsFillPersonFill />
//           <p>Sign In</p>
//         </Link>
//         <Link to='/cart' className='top-links navr'>
//           <FaShoppingCart />
//           <p className='cart-all'>
//             <span>Cart</span>
//             {cartCount > 0 && <span className='cart-n'>{cartCount}</span>}
//           </p>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default TopBar;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { BiSolidOffer } from "react-icons/bi";
// import { MdOutlineHelp } from "react-icons/md";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaShoppingCart } from "react-icons/fa";
// import { API_URL } from "../api";

// const TopBar = () => {
//   const [cartCount, setCartCount] = useState(0);
//   const [location, setLocation] = useState("Add Location");

//   // Update cart count from localStorage
//   const updateCartCount = () => {
//     const count = parseInt(localStorage.getItem('cartCount')) || 0;
//     setCartCount(count);
//   };

//   const getLocationFromBackend = async (lat, lon) => {
//     try {
//       const res = await fetch(`${API_URL}/get-location?lat=${lat}&lon=${lon}`);
//       const data = await res.json();
//       if (data.location) {
//         localStorage.setItem('location', data.location);
//         setLocation(data.location);
//       }
//     } catch (error) {
//       console.error("Location fetch failed:", error);
//       setLocation("Location not found");
//     }
//   };

//   const detectLocation = () => {
//     const storedLocation = localStorage.getItem('location');
//     if (storedLocation) {
//       setLocation(storedLocation);
//     } else {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationFromBackend(latitude, longitude);
//         },
//         (error) => {
//           console.error("Geolocation error:", error.message);
//           setLocation("Location denied");
//         }
//       );
//     }
//   };

//   useEffect(() => {
//     updateCartCount();
//     detectLocation();

//     window.addEventListener('cartCountUpdated', updateCartCount);
//     window.addEventListener('storage', updateCartCount);

//     return () => {
//       window.removeEventListener('cartCountUpdated', updateCartCount);
//       window.removeEventListener('storage', updateCartCount);
//     };
//   }, []);

//   return (
//     <section className="topBarSection">
//       <div className='lpng'>
//         <img src="/assets/logo3.jpg" alt="logo" />
//       </div>

//       <div className="companyTitle">
//         <Link to='/' className='link'>
//           <h2>Food Fantasy</h2>
//         </Link>

//         <div className="loc navr" onClick={detectLocation}>
//           <CiLocationOn className="loc-icon" />
//           <p>{location}</p>
//           <MdOutlineKeyboardArrowDown className="loc-arrow" />
//         </div>
//       </div>

//       <div className="navright">
//         <Link to='/offers' className='top-links navr'>
//           <BiSolidOffer />
//           <p>Offers</p>
//         </Link>
//         <Link to='/help' className='top-links navr'>
//           <MdOutlineHelp />
//           <p>Help</p>
//         </Link>
//         <Link to='/signin' className='top-links navr'>
//           <BsFillPersonFill />
//           <p>Sign In</p>
//         </Link>
//         <Link to='/cart' className='top-links navr'>
//           <FaShoppingCart />
//           <p className='cart-all'>
//             <span>Cart</span>
//             {cartCount > 0 && <span className='cart-n'>{cartCount}</span>}
//           </p>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default TopBar;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineHelp } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { API_URL } from "../api";

const TopBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [location, setLocation] = useState("Detecting...");

  // Update cart count from localStorage
  const updateCartCount = () => {
    const count = parseInt(localStorage.getItem('cartCount')) || 0;
    setCartCount(count);
  };

  // Fetch formatted location from backend
  const getLocationFromBackend = async (lat, lon) => {
    try {
      const res = await fetch(`${API_URL}/get-location?lat=${lat}&lon=${lon}`);
      const data = await res.json();

      if (data.location) {
        localStorage.setItem('location', data.location);
        setLocation(data.location);
      } else {
        setLocation("Unknown location");
      }
    } catch (error) {
      console.error("Location fetch failed:", error);
      setLocation("Location not found");
    }
  };

  // Detect geolocation and fetch address
  const detectLocation = () => {
    const storedLocation = localStorage.getItem('location');

    if (storedLocation) {
      setLocation(storedLocation);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getLocationFromBackend(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error.message);
          setLocation("Location denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  };

  useEffect(() => {
    updateCartCount();
    detectLocation();

    // Listen to cart updates
    window.addEventListener('cartCountUpdated', updateCartCount);
    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('cartCountUpdated', updateCartCount);
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <section className="topBarSection">
      <div className='lpng'>
        <img src="/assets/logo3.jpg" alt="logo" />
      </div>

      <div className="companyTitle">
        <Link to='/' className='link'>
          <h2>Food Fantasy</h2>
        </Link>

        <Link to='/address' className="loc top-links navr" >
          <CiLocationOn className="loc-icon" />
          <p>{location}</p>
          <MdOutlineKeyboardArrowDown className="loc-arrow" />
        </Link>
      </div>

      <div className="navright">
        <Link to='/offers' className='top-links navr'>
          <BiSolidOffer />
          <p>Offers</p>
        </Link>
        <Link to='/help' className='top-links navr'>
          <MdOutlineHelp />
          <p>Help</p>
        </Link>
        <Link to='/signin' className='top-links navr'>
          <BsFillPersonFill />
          <p>Sign In</p>
        </Link>
        <Link to='/cart' className='top-links navr'>
          <FaShoppingCart />
          <p className='cart-all'>
            <span>Cart</span>
            {cartCount > 0 && <span className='cart-n'>{cartCount}</span>}
          </p>
        </Link>
      </div>
    </section>
  );
};

export default TopBar;
