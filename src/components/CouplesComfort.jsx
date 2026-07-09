import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CouplesComfort.css';
import coupleImg from '../assets/couple_sleep.png';

gsap.registerPlugin(ScrollTrigger);

const CouplesComfort = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const centerTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax bg
      gsap.to('.cc-bg-image', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Reveal center headline
      gsap.fromTo(centerTextRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: centerTextRef.current, start: 'top 80%' },
        }
      );

      // Slide in side cards
      gsap.fromTo(leftCardRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
      gsap.fromTo(rightCardRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cc-section" ref={sectionRef}>

      {/* Full-bleed background image */}
      <div className="cc-bg-wrap">
        <img src={coupleImg} alt="Couple sleeping comfortably" className="cc-bg-image" />
        <div className="cc-bg-overlay" />
      </div>

      {/* Content layer */}
      <div className="cc-content">

        {/* Centre headline */}
        <div className="cc-center" ref={centerTextRef}>
          <span className="cc-eyebrow">For Couples</span>
          <h2 className="cc-headline">
            One Bed.<br />
            <em>Two Comfort Preferences.</em>
          </h2>
          <p className="cc-lead">
            Sharing a bed should not mean compromising on comfort.
          </p>
        </div>

        {/* Split cards row */}
        <div className="cc-split-row">

          {/* Left — Soft side */}
          <div className="cc-side-card cc-side-card--soft" ref={leftCardRef}>
            <div className="cc-side-label">Her Side</div>
            <div className="cc-side-icon">☁️</div>
            <h3>Soft</h3>
            <p>Plush, pressure-relieving cushioning for a cloud-like feel every night.</p>
            <div className="cc-side-bar cc-side-bar--soft" />
          </div>

          {/* Center divider pill */}
          <div className="cc-divider-pill">
            <span>Split Firmness</span>
          </div>

          {/* Right — Firm side */}
          <div className="cc-side-card cc-side-card--firm" ref={rightCardRef}>
            <div className="cc-side-label">His Side</div>
            <div className="cc-side-icon">🏔️</div>
            <h3>Firm</h3>
            <p>Structured, steady support for sleepers who need solid alignment.</p>
            <div className="cc-side-bar cc-side-bar--firm" />
          </div>

        </div>

        {/* Bottom caption */}
        <p className="cc-caption">
          It is a simple solution for couples who love the same bed but not the same firmness.
        </p>

      </div>
    </section>
  );
};

export default CouplesComfort;
