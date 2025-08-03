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
        <div className='lpng'>
          <img src="/assets/logo3.jpg" alt="logo" />
        </div>
        
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
            <p><Link to='/offers'className='top-links'>Offers</Link></p>
          </div>
          <div className="navr">
            <MdOutlineHelp />
            <p><Link to='/help'className='top-links'>Help</Link></p>
          </div>
          <div className="navr">
            <BsFillPersonFill />
            <p>Sign In</p>
          </div>
          <div className="navr">
            <FaShoppingCart />
            <p><Link to='/cart'className='top-links'>Cart</Link></p>
          </div>
        </div>
   </section>
  )
}

export default TopBar