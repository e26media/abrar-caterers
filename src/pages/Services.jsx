import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEnquiry } from '../context/EnquiryContext';
import './Services.css';

const Services = () => {
  const { openEnquiry } = useEnquiry();
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

      {/* HERO */}
      <section className="page-hero" id="hero">
        <div className="hero-video-wrap">
          <video autoPlay muted loop playsInline preload="auto" poster="/assets/images/WhatsApp Image 2026-03-24 at 11.54.55 AM.jpeg">
            <source src="/assets/videos/services_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-frame"></div>
        <div className="hero-particles" id="heroParticles">
          {[...Array(16)].map((_, i) => (
            <span 
              key={i} 
              style={{
                width: `${Math.random() * 5 + 2}px`, 
                height: `${Math.random() * 5 + 2}px`, 
                left: `${Math.random() * 100}%`, 
                bottom: `${Math.random() * -10}%`, 
                animationDuration: `${Math.random() * 14 + 10}s`, 
                animationDelay: `${Math.random() * 12}s`
              }}
            ></span>
          ))}
        </div>
        <div className="hero-content">
          <span className="hero-label"><i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i> Abrar Caterers <i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i></span>
          <h1>Our <span className="accent">Services</span></h1>
          <div className="hero-divider-wrap">
            <div className="hero-divider-full"><i className="fas fa-feather" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}></i></div>
          </div>
          <p>Professional catering solutions for every occasion — tailored to your taste, traditions, and budget.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>—</span>
            <span>Services</span>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section relative w-full overflow-hidden">
        <div className="container max-w-[1240px] mx-auto px-[40px] max-[600px]:px-[20px]">

          {/* Wedding */}
          <div className="service-block reveal">
            <div className="service-img-wrap">
              <img src="/assets/images/WhatsApp Image 2026-03-16 at 11.41.20 AM  live food counter.jpeg" alt="Wedding Catering" />
            </div>
            <div className="service-body">
              <div className="service-number">01 &nbsp;/&nbsp; Services</div>
              <span className="service-icon"><i className="fas fa-ring" style={{ color: 'var(--gold-light)' }}></i></span>
              <span className="section-label">Most Popular</span>
              <h2>Wedding <em>Catering</em></h2>
              <p>Your wedding day deserves the finest feast. We craft elaborate wedding menus that celebrate both the occasion and your unique family traditions — from morning breakfast to the grand reception dinner.</p>
              <ul className="service-list">
                <li>Customized wedding menus (veg & non-veg)</li>
                <li>Live cooking stations</li>
                <li>Professional serving staff</li>
                <li>Elegant table setup & décor coordination</li>
                <li>Special sweets & dessert tables</li>
              </ul>
              <div><button onClick={openEnquiry} className="btn-primary" style={{ display: 'inline-block' }}><span>Book Wedding Catering</span></button></div>
            </div>
          </div>

          {/* Birthday */}
          <div className="service-block reverse reveal">
            <div className="service-img-wrap">
              <img src="/assets/images/WhatsApp Image 2026-03-16 at 11.40.42 AM conference and seminar.jpeg" alt="Birthday Party Catering" />
            </div>
            <div className="service-body">
              <div className="service-number">02 &nbsp;/&nbsp; Services</div>
              <span className="service-icon"><i className="fas fa-birthday-cake" style={{ color: 'var(--gold-light)' }}></i></span>
              <h2>Birthday Party <em>Catering</em></h2>
              <p>Every birthday deserves a celebration full of colour, laughter, and incredible food! Whether it's a child's first birthday or a milestone anniversary, we design menus that add joy to every moment.</p>
              <ul className="service-list">
                <li>Themed menu setups for kids & adults</li>
                <li>Finger foods, snacks & appetizers</li>
                <li>Soft drinks, mocktails & dessert counters</li>
                <li>Flexible indoor & outdoor setup</li>
              </ul>
              <div><button onClick={openEnquiry} className="btn-primary" style={{ display: 'inline-block' }}><span>Book Birthday Catering</span></button></div>
            </div>
          </div>

          {/* Corporate */}
          <div className="service-block reveal">
            <div className="service-img-wrap">
              <img src="/assets/images/WhatsApp Image 2026-03-24 at 10.08.44 AM event cr.jpeg" alt="Corporate Event Catering" />
            </div>
            <div className="service-body">
              <div className="service-number">03 &nbsp;/&nbsp; Services</div>
              <span className="service-icon"><i className="fas fa-building" style={{ color: 'var(--gold-light)' }}></i></span>
              <h2>Corporate Event <em>Catering</em></h2>
              <p>Make a lasting impression at your corporate events. We understand the importance of punctuality and presentation in corporate settings, and we deliver both flawlessly.</p>
              <ul className="service-list">
                <li>Board meetings & executive lunches</li>
                <li>Seminars, conferences & product launches</li>
                <li>Annual galas & award ceremonies</li>
                <li>Breakfast & high-tea packages</li>
              </ul>
              <div><button onClick={openEnquiry} className="btn-primary" style={{ display: 'inline-block' }}><span>Book Corporate Catering</span></button></div>
            </div>
          </div>

          {/* Outdoor */}
          <div className="service-block reverse reveal">
            <div className="service-img-wrap">
              <img src="/assets/images/WhatsApp Image 2026-03-16 at 11.38.29 AM outdoor graden event.jpeg" alt="Outdoor Catering" />
            </div>
            <div className="service-body">
              <div className="service-number">04 &nbsp;/&nbsp; Services</div>
              <span className="service-icon"><i className="fas fa-tent" style={{ color: 'var(--gold-light)' }}></i></span>
              <h2>Outdoor <em>Catering</em></h2>
              <p>No venue is too challenging for our experienced team. We set up complete catering operations at beaches, lawns, rooftops, and open grounds across Mangalore and surrounding areas.</p>
              <ul className="service-list">
                <li>Full portable kitchen setup</li>
                <li>BBQ & grill stations</li>
                <li>Waterproof canopy setups</li>
                <li>Transport of all equipment & ingredients</li>
              </ul>
              <div><button onClick={openEnquiry} className="btn-primary" style={{ display: 'inline-block' }}><span>Book Outdoor Catering</span></button></div>
            </div>
          </div>

          {/* Event Management */}
          <div className="service-block reveal">
            <div className="service-img-wrap">
              <img src="/assets/images/WhatsApp Image 2026-03-24 at 10.14.54 AM mange.jpeg" alt="Event Management" />
            </div>
            <div className="service-body">
              <div className="service-number">05 &nbsp;/&nbsp; Services</div>
              <span className="service-icon"><i className="fas fa-people-roof" style={{ color: 'var(--gold-light)' }}></i></span>
              <h2>Event <em>Management</em></h2>
              <p>Beyond food — we offer comprehensive event management support. Let our experienced team handle the coordination so you can enjoy your event completely stress-free.</p>
              <ul className="service-list">
                <li>Full event planning & coordination</li>
                <li>Venue decoration & floral arrangements</li>
                <li>Vendor & logistics management</li>
                <li>Stage & lighting setup assistance</li>
              </ul>
              <div><button onClick={openEnquiry} className="btn-primary" style={{ display: 'inline-block' }}><span>Book Event Management</span></button></div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-corner tl"></div>
        <div className="cta-corner tr"></div>
        <div className="cta-corner bl"></div>
        <div className="cta-corner br"></div>
        <span style={{ fontSize: '2rem', display: 'block', marginBottom: '24px', color: 'var(--gold)' }}><i className="fas fa-star"></i></span>
        <div className="orn-line" style={{ marginBottom: '28px' }}><i className="fas fa-feather" style={{ color: 'var(--gold)', fontSize: '1.1rem' }}></i></div>
        <h2 className="reveal">Let's Plan Your <em>Perfect Event</em></h2>
        <p className="reveal">Contact us today for a customised quote. We'd love to hear about your event and create something truly special together.</p>
        <div className="btn-container reveal">
          <button onClick={openEnquiry} className="btn-primary" style={{ display: 'inline-block' }}><span>Send Enquiry</span></button>
          <a href="tel:+919108659584" className="btn-outline" style={{ display: 'inline-block' }}>Call +91 9108659584</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
