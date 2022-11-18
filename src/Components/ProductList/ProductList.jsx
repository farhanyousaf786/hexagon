import React, { useState, useEffect } from 'react';
import './ProductList.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import cardsArr from './productData';
import ListStyle from './ListStyle/ListStyle';



const ProductList = () => {



const cards = cardsArr.map((data, idx) => {

  return (
    <ListStyle
      key={idx}
      name={data.name}
      link={data.link}

    />
  );
});


  return (
  
  <div className="p-list">

  <h1>LIST OF PRODUCT</h1>

  
  <center><h2>{cards}</h2></center>
  
  </div>

     
  );
};



export default ProductList;
