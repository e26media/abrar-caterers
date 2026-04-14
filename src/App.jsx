import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import EnquiryModal from './components/EnquiryModal';
import { EnquiryProvider, useEnquiry } from './context/EnquiryContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const GlobalModals = () => {
  const { isEnquiryOpen, closeEnquiry } = useEnquiry();
  return <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />;
};

function App() {
  return (
    <EnquiryProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <GlobalModals />
      </Router>
    </EnquiryProvider>
  );
}

export default App;
