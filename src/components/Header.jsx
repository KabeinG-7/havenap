import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Header.css';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const leftNavRef = useRef(null);
  const rightNavRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    // Slide down and fade in on mount
    gsap.set(headerRef.current, { y: -40, opacity: 0 });
    gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.1,
      clearProps: "transform,opacity"
    });

    if (!isHome) {
      // On non-home pages: immediately show nav + glass header, no scroll animations
      gsap.set(logoRef.current, { y: 0, scale: 1, color: '#666', clearProps: 'transform' });
      headerRef.current.classList.add('glass');
      gsap.set([leftNavRef.current, rightNavRef.current], { opacity: 1, pointerEvents: 'auto' });
      return;
    }

    // Home page: scroll-driven logo + nav reveal
    let mm = gsap.matchMedia();
    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)"
    }, (context) => {
      let { isMobile } = context.conditions;

      gsap.fromTo(logoRef.current,
        {
          y: '45vh',
          scale: isMobile ? 2.5 : 5.5,
          color: '#ffffff',
          transformOrigin: 'center center'
        },
        {
          y: 0,
          scale: 1,
          color: '#666',
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: '.editorial-story',
            start: 'top top',
            end: '+=3000',
            scrub: 1,
            onLeave: () => {
              if (headerRef.current) {
                headerRef.current.classList.add('glass');
              }
              gsap.to([leftNavRef.current, rightNavRef.current], {
                opacity: 1,
                pointerEvents: 'auto',
                duration: 0.5,
                ease: "power2.out"
              });
            },
            onEnterBack: () => {
              if (headerRef.current) {
                headerRef.current.classList.remove('glass');
              }
              gsap.to([leftNavRef.current, rightNavRef.current], {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.3,
                ease: "power2.in"
              });
            }
          }
        }
      );
    });

    // Initially hide the nav items on home page
    gsap.set([leftNavRef.current, rightNavRef.current], { opacity: 0, pointerEvents: 'none' });

    return () => {
      mm.revert();
    };
  }, [isHome]);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        
        {/* Left Nav */}
        <nav className="header-nav left-nav" ref={leftNavRef}>
          <Link to="/product" className="nav-link">Product</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>

        {/* Center Logo */}
        <Link to="/" className="header-logo" ref={logoRef}>
          Havenap
        </Link>
        
        {/* Right Nav */}
        <nav className="header-nav right-nav" ref={rightNavRef}>
          <Link to="/support" className="nav-link">Support</Link>
          <div className="header-actions">
            <button className="store-button">
              <svg className="store-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="cart-badge">0</span>
            </button>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
