import React, { useState } from 'react';
import './EnquiryModal.css';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    name: '',
    mobile: '',
    date: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Enquiry from Website*%0A%0A` +
      `*Service:* ${formData.serviceType}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Date:* ${formData.date || 'Not specified'}%0A` +
      `*Details:* ${formData.details || 'None'}`;
    
    const whatsappUrl = `https://wa.me/919108659584?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    onClose();
    setFormData({ serviceType: '', name: '', mobile: '', date: '', details: '' });
  };

  return (
    <div className={`enquiry-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="enquiry-modal shadow-gold" onClick={(e) => e.stopPropagation()}>
        <button 
          className="enquiry-modal-close" 
          onClick={onClose}
        >
          <i className="fas fa-xmark"></i>
        </button>
        
        <div className="enquiry-modal-header">
          <h3>✦ Send a Message ✦</h3>
          <h2>Send Your <span>Enquiry</span></h2>
          <p>Fill in your details below and we'll get back to you with a customised quote.</p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Service Type</label>
            <select 
              name="serviceType" 
              className="enquiry-select" 
              required
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="" disabled>Choose a service</option>
              <option value="Caterers">Caterers</option>
              <option value="Caterers For Wedding">Caterers For Wedding</option>
              <option value="Caterers For Parties">Caterers For Parties</option>
              <option value="Caterers For Events">Caterers For Events</option>
              <option value="Caterers For Function">Caterers For Function</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your Name *</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your full name" 
              className="enquiry-input" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mobile Number *</label>
            <input 
              type="tel" 
              name="mobile" 
              placeholder="Enter your mobile number" 
              className="enquiry-input" 
              required
              pattern="[0-9]{10}"
              value={formData.mobile}
              onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value.replace(/\D/g, '') }))}
            />
          </div>

          <div className="form-group">
            <label>Event Date (optional)</label>
            <input 
              type="date" 
              name="date" 
              className="enquiry-input" 
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Additional Details (optional)</label>
            <textarea 
              name="details" 
              placeholder="Any specific requirements?" 
              className="enquiry-textarea"
              value={formData.details}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn gold-glow">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
