import React from "react";
import SimpleMap from "../../Components/GoogleMap/GoogleMap";
import './About.css';


const About = () => {

  // Define location object and pass details
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 40.716280,
    lng: -74.199530
  }
  
  return (
    <div className="about-container">
      <p><a>LOCATION</a></p>
      < SimpleMap location={location} zoomLevel={9} />
      <div className="about-add">
        <a>HEXAGON SCAFFOLDING INC</a><br />
        <a>369 Jellif Ave | Newark | NJ 07108</a><br />
        <a>PHONE: (718) 725 8969 EXT 05</a>
      </div>
    </div>
  );
};

export default About;
