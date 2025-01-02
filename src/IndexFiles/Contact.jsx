import React from 'react'
import '../Styles/Contact.css'
import hvac from '../../src/Assets/telephone.jpg';
import Footer from '../Components/Footer';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className='conatct-container'>
        <div className='contact-background'>
          <img src={hvac} alt='Contact' />
        </div>
        <div className='contact-text'>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-container">
        {/* Left Section */}
        <div className="left-section">
          <h2>Get In Touch</h2>
          <p>Call or Email us regarding questions or issues</p>
          <form className="contact-form">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Your Name" />
            
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Phone Number" />
            
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message"></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </div>
        
        {/* Right Section */}
        <div className="right-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.236282563477!2d55.381504!3d25.281209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5df001be85c5%3A0xd06d261f3e9abcbf!2sMahdiya%20Technical%20Service%20L.L.C!5e0!3m2!1sen!2s!4v1672567181493!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
          <div className="contact-info">
            <div className='email'> 
              <a href="mailto:info@mahdiya.ae">
                <MdEmail />
                <p>info@mahdiya.ae</p>
              </a>
            </div>
            <div className="phone">
              <a href="tel:+0402365765">
                <FaPhone />
                <p>04-2365765</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="social-med">
  <p>Follow Us Socially</p>
  <div className="icons">
    <div className="icon-wrapper">
      <a 
        href="https://wa.me/1232565895542" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="icon-link">
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>
    </div>
    <div className="icon-wrapper">
      <a 
        href="https://www.facebook.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="icon-link">
        <FaFacebook />
        <span>Facebook</span>
      </a>
    </div>
    <div className="icon-wrapper">
      <a 
        href="https://www.instagram.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="icon-link">
        <FaInstagramSquare />
        <span>Instagram</span>
      </a>
    </div>
  </div>
</div>

      <Footer />
    </div>
  )
}

export default Contact
