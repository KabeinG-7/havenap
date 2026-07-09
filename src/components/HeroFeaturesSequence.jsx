import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroFeaturesSequence.css';

import featurePressure from '../assets/feature_pressure.png';
import featureSpine from '../assets/feature_spine.png';
import featureMorning from '../assets/feature_morning.png';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 'cooling',
    title: 'Sleep Cooler',
    description: 'Advanced thermoregulation tech dissipates body heat.',
    image: '/topper_texture_1781059704723.png'
  },
  {
    id: 'pressure',
    title: 'Pressure Relief',
    description: 'Dynamic contouring eliminates high-pressure points.',
    image: featurePressure
  },
  {
    id: 'spine',
    title: 'Spine Alignment',
    description: 'Zoned support keeps your spine perfectly horizontal.',
    image: featureSpine
  },
  {
    id: 'morning',
    title: 'Wake Refreshed',
    description: 'Deep sleep cycles restored for energized mornings.',
    image: featureMorning
  }
];

const HeroFeaturesSequence = () => {
  const sectionRef = useRef(null);
  const mediaContainerRef = useRef(null);
  const mediaOverlayRef = useRef(null);
  const heroTextRef = useRef(null);
  const featuresListRef = useRef(null);
  const featureItemRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)"
    }, (context) => {
      let { isDesktop, isMobile } = context.conditions;

      gsap.set(mediaContainerRef.current, { clearProps: "all" });
      gsap.set(featuresListRef.current, { clearProps: "all" });
      gsap.set(heroTextRef.current, { clearProps: "all" });
      gsap.set(featureItemRefs.current, { clearProps: "all" });

      if (isMobile) {
        gsap.set(featureItemRefs.current, { opacity: 0.3 });
        gsap.set(featureItemRefs.current[0], { opacity: 1 });
      } else {
        gsap.set(featureItemRefs.current, { opacity: 0.2, scale: 0.95, y: 20 });
        gsap.set(featureItemRefs.current[0], { opacity: 1, scale: 1, y: 0 });
      }

      gsap.set(featuresListRef.current, { opacity: 0, y: 50 });
      gsap.set(imageRefs.current.slice(1), { opacity: 0, scale: 1.05 });
      gsap.set(imageRefs.current[0], { opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: isMobile ? '+=1800' : '+=3000', 
          scrub: 1,
          pin: true,
        }
      });

      // --- PHASE 1: Hero to Features Transition ---
      tl.to(heroTextRef.current, { opacity: 0, y: -50, duration: 1 }, 0);
      
      if (isDesktop) {
        tl.to(mediaContainerRef.current, {
          width: "45vw",
          height: "80vh",
          top: "10vh",
          left: "50vw",
          borderRadius: "24px",
          boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
          duration: 1.5,
          ease: "power2.inOut"
        }, 0);
        
        tl.to(mediaOverlayRef.current, { opacity: 0, duration: 1.5 }, 0);
        tl.to(featuresListRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 1);

        // Desktop Scrubbing
        tl.to(featureItemRefs.current[0], { opacity: 0.2, scale: 0.95, y: -20, duration: 1 }, 3);
        tl.to(featureItemRefs.current[1], { opacity: 1, scale: 1, y: 0, duration: 1 }, 3);
        tl.to(imageRefs.current[1], { opacity: 1, scale: 1, duration: 1 }, 3);

        tl.to(featureItemRefs.current[1], { opacity: 0.2, scale: 0.95, y: -20, duration: 1 }, 5);
        tl.to(featureItemRefs.current[2], { opacity: 1, scale: 1, y: 0, duration: 1 }, 5);
        tl.to(imageRefs.current[2], { opacity: 1, scale: 1, duration: 1 }, 5);

        tl.to(featureItemRefs.current[2], { opacity: 0.2, scale: 0.95, y: -20, duration: 1 }, 7);
        tl.to(featureItemRefs.current[3], { opacity: 1, scale: 1, y: 0, duration: 1 }, 7);
        tl.to(imageRefs.current[3], { opacity: 1, scale: 1, duration: 1 }, 7);

      } else {
        // Mobile Layout: Image moves to Top Right (Apple/Tesla style)
        tl.to(mediaContainerRef.current, {
          width: "48vw",
          height: "25vh",
          top: "8vh",
          left: "auto",
          right: "0",
          borderRadius: "8px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          duration: 1.5,
          ease: "power2.inOut"
        }, 0);
        
        tl.to(mediaOverlayRef.current, { opacity: 0, duration: 1.5 }, 0);
        tl.to(featuresListRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 1);

        // Mobile Scrubbing: Move the list UP (less drastically), fade top text
        tl.to(featureItemRefs.current[0], { opacity: 0.3, duration: 1 }, 3); 
        tl.to(featureItemRefs.current[1], { opacity: 1, duration: 1 }, 3); 
        tl.to(featuresListRef.current, { y: "-=12vh", duration: 1 }, 3);   
        tl.to(imageRefs.current[1], { opacity: 1, scale: 1, duration: 1 }, 3);

        tl.to(featureItemRefs.current[1], { opacity: 0.3, duration: 1 }, 5);
        tl.to(featureItemRefs.current[2], { opacity: 1, duration: 1 }, 5);
        tl.to(featuresListRef.current, { y: "-=12vh", duration: 1 }, 5);
        tl.to(imageRefs.current[2], { opacity: 1, scale: 1, duration: 1 }, 5);

        tl.to(featureItemRefs.current[2], { opacity: 0.3, duration: 1 }, 7);
        tl.to(featureItemRefs.current[3], { opacity: 1, duration: 1 }, 7);
        tl.to(featuresListRef.current, { y: "-=12vh", duration: 1 }, 7);
        tl.to(imageRefs.current[3], { opacity: 1, scale: 1, duration: 1 }, 7);
      }

      tl.to({}, { duration: isMobile ? 0.5 : 1.5 }, 8);

    }, sectionRef);

    return () => mm.revert();
  }, []);

  return (
    <section className="hf-sequence" ref={sectionRef}>
      <div className="hf-container">
        
        {/* Dynamic Image Container */}
        <div className="hf-media-container" ref={mediaContainerRef}>
          {features.map((feat, i) => (
            <img 
              key={`img-${i}`}
              ref={el => imageRefs.current[i] = el}
              src={feat.image} 
              alt={feat.title}
              className="hf-media-img"
            />
          ))}
          <div className="hf-media-overlay" ref={mediaOverlayRef}></div>
        </div>

        {/* Hero Text */}
        <div className="hf-hero-content" ref={heroTextRef}>
          <p className="hf-hero-eyebrow">THE HAVENAP TOPPER</p>
          <h1 className="hf-hero-title">Sleep,<br/>Elevated.</h1>
          <p className="hf-hero-subtitle">Transform your mattress. Experience weightless support and advanced cooling.</p>
          <button className="hf-hero-cta">Scroll to Discover</button>
        </div>

        {/* Features Text (Left Side) */}
        <div className="hf-features-content" ref={featuresListRef}>
          <div className="hf-features-list">
            {features.map((feat, i) => (
              <div 
                key={`feat-${i}`} 
                ref={el => featureItemRefs.current[i] = el}
                className="hf-feature-item"
              >
                <h2>{feat.title}</h2>
                <p>{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroFeaturesSequence;
