import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhonePopup = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = () => {
    const isValid = /^\d{10}$/.test(phone);
    if (!isValid) {
      setError('Please enter a valid 10-digit mobile number.');
    } else {
      setError('');
      onClose();
      navigate('/menu');
    }
  };

  return (
    <div className={`phone-popup-overlay ${isOpen ? 'open' : ''} fixed inset-0 bg-[rgba(10,6,3,0.88)] z-[9999] flex items-center justify-center overflow-y-auto backdrop-blur-[10px] opacity-0 pointer-events-none transition-opacity duration-300 [&.open]:opacity-100 [&.open]:pointer-events-auto`} id="phone-popup-overlay">
      <div className={`phone-popup bg-[var(--cream)] rounded-[var(--radius-xl)] p-[54px_48px] max-w-[460px] w-[92%] text-center relative shadow-[var(--shadow-heavy)] border border-[rgba(200,151,58,0.22)] transform translate-y-[40px] scale-[0.95] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 ${isOpen ? 'translate-y-0 scale-100 opacity-100' : ''}`}>
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-light)] rounded-t-[var(--radius-xl)]"></div>
        <button 
          className="phone-popup-close absolute top-[18px] right-[22px] bg-transparent border-none text-[1.5rem] cursor-pointer text-[var(--text-light)] transition-all duration-300 leading-none w-[36px] h-[36px] flex items-center justify-center rounded-full hover:text-[var(--gold-dark)] hover:bg-[var(--cream-dark)]" 
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fas fa-xmark"></i>
        </button>
        <span className="phone-popup-icon text-[3.2rem] mb-[20px] block"><i className="fas fa-utensils text-[#c8973a]"></i></span>
        <h3 className="text-[1.65rem] text-[var(--deep-brown)] mb-[10px] font-['Playfair_Display'] font-bold">View Our Menu</h3>
        <p className="text-[0.92rem] text-[var(--text-light)] mb-[30px] leading-[1.75]">Please enter your mobile number to explore our full menu. We may reach out with exclusive offers for you.</p>
        <input 
          type="tel" 
          className="phone-popup-input w-full p-[14px_20px] border-2 border-[var(--cream-dark)] rounded-[var(--radius)] font-['Lora'] text-[1.05rem] text-[var(--text-dark)] bg-[var(--white)] outline-none transition-colors duration-300 text-center tracking-[3px] mb-[8px] focus:border-[var(--gold)] focus:outline-none"
          placeholder="Enter 10-digit mobile number" 
          maxLength="10" 
          inputMode="numeric"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
        />
        <div className="phone-popup-error text-[0.82rem] text-[#c62828] mb-[16px] min-h-[18px]">{error}</div>
        <button 
          className="phone-popup-submit w-full p-[15px_32px] bg-gradient-to-br from-[var(--gold-dark)] to-[var(--gold)] text-[var(--deep-brown)] border-none rounded-[50px] font-['Playfair_Display'] text-[1rem] font-bold cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(200,151,58,0.4)] tracking-[0.5px] hover:-translate-y-[2px] hover:shadow-[var(--shadow-gold)]"
          onClick={handleSubmit}
        >
          View Menu →
        </button>
        <p className="phone-popup-note text-[0.74rem] text-[var(--text-light)] mt-[14px]">
          <i className="fas fa-lock mr-[8px] text-[var(--gold)]"></i>Your number is safe with us. No spam, ever.
        </p>
      </div>
    </div>
  );
};

export default PhonePopup;
