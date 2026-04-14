import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEnquiry } from '../context/EnquiryContext';
import './About.css';

const About = () => {
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
          <video autoPlay muted loop playsInline preload="auto" poster="/assets/images/WhatsApp Image 2026-03-24 at 1.09.32 PM about.jpeg">
            <source src="/assets/videos/about_video.mp4" type="video/mp4" />
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
          <h1>Our <span className="accent">Story</span></h1>
          <div className="hero-divider-wrap">
            <div className="hero-divider-full"><i className="fas fa-feather" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}></i></div>
          </div>
          <p>Serving Mangalore with passion, quality, and authentic flavours — a legacy built on trust and taste.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>—</span>
            <span>About</span>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ABOUT STORY */}
      <section className="about-story">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap reveal">
              <img src="/assets/images/WhatsApp Image 2026-03-11 at 12.07.45 PM.jpeg" alt="Our kitchen and team" className="about-img-main" />
              <div className="about-img-badge">
                <strong>10+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
            <div className="reveal">
              <span className="section-label"><i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i> Our History <i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i></span>
              <h2 className="about-text" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem,4vw,3.6rem)", color: "var(--cream)", fontWeight: "300", lineHeight: "1.1", marginBottom: "20px" }}>Rooted in Mangalore,<br/><em style={{ color: "var(--gold-light)" }}>Serving with Heart</em></h2>
              <div className="about-divider"><i className="fas fa-feather" style={{ color: 'var(--gold)' }}></i></div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.08rem", color: "rgba(245,230,192,0.65)", lineHeight: "1.85", marginBottom: "18px", fontWeight: "300" }}>Abrar Caterers is a reputable catering service located in Bolar, Mangalore. We specialize in providing a variety of catering services for events such as weddings, corporate functions, and birthday parties.</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.08rem", color: "rgba(245,230,192,0.65)", lineHeight: "1.85", marginBottom: "18px", fontWeight: "300" }}>Our menu includes both vegetarian and non-vegetarian options along with themed menus tailored to client preferences. We operate Monday to Sunday from 8:00 AM to 9:00 PM.</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.08rem", color: "rgba(245,230,192,0.65)", lineHeight: "1.85", marginBottom: "32px", fontWeight: "300" }}>We are known for our commitment to quality ingredients and customer satisfaction, with a team of skilled chefs ensuring a diverse and memorable dining experience for every event.</p>
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
              <button onClick={openEnquiry} className="btn-primary" style={{ display: 'inline-block' }}><span>Get In Touch</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* HERITAGE & LEADERSHIP */}
      <section className="heritage-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-label"><i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i> Our Heritage <i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i></span>
            <h2>Founded on <em style={{ color: 'var(--gold-light)' }}>Tradition & Excellence</em></h2>
            <div className="orn-line" style={{ marginTop: '20px' }}><i className="fas fa-feather" style={{ color: 'var(--gold)', fontSize: '1.1rem' }}></i></div>
          </div>
          <div className="heritage-grid">
            <div className="heritage-item reveal">
              <span className="heritage-label">Establishment</span>
              <h3>Since 2018</h3>
              <p>Abrar Caterers was established on <strong>16th July, 2018</strong>, rooted in the heart of Mangalore with a vision to serve exceptional cuisine and hospitality.</p>
            </div>
            <div className="heritage-item reveal">
              <span className="heritage-label">Founder</span>
              <h3>BS Mohammed Basheer</h3>
              <p>Founded with a passion for culinary excellence and authentic flavours. A visionary who laid the foundation of trust and quality that defines us today.</p>
            </div>
            <div className="heritage-item reveal">
              <span className="heritage-label">Leadership</span>
              <h3>Next Generation</h3>
              <p>Business led by Mohammed Ashfaq (Founder's Son) and Munaf Parthipady Soofikunhi (Son-in-law), continuing the legacy of excellence with innovation.</p>
            </div>
          </div>
          <div className="heritage-highlight reveal">
            <h4><i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i> Key Milestone</h4>
            <p>First to introduce <strong>LED food counters</strong> in Mangalore in the early 2020s — pioneering modern catering technology and presentation standards in the region.</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-label"><i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i> Our Values <i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i></span>
            <h2>What Drives <em style={{ color: 'var(--gold-light)' }}>Our Work</em></h2>
            <div className="orn-line" style={{ marginTop: '20px' }}><i className="fas fa-feather" style={{ color: 'var(--gold)', fontSize: '1.1rem' }}></i></div>
          </div>
          <div className="values-grid">
            <div className="value-card reveal">
              <div className="value-number">01 &nbsp;/&nbsp; Values</div>
              <span className="value-icon"><i className="fas fa-leaf"></i></span>
              <h3>Quality First</h3>
              <p>We source only the freshest and finest ingredients, because every great meal begins with the best produce available in local markets.</p>
            </div>
            <div className="value-card reveal">
              <div className="value-number">02 &nbsp;/&nbsp; Values</div>
              <span className="value-icon"><i className="fas fa-heart"></i></span>
              <h3>Made with Passion</h3>
              <p>Our chefs put heart into every recipe. Food for us is not just a service — it is an expression of culture, care, and community.</p>
            </div>
            <div className="value-card reveal">
              <div className="value-number">03 &nbsp;/&nbsp; Values</div>
              <span className="value-icon"><i className="fas fa-handshake"></i></span>
              <h3>Client Satisfaction</h3>
              <p>From the first call to the last dish served, we are committed to exceeding your expectations at every step of the journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GOALS & AIMS */}
      <section className="goals-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-label"><i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i> Our Goals & Aims <i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i></span>
            <h2>What <em style={{ color: 'var(--gold-light)' }}>Drives Us</em></h2>
            <div className="orn-line" style={{ marginTop: '20px' }}><i className="fas fa-feather" style={{ color: 'var(--gold)', fontSize: '1.1rem' }}></i></div>
          </div>
          <div className="goals-grid">
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fas fa-face-smile"></i></span>
              <h3>Customer Satisfaction</h3>
            </div>
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fas fa-utensils"></i></span>
              <h3>Food Quality and Quantity</h3>
            </div>
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
              <h3>Hygiene and cleanliness</h3>
            </div>
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fas fa-clock"></i></span>
              <h3>On time delivery and time management</h3>
            </div>
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fas fa-vest"></i></span>
              <h3>Disciplined Staff</h3>
            </div>
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fas fa-recycle"></i></span>
              <h3>Waste management</h3>
            </div>
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fas fa-hands-praying"></i></span>
              <h3>Food for needy- No wastage</h3>
            </div>
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fas fa-coins"></i></span>
              <h3>Cost effective, End to End solution</h3>
            </div>
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fas fa-face-smile-wink"></i></span>
              <h3>Friendly Approach</h3>
            </div>
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fas fa-lightbulb"></i></span>
              <h3>New Concepts</h3>
            </div>
            <div className="goal-item reveal">
              <span className="goal-icon"><i className="fas fa-heart"></i></span>
              <h3>Customer Relationship</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-detailed-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-label"><i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i> Our Services <i className="fas fa-star" style={{ margin: '0 8px', color: 'var(--gold)' }}></i></span>
            <h2>What <em style={{ color: 'var(--gold-light)' }}>We Offer</em></h2>
            <div className="orn-line" style={{ marginTop: '20px' }}><i className="fas fa-feather" style={{ color: 'var(--gold)', fontSize: '1.1rem' }}></i></div>
          </div>
          <div className="service-content reveal">
            <div className="service-main">
              <h3><span style={{ color: 'var(--gold)', fontSize: '1.4rem' }}>●</span> SERVICE:</h3>
              <p>We undertake varied cuisine - North Indian, South Indian, Oriental, Arabic etc. Each cuisine is handled by professional chefs.</p>
            </div>
            <div className="service-support">
              <h4><span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>●</span> Additional Support: <i className="fas fa-chevron-down" style={{ color: 'var(--gold)', fontSize: '1rem', marginLeft: '8px' }}></i></h4>
              <p>Event Management and Destination weddings<br/>
              Corporate arrangements / Decor / Lights and Sound / Live music and sufi songs / Arrangers for catering<br/>
              Utensils / Chairs / Tables / Arabian and AC Tents</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO BAND */}
      <section className="info-band">
        <div className="container overflow-hidden">
          <div className="info-grid">
            <div className="info-item reveal">
              <div className="info-item-content">
                <div className="info-icon-wrap">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-text-group">
                  <h3>Call Us</h3>
                  <div className="info-sep"></div>
                  <p>+91 9108659584</p>
                </div>
              </div>
            </div>
            
            <div className="info-item reveal">
              <div className="info-item-content">
                <div className="info-icon-wrap">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-text-group">
                  <h3>Working Hours</h3>
                  <div className="info-sep"></div>
                  <p>Monday – Sunday<br/>8:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="info-item reveal">
              <div className="info-item-content">
                <div className="info-icon-wrap">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="info-text-group">
                  <h3>Find Us</h3>
                  <div className="info-sep"></div>
                  <p>Bolar, Mangalore<br/>Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
