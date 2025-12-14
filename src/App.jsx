import React, { useRef, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import BigMoth2 from './pages/Projects/BigMoth2';
import Fear from './pages/Projects/Fear';
import PortfolioWebsite from './pages/Projects/PortfolioWebsite';
import RundeeItemFactory from './pages/Projects/RundeeItemFactory';
import Contact from './pages/Contact';
import HomeBackground from './components/HomeBackground';
import { LanguageProvider } from './context/LanguageContext';

function MainRoutesWithBackground() {
  const location = useLocation();
  const showBackground = ['/', '/projects', '/contact'].includes(location.pathname);

  return (
    <div className="content-wrapper">
      {showBackground && <HomeBackground />}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/BigMoth2" element={<BigMoth2 />} />
          <Route path="/projects/Fear" element={<Fear />} />
          <Route path="/projects/RundeeItemFactory" element={<RundeeItemFactory />} />
          <Route path="/projects/PortfolioWebsite" element={<PortfolioWebsite />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

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
        <Navbar isPlaying={isPlaying} toggleMusic={toggleMusic} />
        <div className="App">
          <MainRoutesWithBackground />
        </div>
      </Router>
    </LanguageProvider>
  );
}
