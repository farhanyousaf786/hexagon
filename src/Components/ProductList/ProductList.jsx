import React, { useState, useEffect } from 'react';
import './ProductList.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import cardsArr from './productData1';



const ProductList = () => {

//   useEffect(() => {
    
// console.log(cardsArr.length)

//   });

const cards = cardsArr.map((data, idx) => {

  return (
    <ListStyle
      key={idx}
      img={data.icon}
      title={data.name}

    />
  );
});


  return (
  
  <div className="gallery-size">

  <center><h2>Product is in  Development..</h2></center>
  </div>

     
  );
};



export default ProductList;
