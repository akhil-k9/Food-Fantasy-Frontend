import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import ProductMenu from './suby/components/ProductMenu'
import OffersPage from './suby/pages/OffersPage'
import './index.css'
import './Main.css'
import HelpPage from './suby/pages/HelpPage'
import CartPage from './suby/pages/CartPage'
import SinginPage from './suby/pages/SinginPage'
import PaymentPage from './suby/pages/PaymentPage'
import AddressPage from './suby/pages/AddressPage'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
          <Route path="/offers" element={<OffersPage/>} />
          <Route path="/help" element={<HelpPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/signin" element={<SinginPage/>} />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route path="/address" element={<AddressPage/>} />
      </Routes>
    
    </div>
  )
}

export default App