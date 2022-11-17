import React from "react";
import './Gallery.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const Gallery = () => {
 
  return (
  
  <div className="gallery-size">
  
  <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls="true" >

  <img src="https://imgur.com/lOFcrTD.jpg" className="sliderimg"/>
  <img src="https://imgur.com/5tyzKN6.jpg" className="sliderimg"/>
  <img src="https://imgur.com/GkbkoFG.jpg" className="sliderimg"/>
  <img src="https://imgur.com/6bZiKHu.jpg" className="sliderimg"/>

  </AliceCarousel></div>

     
  );
};



export default Gallery;
