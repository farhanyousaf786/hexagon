import React from "react";
import SimpleMap from "../../Components/GoogleMap/GoogleMap";
import './About.css';


const About = () => {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 40.716280,
    lng: -74.199530
  }
 
  return (
    
    <div className="about-container">
      <p>
      <a>HEXAGON SCAFFOLDING INC</a><br/>
      <a>369 Jellif Ave | Newark | NJ 07108</a><br/>
      <a>PHONE: (718) 725 8969 EXT 05</a>
      </p>
      < SimpleMap location={location}  zoomLevel={9}/>
      
    
    </div>
  );
};

export default About;
