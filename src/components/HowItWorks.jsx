import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';

// Import images for the 3 steps
import imgStep1 from '../assets/cta_topper.png';
import imgStep2 from '../assets/cta_topper_detail.png';
import imgStep3 from '../assets/feature_morning.png';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const stepsRef = useRef([]);
  stepsRef.current = [];
  
  const [activeStep, setActiveStep] = useState(0);

  const images = [imgStep1, imgStep2, imgStep3];

  const addStep = (el) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate active state of each step
      stepsRef.current.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 50%', // When the top of the step hits middle of screen
          end: 'bottom 50%',
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
        
        // Initial fade in for steps
        gsap.fromTo(step, 
          { opacity: 0, x: -30 }, 
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8, 
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 80%'
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Unbox & Unroll',
      desc: 'Havenap arrives compact and ready to set up. No tools. No complicated assembly.',
    },
    {
      num: '02',
      title: 'Fit It to Your Mattress',
      desc: 'Stretch the deep-pocket skirt over your mattress and secure the corners with built-in anchor straps.',
    },
    {
      num: '03',
      title: 'Choose Your Comfort',
      desc: 'Sleep on the comfort level that fits your body, your position, and your lifestyle.',
    },
  ];

  return (
    <section className="hw-section" ref={sectionRef}>
      <div className="hw-container">
        
        {/* Left Side: Steps (Scrolls) */}
        <div className="hw-content" ref={leftContentRef}>
          <div className="hw-header">
            <h2 className="hw-headline">
              Better Sleep in <br/><em>Three Simple Steps.</em>
            </h2>
          </div>

          <div className="hw-steps-list">
            {steps.map((step, i) => (
              <div 
                className={`hw-step ${activeStep === i ? 'is-active' : ''}`} 
                key={i} 
                ref={addStep}
              >
                <div className="hw-step-number">{step.num}</div>
                <div className="hw-step-body">
                  <h3 className="hw-step-title">{step.title}</h3>
                  <p className="hw-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image (Pinned) */}
        <div className="hw-image-wrapper">
          <div className="hw-image-container" ref={rightImageRef}>
            {images.map((img, i) => (
              <img 
                key={i}
                src={img} 
                alt={`Step ${i + 1}`} 
                className={`hw-image hw-image-crossfade ${activeStep === i ? 'opacity-100' : 'opacity-0'}`} 
              />
            ))}
            <div className="hw-image-glow" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;
