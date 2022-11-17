import React from "react";
import './FrontPage.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Gallery from "../../Components/Gallery/Gallery";


const FrontPage = () => {
 
  return (
    
     <div className="fp-container">
     <Gallery/>
     <div className="front-shadding"></div>
     <div className="logo">
     <img  className="img" src="https://imgur.com/KWrxMRD.jpg" alt/>
     </div>

 </div>
     
  );
};

export default FrontPage;
