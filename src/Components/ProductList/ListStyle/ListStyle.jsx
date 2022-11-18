import React, { useState, useEffect } from 'react';
import './ListStyle.css'



function ListStyle({name, link,}) {



  return (
  
 
    <>
   
    <div className='ss-list'>

      { name == "WINSAFE SUPERMOD PLATFORMS MANUAL" ? (<div className='p-title'>SUSPENDED SCAFFOLDING PLATFORMS</div>) : <div></div>}

      { name == "SPIDER SC1000 / SC1500 OPERATOR'S MANUAL" ? (<div className='p-title'>SUSPENDED SCAFFOLDING MOTORS</div>) : <div></div>}

      { name == "WINSAFE 1500 SERIES OUTRIGGER SYSTEM" ? (<div className='p-title'>Suspended Scaffolding Outrigger Systems</div>) : <div></div>}

      { name == "ADJUSTABLE ROPE LANYARD" ? (<div className='p-title'>Suspended Scaffolding Accessories</div>) : <div></div>}

        <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>

    </div>
  
    </>

     
  );
};



export default ListStyle;
