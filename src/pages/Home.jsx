import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhonePopup from '../components/PhonePopup';
import EnquiryModal from '../components/EnquiryModal';
import { useEnquiry } from '../context/EnquiryContext';
import './Home.css';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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

    // Particles logic
    const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!REDUCED) {
      const c = document.getElementById('heroParticles');
      if (c && c.children.length === 0) {
        for (let i = 0; i < 16; i++) {
          const el = document.createElement('span');
          const s = Math.random() * 5 + 2;
          Object.assign(el.style, {
            width: `${s}px`,
            height: `${s}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * -10}%`,
            animationDuration: `${Math.random() * 14 + 10}s`,
            animationDelay: `${Math.random() * 12}s`
          });
          c.appendChild(el);
        }
      }
    }

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => obs.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page-container">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="home-hero" id="hero">
        <div className="hero-video-wrap">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="assets/videos/caterging_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-frame"></div>
        <div className="hero-particles" id="heroParticles"></div>
        <div className="hero-content">
          <span className="hero-label">
            <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i> 
            Abrar Caterers 
            <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i>
          </span>
          <h1>Welcome to <span className="accent">Abrar</span></h1>
          <div className="hero-divider-wrap">
            <div className="hero-divider-full">
              <i className="fas fa-feather" style={{color: "var(--gold)", fontSize: "1.1rem"}}></i>
            </div>
          </div>
          <p>Delicious Food and Professional Catering for Every Occasion. From grand weddings to intimate celebrations — crafted with care.</p>
          <div className="hero-btns">
            <button 
              onClick={openEnquiry} 
              className="btn-hero-primary"
            >
              Send Enquiry
            </button>
            <button 
              onClick={() => setIsPopupOpen(true)} 
              className="btn-hero-outline"
            >
              <span>View Our Menu</span>
            </button>
          </div>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>—</span>
            <span>Welcome</span>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-img-wrap reveal">
              <img 
                src="assets/images/IMG-20260312-WA0001.jpg"
                alt="Abrar Caterers cuisine" 
                className="about-img-main" 
              />
              <div className="about-img-badge">
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>
            </div>
            <div className="about-text reveal">
              <span className="section-label">
                <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i> 
                Who We Are 
                <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i>
              </span>
              <h2>Mangalore's Trusted <span className="text-gold">Catering Partner</span></h2>
              <div className="gold-ornament">
                <div className="gold-ornament-line"></div>
                <span className="gold-ornament-icon"><i className="fas fa-star"></i></span>
                <div className="gold-ornament-line"></div>
              </div>
              <p>Abrar Caterers is a reputable catering service located in the heart of Bolar, Mangalore. We have built our legacy on quality, taste, and the warmth of genuine hospitality.</p>
              <p>Our team of experienced chefs brings passion and expertise to every event — whether it's an intimate birthday celebration or a grand wedding feast with hundreds of guests.</p>
              <div className="about-stats">
                <div className="stat-item">
                  <strong>500+</strong>
                  <span>Events Catered</span>
                </div>
                <div className="stat-item">
                  <strong>1000+</strong>
                  <span>Happy Clients</span>
                </div>
                <div className="stat-item">
                  <strong>7 Days</strong>
                  <span>Mon–Sun Service</span>
                </div>
                <div className="stat-item">
                  <strong>8AM–9PM</strong>
                  <span>Operating Hours</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section">
        <div className="container text-center">
          <span className="section-label reveal">
            <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i> 
            What We Offer 
            <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i>
          </span>
          <h2 className="reveal">Our <span className="text-gold">Catering Services</span></h2>
          <div className="gold-ornament reveal">
            <div className="gold-ornament-line"></div>
            <span className="gold-ornament-icon"><i className="fas fa-star"></i></span>
            <div className="gold-ornament-line"></div>
          </div>
          <p className="section-subtitle reveal" style={{color: "rgba(253,246,236,0.60)"}}>
            From intimate gatherings to grand celebrations, we bring exceptional food and flawless service to every occasion.
          </p>
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-card-img-wrap">
                <img src="assets/images/WhatsApp Image 2026-03-16 at 11.41.20 AM  live food counter.jpg" alt="Wedding Catering" className="service-card-img" />
              </div>
              <div className="service-card-body">
                <div className="service-icon"><i className="fas fa-ring" style={{color: "var(--gold-light)"}}></i></div>
                <h3>Wedding Catering</h3>
                <p>Make your special day unforgettable with our elaborate wedding menus crafted to delight every guest.</p>
              </div>
            </div>
            <div className="service-card reveal">
              <div className="service-card-img-wrap">
                <img src="assets/images/WhatsApp Image 2026-03-16 at 11.40.42 AM conference and seminar.jpg" alt="Birthday Parties" className="service-card-img" />
              </div>
              <div className="service-card-body">
                <div className="service-icon"><i className="fas fa-birthday-cake" style={{color: "var(--gold-light)"}}></i></div>
                <h3>Birthday Parties</h3>
                <p>Celebrate milestones with our festive menus and joyful presentation that make parties truly memorable.</p>
              </div>
            </div>
            <div className="service-card reveal">
              <div className="service-card-img-wrap">
                <img src="assets/images/WhatsApp Image 2026-03-16 at 11.48.38 AM corporate gala dinner.jpeg" alt="Corporate Events" className="service-card-img" />
              </div>
              <div className="service-card-body">
                <div className="service-icon"><i className="fas fa-building" style={{color: "var(--gold-light)"}}></i></div>
                <h3>Corporate Catering</h3>
                <p>Professional, punctual, and polished. We cater to boardroom lunches, seminars, and corporate galas.</p>
              </div>
            </div>
            <div className="service-card reveal">
              <div className="service-card-img-wrap">
                <img src="assets/images/WhatsApp Image 2026-03-16 at 11.44.28 AM outdoor celebration night.jpeg" alt="Outdoor Catering" className="service-card-img" />
              </div>
              <div className="service-card-body">
                <div className="service-icon"><i className="fas fa-tent" style={{color: "var(--gold-light)"}}></i></div>
                <h3>Outdoor Catering</h3>
                <p>We set up anywhere — lawns, beaches, or rooftops — delivering the same exceptional quality outdoors.</p>
              </div>
            </div>
            <div className="service-card reveal">
              <div className="service-card-img-wrap">
                <img src="assets/images/WhatsApp Image 2026-03-16 at 12.22.05 PM religios .jpeg" alt="Religious Functions" className="service-card-img" />
              </div>
              <div className="service-card-body">
                <div className="service-icon"><i className="fas fa-mosque" style={{color: "var(--gold-light)"}}></i></div>
                <h3>Religious Functions</h3>
                <p>Respectful, authentic, and flavourful menus tailored for religious ceremonies and community gatherings.</p>
              </div>
            </div>
            <div className="service-card reveal">
              <div className="service-card-img-wrap">
                <img src="assets/images/WhatsApp Image 2026-03-16 at 12.24.50 PM.jpeg" alt="Event Management" className="service-card-img" />
              </div>
              <div className="service-card-body">
                <div className="service-icon"><i className="fas fa-people-roof" style={{color: "var(--gold-light)"}}></i></div>
                <h3>Event Management</h3>
                <p>Beyond food — we help plan, coordinate, and execute events from décor to the last dish served.</p>
              </div>
            </div>
          </div>
          <div style={{marginTop: "52px"}}>
            <Link to="/services" className="btn btn-primary reveal">View All Services</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section-alt">
        <div className="container text-center">
          <span className="section-label reveal">
            <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i> 
            Why Us 
            <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i>
          </span>
          <h2 className="reveal" style={{color: "#fff"}}>Why Choose <span className="text-gold">Abrar Caterers</span></h2>
          <div className="gold-ornament reveal">
            <div className="gold-ornament-line"></div>
            <span className="gold-ornament-icon"><i className="fas fa-star"></i></span>
            <div className="gold-ornament-line"></div>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <span className="why-icon"><i className="fas fa-leaf"></i></span>
              <h3>Quality Ingredients</h3>
              <p>We source fresh, premium ingredients for every dish — because great food starts with great produce.</p>
            </div>
            <div className="why-card reveal">
              <span className="why-icon"><i className="fa-solid fa-user-check"></i></span>
              <h3>Experienced Chefs</h3>
              <p>Our seasoned culinary team brings diverse expertise and decades of experience to your table.</p>
            </div>
            <div className="why-card reveal">
              <span className="why-icon"><i className="fas fa-check-circle"></i></span>
              <h3>Reliable Service</h3>
              <p>Punctual, professional, and prepared — we ensure every event runs smoothly from setup to last bite.</p>
            </div>
            <div className="why-card reveal">
              <span className="why-icon"><i className="fas fa-coins"></i></span>
              <h3>Affordable Packages</h3>
              <p>Exceptional catering that fits your budget. Customized packages for every scale of event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section gallery-section">
        <div className="container">
          <div className="text-center">
            <span className="section-label reveal">
              <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i> 
              Our Work 
              <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i>
            </span>
            <h2 className="reveal">A Glimpse of Our <span className="text-gold">Events</span></h2>
            <div className="gold-ornament reveal">
              <div className="gold-ornament-line"></div>
              <span className="gold-ornament-icon"><i className="fas fa-star"></i></span>
              <div className="gold-ornament-line"></div>
            </div>
          </div>
          <div className="gallery-preview-grid">
            <div className="gp-item reveal">
              <img src="assets/images/WhatsApp Image 2026-03-16 at 11.40.42 AM conference and seminar.jpg" alt="Conference setup" />
              <div className="gp-overlay"><i className="fas fa-plus"></i></div>
            </div>
            <div className="gp-item reveal">
              <img src="assets/images/WhatsApp Image 2026-03-16 at 11.41.20 AM  live food counter.jpg" alt="Live food counter" />
              <div className="gp-overlay"><i className="fas fa-plus"></i></div>
            </div>
            <div className="gp-item reveal">
              <img src="assets/images/WhatsApp Image 2026-03-16 at 11.38.29 AM outdoor graden event.jpeg" alt="Outdoor garden event" />
              <div className="gp-overlay"><i className="fas fa-plus"></i></div>
            </div>
            <div className="gp-item reveal">
              <img src="assets/images/WhatsApp Image 2026-03-16 at 11.49.48 AM wedding feast spread.jpeg" alt="Wedding feast spread" />
              <div className="gp-overlay"><i className="fas fa-plus"></i></div>
            </div>
            <div className="gp-item reveal">
              <img src="assets/images/WhatsApp Image 2026-03-16 at 11.38.47 AM grand wedding reception.jpeg" alt="Grand wedding reception" />
              <div className="gp-overlay"><i className="fas fa-plus"></i></div>
            </div>
          </div>
          <div className="text-center" style={{marginTop: "52px"}}>
            <Link to="/gallery" className="btn btn-primary reveal">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container text-center">
          <span className="section-label reveal">
            <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i> 
            Happy Clients 
            <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i>
          </span>
          <h2 className="reveal">What Our Clients <span className="text-gold">Say</span></h2>
          <div className="gold-ornament reveal">
            <div className="gold-ornament-line"></div>
            <span className="gold-ornament-icon"><i className="fas fa-star"></i></span>
            <div className="gold-ornament-line"></div>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">Abrar Caterers made our wedding day truly magical. The food was absolutely delicious — every guest was asking for more. Their team was professional and incredibly efficient. Highly recommended!</p>
              <div className="testimonial-author">
                <div className="author-avatar">F</div>
                <div className="author-info">
                  <strong>Farrukh & Nida</strong>
                  <span>Wedding Reception, Mangalore</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">We hired them for our company's annual event and they exceeded all expectations. The variety of dishes, the presentation, and the service — everything was top-class. We'll definitely use them again.</p>
              <div className="testimonial-author">
                <div className="author-avatar">R</div>
                <div className="author-info">
                  <strong>Radhika S.</strong>
                  <span>Corporate Event, Mangalore</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">Amazing biryanis, perfectly cooked kebabs, and a dessert spread that was to die for! My son's birthday party was a huge hit, all thanks to Abrar Caterers. Great team, great food!</p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <strong>Ayesha M.</strong>
                  <span>Birthday Party, Bolar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band section">
        <div className="container text-center">
          <span className="section-label reveal" style={{display: "block", marginBottom: "16px"}}>
            <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i> 
            Get In Touch 
            <i className="fas fa-star" style={{margin: "0 8px", color: "var(--gold)"}}></i>
          </span>
          <h2 className="reveal" style={{color: "var(--gold-light)", marginBottom: "14px"}}>Ready to Book Your Event?</h2>
          <p className="cta-subtitle reveal">
            Call us at <strong className="text-gold">+91 9108659584</strong> or <strong className="text-gold">+91 90353 41900</strong> or send an enquiry — we'd love to cater your next celebration.
          </p>
          <button 
            onClick={openEnquiry} 
            className="btn btn-primary reveal"
          >
            Send Enquiry Now
          </button>
        </div>
      </section>


      <PhonePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <Footer />
    </div>
  );
};

export default Home;