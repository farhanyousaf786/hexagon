import { React, useState, useEffect } from 'react'
import Header from '../../Components/Header/Header';
import About from '../AboutPage/About';
import FrontPage from '../FrontPage/FrontPage';
import Products from '../ProductsPage/Products';
import Services from '../ServicesPage/Services';
import './LandingPage.css';
import GalleryPage from '../GalleryPage/GalleryPage';



function LandingPage() {


  const homeClick = () => {
    const section = document.querySelector('#home');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const productsClick = () => {
    const section = document.querySelector('#products');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const servicesClick = () => {
    const section = document.querySelector('#services');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const galleryClick = () => {
    const section = document.querySelector('#gallery');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const aboutClick = () => {
    const section = document.querySelector('#about');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1224px)").matches
  )

  // Define useState so it will run once as page load
  useEffect(() => {
    window
      .matchMedia("(min-width: 1224px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);


  return (
    <div className='lp-container'>
      {matches && (<div id='home'><FrontPage /></div>)}
      {matches && (<div id='products'><Products /></div>)}
      {matches && (<div id='services'><Services /></div>)}
      {matches && (<div id='gallery'><GalleryPage /></div>)}
      {matches && (<div id='about'><About /></div>)}

      {!matches && (<div id='home'><FrontPage /></div>)}
      {!matches && (<div id='products'><Products /></div>)}
      {!matches && (<div id='services'><Services /></div>)}
      {!matches && (<div id='gallery'><GalleryPage /></div>)}
      {!matches && (<div id='about'><About /></div>)}

      <Header
        homeClick={homeClick}
        productsClick={productsClick}
        servicesClick={servicesClick}
        galleryClick={galleryClick}
        aboutClick={aboutClick}
      />
    </div>
  )

}

export default LandingPage;
