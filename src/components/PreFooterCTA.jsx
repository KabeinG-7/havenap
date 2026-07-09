import React from 'react';
import { motion } from 'framer-motion';
import './PreFooterCTA.css';
import ctaTopper from '../assets/cta_topper.png';
import ctaTopperDetail from '../assets/cta_topper_detail.png';

const PreFooterCTA = () => {
  return (
    <section className="prefooter-cta">
      <div className="prefooter-container">
        
        {/* Left Column: Text & CTA */}
        <motion.div 
          className="prefooter-text-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="prefooter-headline">Transform Your Sleep Tonight.</h2>
          
          <p className="prefooter-description">
            Upgrade your current mattress with our premium memory foam topper. Experience unparalleled pressure relief, advanced cooling, and hotel-quality comfort in your own bedroom.
          </p>

          <div className="prefooter-buttons">
            <button className="btn-primary">Shop the Topper</button>
            <button className="btn-secondary">Compare Features</button>
          </div>
        </motion.div>

        {/* Center & Right Columns: Images */}
        <div className="prefooter-image-grid">
          
          <motion.div 
            className="prefooter-image-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="prefooter-image-wrapper">
              <img src={ctaTopper} alt="Luxury Mattress Topper in Bedroom" />
              <div className="prefooter-image-glare"></div>
            </div>
          </motion.div>

          <motion.div 
            className="prefooter-image-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="prefooter-image-wrapper">
              <img src={ctaTopperDetail} alt="Premium Memory Foam Detail" />
              <div className="prefooter-image-glare"></div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PreFooterCTA;
