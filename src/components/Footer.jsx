import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-title">Havenap</h2>
        <div className="footer-content">
          <p className="footer-desc">The ultimate upgrade for your sleep.</p>
          <div className="footer-links">
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Support</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Havenap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
