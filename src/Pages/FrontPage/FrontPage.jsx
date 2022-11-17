import React from "react";
import './FrontPage.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const FrontPage = () => {
 
  return (
    
     <div className="fp-container">
      <div className="front-shadding">dd</div>


<AliceCarousel autoPlay autoPlayInterval="3000" >

      <img src="https://imgur.com/hXhZRyq.jpg" className="sliderimg"/>
      <img src="https://imgur.com/Hyppul2.jpg" className="sliderimg"/>
      <img src="https://imgur.com/lDsOMwB.jpg" className="sliderimg"/>
      <img src="https://imgur.com/HNkNRXs.jpg" className="sliderimg"/>
</AliceCarousel>

     <div className="logo">
     <img  className="img" src="https://imgur.com/KWrxMRD.jpg" alt/>
     </div>


     
 </div>
     
  );
};

export default FrontPage;
