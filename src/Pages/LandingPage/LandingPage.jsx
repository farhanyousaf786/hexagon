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
     <Header 
     homeClick={homeClick} 
     productsClick={productsClick}
     servicesClick={servicesClick}
     galleryClick={galleryClick}
     aboutClick={aboutClick}
     />
     <div ref={ref}><FrontPage/></div>
     <div ref={ref}><Products/></div>
     <div ref={ref}><Services/></div>
     <div ref={ref}><About/></div>

    </div>
     
      

     
    )
  
}

export default LandingPage;
