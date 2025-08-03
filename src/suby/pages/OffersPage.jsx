import React from 'react'
import OffersSection from '../components/OffersSection'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import FirmCollections from '../components/FirmCollections'

const OffersPage = () => {
  return (
    <div>
      <TopBar/>
      <div className="off-coll">
        <OffersSection/>
        <FirmCollections />
      </div>
      
      <Footer/>
    </div>
  )
}

export default OffersPage
