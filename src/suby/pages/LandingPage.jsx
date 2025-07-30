import React from 'react'
import TopBar from '../components/TopBar'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'
import ProductMenu from '../components/ProductMenu'
import Offers from '../components/Offers'
import Footer from '../components/Footer'
import OfferCard from '../components/OfferCard'

const LandingPage = () => {
  return (
    <div>
        <TopBar />
        <div className="landingSection">
        <ItemsDisplay />
        {/* <Offers /> */}

        <Chains />
        <OfferCard/>
        <FirmCollections />
        </div>
        <Footer/>
    </div>
  )
}

export default LandingPage