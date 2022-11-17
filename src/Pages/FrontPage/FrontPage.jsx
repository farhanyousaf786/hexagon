import React from "react";
import './FrontPage.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const FrontPage = () => {
 
  return (
    
     <div className="fp-container">

<AliceCarousel autoPlay autoPlayInterval="3000" >
      <img src="https://imgur.com/Hyppul2.jpg" className="sliderimg"/>
      <img src="https://imgur.com/m2CGOHJ.jpg" className="sliderimg"/>
      <img src="https://imgur.com/m2CGOHJ.jpg" className="sliderimg"/>
      <img src="https://imgur.com/m2CGOHJ.jpg" className="sliderimg"/>
</AliceCarousel>

<div className="logo">
     <img  className="img" src="https://imgur.com/m2CGOHJ.jpg" alt/>
     </div>
 </div>
     
  );
};

export default FrontPage;
