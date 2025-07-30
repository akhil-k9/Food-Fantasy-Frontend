import React from 'react'
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineHelp } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const TopBar = () => {
  return (
   <section className="topBarSection">
        <img src="/assets/nav-logo.png" alt="logo" className='lpng'/>
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>Food Fantasy</h2>
            </Link>
        
        <div className="loc">
          <CiLocationOn className="loc-icon" />
          <p>MREC,Maisammaguda,Hyderabad,Telangana</p>
          <MdOutlineKeyboardArrowDown className="loc-arrow"/>
        </div>
        </div>

        <div className="navright">
          <div className="navr">
            <BiSolidOffer />
            <p>Offers</p>
          </div>
          <div className="navr">
            <MdOutlineHelp />
            <p>Help</p>
          </div>
          <div className="navr">
            <BsFillPersonFill />
            <p>Sign In</p>
          </div>
          <div className="navr">
            <FaShoppingCart />
            <p>Cart</p>
          </div>
        </div>
   </section>
  )
}

export default TopBar