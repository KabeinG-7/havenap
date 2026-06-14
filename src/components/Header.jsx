import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Simple slide down and fade in for the header
    gsap.fromTo(headerRef.current, 
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <div className="header-logo">
          Havenap
        </div>
        
        <nav className="header-nav">
          <a href="#products" className="nav-link">Products</a>
          <a href="#science" className="nav-link">The Science</a>
          <a href="#reviews" className="nav-link">Reviews</a>
        </nav>

        <div className="header-actions">
          <button className="store-button" aria-label="Store/Cart">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="store-icon"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
