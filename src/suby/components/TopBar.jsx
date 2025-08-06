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







import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineHelp } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const TopBar = () => {
  const [cartCount, setCartCount] = useState(0);

  // Update cart count from localStorage
  const updateCartCount = () => {
    const count = parseInt(localStorage.getItem('cartCount')) || 0;
    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount();

    // Handle custom event (from Cart component) in same tab
    const handleCartUpdate = () => updateCartCount();

    // Handle localStorage update across different tabs
    const handleStorage = () => updateCartCount();

    window.addEventListener('cartCountUpdated', handleCartUpdate);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('cartCountUpdated', handleCartUpdate);
      window.removeEventListener('storage', handleStorage);
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

        <div className="loc">
          <CiLocationOn className="loc-icon" />
          <p>MREC, Maisammaguda, Hyderabad, Telangana</p>
          <MdOutlineKeyboardArrowDown className="loc-arrow" />
        </div>
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
