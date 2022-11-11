import React, { useEffect } from "react";
import './Header.css';


const Header = () => {
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


      <header class="header">
  <a href="" class="logo">CSS Nav</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="#work">Home</a></li>
    <li><a href="#about">Products</a></li>
    <li><a href="#careers">Services</a></li>
    <li><a href="#contact">Gallery</a></li>
    <li><a href="#contact">About Us</a></li>

  </ul>
</header>



      </header>
    </>
  );
};

export default Header;
