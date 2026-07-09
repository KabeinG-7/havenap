import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeaturesGrid.css';
import bgImage from '../assets/linen.png';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 'cooling',
    tag: '01',
    title: 'Cooling Comfort',
    desc: 'Designed to pull heat away from your body and help you sleep cooler through the night.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4v40M24 4l-6 6M24 4l6 6M24 44l-6-6M24 44l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 24h40M4 24l6-6M4 24l6 6M44 24l-6-6M44 24l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.1 10.1l27.8 27.8M10.1 10.1l7.8 2.1-2.1-7.8M37.9 37.9l-7.8-2.1 2.1 7.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    size: 'large',
    accent: '#7dd3fc',
  },
  {
    id: 'waterproof',
    tag: '02',
    title: 'Waterproof Protection',
    desc: 'A protective top cover helps guard against spills, sweat, and everyday accidents.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6C24 6 10 18 10 28a14 14 0 0028 0C38 18 24 6 24 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 32c1.5 3 4.5 5 7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    size: 'small',
    accent: '#a5f3fc',
  },
  {
    id: 'secure',
    tag: '03',
    title: 'Secure Fit',
    desc: 'A deep-pocket skirt and corner anchor straps help keep the topper in place with less sliding, shifting, or bunching.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 20v-6a8 8 0 0116 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="31" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 34v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    size: 'small',
    accent: '#c4b5fd',
  },
  {
    id: 'washable',
    tag: '04',
    title: 'Washable Cover',
    desc: 'The zip-off cover can be removed and washed, making it easier to keep your sleep surface clean and fresh.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16h32l-3 22H11L8 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 16l2-8h28l2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 24c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="13" r="2" fill="currentColor"/>
      </svg>
    ),
    size: 'small',
    accent: '#86efac',
  },
  {
    id: 'firmness',
    tag: '05',
    title: 'Custom Firmness Options',
    desc: 'Choose the comfort level that works best for you, including split firmness for couples with different sleep preferences.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 16h14M26 16h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 32h14M26 32h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="18" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="30" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    size: 'large',
    accent: '#fcd34d',
  },
  {
    id: 'upgrade',
    tag: '06',
    title: 'Upgrade, Don\'t Replace',
    desc: 'Refresh the feel of your mattress without the cost and hassle of buying a new one.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 38V10M24 10l-8 8M24 10l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 40h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    size: 'small',
    accent: '#f9a8d4',
  },
];

const FeaturesGrid = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addCard = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        [headlineRef.current, subRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 82%',
          },
        }
      );

      // Cards stagger in
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 55, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            delay: (i % 3) * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 86%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="fg-section" ref={sectionRef}>
      {/* Background image & overlay */}
      <div className="fg-bg-image-container">
        <img src={bgImage} alt="" className="fg-bg-image" />
        <div className="fg-bg-image-overlay" />
      </div>

      {/* Background noise/grain texture */}
      <div className="fg-bg-noise" />

      {/* Header */}
      <div className="fg-header">
        <span className="fg-eyebrow">What's Included</span>
        <h2 className="fg-headline" ref={headlineRef}>
          Everything Your Mattress<br />
          <em>Has Been Missing.</em>
        </h2>
        <p className="fg-sub" ref={subRef}>
          Six upgrades. One topper. No mattress replacement needed.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="fg-grid">
        {features.map((f) => (
          <div
            key={f.id}
            className={`fg-card fg-card--${f.size} fg-card--${f.id}`}
            ref={addCard}
            style={{ '--accent': f.accent }}
          >
            <div className="fg-card-inner">
              <div className="fg-card-top">
                <span className="fg-card-tag">{f.tag}</span>
                <div className="fg-card-icon">{f.icon}</div>
              </div>
              <div className="fg-card-body">
                <h3 className="fg-card-title">{f.title}</h3>
                <p className="fg-card-desc">{f.desc}</p>
              </div>
              {/* Accent glow on hover */}
              <div className="fg-card-glow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
