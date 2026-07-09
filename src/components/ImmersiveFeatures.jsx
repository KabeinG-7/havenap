import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ImmersiveFeatures.css';

// Import images
import topperDetail from '../assets/cta_topper_detail.png';
import topperImage from '../assets/topper.png';
import coolingImage from '../assets/feature_cooling.png';

gsap.registerPlugin(ScrollTrigger);

const featureList = [
  {
    id: 'firmness',
    tag: '01',
    label: 'Comfort Options',
    title: 'Comfort Built Around You.',
    desc: 'Everyone sleeps differently. That is why Havenap is designed with multiple comfort options: Soft, Firm, or Split Firmness for couples.',
    details: [
      { name: 'Soft', value: 'Plush pressure relief with extra cushioning.' },
      { name: 'Firm', value: 'Structured alignment for steady support.' },
      { name: 'Split Firmness', value: 'Perfect for couples; custom feel on each side.' }
    ],
    image: topperImage
  },
  {
    id: 'fit',
    tag: '02',
    label: 'Secure Fit Skirt',
    title: 'Slips On Like a Fitted Sheet.',
    desc: 'Traditional toppers can slide, bunch, or shift during the night. Havenap wraps securely around your mattress for a clean, tailored fit.',
    details: [
      { name: 'Deep-Pocket Skirt', value: 'Elasticated edges wrap completely under the mattress.' },
      { name: 'Corner Anchor Straps', value: 'Heavy-duty bands lock the corners in place.' },
      { name: 'Anti-Shift Base', value: 'Textured fabric prevents sliding on the mattress.' }
    ],
    image: topperDetail
  },
  {
    id: 'protection',
    tag: '03',
    label: 'Cooling & Protection',
    title: 'Cool Comfort. Everyday Protection.',
    desc: 'Havenap is built for real life, combining robust liquid protection with advanced cooling gel micro-beads.',
    details: [
      { name: 'Cooling Gel Foam', value: 'Draws heat away from the body and enhances airflow.' },
      { name: 'Waterproof Shield', value: 'Protects from spills and moisture without the noise.' },
      { name: 'Breathable Cover', value: 'Moisture-wicking, hypoallergenic outer fabric.' }
    ],
    image: coolingImage
  },
  {
    id: 'wash',
    tag: '04',
    label: 'Washable Cover',
    title: 'Fresh Sleep Starts With Cleanliness.',
    desc: 'Your mattress is not easy to clean. Havenap is. The removable zip-off cover makes it simple to refresh your bed.',
    details: [
      { name: 'Continuous Zipper', value: 'Heavy-duty perimeter zipper for quick removal.' },
      { name: 'Machine Washable', value: 'Safe for standard washing machines and dryers.' },
      { name: 'Hypoallergenic', value: 'Resists dust mites, allergens, and pet dander.' }
    ],
    image: topperImage
  }
];

const ImmersiveFeatures = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Pin the entire feature section while scrolling through items
    const totalExtra = (featureList.length - 1) * 100; // vh

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: `+=${totalExtra}vh`,
      pin: true,
      onUpdate: (self) => {
        const idx = Math.min(
          featureList.length - 1,
          Math.floor(self.progress * featureList.length)
        );
        setActiveIdx(idx);
      }
    });

    return () => st.kill();
  }, []);

  // Animate the detail contents and image transitions smoothly
  useEffect(() => {
    if (previewRef.current) {
      gsap.fromTo(
        previewRef.current,
        { opacity: 0, scale: 0.98, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeIdx]);

  return (
    <section className="features-showcase-section" ref={sectionRef}>
      <div className="features-showcase-container">
        
        {/* Left Column: Title & Text Steps */}
        <div className="features-sidebar">
          <div className="showcase-header">
            <span className="showcase-eyebrow">Topper Features</span>
            <h2 className="showcase-title">Designed for Better Sleep.</h2>
          </div>

          <div className="showcase-nav">
            {featureList.map((item, index) => (
              <button
                key={item.id}
                className={`showcase-nav-btn ${activeIdx === index ? 'active' : ''}`}
                onClick={() => setActiveIdx(index)}
              >
                <div className="nav-btn-header">
                  <span className="nav-btn-tag">{item.tag}</span>
                  <span className="nav-btn-label">{item.label}</span>
                </div>
                <div className="nav-btn-progress-bar">
                  <div className="nav-btn-progress-fill" />
                </div>
              </button>
            ))}
          </div>
          
          <div className="showcase-scroll-hint">Scroll down to see the topper anatomy →</div>
        </div>

        {/* Right Column: Beautiful Editorial Feature Showcase Card */}
        <div className="features-preview-stage" ref={previewRef}>
          <div className="preview-card">
            
            {/* Visual Header / Text area */}
            <div className="preview-content-top">
              <span className="preview-pill">Feature Spotlight</span>
              <h3 className="preview-headline">{featureList[activeIdx].title}</h3>
              <p className="preview-description">{featureList[activeIdx].desc}</p>
            </div>

            {/* Middle Split: Info Specs vs Image */}
            <div className="preview-split">
              
              {/* Specs bullet points (no AI look, clean borders) */}
              <div className="preview-specs">
                {featureList[activeIdx].details.map((detail, dIdx) => (
                  <div className="spec-row" key={dIdx}>
                    <span className="spec-dot" />
                    <div className="spec-text">
                      <strong className="spec-title">{detail.name}</strong>
                      <span className="spec-value">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimalist product image representation */}
              <div className="preview-image-container">
                <img 
                  src={topperImage} 
                  alt="Havenap Mattress Topper" 
                  className="preview-image" 
                />
                <div className="preview-image-overlay" />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ImmersiveFeatures;
