import React, { useState, useEffect } from 'react';



function ListStyle({name, link,}) {



  return (
  
 
    <>
   
    <div className='list-style'>

        <a href={link}>{name}</a>

  


    </div>
  
    </>

     
  );
};



export default ListStyle;
