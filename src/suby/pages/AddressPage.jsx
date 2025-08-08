import React from 'react';
import Address from '../components/Address';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';


function AddressPage() {
    const handleAddressSubmit = (data) => {
     // Save to backend or global state
     console.log('Received Address Data:', data);
   };

  return (
    <div>
      <TopBar/>
      <div className='pay-home'>
        <Address onSubmit={handleAddressSubmit} />
      </div>
      <Footer/>
    </div>
  )
}

export default AddressPage
