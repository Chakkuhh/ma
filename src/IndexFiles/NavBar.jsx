import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/NavBar.css";
import logo from '../Assets/mahdiya-logo.png';
import { MdEmail, MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  document.addEventListener("scroll", () => {
    const firstSocial = document.querySelector(".first-social");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      firstSocial.classList.add("hidden");
    } else {
      firstSocial.classList.remove("hidden");
    }
  });
  
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
    <>
  <div className="first-social">
  {/* Contact Information */}
  <div className="email-content-section">
    {/* Email */}
    <a href="mailto:info@mahdiya.ae" className="no-style">
      <MdEmail />
      <p>info@mahdiya.ae</p>
    </a>
    {/* Phone */}
    <a href="tel:+0402365765" className="no-style">
      <FaPhoneAlt />
      <p>04-2365765</p>
    </a>
    {/* Location */}
    <a 
      href="https://www.google.com/maps/search/?api=1&query=Alqusais,+Dubai" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="no-style"
    >
      <IoLocation />
      <p>Alqusais, Dubai</p>
    </a>
  </div>

  {/* Social Media Links */}
  <div className="social-media-section">
      <FaFacebook />
    
      <FaSquareXTwitter />
   <FaLinkedin />
  </div>
</div>


    
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
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li onClick={toggleDropdown}>
          <Link
            to="#"
            className={location.pathname.startsWith("/home") ? "active" : ""}
          >
            Services
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="/home/hvacPre"
                className={location.pathname === "/home/hvacPre" ? "active" : ""}
              >
                Duct Fabrication And Duct Cleaning
              </Link>
            </li>
            <li>
              <Link
                to="/home/compressor"
                className={location.pathname === "/home/compressor" ? "active" : ""}
              >
                Carpentry, Flooring & Painting
              </Link>
            </li>
            <li>
              <Link
                to="/home/aircooler"
                className={location.pathname === "/home/aircooler" ? "active" : ""}
              >
                Chiller Maintenance and Service
              </Link>
            </li>
            <li>
              <Link
                to="/home/aircondition"
                className={location.pathname === "/home/aircondition" ? "active" : ""}
              >
                Air Condition & Ventilation
              </Link>
            </li>
            <li>
              <Link
                to="/home/motor"
                className={location.pathname === "/home/motor" ? "active" : ""}
              >
                Electro Mechanical Work
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "active" : ""}
          >
            Portfolio
          </Link>
        </li>
        <li className="btn">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default NavBar;
