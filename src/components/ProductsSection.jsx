import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductsSection.css';

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Parallax effect on background
    gsap.fromTo(bgRef.current, 
      { y: "-15%" },
      {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // Fade in content
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section className="products-section" ref={sectionRef}>
      <img 
        ref={bgRef}
        src="/topper_lifestyle_1781059716937.png" 
        alt="Mattress Topper Lifestyle" 
        className="products-bg" 
      />
      <div className="products-overlay"></div>
      
      <div className="products-content" ref={contentRef}>
        <h2 className="products-title">Complete Your Sleep</h2>
        <p className="products-desc">The Havenap topper is just the beginning. Explore our full range of premium sleep products designed to transform your nights.</p>
        
        <div className="products-grid">
          <div className="product-card">
            <h3>Cooling Pillows</h3>
            <p>Adaptive support that stays cool all night.</p>
          </div>
          <div className="product-card">
            <h3>Luxury Sheets</h3>
            <p>Breathable, ultra-soft percale weave.</p>
          </div>
          <div className="product-card">
            <h3>Weighted Blankets</h3>
            <p>Deep pressure stimulation for a calmer rest.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
