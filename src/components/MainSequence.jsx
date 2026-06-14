import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MainSequence.css';

const features = [
  {
    title: "Cloud-like Comfort",
    desc: "Premium memory foam adapts to your body instantly, relieving pressure points.",
    image: "/topper_texture_1781059704723.png"
  },
  {
    title: "Advanced Cooling",
    desc: "Woven with phase-change materials that pull heat away, keeping you at the perfect temperature.",
    image: "/topper_abstract_1781059728620.png"
  },
  {
    title: "Zero Motion Transfer",
    desc: "Sleep undisturbed. Our high-density foam isolates movement entirely.",
    image: "/topper_lifestyle_1781059716937.png"
  }
];

const MainSequence = () => {
  const sectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const mediaContainerRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Set initial states for feature elements
      gsap.set(textRefs.current, { opacity: 0, y: 50 });
      gsap.set(imageRefs.current.slice(1), { opacity: 0, scale: 1.1 });
      gsap.set(imageRefs.current[0], { opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });

      // Phase 1: Shrink Hero and Fade out Hero Text (Duration: 2)
      tl.to(heroTextRef.current, { opacity: 0, y: -50, duration: 1 }, 0);
      tl.to(mediaContainerRef.current, {
        width: "45vw",
        height: "60vh",
        top: "20vh",
        left: "50vw", // Right aligned side box
        borderRadius: "24px",
        duration: 2,
        ease: "power2.inOut"
      }, 0);

      // Phase 2: Fade in First Feature Text (Duration: 1)
      tl.to(textRefs.current[0], { opacity: 1, y: 0, duration: 1 }, 2);

      // Phase 3: Transition to Feature 2
      tl.to(textRefs.current[0], { opacity: 0, y: -50, duration: 1 }, 4);
      
      tl.to(textRefs.current[1], { opacity: 1, y: 0, duration: 1 }, 4.5);
      tl.to(imageRefs.current[1], { opacity: 1, scale: 1, duration: 1 }, 4.5);

      // Phase 4: Transition to Feature 3
      tl.to(textRefs.current[1], { opacity: 0, y: -50, duration: 1 }, 6.5);
      
      tl.to(textRefs.current[2], { opacity: 1, y: 0, duration: 1 }, 7);
      tl.to(imageRefs.current[2], { opacity: 1, scale: 1, duration: 1 }, 7);

      // End padding (Duration: 1)
      tl.to({}, { duration: 1 }, 9);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="main-sequence" ref={sectionRef}>
      <div className="sequence-sticky">
        
        {/* Background Image Container that animates */}
        <div className="media-container" ref={mediaContainerRef}>
          {features.map((feat, i) => (
            <img 
              key={`img-${i}`}
              ref={el => imageRefs.current[i] = el}
              src={feat.image} 
              alt={feat.title}
              className="media-img"
            />
          ))}
          <div className="media-overlay"></div>
        </div>

        {/* Hero Text */}
        <div className="hero-content" ref={heroTextRef}>
          <p className="hero-eyebrow">THE HAVENAP TOPPER</p>
          <h1 className="hero-title">Sleep,<br/>Elevated.</h1>
          <p className="hero-subtitle">Transform your mattress. Experience weightless support and advanced cooling.</p>
          <button className="hero-cta">Scroll to Discover</button>
        </div>

        {/* Features Text */}
        <div className="features-content">
          <div className="features-text-wrapper">
            {features.map((feat, i) => (
              <div 
                key={`text-${i}`} 
                ref={el => textRefs.current[i] = el}
                className="feature-text-block"
              >
                <h2>{feat.title}</h2>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MainSequence;
