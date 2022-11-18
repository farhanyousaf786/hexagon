import React, { useState, useEffect } from 'react';
import './ListStyle.css'



function ListStyle({name, link,}) {



  return (
  
 
    <>
   
    <div className='ss-list'>

        <a href={link}>{name}</a>

    </div>
  
    </>

     
  );
};



export default ListStyle;
