import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProblemSolution.css';
import topperImage from '../assets/topper.png';
import lifestyleImage from '../assets/editorial_lifestyle.png';

gsap.registerPlugin(ScrollTrigger);

const ProblemSolution = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  
  const problemRef = useRef(null);
  const pHeadline = useRef(null);
  const pTexts = useRef([]);
  pTexts.current = [];
  const pImageRef = useRef(null);
  
  const solutionRef = useRef(null);
  const sHeadline = useRef(null);
  const sTexts = useRef([]);
  sTexts.current = [];
  const sImageRef = useRef(null);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Initial states
      gsap.set([pHeadline.current, ...pTexts.current], { opacity: 0, y: 30 });
      gsap.set(pImageRef.current, { opacity: 0, x: 60, scale: 0.95 });
      gsap.set(solutionRef.current, { opacity: 0, pointerEvents: 'none' });
      gsap.set([sHeadline.current, ...sTexts.current], { opacity: 0, y: 30 });
      gsap.set(sImageRef.current, { opacity: 0, x: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000", // Length of the scroll experience
          scrub: 1,
          pin: true,
        }
      });

      // --- 1. Fade in Problem Section ---
      tl.to(pHeadline.current, { opacity: 1, y: 0, duration: 1 })
        .to(pImageRef.current, { opacity: 1, x: 0, scale: 1, duration: 1.5, ease: "power2.out" }, "<0.3")
        .to(pTexts.current, { opacity: 1, y: 0, duration: 1, stagger: 0.8 }, "+=0.5")
        // Pause to read
        .to({}, { duration: 1 })
        
      // --- 2. Transition (Fade out problem, change background) ---
      tl.to([pHeadline.current, pImageRef.current, ...pTexts.current], { opacity: 0, y: -30, duration: 1, stagger: 0.1 }, "+=0.5")
        .to(bgRef.current, { backgroundColor: '#f8f8f8', color: '#111', duration: 2 }, "<")
        .set(problemRef.current, { pointerEvents: 'none' })
        .set(solutionRef.current, { pointerEvents: 'auto' })
        
      // --- 3. Fade in Solution Section ---
      tl.to(solutionRef.current, { opacity: 1, duration: 0.1 }) // Wrapper becomes visible
        .to(sHeadline.current, { opacity: 1, y: 0, duration: 1 })
        .to(sTexts.current, { opacity: 1, y: 0, duration: 1, stagger: 0.4 }, "+=0.2")
        .to(sImageRef.current, { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, "<") // animate image with texts
        // Pause to read before unpinning
        .to({}, { duration: 2 });
        
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="problem-solution-section" ref={sectionRef}>
      <div className="ps-container" ref={bgRef}>
        
        {/* Problem Block */}
        <div className="ps-block ps-problem" ref={problemRef}>
          <div className="ps-content-wrapper ps-problem-layout">
            <div className="ps-problem-text-area">
              <h2 className="ps-headline" ref={pHeadline}>Your Mattress Might Not Be the Problem.</h2>
              <div className="ps-text-group">
                <p className="ps-text" ref={(el) => addToRefs(el, pTexts)}>
                  You know the feeling: waking up hot, feeling pressure in the wrong places, or noticing your mattress no longer feels as comfortable as it used to. But replacing a mattress is expensive, stressful, and often unnecessary. Most people do not need a completely new mattress. They need better support, better cooling, and better protection on top. That is why we created Havenap.
                </p>
              </div>
            </div>
            <div className="ps-problem-image-container" ref={pImageRef}>
              <img src={lifestyleImage} alt="Restless night" className="ps-problem-image" />
              <div className="ps-problem-image-overlay" />
            </div>
          </div>
        </div>

        {/* Solution Block */}
        <div className="ps-block ps-solution" ref={solutionRef}>
          <div className="ps-content-wrapper ps-solution-layout">
            <div className="ps-solution-text-area">
              <h2 className="ps-headline" ref={sHeadline}>The Smarter Way to Upgrade Your Bed.</h2>
              <div className="ps-text-group">
                <p className="ps-text" ref={(el) => addToRefs(el, sTexts)}>
                  Havenap gives your existing mattress a luxury sleep upgrade with a cooling comfort layer, waterproof zip-off cover, deep-pocket skirt, and secure anchor straps.
                </p>
                <p className="ps-text" ref={(el) => addToRefs(el, sTexts)}>
                  It is designed to help your bed feel fresher, cleaner, cooler, and more supportive — without replacing the mattress underneath.
                </p>
              </div>
            </div>
            <div className="ps-solution-image-container" ref={sImageRef}>
              <img src={topperImage} alt="Havenap Topper" className="ps-solution-image" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;
