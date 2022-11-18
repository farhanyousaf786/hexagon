import React, { useState, useEffect } from 'react';
import './ListStyle.css'



function ListStyle({name, link,}) {



  return (
  
 
    <>
   
    <div className='ss-list'>
  

      { name == "WINSAFE SUPERMOD PLATFORMS MANUAL" ? (<div>SUSPENDED SCAFFOLDING PLATFORMS</div>) : <div></div>}

    { name == "SPIDER SC1000 / SC1500 OPERATOR'S MANUAL" ? (<div>SUSPENDED SCAFFOLDING MOTORS</div>) : <div></div>}


        <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>

    </div>
  
    </>

     
  );
};



export default ListStyle;
