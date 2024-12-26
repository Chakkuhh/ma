import React, { useState, useEffect } from "react";
import "../Styles/NavBar.css";
import logo from '../Assets/mahdiya-logo.png';
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  const toggleDropdown = (e) => {
    const parentLi = e.target.closest("li");
    parentLi.classList.toggle("open");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Mahdiya Logo" />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Navigation Links */}
      <ul className={isMenuOpen ? "active" : ""}>
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li onClick={toggleDropdown}>
          <Link to="#" className="desktop-item">Services</Link>
          <ul className="dropdown-menu">
            <li><Link to="/home/hvacPre">Duct Fabrication And Duct Cleaning</Link></li>
            <li><Link to="/home/compressor">Carpentry,Flooring & Paininting</Link></li>
            <li><Link to="/home/aircooler">Chiller Maintanance and Service </Link></li>
            <li><Link to="/home/aircondition">Air Condition & Ventillation</Link></li>
            <li><Link to="/home/motor">Electro Mechanical Work</Link></li>
          </ul>
        </li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li className="btn"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
