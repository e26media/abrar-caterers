import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    // Reveal logic
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    
    const enquiryForm = document.getElementById('enquiry-form');
    let submitHandler;
    if (enquiryForm) {
      submitHandler = (e) => {
        e.preventDefault();
        const checkbox = enquiryForm.querySelector('input[type="checkbox"]');
        if (!checkbox || !checkbox.checked) {
          alert('Please agree to the Terms and Conditions before submitting.');
          return;
        }
        enquiryForm.style.display = 'none';
        const successMsg = document.getElementById('form-success');
        if (successMsg) successMsg.style.display = 'block';
        setTimeout(() => {
          enquiryForm.reset();
          enquiryForm.style.display = 'block';
          if (successMsg) successMsg.style.display = 'none';
        }, 4000);
      };
      enquiryForm.addEventListener('submit', submitHandler);
    }
    
    // Add logic for radio labels to be selected
    const radioLabels = document.querySelectorAll('.radio-label');
    const changeHandlers = [];
    radioLabels.forEach(label => {
      const radio = label.querySelector('input[type="radio"]');
      if (radio) {
        const handler = () => {
          document.querySelectorAll('.radio-label').forEach(l => l.classList.remove('selected'));
          if (radio.checked) label.classList.add('selected');
        };
        radio.addEventListener('change', handler);
        changeHandlers.push({ radio, handler });
      }
    });

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => obs.unobserve(el));
      if (enquiryForm && submitHandler) {
        enquiryForm.removeEventListener('submit', submitHandler);
      }
      changeHandlers.forEach(({ radio, handler }) => {
        radio.removeEventListener('change', handler);
      });
    };
  }, []);

  return (
    <div className="bg-[var(--obsidian)] text-[var(--cream)] pb-0 font-['EB_Garamond',_Georgia,_serif]">
      <Navbar />
      <section className="page-hero" id="hero">
  <div className="hero-bg-img"></div>
  <div className="hero-overlay"></div>
  <div className="hero-frame"></div>
  <div className="hero-particles" id="heroParticles"></div>
  <div className="hero-content">
    <span className="hero-label">✦ &nbsp; Abrar Caterers &nbsp; ✦</span>
    <h1>Contact <span className="accent">Us</span></h1>
    <div className="hero-divider-wrap">
      <div className="hero-divider-full"><span>❧</span></div>
    </div>
    <p>Have an event in mind? We'd love to cater it. Get in touch and let's start planning together.</p>
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      <span>—</span>
      <span>Contact</span>
    </div>
  </div>
  <div className="hero-scroll">
    <span>Scroll</span>
    <div className="scroll-line"></div>
  </div>
</section>


<section className="contact-section">
  <div className="container">
    <div className="contact-grid">

      
      <div className="contact-info reveal">
        <span className="section-label">✦ &nbsp; Get in Touch &nbsp; ✦</span>
        <h2>Contact <em>Information</em></h2>
        <div className="info-divider"><span>❧</span></div>
        <p>Whether you're planning a grand wedding or a cozy birthday gathering, we're here to make your event memorable. Reach out and let's start planning.</p>

        <div className="info-item">
          <div className="info-icon-wrap">📞</div>
          <div className="info-text">
            <strong>Phone Number</strong>
            <span><a href="tel:+919108659584" style={{ color: 'rgba(245,230,192,.65)' }}>+91 9108659584</a></span>
            <span style={{ color: 'rgba(201,151,58,.3)' }}>|</span>
            <span><a href="tel:+919035341900" style={{ color: 'rgba(245,230,192,.65)' }}>+91 90353 41900</a></span>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon-wrap">📍</div>
          <div className="info-text">
            <strong>Location</strong>
            <span>Bolar, Mangalore, Karnataka, India</span>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon-wrap">🕐</div>
          <div className="info-text">
            <strong>Working Hours</strong>
            <span>Monday – Sunday<br/>8:00 AM – 9:00 PM</span>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon-wrap">🍽️</div>
          <div className="info-text">
            <strong>Specialities</strong>
            <span>Weddings, Parties, Corporate Events, Religious Functions</span>
          </div>
        </div>

        <div className="social-row">
          <p>Follow us on social media</p>
          <div className="social-btns">
            <a href="#" className="social-btn" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/abrarcaterers/?hl=en" className="social-btn" title="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="http://www.youtube.com/@abrarcaterers3136" className="social-btn" title="YouTube" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      
      <div className="contact-form-wrap reveal">
        <span className="section-label">✦ &nbsp; Send a Message &nbsp; ✦</span>
        <h3>Send Your <em>Enquiry</em></h3>
        <p>Fill in your details below and we'll get back to you with a customised quote.</p>

        <form id="enquiry-form">
          <div className="form-group">
            <label className="form-label">Select Service Type</label>
            <div className="radio-group">
              <label className="radio-label"><input type="radio" name="service" value="caterers" /> Caterers</label>
              <label className="radio-label"><input type="radio" name="service" value="wedding" /> Caterers For Wedding</label>
              <label className="radio-label"><input type="radio" name="service" value="parties" /> Caterers For Parties</label>
              <label className="radio-label"><input type="radio" name="service" value="events" /> Caterers For Events</label>
              <label className="radio-label"><input type="radio" name="service" value="function" /> Caterers For Function</label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Your Name <span style={{ color: 'var(--gold)' }}>*</span></label>
            <input type="text" id="name" name="name" className="form-input" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="mobile">Mobile Number <span style={{ color: 'var(--gold)' }}>*</span></label>
            <input type="tel" id="mobile" name="mobile" className="form-input" placeholder="Enter your mobile number" required pattern="[0-9]{10}" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="event-date">Event Date <span style={{ color: 'rgba(245,230,192,.3)', fontWeight: '400' }}>(optional)</span></label>
            <input type="date" id="event-date" name="event-date" className="form-input" style={{ colorScheme: 'dark' }} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Additional Details <span style={{ color: 'rgba(245,230,192,.3)', fontWeight: '400' }}>(optional)</span></label>
            <textarea id="message" name="message" className="form-input" rows="3" placeholder="Tell us about your event, expected guests, preferences..."></textarea>
          </div>
          <div className="form-group">
            <label className="checkbox-label">
              <input type="checkbox" required />
              I Agree to <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="btn-submit"><span>Send Enquiry →</span></button>
        </form>

        <div className="form-success" id="form-success">
          <div className="success-icon">✦</div>
          <h4>Enquiry Sent Successfully</h4>
          <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
          <p style={{ marginTop: '10px', fontSize: '.9rem', color: 'rgba(245,230,192,.4)' }}>Or call us at <strong style={{ color: 'var(--gold-light)' }}>+91 9108659584</strong> or <strong style={{ color: 'var(--gold-light)' }}>+91 90353 41900</strong></p>
        </div>
      </div>

    </div>
  </div>
</section>


<section className="map-section">
  <div className="container">
    <div className="map-head reveal">
      <span className="section-label">✦ &nbsp; Find Us &nbsp; ✦</span>
      <h2>We're in <em>Bolar, Mangalore</em></h2>
      <div className="orn-line" style={{ marginTop: '16px' }}><span>❧</span></div>
    </div>
    <div className="map-wrap reveal">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9823622849784!2d74.8388!3d12.8606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c5555c4a9%3A0x400ef6143a29b0!2sBolar%2C%20Mangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        title="Abrar Caterers Location – Bolar, Mangalore">
      </iframe>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default Contact;
