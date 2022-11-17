import React from "react";
import './Gallery.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const Gallery = () => {
 
  return (
  
  <div className="gallery-size">
  
  <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls="true" >

  <img src="https://imgur.com/hXhZRyq.jpg" className="sliderimg"/>
  <img src="https://imgur.com/Hyppul2.jpg" className="sliderimg"/>
  <img src="https://imgur.com/lDsOMwB.jpg" className="sliderimg"/>
  <img src="https://imgur.com/HNkNRXs.jpg" className="sliderimg"/>

  </AliceCarousel></div>

     
  );
};



export default Gallery;
