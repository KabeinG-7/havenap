import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import bgImage from '../assets/editorial_lifestyle.png';
import ProblemSolution from '../components/ProblemSolution';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const scrollHintRef = useRef(null);
  const storySectionsRef = useRef([]);
  const pillarsRef = useRef(null);
  const missionRef = useRef(null);
  storySectionsRef.current = [];

  const addToStory = (el) => {
    if (el && !storySectionsRef.current.includes(el)) {
      storySectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Small delay so DOM is fully painted before animating
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero entrance — text fades in from below
        const heroElements = [tagRef.current, headlineRef.current, scrollHintRef.current].filter(Boolean);
        if (heroElements.length) {
          gsap.fromTo(
            heroElements,
            { opacity: 0, y: 28 },
            {
               opacity: 1,
               y: 0,
               duration: 0.9,
               stagger: 0.18,
               ease: 'power3.out',
               delay: 0.2,
            }
          );
        }

        // Parallax on bg image
        if (heroRef.current) {
          gsap.to('.about-bg-image', {
            yPercent: 18,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }

        // Story sections scroll reveal
        storySectionsRef.current.forEach((el) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        // Mission block
        if (missionRef.current) {
          gsap.fromTo(
            missionRef.current,
            { opacity: 0, scale: 0.97 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: missionRef.current,
                start: 'top 78%',
              },
            }
          );
        }

        // Pillars stagger
        if (pillarsRef.current) {
          const pillarEls = pillarsRef.current.querySelectorAll('.about-pillar');
          if (pillarEls.length) {
            gsap.fromTo(
              pillarEls,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.55,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: pillarsRef.current,
                  start: 'top 82%',
                },
              }
            );
          }
        }
      }, pageRef);

      return () => ctx.revert();
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const pillars = [
    { icon: '❄️', label: 'Cooling Comfort' },
    { icon: '🛡️', label: 'Waterproof Protection' },
    { icon: '🔒', label: 'Secure Fit' },
    { icon: '✦', label: 'Custom Firmness' },
  ];

  return (
    <div className="about-page" ref={pageRef} id="about">

      {/* ── CINEMATIC HERO ── */}
      <section className="about-hero" ref={heroRef}>

        {/* Full-bleed background image */}
        <div className="about-bg-image-wrap">
          <img src={bgImage} alt="Havenap lifestyle" className="about-bg-image" />
          <div className="about-bg-overlay" />
        </div>

        {/* Hero text — bottom-left */}
        <div className="about-hero-content">
          <span className="about-tag" ref={tagRef}>Our Story</span>
          <h1 className="about-headline" ref={headlineRef}>
            Built by a<br />
            <em>Restless Sleeper,</em><br />
            for Restless Sleepers.
          </h1>
          <div className="about-scroll-hint" ref={scrollHintRef}>
            <span className="about-scroll-line" />
            <span className="about-scroll-text">Scroll to explore</span>
          </div>
        </div>

      </section>

      {/* ── STORY SECTIONS ── */}
      <section className="about-story">

        {/* Chapter 01 */}
        <div className="about-chapter" ref={addToStory}>
          <div className="about-chapter-number">01</div>
          <div className="about-chapter-body">
            <p className="about-chapter-text">
              Havenap started with a simple problem: mattresses are expensive,
              toppers slide around, and most sleep upgrades do not solve enough
              problems at once.
            </p>
          </div>
        </div>

        <div className="about-divider-line" />

        {/* Chapter 02 */}
        <div className="about-chapter" ref={addToStory}>
          <div className="about-chapter-number">02</div>
          <div className="about-chapter-body">
            <p className="about-chapter-text">
              After testing different foam designs, cooling materials, covers, and
              fit systems, Havenap was created to bring together comfort, cooling,
              waterproof protection, and secure fit in one complete mattress upgrade.
            </p>
          </div>
        </div>

        <div className="about-divider-line" />

        {/* Mission Pull Quote */}
        <div className="about-mission-block" ref={missionRef}>
          <div className="about-mission-quote">"</div>
          <p className="about-mission-text">
            The mission is simple: help more people sleep better without making
            them replace the mattress they already own.
          </p>
          <div className="about-mission-attr">— Havenap</div>
        </div>

        {/* Pillars */}
        <div className="about-pillars-wrap" ref={addToStory}>
          <p className="about-pillars-label">What we solve</p>
          <div className="about-pillars" ref={pillarsRef}>
            {pillars.map((p, i) => (
              <div className="about-pillar" key={i}>
                <span className="about-pillar-icon">{p.icon}</span>
                <span className="about-pillar-text">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      <ProblemSolution />
    </div>
  );
};

export default About;
