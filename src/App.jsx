/**
 * File Name: App.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Main application component with routing, animations, and camera controls
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import React, { useRef, useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import HomeBackground from './components/HomeBackground';
import { LanguageProvider } from './context/LanguageContext';

// Lazy load project detail pages for code splitting
const BigMoth2 = lazy(() => import('./pages/Projects/BigMoth2'));
const Fear = lazy(() => import('./pages/Projects/Fear'));
const SpellItOut = lazy(() => import('./pages/Projects/SpellItOut'));
const RundeeWebsite = lazy(() => import('./pages/Projects/RundeeWebsite'));
const RundeeItemFactory = lazy(() => import('./pages/Projects/RundeeItemFactory'));

// Loading fallback component for lazy-loaded routes
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner">
      <div className="spinner-ring"></div>
      <div className="spinner-ring"></div>
      <div className="spinner-ring"></div>
      <div className="spinner-ring"></div>
    </div>
    <p className="loading-text">Loading...</p>
  </div>
);

// Page order mapping (matches Navbar order)
const PAGE_ORDER = {
  '/': 0,
  '/about': 1,
  '/projects': 2,
  '/contact': 3
};

/**
 * Get page index from pathname for navigation direction calculation
 */
const getPageIndex = (pathname) => {
  if (pathname === '/') return 0;
  if (pathname === '/about') return 1;
  if (pathname.startsWith('/projects')) return 2;
  if (pathname === '/contact') return 3;
  return 0;
};

/**
 * AnimatedRoutes component handles page transitions with fade effects
 */
function AnimatedRoutes({ onDirectionChange }) {
  const location = useLocation();
  const prevPageIndexRef = useRef(getPageIndex(location.pathname));

  const currentPageIndex = getPageIndex(location.pathname);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Handle camera rotation based on navigation direction
  useEffect(() => {
    const prevIndex = prevPageIndexRef.current;
    const currentIndex = currentPageIndex;

    if (prevIndex !== currentIndex) {
      // Determine direction: positive = right, negative = left
      const direction = currentIndex > prevIndex ? 1 : -1;
      
      if (onDirectionChange) {
        onDirectionChange(direction);
      }
    }

    prevPageIndexRef.current = currentIndex;
  }, [location.pathname, currentPageIndex, onDirectionChange]);

  // Fade in/out animation variants
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          opacity: { duration: 0.3, ease: 'easeInOut' }
        }}
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          backgroundColor: 'transparent'
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route 
            path="/projects/BigMoth2" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <BigMoth2 />
              </Suspense>
            } 
          />
          <Route 
            path="/projects/Fear" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Fear />
              </Suspense>
            } 
          />
          <Route 
            path="/projects/SpellItOut" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <SpellItOut />
              </Suspense>
            } 
          />
          <Route 
            path="/projects/RundeeItemFactory" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <RundeeItemFactory />
              </Suspense>
            } 
          />
          <Route 
            path="/projects/RundeeWebsite" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <RundeeWebsite />
              </Suspense>
            } 
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function MainRoutesWithBackground({ onDirectionChange }) {
  return (
    <div className="content-wrapper">
      <div className="page-content">
        <AnimatedRoutes onDirectionChange={onDirectionChange} />
      </div>
    </div>
  );
}

export default function App() {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [cameraRotation, setCameraRotation] = useState(0);

  /**
   * Handle camera rotation based on navigation direction
   * @param {number} direction - 1 for right navigation, -1 for left navigation
   * 1080 degrees (6π radians) rotation: right = camera rotates left (-1080°), left = camera rotates right (+1080°)
   */
  const handleDirectionChange = (direction) => {
    const rotationAmount = direction > 0 ? -Math.PI * 6 : Math.PI * 6;
    setCameraRotation(prev => prev + rotationAmount);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.1;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => {
        console.warn("Autoplay blocked. Try clicking again.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <LanguageProvider>
      <Router>
        <audio
          ref={audioRef}
          src="/audio/bg-music.mp3"
          loop
          style={{ display: 'none' }}
        />
        <HomeBackground blurAmount={0} cameraRotation={cameraRotation} />
        <Navbar isPlaying={isPlaying} toggleMusic={toggleMusic} />
        <div className="App">
          <MainRoutesWithBackground onDirectionChange={handleDirectionChange} />
          <Footer />
        </div>
        <ScrollToTop />
      </Router>
    </LanguageProvider>
  );
}
