import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutTopper.css';
import topperImg from '../assets/topper.png';

gsap.registerPlugin(ScrollTrigger);

const AboutTopper = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef([]);
  featuresRef.current = [];

  const addToRefs = (el) => {
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pin the section and animate elements on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500", // Control how long it's pinned
          scrub: 1,
          pin: true,
        }
      });

      // Title fades and slides up
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Image slowly rotates and scales slightly
      tl.fromTo(imageRef.current,
        { scale: 0.9, rotationY: -15, opacity: 0 },
        { scale: 1, rotationY: 0, opacity: 1, duration: 2, ease: "power2.out" },
        "-=0.5"
      );

      // Stagger in the features
      featuresRef.current.forEach((feature, index) => {
        tl.fromTo(feature,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
          "-=0.8" // overlap animations
        );
      });

      // A little bit of empty space at the end to hold the final state before unpinning
      tl.to({}, { duration: 0.5 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-topper" ref={sectionRef}>
      <div className="about-container">
        <h2 className="about-title" ref={titleRef}>The Cloud Experience</h2>
        
        <div className="about-content">
          <div className="about-image-wrapper">
            <img 
              ref={imageRef} 
              src={topperImg} 
              alt="Premium Memory Foam Topper" 
              className="about-image" 
            />
            <div className="glow-effect"></div>
          </div>
          
          <div className="about-features">
            <div className="feature-item" ref={addToRefs}>
              <h3>Zero Gravity Support</h3>
              <p>Experience weightlessness. Our proprietary memory foam adapts instantly to your body's contours, relieving pressure points and aligning your spine.</p>
            </div>
            
            <div className="feature-item" ref={addToRefs}>
              <h3>Advanced Cooling Tech</h3>
              <p>Infused with cooling gel micro-beads and wrapped in a breathable, moisture-wicking cover, keeping you at the perfect temperature all night long.</p>
            </div>
            
            <div className="feature-item" ref={addToRefs}>
              <h3>Luxurious Comfort</h3>
              <p>Transform any mattress into a five-star hotel bed. The plush, cloud-like surface delivers unparalleled softness without compromising on support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTopper;
