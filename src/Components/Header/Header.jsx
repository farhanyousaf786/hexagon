import React, { useEffect } from "react";
import './Header.css';


function Header ({homeClick, productsClick, servicesClick, galleryClick, aboutClick}){
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };




  return (
    <>
    <header className="header-section d-none d-xl-block">
    <div class="header">
    <a href="" class="header-logo">Hexagon Scaffolding</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
    <li><a onClick={homeClick} href="#home">Home</a></li>
    <li><a onClick={productsClick} href="#Products">Products</a></li>
    <li><a onClick={servicesClick} href="#Services">Services</a></li>
    <li><a onClick={galleryClick} href="#Gallery">Gallery</a></li>
    <li><a onClick={aboutClick} href="#About">About Us</a></li>
    </ul>
    </div>
    </header>
    </>
  );
};

export default Header;
