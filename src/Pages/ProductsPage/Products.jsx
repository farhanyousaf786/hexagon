import React from "react";
import './Products.scss';
import { useNavigate, Link } from "react-router-dom";



export default function Products (){

	const navigate = useNavigate();


	const handleClick = (e) => {
		e.preventDefault();
		console.log('The link was clicked.');
		navigate('/products-list')
	  }
 
 
  return (
    
    <div className="pro-container">
      <div className="intro">
      <h1>HEXAGON SCAFFOLDING INC.</h1>
      <h3>SUSPENDED SCAFFOLD RENTALS, SALES & SERVICES</h3>
      <h4>Hexagon Scaffolding, Inc. is Suspended Scaffold Rental, Sales and Service company with the focus of best customer services. Our mission is to provide best of best service in all customer rigging/suspended scaffold needs including but not limited to onsite visit, pre mobilization survey, equipment calculation, engineering drawing and special rigger expertise.</h4>
      <h1>PRODUCTS</h1>
      </div>

	<div class="slide-track">
		<a href="https://altrex.com/int/en" target="_blank" rel="noopener noreferrer"> <div class="slide"> <img src="https://imgur.com/UEUC3gE.png" alt="" /></div></a>
		

		<a href="https://www.tractel.com/us" target="_blank" rel="noopener noreferrer"><div class="slide"> <img src="https://imgur.com/X0Bj4Ki.png" alt="" /> </div></a>
		

		<a href="https://beeaccess.com/" target="_blank" rel="noopener noreferrer"><div class="slide"> <img src="https://imgur.com/HTA0oEr.png" alt="" /> </div></a>

		

		<a href="https://www.betamaxhoist.com/" target="_blank" rel="noopener noreferrer"><div class="slide"> <img src="https://imgur.com/Hz28o9A.png"  alt="" /> </div></a>
		

		<a href="https://www.bisoh.co.jp/en/" target="_blank" rel="noopener noreferrer"><div class="slide"> <img src="https://imgur.com/apHppsm.png"  alt="" /> </div></a>
		

		<a href="https://www.winsafe.com/" target="_blank" rel="noopener noreferrer"><div class="slide"> <img src="https://imgur.com/ljIVRr5.png"  alt="" /> </div></a>
		

		<a href="https://www.enfsolar.com/rgc-hosting" target="_blank" rel="noopener noreferrer"><div class="slide"> 	<img src="https://imgur.com/YgdOW8Y.png"  alt=""/> </div></a>


       </div>
	  


	<center><button onClick={handleClick} class="button-56" role="button">Product List</button></center>

	
	  

      </div>
      
  );
};

