import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
// import HeroFeaturesSequence from './components/HeroFeaturesSequence';
import EditorialStory from './components/EditorialStory';
import FeaturesGrid from './components/FeaturesGrid';
import ImmersiveFeatures from './components/ImmersiveFeatures';
import CouplesComfort from './components/CouplesComfort';
import HowItWorks from './components/HowItWorks';
import ProductsSection from './components/ProductsSection';
import PreFooterCTA from './components/PreFooterCTA';
import Footer from './components/Footer';
import About from './pages/About';
import Product from './pages/Product';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <main className="main-content">
      <EditorialStory />
      <FeaturesGrid />
      <ImmersiveFeatures />
      <CouplesComfort />
      <HowItWorks />
      {/* <HeroFeaturesSequence /> */}
      <ProductsSection />
      <PreFooterCTA />
    </main>
  );
}

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop" element={<Navigate to="/product" replace />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
