import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    
<nav id="navbar" className={"navbar" + (scrolled ? " scrolled" : "")}>
  <div className="nav-inner">
    <Link to="/" onClick={closeMenu} className={"nav-logo " + (location.pathname === '/' ? 'active' : '')}>
      <img src="assets/images/Logo.png?v=4" className="nav-logo-main" alt="Abrar Caterers Logo" />
    </Link>
    <ul className={"nav-links " + (isOpen ? " open" : "")} id="navLinks">
      <li><Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
      <li><Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
      <li><Link to="/services" onClick={closeMenu} className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
      <li><Link to="/menu" onClick={closeMenu} className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link></li>
      <li><Link to="/gallery" onClick={closeMenu} className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
      <li><Link to="/contact" onClick={closeMenu} className={"nav-cta" + (location.pathname === '/contact' ? ' active' : '')}>Contact</Link></li>
    </ul>
    <button className={"hamburger" + (isOpen ? " open" : "")} onClick={() => setIsOpen(!isOpen)} id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
  </div>
</nav>
  );
};
export default Navbar;