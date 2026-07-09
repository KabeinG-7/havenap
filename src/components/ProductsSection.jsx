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
        <h2 className="products-title">Looking for the Havenap Topper?</h2>
        <p className="products-desc">
          Upgrade your current mattress instantly. Buy our premium memory foam topper and add the perfect layer of cloud-like comfort and cooling technology to any bed.
        </p>
        <p style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '2rem' }}>Starting at $199.00</p>
        <a 
          href="#buy" 
          style={{ 
            display: 'inline-block', 
            padding: '1rem 2.5rem', 
            backgroundColor: '#fff', 
            color: '#000', 
            textDecoration: 'none', 
            borderRadius: '30px', 
            fontWeight: '500', 
            transition: 'transform 0.3s ease' 
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default ProductsSection;
