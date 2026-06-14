import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MattressTopperSection.css';

const MattressTopperSection = () => {
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax effect for background image
      gsap.fromTo(bgImageRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      // Card fade and slide up
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="topper-buy-section" ref={sectionRef}>
      <div className="topper-buy-bg">
        <img 
          ref={bgImageRef}
          src="/topper_lifestyle_1781059716937.png" 
          alt="Havenap Mattress Topper Room" 
        />
      </div>
      
      <div className="topper-card" ref={cardRef}>
        <h2 className="topper-title">Looking for the Havenap Topper?</h2>
        <p className="topper-description">
          Upgrade your current mattress instantly. Buy our premium memory foam topper and add the perfect layer of cloud-like comfort and cooling technology to any bed.
        </p>
        <p className="topper-price">Starting at $199.00</p>
        <a href="#buy" className="shop-now-link">Shop Now</a>
      </div>
    </section>
  );
};

export default MattressTopperSection;
