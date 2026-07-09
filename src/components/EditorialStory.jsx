import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EditorialStory.css';
import heroVideo from '../assets/bed6 c.mp4';

gsap.registerPlugin(ScrollTrigger);

const EditorialStory = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)"
    }, (context) => {
      let { isMobile } = context.conditions;

      // Initial state for text
      gsap.set(leftTextRef.current, {
        opacity: 0,
        x: isMobile ? '-20vw' : '-30vw',
        y: 0,
        scale: 0.8
      });
      gsap.set(rightTextRef.current, {
        opacity: 0,
        x: isMobile ? '20vw' : '30vw',
        y: 0,
        scale: 0.8
      });
      gsap.set(subtitleRef.current, {
        opacity: 0,
        x: 0,
        y: 30
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
        }
      });

      // Shrink image (keep landscape rectangle shape) and move it bottom left
      tl.to(imageRef.current, {
        width: isMobile ? '50vw' : '45vw',
        height: isMobile ? '30vw' : '25vw',
        x: isMobile ? '-20vw' : '-22vw',
        y: isMobile ? '10vh' : '15vh',
        borderRadius: '24px',
        ease: "power2.inOut"
      }, 0);

      // Reveal text
      tl.to([leftTextRef.current, rightTextRef.current], {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        ease: "power2.out"
      }, 0);

      // Reveal subtitle and CTA
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        ease: "power2.out"
      }, 0);

    }, sectionRef);

    return () => mm.revert();
  }, []);

  return (
    <section className="editorial-story" ref={sectionRef}>
      <div className="editorial-container">
        
        {/* Top Label */}


        {/* Text Grid layer */}
        <div className="editorial-text-layer">
          <div className="editorial-word" ref={leftTextRef}>Sleep.</div>
          <div className="editorial-word" ref={rightTextRef}>Simplified.</div>
        </div>

        {/* Center Video */}
        <div className="editorial-image-wrapper" ref={imageRef}>
          <video 
            src={heroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        </div>

        {/* Subtitle & CTA */}
        <div className="editorial-subtitle-wrapper" ref={subtitleRef}>
          <p className="editorial-subtitle">
            Transform the mattress you already own into a cooler, cleaner, more supportive sleep experience.
          </p>
          <p className="editorial-description">
            Havenap is a premium mattress topper designed with cooling comfort, waterproof protection, secure fit, and customizable firmness — so you can sleep better without spending thousands on a new mattress.
          </p>
          <button className="editorial-cta">Shop Havenap</button>
        </div>

      </div>
    </section>
  );
};

export default EditorialStory;
