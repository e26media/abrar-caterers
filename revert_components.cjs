const fs = require('fs');
let html = fs.readFileSync('e:/abrar-caterers-React js/abrar-caterers-main/index.html', 'utf8');

// Basic replacements for full file
html = html.replace(/class=\"/g, 'className=\"');
html = html.replace(/<img(.*?[^\/])>/g, '<img$1 />');
html = html.replace(/<br>/g, '<br />');
html = html.replace(/<source(.*?[^\/])>/g, '<source$1 />');

// Just extract manually with specific strings since it's safer
let navStart = html.indexOf('<!-- NAVBAR -->');
let navEnd = html.indexOf('</nav>') + 6;
let nav = html.substring(navStart + 15, navEnd);

let heroStart = html.indexOf('<!-- HERO — exact menu page style -->');
let heroEnd = html.indexOf('</section>', heroStart) + 10;
let hero = html.substring(heroStart + 37, heroEnd);

let popupStart = html.indexOf('<!-- PHONE POPUP -->');
let aboutStartMatch = html.indexOf('<!-- ABOUT PREVIEW -->');

let aboutEnd = html.indexOf('</section>', aboutStartMatch) + 10;
let about = html.substring(aboutStartMatch, aboutEnd);

let servicesStart = html.indexOf('<!-- SERVICES -->');
let servicesEnd = html.indexOf('</section>', servicesStart) + 10;
let services = html.substring(servicesStart, servicesEnd);

let whyStart = html.indexOf('<!-- WHY CHOOSE US -->');
let whyEnd = html.indexOf('</section>', whyStart) + 10;
let why = html.substring(whyStart, whyEnd);

let galleryStart = html.indexOf('<!-- GALLERY PREVIEW -->');
let galleryEnd = html.indexOf('</section>', galleryStart) + 10;
let gallery = html.substring(galleryStart, galleryEnd);

let testStart = html.indexOf('<!-- TESTIMONIALS -->');
let testEnd = html.indexOf('</section>', testStart) + 10;
let test = html.substring(testStart, testEnd);

let ctaStart = html.indexOf('<!-- CTA BAND -->');
let ctaEnd = html.indexOf('</section>', ctaStart) + 10;
let cta = html.substring(ctaStart, ctaEnd);

let footerStart = html.indexOf('<!-- FOOTER -->');
let footerEnd = html.indexOf('</footer>', footerStart) + 9;
let footer = html.substring(footerStart + 15, footerEnd);

// Combine home sections
let homeSections = [hero, about, services, why, gallery, test, cta].join('\n\n');

// Links
function fixLinks(str) {
    str = str.replace(/href=\"index\.html\"/g, 'to=\"/\"');
    str = str.replace(/href=\"([a-z]+)\.html\"/g, 'to=\"/$1\"');
    str = str.replace(/<a /g, '<Link ');
    str = str.replace(/<\/a>/g, '</Link>');
    // Remove inline styles causing issues or convert them
    str = str.replace(/style=\"([^\"]*)\"/g, (match, styles) => {
        const rules = styles.split(';').filter(x => x.trim() !== '');
        let obj = '{';
        rules.forEach(rule => {
            const parts = rule.split(':');
            if(parts.length >= 2) {
                let key = parts[0].trim();
                let prop = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
                let val = parts.slice(1).join(':').trim();
                obj += prop + ': "' + val + '", ';
            }
        });
        obj += '}';
        return 'style={' + obj + '}';
    });
    str = str.replace(/<!--(.*?)-->/g, '');
    str = str.replace(/autoplay /g, 'autoPlay playsInline muted loop ');
    return str;
}

homeSections = fixLinks(homeSections);
nav = fixLinks(nav);
footer = fixLinks(footer);

// Clean up some things that JSX does not like (e.g. unescaped content strings not inside {}) 
// Not strictly needed here except wait, <source src... has no />? I fixed it above. 

// Write Home.jsx
let homeContext = `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhonePopup from '../components/PhonePopup';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Reveal animation logic
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => {
      document.querySelectorAll('.reveal').forEach((el) => obs.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-[var(--obsidian)] text-[var(--cream)] pb-0 font-['EB_Garamond',_Georgia,_serif]">
      <Navbar />
      ${homeSections.replace(/<button id=\"menuPopupBtn\".*?>/g, '<button onClick={() => setIsPopupOpen(true)} className="btn-hero-outline">')}
      <PhonePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <Footer />
    </div>
  );
};
export default Home;`;

fs.writeFileSync('src/pages/Home.jsx', homeContext);

let navContext = `import React, { useState, useEffect } from 'react';
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

  const closeMenu = () => setIsOpen(false);

  return (
    ${nav.replace(/<nav(.*?)>/, `<nav$1 className={"navbar" + (scrolled ? " scrolled" : "")}>`).replace(/<ul(.*?)(className=\"nav-links\")(.*?)>/, `<ul$1className={"nav-links" + (isOpen ? " open" : "")}$3>`).replace(/<button(.*?)(className=\"hamburger\")(.*?)>/, `<button$1className={"hamburger" + (isOpen ? " open" : "")} onClick={() => setIsOpen(!isOpen)}$3>`).replace(/<Link to=\"([^"]+)\"/g, (match, url) => {
        return `<Link to="${url}" onClick={closeMenu} className={location.pathname === '${url}' ? 'active' : ''}`;
    }).replace(/className=\{location\.pathname === '\/contact' \? 'active' : ''\} className=\"nav-cta\"/, `className={"nav-cta" + (location.pathname === '/contact' ? ' active' : '')}`)}
  );
};
export default Navbar;`;
fs.writeFileSync('src/components/Navbar.jsx', navContext);

let footerContext = `import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    ${footer}
  );
};
export default Footer;`;
fs.writeFileSync('src/components/Footer.jsx', footerContext);

console.log('Successfully reverted Home, Navbar, and Footer to exact original HTML mappings');
