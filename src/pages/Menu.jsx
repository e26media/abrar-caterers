import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Menu.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('arabic');

  useEffect(() => {
    // Reveal logic using IntersectionObserver
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.menu-card, [data-reveal]').forEach((el) => obs.observe(el));
    
    // Particles logic for hero
    const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!REDUCED) {
      const c = document.getElementById('heroParticles');
      if (c && c.children.length === 0) {
        for (let i = 0; i < 12; i++) {
          const el = document.createElement('span');
          const s = Math.random() * 4 + 2;
          Object.assign(el.style, {
            width: `${s}px`,
            height: `${s}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * -5}%`,
            animationDuration: `${Math.random() * 12 + 8}s`,
            animationDelay: `${Math.random() * 10}s`
          });
          c.appendChild(el);
        }
      }
    }

    return () => {
      obs.disconnect();
    };
  }, [activeTab]); // Re-run when tab changes to observe new cards

  const tabs = [
    { id: 'arabic', label: 'Arabic Counter', icon: '🥙' },
    { id: 'starters', label: 'Starters', icon: '🍢' },
    { id: 'soups', label: 'Soups', icon: '🍜' },
    { id: 'gravy', label: 'Gravy', icon: '🍛' },
    { id: 'rice', label: 'Rice', icon: '🍚' },
    { id: 'breads', label: 'Breads', icon: '🫓' },
    { id: 'salads', label: 'Salads', icon: '🥗' },
    { id: 'seafood', label: 'Sea Food', icon: '🦐' },
    { id: 'deserts', label: 'Deserts', icon: '🍮' },
    { id: 'drinks', label: 'Drinks', icon: '🥤' },
    { id: 'welcome', label: 'Welcome Drinks', icon: '🍹' },
    { id: 'live', label: 'Live Counter', icon: '🔥' },
    { id: 'vegmenu', label: 'Abrar Veg Menu', icon: '🥬' },
    { id: 'dosa', label: 'Dosa Items', icon: '🫓' },
    { id: 'hotdrinks', label: 'Hot Drinks', icon: '☕' },
    { id: 'breakfast', label: 'Veg Breakfast', icon: '🌅' },
  ];

  return (
    <div className="menu-page-container">
      <Navbar />
      <section className="page-hero" id="hero">
        <div className="hero-video-wrap">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="assets/videos/caterging_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-frame"></div>
        <div className="hero-particles" id="heroParticles"></div>
        <div className="hero-content">
          <span className="hero-label">✦ &nbsp; Abrar Caterers &nbsp; ✦</span>
          <h1>Our <span className="accent">Menu</span></h1>
          <div className="hero-divider-wrap">
            <div className="hero-divider-full"><span>❧</span></div>
          </div>
          <p>A curated selection of vegetarian &amp; non-vegetarian dishes, crafted by our expert chefs for every special occasion.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>—</span>
            <span>Menu</span>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="menu-page">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="section-label">✦ &nbsp; Curated for You &nbsp; ✦</span>
            <h2>Choose Your <span className="text-gold">Flavour</span></h2>
            <div className="orn-line"><span>❧</span></div>
            <p className="section-sub">All menus can be fully customised based on your preferences, dietary needs, and the scale of your celebration.</p>
          </div>

          <div className="tabs-wrap" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={tab.id}
              >
                <span><em>{tab.icon}</em>{tab.label}</span>
              </button>
            ))}
          </div>

    
    <div className={`menu-panel ${activeTab === 'arabic' ? 'active' : ''}`} id="arabic" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Arabic Counter/hummus.jpg" alt="Arabic Counter" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Authentic Arabic &nbsp; ✦</span>
          <h2 className="cat-title">Arabic<br /><em>Counter</em></h2>
          <p className="cat-desc">Traditional Middle Eastern delicacies including fresh salads, succulent grilled meats, and flavorful dips.</p>
        </div>
        <span className="cat-badge">🥙 &nbsp; Arabic Counter</span>
      </div>
      <div className="menu-grid">

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/arabic salad.jpg" alt="Arabic Salad" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Arabic</div>
            <h4>Arabic Salad</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/checken bbq.jpg" alt="Chicken BBQ" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Arabic</div>
            <h4>Chicken BBQ</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/chichen seekh touq.jpg" alt="Chicken Seekh Touq" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Arabic</div>
            <h4>Chicken Seekh Touq</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/chicken soup.jpg" alt="Chicken Soup" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Arabic</div>
            <h4>Chicken Soup</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/hummus.jpg" alt="Hummus" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Arabic</div>
            <h4>Hummus</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/kubbus.jpg" alt="Kubbus" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Arabic</div>
            <h4>Kubbus</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/muthabal.jpg" alt="Muthabal" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Arabic</div>
            <h4>Muthabal</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/mutton seekh.jpg" alt="Mutton Seekh" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Arabic</div>
            <h4>Mutton Seekh</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/mutton soup.jpg" alt="Mutton Soup" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Arabic</div>
            <h4>Mutton Soup</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/prawns bbq.jpg" alt="Prawns BBQ" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Arabic</div>
            <h4>Prawns BBQ</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Arabic Counter/Tomato Chutney .jpg" alt="Tomato Chutney" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Arabic</div>
            <h4>Tomato Chutney</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>

    
    <div className={`menu-panel ${activeTab === 'starters' ? 'active' : ''}`} id="starters" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Starters/Al Faham Chicken .jpg" alt="Starters" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Starters &nbsp; ✦</span>
          <h2 className="cat-title">Starters</h2>
          <p className="cat-desc">Delicious appetizers and kebabs to kick off your feast with flavorful crunch and spice.</p>
        </div>
        <span className="cat-badge">🍢 &nbsp; Starters</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/Al Faham Chicken .jpg" alt="Al Faham Chicken" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Starters</div>
            <h4>Al Faham Chicken</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/Chicken  Grill.jpg" alt="Chicken Grill" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Starters</div>
            <h4>Chicken Grill</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/Chicken Malai Tikka.jpg" alt="Chicken Malai Tikka" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Starters</div>
            <h4>Chicken Malai Tikka</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/Chicken Skewers.jpg" alt="Chicken Skewers" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Starters</div>
            <h4>Chicken Skewers</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/Chicken kabab .jpg" alt="Chicken Kabab" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Starters</div>
            <h4>Chicken Kabab</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/Mutton Liver Pepper Fry.jpeg" alt="Mutton Liver Pepper Fry" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Starters</div>
            <h4>Mutton Liver Pepper Fry</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/achari tikka.jpg" alt="Achari Tikka" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Starters</div>
            <h4>Achari Tikka</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/bejha fry.jpg" alt="Bejha Fry" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Starters</div>
            <h4>Bejha Fry</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/broasted.jpg" alt="Broasted" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Starters</div>
            <h4>Broasted</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/cheese balls.jpg" alt="Cheese Balls" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Starters</div>
            <h4>Cheese Balls</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/kad koli.jpg" alt="Kad Koli" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Starters</div>
            <h4>Kad Koli</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/karachii tikka.jpeg" alt="Karachii Tikka" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">12 &nbsp;/&nbsp; Starters</div>
            <h4>Karachii Tikka</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/lamb chop.jpg" alt="Lamb Chop" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">13 &nbsp;/&nbsp; Starters</div>
            <h4>Lamb Chop</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/liver pepper.jpg" alt="Liver Pepper" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">14 &nbsp;/&nbsp; Starters</div>
            <h4>Liver Pepper</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/lolipop.jpg" alt="Lolipop" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">15 &nbsp;/&nbsp; Starters</div>
            <h4>Lolipop</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/malai chicken.jpg" alt="Malai Chicken" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">16 &nbsp;/&nbsp; Starters</div>
            <h4>Malai Chicken</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/malai tikka.jpg" alt="Malai Tikka" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">17 &nbsp;/&nbsp; Starters</div>
            <h4>Malai Tikka</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/prawns tawa.jpg" alt="Prawns Tawa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">18 &nbsp;/&nbsp; Starters</div>
            <h4>Prawns Tawa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/raan.jpg" alt="Raan" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">19 &nbsp;/&nbsp; Starters</div>
            <h4>Raan</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/reshmi tikka.jpg" alt="Reshmi Tikka" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">20 &nbsp;/&nbsp; Starters</div>
            <h4>Reshmi Tikka</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Starters/spring chicken.jpg" alt="Spring Chicken" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">21 &nbsp;/&nbsp; Starters</div>
            <h4>Spring Chicken</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>


    
    <div className={`menu-panel ${activeTab === 'soups' ? 'active' : ''}`} id="soups" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Soups/Chicken Soup.jpg" alt="Soups" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Soups &nbsp; ✦</span>
          <h2 className="cat-title">Soups</h2>
          <p className="cat-desc">Warm, comforting broths and creamy soups prepared with fresh ingredients and aromatic spices.</p>
        </div>
        <span className="cat-badge">🍜 &nbsp; Soups</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Soups/Chicken Soup.jpg" alt="Chicken Soup" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Soups</div>
            <h4>Chicken Soup</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Soups/Clear Soup.jpg" alt="Clear Soup" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Soups</div>
            <h4>Clear Soup</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Soups/Cream Soup.jpg" alt="Cream Soup" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Soups</div>
            <h4>Cream Soup</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Soups/Mutton Soup.jpg" alt="Mutton Soup" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Soups</div>
            <h4>Mutton Soup</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Soups/Paya Soup.jpg" alt="Paya Soup" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Soups</div>
            <h4>Paya Soup</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Soups/SeaFood.jpg" alt="Seafood" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Soups</div>
            <h4>Seafood</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Soups/Veg Manchow Soup.jpg" alt="Veg Manchow Soup" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Soups</div>
            <h4>Veg Manchow Soup</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Soups/Vegetable Soup.jpg" alt="Vegetable Soup" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Soups</div>
            <h4>Vegetable Soup</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>


    
    <div className={`menu-panel ${activeTab === 'gravy' ? 'active' : ''}`} id="gravy" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Gravy/Abrar Special Dum Gravy Boneless.jpg" alt="Gravy" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Gravy &nbsp; ✦</span>
          <h2 className="cat-title">Gravy</h2>
          <p className="cat-desc">Rich, flavorful curries and gravies from North Indian butter chicken to spicy Mangalorean specialties.</p>
        </div>
        <span className="cat-badge">🍛 &nbsp; Gravy</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Abrar Special Dum Gravy Boneless.jpg" alt="Abrar Special Dum Gravy Boneless" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Gravy</div>
            <h4>Abrar Special Dum Gravy Boneless</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Butter Chicken.jpg" alt="Butter Chicken" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Gravy</div>
            <h4>Butter Chicken</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Chicken Coconut.jpg" alt="Chicken Coconut" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Gravy</div>
            <h4>Chicken Coconut</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Chicken Coriander.jpg" alt="Chicken Coriander" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Gravy</div>
            <h4>Chicken Coriander</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Chicken Ghee Roast.jpg" alt="Chicken Ghee Roast" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Gravy</div>
            <h4>Chicken Ghee Roast</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Chicken Kurma.jpg" alt="Chicken Kurma" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Gravy</div>
            <h4>Chicken Kurma</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Chicken Pepper Masala.jpg" alt="Chicken Pepper Masala" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Gravy</div>
            <h4>Chicken Pepper Masala</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Chicken Stew.jpg" alt="Chicken Stew" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Gravy</div>
            <h4>Chicken Stew</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Chicken Tikka Masala.jpg" alt="Chicken Tikka Masala" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Gravy</div>
            <h4>Chicken Tikka Masala</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Chicken Uruval.jpg" alt="Chicken Uruval" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Gravy</div>
            <h4>Chicken Uruval</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Chilli Chicken.jpg" alt="Chilli Chicken" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Gravy</div>
            <h4>Chilli Chicken</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Mutton Coconut.jpg" alt="Mutton Coconut" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">12 &nbsp;/&nbsp; Gravy</div>
            <h4>Mutton Coconut</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Mutton Coriander.jpg" alt="Mutton Coriander" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">13 &nbsp;/&nbsp; Gravy</div>
            <h4>Mutton Coriander</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Mutton Kadai.jpg" alt="Mutton Kadai" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">14 &nbsp;/&nbsp; Gravy</div>
            <h4>Mutton Kadai</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Mutton Kurma.jpg" alt="Mutton Kurma" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">15 &nbsp;/&nbsp; Gravy</div>
            <h4>Mutton Kurma</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Mutton Lajawab.jpg" alt="Mutton Lajawab" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">16 &nbsp;/&nbsp; Gravy</div>
            <h4>Mutton Lajawab</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Mutton Pepper Masala.jpg" alt="Mutton Pepper Masala" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">17 &nbsp;/&nbsp; Gravy</div>
            <h4>Mutton Pepper Masala</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Mutton Ragon Gosh.jpg" alt="Mutton Ragon Gosh" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">18 &nbsp;/&nbsp; Gravy</div>
            <h4>Mutton Ragon Gosh</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Mutton Shahi Kurma.jpg" alt="Mutton Shahi Kurma" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">19 &nbsp;/&nbsp; Gravy</div>
            <h4>Mutton Shahi Kurma</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Mutton Stew.jpg" alt="Mutton Stew" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">20 &nbsp;/&nbsp; Gravy</div>
            <h4>Mutton Stew</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Nada Mutton curry.jpg" alt="Nada Mutton Curry" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">21 &nbsp;/&nbsp; Gravy</div>
            <h4>Nada Mutton Curry</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Nada chicken curry.jpg" alt="Nada Chicken Curry" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">22 &nbsp;/&nbsp; Gravy</div>
            <h4>Nada Chicken Curry</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/Paya Curry.jpg" alt="Paya Curry" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">23 &nbsp;/&nbsp; Gravy</div>
            <h4>Paya Curry</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Gravy/chicken Shahi Kurma.jpg" alt="Chicken Shahi Kurma" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">24 &nbsp;/&nbsp; Gravy</div>
            <h4>Chicken Shahi Kurma</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>


    
    <div className={`menu-panel ${activeTab === 'rice' ? 'active' : ''}`} id="rice" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Rice/Prawn Biryani.jpg" alt="Rice" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Rice &nbsp; ✦</span>
          <h2 className="cat-title">Rice</h2>
          <p className="cat-desc">Fragrant biryanis, pulao, and fried rice varieties cooked with aromatic basmati and traditional spices.</p>
        </div>
        <span className="cat-badge">🍚 &nbsp; Rice</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/Prawn Biryani.jpg" alt="Prawn Biryani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Rice</div>
            <h4>Prawn Biryani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/Vegetable Fried Rice.jpg" alt="Vegetable Fried Rice" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Rice</div>
            <h4>Vegetable Fried Rice</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/banglore biryani.jpg" alt="Banglore Biryani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Rice</div>
            <h4>Banglore Biryani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/bhatkal Biryani.jpg" alt="Bhatkal Biryani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Rice</div>
            <h4>Bhatkal Biryani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/chicken biryani.jpg" alt="Chicken Biryani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Rice</div>
            <h4>Chicken Biryani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/chicken fried rice.jpg" alt="Chicken Fried Rice" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Rice</div>
            <h4>Chicken Fried Rice</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/chickmanglore biryani.jpg" alt="Chickmanglore Biryani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Rice</div>
            <h4>Chickmanglore Biryani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/fish biryani.jpg" alt="Fish Biryani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Rice</div>
            <h4>Fish Biryani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/ghee rice.jpg" alt="Ghee Rice" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Rice</div>
            <h4>Ghee Rice</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/hydrabad biryani.jpg" alt="Hydrabad Biryani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Rice</div>
            <h4>Hydrabad Biryani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/kabsa.jpg" alt="Kabsa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Rice</div>
            <h4>Kabsa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/mutton biryani.jpg" alt="Mutton Biryani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">12 &nbsp;/&nbsp; Rice</div>
            <h4>Mutton Biryani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/pulav.jpg" alt="Pulav" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">13 &nbsp;/&nbsp; Rice</div>
            <h4>Pulav</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/semige biryani.jpg" alt="Semige Biryani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">14 &nbsp;/&nbsp; Rice</div>
            <h4>Semige Biryani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rice/thalaserry biryani.jpg" alt="Thalaserry Biryani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">15 &nbsp;/&nbsp; Rice</div>
            <h4>Thalaserry Biryani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>


    
    <div className={`menu-panel ${activeTab === 'breads' ? 'active' : ''}`} id="breads" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Rooti and Breads/Aapam.jpg" alt="Breads" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Breads &nbsp; ✦</span>
          <h2 className="cat-title">Breads</h2>
          <p className="cat-desc">Freshly baked tandoori breads, parathas, and regional specialties served hot from the oven.</p>
        </div>
        <span className="cat-badge">🫓 &nbsp; Breads</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Aapam.jpg" alt="Aapam" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Breads</div>
            <h4>Aapam</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Alu Parota.jpg" alt="Alu Parota" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Breads</div>
            <h4>Alu Parota</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Chapathi.jpg" alt="Chapathi" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Breads</div>
            <h4>Chapathi</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Dosa.jpg" alt="Dosa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Breads</div>
            <h4>Dosa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Idili.jpg" alt="Idili" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Breads</div>
            <h4>Idili</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Kalthappam.jpg" alt="Kalthappam" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Breads</div>
            <h4>Kalthappam</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Keema Parota.jpg" alt="Keema Parota" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Breads</div>
            <h4>Keema Parota</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Moode.jpg" alt="Moode" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Breads</div>
            <h4>Moode</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Naan.jpg" alt="Naan" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Breads</div>
            <h4>Naan</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Nai Pathir.jpg" alt="Nai Pathir" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Breads</div>
            <h4>Nai Pathir</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Neer.jpg" alt="Neer" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Breads</div>
            <h4>Neer</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Paav.jpg" alt="Paav" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">12 &nbsp;/&nbsp; Breads</div>
            <h4>Paav</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Palak Parota.jpg" alt="Palak Parota" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">13 &nbsp;/&nbsp; Breads</div>
            <h4>Palak Parota</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Parota.jpg" alt="Parota" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">14 &nbsp;/&nbsp; Breads</div>
            <h4>Parota</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Rumali Roti.jpg" alt="Rumali Roti" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">15 &nbsp;/&nbsp; Breads</div>
            <h4>Rumali Roti</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Semige.jpg" alt="Semige" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">16 &nbsp;/&nbsp; Breads</div>
            <h4>Semige</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/Tandoori Roti.jpg" alt="Tandoori Roti" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">17 &nbsp;/&nbsp; Breads</div>
            <h4>Tandoori Roti</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Rooti and Breads/pathiri.jpg" alt="Pathiri" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">18 &nbsp;/&nbsp; Breads</div>
            <h4>Pathiri</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>


    
    <div className={`menu-panel ${activeTab === 'salads' ? 'active' : ''}`} id="salads" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Salads/Abrar Special Salad.jpg" alt="Salads" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Salads &nbsp; ✦</span>
          <h2 className="cat-title">Salads</h2>
          <p className="cat-desc">Fresh, crisp salads and cooling raitas to complement your meal with healthy crunch.</p>
        </div>
        <span className="cat-badge">🥗 &nbsp; Salads</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Abrar Special Salad.jpg" alt="Abrar Special Salad" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Salads</div>
            <h4>Abrar Special Salad</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Arabic Salad.jpg" alt="Arabic Salad" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Salads</div>
            <h4>Arabic Salad</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Curd.jpg" alt="Curd" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Salads</div>
            <h4>Curd</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Green Salad.jpg" alt="Green Salad" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Salads</div>
            <h4>Green Salad</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Macroni Salad.jpg" alt="Macroni Salad" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Salads</div>
            <h4>Macroni Salad</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Mix Salad.jpg" alt="Mix Salad" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Salads</div>
            <h4>Mix Salad</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Mix Veg Salad Special.jpg" alt="Mix Veg Salad Special" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Salads</div>
            <h4>Mix Veg Salad Special</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Pappad Lijjat.jpg" alt="Pappad Lijjat" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Salads</div>
            <h4>Pappad Lijjat</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Pappad Masala.jpg" alt="Pappad Masala" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Salads</div>
            <h4>Pappad Masala</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Pickles.jpg" alt="Pickles" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Salads</div>
            <h4>Pickles</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Raitha.jpg" alt="Raitha" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Salads</div>
            <h4>Raitha</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/Russian Salad.jpg" alt="Russian Salad" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">12 &nbsp;/&nbsp; Salads</div>
            <h4>Russian Salad</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Salads/White Pasta  Salad.jpg" alt="White Pasta Salad" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">13 &nbsp;/&nbsp; Salads</div>
            <h4>White Pasta Salad</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>


    
    <div className={`menu-panel ${activeTab === 'seafood' ? 'active' : ''}`} id="seafood" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Sea Food/All fish.jpg" alt="Sea Food" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Sea Food &nbsp; ✦</span>
          <h2 className="cat-title">Sea Food</h2>
          <p className="cat-desc">Fresh coastal catch featuring Mangalorean fish curries, prawns, squid and grilled seafood specialties.</p>
        </div>
        <span className="cat-badge">🦐 &nbsp; Sea Food</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Sea Food/All fish.jpg" alt="All Fish" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Sea</div>
            <h4>All Fish</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Sea Food/BBQ Sea Food.jpg" alt="Bbq Sea Food" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Sea</div>
            <h4>Bbq Sea Food</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Sea Food/Fish And Chips.jpg" alt="Fish and Chips" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Sea</div>
            <h4>Fish and Chips</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Sea Food/Fish Curies.jpg" alt="Fish Curies" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Sea</div>
            <h4>Fish Curies</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Sea Food/Prawns And Tempura.jpg" alt="Prawns and Tempura" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Sea</div>
            <h4>Prawns and Tempura</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Sea Food/Squid Pepper Manchurian.jpg" alt="Squid Pepper Manchurian" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Sea</div>
            <h4>Squid Pepper Manchurian</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Sea Food/prawns ghee roast.jpg" alt="Prawns Ghee Roast" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Sea</div>
            <h4>Prawns Ghee Roast</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>


    
    <div className={`menu-panel ${activeTab === 'deserts' ? 'active' : ''}`} id="deserts" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Deserts/Authentic Arabic Sweets.jpg" alt="Deserts" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Deserts &nbsp; ✦</span>
          <h2 className="cat-title">Deserts</h2>
          <p className="cat-desc">Traditional Indian sweets, creamy kheer, halwa and decadent desserts to sweeten your celebration.</p>
        </div>
        <span className="cat-badge">🍮 &nbsp; Deserts</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Authentic Arabic Sweets.jpg" alt="Authentic Arabic Sweets" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Deserts</div>
            <h4>Authentic Arabic Sweets</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Brownies and Pastries.jpg" alt="Brownies and Pastries" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Deserts</div>
            <h4>Brownies and Pastries</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Carrot Halwa.jpg" alt="Carrot Halwa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Deserts</div>
            <h4>Carrot Halwa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Dry Fruits Halwa.jpg" alt="Dry Fruits Halwa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Deserts</div>
            <h4>Dry Fruits Halwa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Gulab Jamun.jpg" alt="Gulab Jamun" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Deserts</div>
            <h4>Gulab Jamun</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Hollige Payassam.jpg" alt="Hollige Payassam" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Deserts</div>
            <h4>Hollige Payassam</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Jalebi With Rabdi.jpg" alt="Jalebi With Rabdi" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Deserts</div>
            <h4>Jalebi With Rabdi</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Kashi Halwa.jpg" alt="Kashi Halwa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Deserts</div>
            <h4>Kashi Halwa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Kheer.jpg" alt="Kheer" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Deserts</div>
            <h4>Kheer</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Mysore Pak.jpg" alt="Mysore Pak" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Deserts</div>
            <h4>Mysore Pak</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Puddings.jpg" alt="Puddings" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Deserts</div>
            <h4>Puddings</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Ras Malai.jpg" alt="Ras Malai" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">12 &nbsp;/&nbsp; Deserts</div>
            <h4>Ras Malai</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Shahi Tukda.jpg" alt="Shahi Tukda" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">13 &nbsp;/&nbsp; Deserts</div>
            <h4>Shahi Tukda</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Sheer Kurma.jpg" alt="Sheer Kurma" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">14 &nbsp;/&nbsp; Deserts</div>
            <h4>Sheer Kurma</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Deserts/Special Cakes.jpg" alt="Special Cakes" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">15 &nbsp;/&nbsp; Deserts</div>
            <h4>Special Cakes</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>


    
    <div className={`menu-panel ${activeTab === 'drinks' ? 'active' : ''}`} id="drinks" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Drinks/Apple Mojito.jpg" alt="Drinks" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Drinks &nbsp; ✦</span>
          <h2 className="cat-title">Drinks</h2>
          <p className="cat-desc">Refreshing beverages including fresh juices, shakes, sodas and cooling summer specials.</p>
        </div>
        <span className="cat-badge">🥤 &nbsp; Drinks</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Drinks/Apple Mojito.jpg" alt="Apple Mojito" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Drinks</div>
            <h4>Apple Mojito</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Drinks/Falooda.jpg" alt="Falooda" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Drinks</div>
            <h4>Falooda</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Drinks/Fresh Juice.jpg" alt="Fresh Juice" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Drinks</div>
            <h4>Fresh Juice</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Drinks/Happy Fizz.jpg" alt="Happy Fizz" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Drinks</div>
            <h4>Happy Fizz</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Drinks/Kulki Sarbat.jpg" alt="Kulki Sarbat" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Drinks</div>
            <h4>Kulki Sarbat</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Drinks/Lime Soda.jpg" alt="Lime Soda" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Drinks</div>
            <h4>Lime Soda</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Drinks/Milk Shakes.jpg" alt="Milk Shakes" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Drinks</div>
            <h4>Milk Shakes</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Drinks/Mojito.jpg" alt="Mojito" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Drinks</div>
            <h4>Mojito</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Drinks/Soft Drinks.jpg" alt="Soft Drinks" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Drinks</div>
            <h4>Soft Drinks</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>


    
    <div className={`menu-panel ${activeTab === 'welcome' ? 'active' : ''}`} id="welcome" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Welcome Drinks/Anjeer Mlik Shake.jpg" alt="Welcome Drinks" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Welcome Drinks &nbsp; ✦</span>
          <h2 className="cat-title">Welcome</h2>
          <p className="cat-desc">Elegant welcome beverages and refreshing drinks to greet your guests as they arrive.</p>
        </div>
        <span className="cat-badge">🍹 &nbsp; Welcome Drinks</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Anjeer Mlik Shake.jpg" alt="Anjeer Mlik Shake" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Welcome</div>
            <h4>Anjeer Mlik Shake</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Badam spl.jpg" alt="Badam Spl" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Welcome</div>
            <h4>Badam Spl</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Butter Scotch spl.jpg" alt="Butter Scotch Spl" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Welcome</div>
            <h4>Butter Scotch Spl</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Ginger Lime.jpg" alt="Ginger Lime" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Welcome</div>
            <h4>Ginger Lime</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Grape pulp.jpg" alt="Grape Pulp" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Welcome</div>
            <h4>Grape Pulp</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Lichi.jpg" alt="Lichi" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Welcome</div>
            <h4>Lichi</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Mango Pulp.jpg" alt="Mango Pulp" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Welcome</div>
            <h4>Mango Pulp</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Mint Lime.jpg" alt="Mint Lime" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Welcome</div>
            <h4>Mint Lime</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Pineapple.jpg" alt="Pineapple" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Welcome</div>
            <h4>Pineapple</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Pista spl.jpg" alt="Pista Spl" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Welcome</div>
            <h4>Pista Spl</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Strawberry Shake.jpg" alt="Strawberry Shake" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Welcome</div>
            <h4>Strawberry Shake</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Sweet Melon.jpg" alt="Sweet Melon" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">12 &nbsp;/&nbsp; Welcome</div>
            <h4>Sweet Melon</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Tang.jpg" alt="Tang" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">13 &nbsp;/&nbsp; Welcome</div>
            <h4>Tang</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Tender Milk.jpg" alt="Tender Milk" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">14 &nbsp;/&nbsp; Welcome</div>
            <h4>Tender Milk</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Tender Water.jpg" alt="Tender Water" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">15 &nbsp;/&nbsp; Welcome</div>
            <h4>Tender Water</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Welcome Drinks/Water Melon.jpg" alt="Water Melon" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">16 &nbsp;/&nbsp; Welcome</div>
            <h4>Water Melon</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>


    
    <div className={`menu-panel ${activeTab === 'live' ? 'active' : ''}`} id="live" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Live Counter/burger.jpg" alt="Live Counter" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Live Counter &nbsp; ✦</span>
          <h2 className="cat-title">Live</h2>
          <p className="cat-desc">Interactive food stations with live cooking, fresh preparations and customizable street food favorites.</p>
        </div>
        <span className="cat-badge">🔥 &nbsp; Live Counter</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/burger.jpg" alt="Burger" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Live</div>
            <h4>Burger</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/charmuri.jpg" alt="Charmuri" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Live</div>
            <h4>Charmuri</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/chocolate-fountain.jpg" alt="Chocolate Fountain" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Live</div>
            <h4>Chocolate Fountain</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/color-tea.jpg" alt="Color Tea" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Live</div>
            <h4>Color Tea</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/cotton-candy.jpg" alt="Cotton Candy" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Live</div>
            <h4>Cotton Candy</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/dosa.jpg" alt="Dosa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Live</div>
            <h4>Dosa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/fire-paan.jpg" alt="Fire Paan" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Live</div>
            <h4>Fire Paan</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/frech-fries.jpg" alt="Frech Fries" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Live</div>
            <h4>Frech Fries</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/gola.jpg" alt="Gola" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Live</div>
            <h4>Gola</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/kerala-snacks.jpg" alt="Kerala Snacks" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Live</div>
            <h4>Kerala Snacks</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/marinated-fruits.jpg" alt="Marinated Fruits" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Live</div>
            <h4>Marinated Fruits</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/nuggets.jpg" alt="Nuggets" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">12 &nbsp;/&nbsp; Live</div>
            <h4>Nuggets</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/omlet.jpg" alt="Omlet" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">13 &nbsp;/&nbsp; Live</div>
            <h4>Omlet</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/pani-puri.jpg" alt="Pani Puri" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">14 &nbsp;/&nbsp; Live</div>
            <h4>Pani Puri</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/popcorn.jpg" alt="Popcorn" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">15 &nbsp;/&nbsp; Live</div>
            <h4>Popcorn</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/shawarma.jpg" alt="Shawarma" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">16 &nbsp;/&nbsp; Live</div>
            <h4>Shawarma</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/sugar cane.jpg" alt="Sugar Cane" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">17 &nbsp;/&nbsp; Live</div>
            <h4>Sugar Cane</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/sweet corn.jpg" alt="Sweet Corn" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">18 &nbsp;/&nbsp; Live</div>
            <h4>Sweet Corn</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/tea-snacks.jpg" alt="Tea Snacks" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">19 &nbsp;/&nbsp; Live</div>
            <h4>Tea Snacks</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Live Counter/tea.jpg" alt="Tea" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">20 &nbsp;/&nbsp; Live</div>
            <h4>Tea</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>

    
    <div className={`menu-panel ${activeTab === 'vegmenu' ? 'active' : ''}`} id="vegmenu" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/abrar veg menu/veg biriyani.jpg" alt="Abrar Veg Menu" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Vegetarian Special &nbsp; ✦</span>
          <h2 className="cat-title">Abrar<br /><em>Veg Menu</em></h2>
          <p className="cat-desc">Complete vegetarian feast with traditional South Indian dishes, breads, rice varieties and sweet desserts.</p>
        </div>
        <span className="cat-badge">🥬 &nbsp; Abrar Veg Menu</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/Chapathi.jpg" alt="Chapathi" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Veg</div>
            <h4>Chapathi</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/Gobi manchurian.jpg" alt="Gobi Manchurian" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Veg</div>
            <h4>Gobi Manchurian</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/Thondekai cashew kadle Palya.jpg" alt="Thondekai Cashew Kadle Palya" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Veg</div>
            <h4>Thondekai Cashew Kadle Palya</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/boil rice.jpg" alt="Boil Rice" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Veg</div>
            <h4>Boil Rice</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/butter milk.jpg" alt="Butter Milk" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Veg</div>
            <h4>Butter Milk</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/holige.jpg" alt="Holige" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Veg</div>
            <h4>Holige</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/palav.jpg" alt="Palav" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Veg</div>
            <h4>Palav</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/payasam.jpg" alt="Payasam" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Veg</div>
            <h4>Payasam</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/pickle.jpg" alt="Pickle" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Veg</div>
            <h4>Pickle</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/puri.jpg" alt="Puri" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Veg</div>
            <h4>Puri</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/raitha.jpg" alt="Raitha" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Veg</div>
            <h4>Raitha</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/rasam.jpg" alt="Rasam" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">12 &nbsp;/&nbsp; Veg</div>
            <h4>Rasam</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/sendige.jpg" alt="Sendige" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">13 &nbsp;/&nbsp; Veg</div>
            <h4>Sendige</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/sweet fruit curry.jpg" alt="Sweet Fruit Curry" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">14 &nbsp;/&nbsp; Veg</div>
            <h4>Sweet Fruit Curry</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/veg biriyani.jpg" alt="Veg Biriyani" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">15 &nbsp;/&nbsp; Veg</div>
            <h4>Veg Biriyani</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/veg curry.jpg" alt="Veg Curry" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">16 &nbsp;/&nbsp; Veg</div>
            <h4>Veg Curry</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/water.jpg" alt="Water" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">17 &nbsp;/&nbsp; Veg</div>
            <h4>Water</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/abrar veg menu/white rice.jpg" alt="White Rice" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">18 &nbsp;/&nbsp; Veg</div>
            <h4>White Rice</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>

    
    <div className={`menu-panel ${activeTab === 'dosa' ? 'active' : ''}`} id="dosa" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/dosa items/masala dosa.jpg" alt="Dosa Items" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; South Indian Special &nbsp; ✦</span>
          <h2 className="cat-title">Dosa<br /><em>Items</em></h2>
          <p className="cat-desc">Crispy, golden dosas served with coconut chutney and sambar - a South Indian classic.</p>
        </div>
        <span className="cat-badge">🫓 &nbsp; Dosa Items</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/dosa items/ghee dosa.jpg" alt="Ghee Dosa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Dosa</div>
            <h4>Ghee Dosa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/dosa items/masala dosa.jpg" alt="Masala Dosa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Dosa</div>
            <h4>Masala Dosa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/dosa items/mysore dosa.jpg" alt="Mysore Dosa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Dosa</div>
            <h4>Mysore Dosa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/dosa items/plain dosa.jpg" alt="Plain Dosa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Dosa</div>
            <h4>Plain Dosa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/dosa items/set dosa.jpg" alt="Set Dosa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Dosa</div>
            <h4>Set Dosa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/dosa items/wheat dosa.jpg" alt="Wheat Dosa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Dosa</div>
            <h4>Wheat Dosa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>

    
    <div className={`menu-panel ${activeTab === 'hotdrinks' ? 'active' : ''}`} id="hotdrinks" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/hot drinks/masala tea.jpg" alt="Hot Drinks" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Warm Beverages &nbsp; ✦</span>
          <h2 className="cat-title">Hot<br /><em>Drinks</em></h2>
          <p className="cat-desc">Warm and comforting beverages perfect for any occasion, from classic tea to aromatic coffee.</p>
        </div>
        <span className="cat-badge">☕ &nbsp; Hot Drinks</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/hot drinks/badam milk.jpg" alt="Badam Milk" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Hot Drinks</div>
            <h4>Badam Milk</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/hot drinks/black tea.jpg" alt="Black Tea" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Hot Drinks</div>
            <h4>Black Tea</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/hot drinks/coffee.jpg" alt="Coffee" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Hot Drinks</div>
            <h4>Coffee</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/hot drinks/ginger tea.jpg" alt="Ginger Tea" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Hot Drinks</div>
            <h4>Ginger Tea</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/hot drinks/horlicks.jpg" alt="Horlicks" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Hot Drinks</div>
            <h4>Horlicks</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/hot drinks/kashayam.jpg" alt="Kashayam" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Hot Drinks</div>
            <h4>Kashayam</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/hot drinks/lime tea.jpg" alt="Lime Tea" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Hot Drinks</div>
            <h4>Lime Tea</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/hot drinks/masala tea.jpg" alt="Masala Tea" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Hot Drinks</div>
            <h4>Masala Tea</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/hot drinks/tea.jpg" alt="Tea" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Hot Drinks</div>
            <h4>Tea</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>

    
    <div className={`menu-panel ${activeTab === 'breakfast' ? 'active' : ''}`} id="breakfast" role="tabpanel">
      <div className="cat-banner">
        <img src="assets/images/menu/Veg Break Fast/idli.jpg" alt="Veg Breakfast" loading="lazy" />
        <div className="cat-overlay">
          <span className="cat-label">✦ &nbsp; Morning Special &nbsp; ✦</span>
          <h2 className="cat-title">Veg<br /><em>Breakfast</em></h2>
          <p className="cat-desc">Traditional South Indian breakfast items to start your day with energy and flavor.</p>
        </div>
        <span className="cat-badge">🌅 &nbsp; Veg Breakfast</span>
      </div>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/ambade.jpg" alt="Ambade" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">01 &nbsp;/&nbsp; Breakfast</div>
            <h4>Ambade</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/appam.jpg" alt="Appam" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">02 &nbsp;/&nbsp; Breakfast</div>
            <h4>Appam</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/banana podi.jpg" alt="Banana Podi" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">03 &nbsp;/&nbsp; Breakfast</div>
            <h4>Banana Podi</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/buns.jpg" alt="Buns" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">04 &nbsp;/&nbsp; Breakfast</div>
            <h4>Buns</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/chapathi.jpg" alt="Chapathi" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">05 &nbsp;/&nbsp; Breakfast</div>
            <h4>Chapathi</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/chole battura.jpg" alt="Chole Battura" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">06 &nbsp;/&nbsp; Breakfast</div>
            <h4>Chole Battura</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/daal.jpg" alt="Daal" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">07 &nbsp;/&nbsp; Breakfast</div>
            <h4>Daal</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/goli baje.jpg" alt="Goli Baje" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">08 &nbsp;/&nbsp; Breakfast</div>
            <h4>Goli Baje</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/idli.jpg" alt="Idli" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">09 &nbsp;/&nbsp; Breakfast</div>
            <h4>Idli</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/moode thove.jpg" alt="Moode Thove" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">10 &nbsp;/&nbsp; Breakfast</div>
            <h4>Moode Thove</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/neer dosa.jpg" alt="Neer Dosa" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">11 &nbsp;/&nbsp; Breakfast</div>
            <h4>Neer Dosa</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/pakoda.jpg" alt="Pakoda" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">12 &nbsp;/&nbsp; Breakfast</div>
            <h4>Pakoda</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/paneer butter masala.jpg" alt="Paneer Butter Masala" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">13 &nbsp;/&nbsp; Breakfast</div>
            <h4>Paneer Butter Masala</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/puri baji.jpg" alt="Puri Baji" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">14 &nbsp;/&nbsp; Breakfast</div>
            <h4>Puri Baji</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/puttu.jpg" alt="Puttu" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">15 &nbsp;/&nbsp; Breakfast</div>
            <h4>Puttu</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/sambar.jpg" alt="Sambar" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">16 &nbsp;/&nbsp; Breakfast</div>
            <h4>Sambar</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/seera.jpg" alt="Seera" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">17 &nbsp;/&nbsp; Breakfast</div>
            <h4>Seera</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/semige.jpg" alt="Semige" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">18 &nbsp;/&nbsp; Breakfast</div>
            <h4>Semige</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/sweet  potato podi.jpg" alt="Sweet Potato Podi" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">19 &nbsp;/&nbsp; Breakfast</div>
            <h4>Sweet Potato Podi</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/uppma.jpg" alt="Uppma" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">20 &nbsp;/&nbsp; Breakfast</div>
            <h4>Uppma</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/vada.jpg" alt="Vada" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">21 &nbsp;/&nbsp; Breakfast</div>
            <h4>Vada</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-img-wrap">
            <img src="assets/images/menu/Veg Break Fast/veg kurma.jpg" alt="Veg Kurma" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-number">22 &nbsp;/&nbsp; Breakfast</div>
            <h4>Veg Kurma</h4>
            <div className="card-footer-row"></div>
          </div>
        </div>

      </div>
    </div>

    
    <div className="custom-cta" data-reveal>
      <div className="cta-corner tl"></div>
      <div className="cta-corner tr"></div>
      <div className="cta-corner bl"></div>
      <div className="cta-corner br"></div>
      <span className="cta-icon">✦</span>
      <div className="orn-line" style={{ marginBottom: '28px' }}><span>❧</span></div>
      <h3>Desire a <em>Custom Menu?</em></h3>
      <p>All menus are fully customisable. We work with your preferences, dietary requirements, cultural traditions and budget to craft the perfect spread for your occasion.</p>
      <Link to="/contact" className="btn-primary"><span>Request Custom Menu</span></Link>
    </div>

  </div>
</section>





<div className="menu-lightbox" id="menuLightbox">
  <div className="menu-lightbox-content">
    <button className="menu-lightbox-close" id="menuLightboxClose">×</button>
    <img className="menu-lightbox-img" id="menuLightboxImg" src="" alt="" />
    <div className="menu-lightbox-caption" id="menuLightboxCaption"></div>
  </div>
</div>
      <Footer />
    </div>
  );
};

export default Menu;
