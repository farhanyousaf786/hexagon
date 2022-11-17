import React from 'react'
import Header from '../../Components/Header/Header';
import About from '../AboutPage/About';
import FrontPage from '../FrontPage/FrontPage';
import Products from '../ProductsPage/Products';
import Services from '../ServicesPage/Services';
import './LandingPage.css';
import GalleryPage from '../GalleryPage/GalleryPage';



function LandingPage() {


    const homeClick = () => {
        const section = document.querySelector( '#home' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );         
      };

    const productsClick = () => {
        const section = document.querySelector( '#products' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );       
    };

    const servicesClick = () => {
        const section = document.querySelector( '#services' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );         
      };

      const galleryClick = () => {
        const section = document.querySelector( '#gallery' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );         
      };

      const aboutClick = () => {
        const section = document.querySelector( '#about' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );         
      };





    return (
    <div className='lp-container'>

     <Header 
     homeClick={homeClick} 
     productsClick={productsClick}
     servicesClick={servicesClick}
     galleryClick={galleryClick}
     aboutClick={aboutClick}
     />
     <div id='home'><FrontPage/></div>
     <div id='products'><Products/></div>
     <div id='services'><Services/></div>
     <div id='gallery'><GalleryPage/></div>
     <div id='about'><About/></div>
    </div> 
    )
  
}

export default LandingPage;
