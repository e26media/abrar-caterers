import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const galleryItems = [
    {
      id: 1,
      cat: 'wedding',
      src: 'assets/images/WhatsApp Image 2026-03-16 at 11.38.47 AM grand wedding reception.jpeg',
      caption: 'Grand Wedding Reception',
      label: 'Weddings'
    },
    {
      id: 2,
      cat: 'wedding',
      src: 'assets/images/WhatsApp Image 2026-03-16 at 11.49.48 AM wedding feast spread.jpeg',
      caption: 'Wedding Feast Spread',
      label: 'Weddings'
    },
    {
      id: 3,
      cat: 'food',
      src: 'assets/images/WhatsApp Image 2026-03-16 at 11.41.20 AM  live food counter.jpg',
      caption: 'Live Food Counter',
      label: 'Food & Dishes'
    },
    {
      id: 4,
      cat: 'outdoor',
      src: 'assets/images/WhatsApp Image 2026-03-16 at 11.38.29 AM outdoor graden event.jpeg',
      caption: 'Outdoor Garden Event',
      label: 'Outdoor Catering'
    },
    {
      id: 5,
      cat: 'outdoor',
      src: 'assets/images/WhatsApp Image 2026-03-16 at 11.44.28 AM outdoor celebration night.jpeg',
      caption: 'Outdoor Celebration Night',
      label: 'Outdoor Catering'
    },
    {
      id: 6,
      cat: 'corporate',
      src: 'assets/images/WhatsApp Image 2026-03-16 at 11.40.42 AM conference and seminar.jpg',
      caption: 'Conference & Seminar',
      label: 'Corporate Events'
    },
    {
      id: 7,
      cat: 'corporate',
      src: 'assets/images/WhatsApp Image 2026-03-16 at 11.48.38 AM corporate gala dinner.jpeg',
      caption: 'Corporate Gala Dinner',
      label: 'Corporate Events'
    },
    {
      id: 8,
      cat: 'birthday',
      src: 'assets/images/WhatsApp Image 2026-03-16 at 11.40.42 AM conference and seminar.jpg',
      caption: 'Birthday Party Setup',
      label: 'Birthday Parties'
    },
    {
      id: 9,
      cat: 'religious',
      src: 'assets/images/WhatsApp Image 2026-03-16 at 12.22.05 PM religios .jpeg',
      caption: 'Religious Function',
      label: 'Religious Functions'
    },
    {
      id: 10,
      cat: 'wedding',
      src: 'assets/images/WhatsApp Image 2026-03-16 at 12.24.50 PM.jpeg',
      caption: 'Elegant Event Setup',
      label: 'Weddings'
    }
  ];

  const visibleItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === activeFilter);

  useEffect(() => {
    // Reveal logic
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });
    
    document.querySelectorAll('.gallery-item, [data-reveal]').forEach((el) => obs.observe(el));
    
    // Particles
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
      obs.disconnect();
    };
  }, [activeFilter]);

  const openLightbox = (index) => {
    setLightbox({ open: true, index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ open: false, index: 0 });
    document.body.style.overflow = '';
  };

  const nextItem = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({ ...prev, index: (prev.index + 1) % visibleItems.length }));
  };

  const prevItem = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({ ...prev, index: (prev.index - 1 + visibleItems.length) % visibleItems.length }));
  };

  return (
    <div className="gallery-page-container">
      <Navbar />
      <section className="page-hero" id="hero">
        <div className="hero-video-wrap">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="assets/videos/gallery_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-frame"></div>
        <div className="hero-particles" id="heroParticles"></div>
        <div className="hero-content">
          <span className="hero-label">✦ &nbsp; Abrar Caterers &nbsp; ✦</span>
          <h1>Our <span className="accent">Gallery</span></h1>
          <div className="hero-divider-wrap">
            <div className="hero-divider-full"><span>❧</span></div>
          </div>
          <p>A visual journey through the events we've crafted — every frame a story of flavour, elegance and celebration.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>—</span>
            <span>Gallery</span>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="gallery-page">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="section-label">✦ &nbsp; Events We've Catered &nbsp; ✦</span>
            <h2>A Glimpse of Our <span className="text-gold">Work</span></h2>
            <div className="orn-line"><span>❧</span></div>
            <p className="section-sub">From grand wedding feasts to intimate celebrations — every event captured in its finest moment.</p>
          </div>

          <div className="filter-wrap">
            {[
              { id: 'all', label: 'All Events', icon: '✦' },
              { id: 'wedding', label: 'Weddings', icon: '💍' },
              { id: 'food', label: 'Food', icon: '🍛' },
              { id: 'birthday', label: 'Parties', icon: '🎂' },
              { id: 'corporate', label: 'Corporate', icon: '🏢' },
              { id: 'outdoor', label: 'Outdoor', icon: '⛺' },
              { id: 'religious', label: 'Religious', icon: '🕌' },
            ].map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span><em>{filter.icon}</em>{filter.label}</span>
              </button>
            ))}
          </div>

          <div className="gallery-masonry" id="galleryGrid">
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={item.src} alt={item.caption} loading="lazy" />
                <div className="gallery-caption">
                  <h4>{item.caption}</h4>
                  <span>{item.label}</span>
                </div>
                <div className="gallery-plus">+</div>
              </div>
            ))}
          </div>

          <div className="gallery-cta" data-reveal>
            <div className="cta-corner tl"></div>
            <div className="cta-corner tr"></div>
            <div className="cta-corner bl"></div>
            <div className="cta-corner br"></div>
            <div className="orn-line" style={{ marginBottom: '28px' }}><span>❧</span></div>
            <h3>Want Us to <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Cater Your Event?</em></h3>
            <p>Let's create beautiful memories together. Reach out to us and we'll craft the perfect experience for your occasion.</p>
            <Link to="/contact" className="btn-primary"><span>Send an Enquiry</span></Link>
          </div>
        </div>
      </section>

      {lightbox.open && (
        <div className="lightbox open" onClick={closeLightbox}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <button className="lightbox-nav lightbox-prev" onClick={prevItem}>&#8592;</button>
            <img 
              className="lightbox-img" 
              src={visibleItems[lightbox.index].src} 
              alt={visibleItems[lightbox.index].caption} 
            />
            <button className="lightbox-nav lightbox-next" onClick={nextItem}>&#8594;</button>
            <div className="lightbox-caption">
              {visibleItems[lightbox.index].caption} · {visibleItems[lightbox.index].label}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
