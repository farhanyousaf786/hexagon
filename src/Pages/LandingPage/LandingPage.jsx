import React from 'react'
import Header from '../../Components/Header/Header';
import FrontPage from '../FrontPage/FrontPage';
import Products from '../Products/Products';
import './LandingPage.css';





function LandingPage() {

    return (
    <div className='lp-container'>
     <Header />
     <FrontPage/>
     <Products/>
    </div>
     
      

     
    )
  
}

export default LandingPage;
