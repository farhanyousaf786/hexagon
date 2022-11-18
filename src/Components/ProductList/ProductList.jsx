import React, { useState, useEffect } from 'react';
import './ProductList.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import cardsArr from './productData1';
import ListStyle from './ListStyle/ListStyle';



const ProductList = () => {



const cards = cardsArr.map((data, idx) => {

  return (
    <ListStyle
      key={idx}
      name1={data.name}
      link1={data.link}

    />
  );
});


  return (
  
  <div className="p-list">

  <center><h2>{cards}</h2></center>
  </div>

     
  );
};



export default ProductList;
