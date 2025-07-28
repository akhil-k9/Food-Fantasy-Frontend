import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>Food Fantasy</h2>
            </Link>
        </div>
        <div class="search-box">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
        </div>

        <div className="userAuth">
            Login
        </div>
   </section>
  )
}

export default TopBar