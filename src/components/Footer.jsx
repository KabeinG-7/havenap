import React from 'react';
import './Footer.css';
import featureMorning from '../assets/feature_morning.png';

const Footer = () => {
  return (
    <footer className="footer-luxury">
      <div className="footer-top-grid">
        
        {/* Top Left: Navigation */}
        <div className="footer-nav-col">
          <p className="footer-label">Navigation</p>
          <nav className="footer-nav">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#benefits">Benefits</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {/* Top Center: Newsletter */}
        <div className="footer-newsletter-col">
          <p className="footer-label">Stay Updated</p>
          <div className="newsletter-wrapper">
            <p className="newsletter-desc">Join the Havenap journal for sleep science and exclusive access.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required className="newsletter-input" />
              <button type="submit" className="newsletter-submit" aria-label="Subscribe">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Top Right: Social */}
        <div className="footer-social-col">
          <p className="footer-label">Social</p>
          <nav className="footer-nav">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </nav>
        </div>

        {/* Far Right: Featured Image Card */}
        <div className="footer-image-col">
          <div className="footer-image-wrapper">
            <img src={featureMorning} alt="Havenap Morning Lifestyle" />
            <div className="footer-image-overlay">
              <span>Experience Havenap</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom-section">
        <h1 className="footer-massive-text">HAVENAP</h1>
        <div className="footer-legal">
          <p>&copy; {new Date().getFullYear()} Havenap Inc. All rights reserved.</p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
