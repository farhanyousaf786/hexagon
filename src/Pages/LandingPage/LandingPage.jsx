import React from 'react'
import Header from '../../Components/Header/Header';
import About from '../AboutPage/About';
import FrontPage from '../FrontPage/FrontPage';
import Products from '../ProductsPage/Products';
import Services from '../ServicesPage/Services';
import './LandingPage.css';





function LandingPage() {

    return (
    <div className='lp-container'>
     <Header />
     <FrontPage/>
     <Products/>
     <Services/>
     <About/>
    </div>
     
      

     
    )
  
}

export default LandingPage;
