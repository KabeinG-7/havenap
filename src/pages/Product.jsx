import React, { useState } from 'react';
import './Product.css';

// Importing assets for the gallery
import imgTopper from '../assets/cta_topper.png';
import imgDetail from '../assets/cta_topper_detail.png';
import imgCooling from '../assets/feature_cooling.png';
import imgMorning from '../assets/feature_morning.png';

const Product = () => {
  const [selectedSize, setSelectedSize] = useState('Queen');
  const [selectedFirmness, setSelectedFirmness] = useState('Medium');
  
  const images = [imgTopper, imgDetail, imgCooling, imgMorning];
  
  const sizes = [
    { name: 'Twin', priceDiff: -50 },
    { name: 'Full', priceDiff: -20 },
    { name: 'Queen', priceDiff: 0 },
    { name: 'King', priceDiff: +50 },
    { name: 'Cal King', priceDiff: +50 }
  ];
  
  const firmnessOptions = ['Plush', 'Medium', 'Firm'];
  
  const basePrice = 249;
  
  const currentPrice = basePrice + sizes.find(s => s.name === selectedSize).priceDiff;

  return (
    <div className="product-page">
      <div className="product-container">
        
        {/* Left Side: Image Gallery */}
        <div className="product-gallery">
          {images.map((img, idx) => (
            <div className="product-image-wrapper" key={idx}>
              <img src={img} alt={`Havenap Topper View ${idx + 1}`} />
            </div>
          ))}
        </div>
        
        {/* Right Side: Product Details */}
        <div className="product-details">
          
          <div className="product-header">
            <h1 className="product-title">Meet Havenap</h1>
            <p className="product-tagline">Upgrade the bed you already own</p>
            <p className="product-price">${currentPrice}</p>
            <div className="product-intro-creative">
              <p>
                A premium cooling mattress topper designed to breathe new life into your sleep. Havenap seamlessly combines a <strong>cooling comfort layer</strong>, a <strong>waterproof zip-off cover</strong>, a <strong>secure deep-pocket fit</strong>, and <strong>customizable firmness options</strong> to help you sleep cooler, cleaner, and more comfortably.
              </p>
              <p className="product-editorial-desc">
                Whether your current mattress feels a bit too firm, runs too warm, or simply lacks the pressure-relieving support it once had, Havenap delivers a fresh, luxurious sleep experience—without the cost of replacing your mattress.
              </p>
            </div>
          </div>

          <div className="product-features-creative">
            <h3 className="features-section-title">Engineered to Perfect Your Sleep</h3>
            <ul className="creative-features-grid">
              <li>
                <div className="feature-icon">❄️</div>
                <div className="feature-text">
                  <strong>Cooling Comfort Layer</strong>
                  <span>Active airflow channels reduce heat buildup for temperature-regulated rest.</span>
                </div>
              </li>
              <li>
                <div className="feature-icon">🛡️</div>
                <div className="feature-text">
                  <strong>Shielded Protection</strong>
                  <span>Waterproof barrier defends your mattress from everyday spills and sweat.</span>
                </div>
              </li>
              <li>
                <div className="feature-icon">🧼</div>
                <div className="feature-text">
                  <strong>Removable Zip-Off Cover</strong>
                  <span>Easily zips off for a quick, breezy wash cycle to keep your bed fresh.</span>
                </div>
              </li>
              <li>
                <div className="feature-icon">📐</div>
                <div className="feature-text">
                  <strong>Deep-Pocket Skirt</strong>
                  <span>Provides a clean, fitted-sheet style contour that stays seamlessly in place.</span>
                </div>
              </li>
              <li>
                <div className="feature-icon">🔒</div>
                <div className="feature-text">
                  <strong>Integrated Corner Straps</strong>
                  <span>Heavy-duty corner anchors stop any unwanted shifting or sliding.</span>
                </div>
              </li>
              <li>
                <div className="feature-icon">✨</div>
                <div className="feature-text">
                  <strong>Tailored Firmness</strong>
                  <span>Available in Plush, Medium, and Firm options to customize your comfort.</span>
                </div>
              </li>
              <li>
                <div className="feature-icon">🛏️</div>
                <div className="feature-text">
                  <strong>Zero Bed Replacement Needed</strong>
                  <span>Designed to revive and elevate the mattress you already own.</span>
                </div>
              </li>
              <li>
                <div className="feature-icon">👥</div>
                <div className="feature-text">
                  <strong>Ideal for Partners & Hot Sleepers</strong>
                  <span>Reduces motion transfer and heat retention for shared, restful nights.</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="product-options-group">
            <span className="options-label">Select Size</span>
            <div className="options-grid">
              {sizes.map((size) => (
                <button 
                  key={size.name}
                  className={`option-btn ${selectedSize === size.name ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size.name)}
                >
                  <span>{size.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="product-options-group">
            <span className="options-label">Select Firmness</span>
            <div className="options-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {firmnessOptions.map((firmness) => (
                <button 
                  key={firmness}
                  className={`option-btn ${selectedFirmness === firmness ? 'active' : ''}`}
                  onClick={() => setSelectedFirmness(firmness)}
                >
                  <span>{firmness}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="product-actions">
            <button className="add-to-cart-btn">
              Add to Cart — ${currentPrice}
            </button>
            
            <ul className="guarantees-list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                100-Night Sleep Trial
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Free Shipping & Returns
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                10-Year Warranty
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Product;
