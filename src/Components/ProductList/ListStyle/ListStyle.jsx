import React, { useState, useEffect } from 'react';
import './ListStyle.css'



function ListStyle({name1, link1,}) {



  return (
  
 
    <>
   
    <div className='ss-list'>

        <a href={link1}>{name1}</a>

    </div>
  
    </>

     
  );
};



export default ListStyle;
