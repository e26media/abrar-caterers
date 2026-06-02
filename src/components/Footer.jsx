import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
<footer className="footer">
  <div className="container">
    <div className="footer-grid">
      <div className="footer-brand">
        <Link to="/" className="nav-logo">
          <img src="assets/images/Logo.png?v=4" className="nav-logo-main" alt="Abrar Caterers Logo" />
          <span className="nav-logo-sub">Bolar · Mangalore</span>
        </Link>
        <p>A trusted name in catering across Mangalore. Quality food, expert chefs, and warm hospitality for every occasion.</p>
        <div className="footer-social">
          <a href="#" className="social-btn" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/abrarcaterers/?hl=en" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="http://www.youtube.com/@abrarcaterers3136" target="_blank" rel="noopener noreferrer" className="social-btn" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Our Services</h4>
        <ul>
          <li><Link to="/services">Wedding Catering</Link></li>
          <li><Link to="/services">Birthday Parties</Link></li>
          <li><Link to="/services">Corporate Events</Link></li>
          <li><Link to="/services">Outdoor Catering</Link></li>
          <li><Link to="/services">Event Management</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact Us</h4>
        <div className="footer-contact-item"><span><i className="fas fa-phone"></i></span><span><a href="tel:+919108659584">+91 9108659584</a></span></div>
        <div className="footer-contact-item"><span><i className="fas fa-phone"></i></span><span><a href="tel:+919035341900">+91 90353 41900</a></span></div>
        <div className="footer-contact-item"><span><i className="fas fa-location-dot"></i></span><span>Bolar, Mangalore, Karnataka</span></div>
        <div className="footer-contact-item"><span><i className="fas fa-clock"></i></span><span>Mon–Sun: 8:00 AM – 9:00 PM</span></div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <p>© 2026 Abrar Caterers, Bolar, Mangalore &nbsp;·&nbsp; All Rights Reserved</p>
    </div>
  </div>
</footer>
  );
};
export default Footer;