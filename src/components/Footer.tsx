import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">MAX PREMIUM SUITE © 2026</h2>
          <p className="footer-tagline">Trusted by 10,000+ Kenyans</p>
          <div className="trust-badges-mini">
            <span>🛡️ VirusTotal Verified</span>
            <span>⚡ Instant WhatsApp Delivery</span>
            <span>🔒 Encrypted Payments</span>
          </div>
        </div>

        <div className="footer-links">
           <div className="link-column">
             <h4>Navigation</h4>
             <Link to="/">Home</Link>
            <Link to="/category/Streaming & Entertainment">Streaming</Link>
            <Link to="/category/AI Models">AI Models</Link>
           </div>
           
           <div className="link-column">
             <h4>Legal</h4>
         <Link to="/terms">Terms of Service</Link>
         <Link to="/privacy">Privacy Policy</Link>
         <a href="https://wa.me/254701648600" target="_blank" rel="noreferrer">FAQ & Support</a>
           </div>
        </div>
      </div>
      
      <div className="footer-bottom glass-card">
        <div className="container bottom-content">
          <p className="disclaimer">Disclaimer: For educational purposes only. We provide sharing of premium accounts.</p>
          <div className="payment-support">
             <span className="mpesa-text">Payment Method: M-Pesa</span>
             <a href="https://wa.me/254701648600" target="_blank" rel="noreferrer" className="whatsapp-float js-whatsapp">
                <MessageCircle size={20} />
                <span>24/7 Support</span>
             </a>
             <div className="footer-quick-buttons">
               <button onClick={() => navigate('/')} className="quick-btn">Home</button>
               <button onClick={() => navigate('/category/AI Models')} className="quick-btn">AI Models</button>
               <button onClick={() => { const el = document.getElementById('faq'); if (el) el.scrollIntoView({ behavior: 'smooth' }); else window.location.hash = '#faq'; }} className="quick-btn">FAQ</button>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
