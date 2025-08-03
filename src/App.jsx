import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import ProductMenu from './suby/components/ProductMenu'
import OffersPage from './suby/pages/OffersPage'
import './index.css'
import HelpPage from './suby/pages/HelpPage'
import CartPage from './suby/pages/CartPage'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
          <Route path="/offers" element={<OffersPage/>} />
          <Route path="/help" element={<HelpPage/>} />
          <Route path="/cart" element={<CartPage/>} />
      </Routes>
    
    </div>
  )
}

export default App