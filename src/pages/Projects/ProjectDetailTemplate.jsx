/**
 * File Name: ProjectDetailTemplate.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Reusable template component for project detail pages with carousel galleries
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import './ProjectDetailTemplate.css';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getProjectNavigation } from '../../utils/projectNavigation';
import { useLanguage } from '../../context/LanguageContext';

const navCopy = {
  en: {
    back: 'Back',
    prev: 'Previous',
    next: 'Next'
  },
  ko: {
    back: '뒤로',
    prev: '이전',
    next: '다음'
  }
};

export default function ProjectDetailTemplate({
  title,
  meta = {},
  demoVideo,
  gameplayGallery,
  role,
  overview,
  devGallery,
  highlights,
  systems,
  customSections = [],
  carouselSpeed = 55
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const navText = navCopy[lang] || navCopy.en;
  const { prev, next } = getProjectNavigation(location.pathname);
  const [zoomImage, setZoomImage] = useState(null);
  const trackRefGameplay = useRef(null);
  const trackRefDev = useRef(null);
  
  const handleZoom = useCallback((src) => setZoomImage(src), []);
  const closeZoom = useCallback(() => setZoomImage(null), []);

  useEffect(() => {
    const startTicker = (ref, speed = carouselSpeed) => {
      if (!ref.current) return () => {};
      let pos = 0;
      let last = performance.now();
      let rafId;
      let loopWidth = 0;
      let loopWidthDirty = true;

      const updateLoopWidth = () => {
        if (ref.current) {
          const newWidth = ref.current.scrollWidth / 2;
          if (newWidth > 0) {
            loopWidth = newWidth;
            loopWidthDirty = false;
          }
        }
      };

      // Calculate initial size (wait for image loading)
      const images = ref.current?.querySelectorAll('img');
      if (images && images.length > 0) {
        let loadedCount = 0;
        const totalImages = images.length;
        const checkAllLoaded = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            // Calculate size after all images are loaded
            requestAnimationFrame(() => {
              updateLoopWidth();
              loopWidthDirty = false;
            });
          }
        };
        images.forEach(img => {
          if (img.complete) {
            checkAllLoaded();
          } else {
            img.addEventListener('load', checkAllLoaded, { once: true });
            img.addEventListener('error', checkAllLoaded, { once: true });
          }
        });
      } else {
        // Calculate immediately if no images
        updateLoopWidth();
      }

      const tick = (now) => {
        const dt = (now - last) / 1000;
        pos -= speed * dt;
        const el = ref.current;
        if (el) {
          // Minimize scrollWidth reads (recalculate only after image loading)
          if (loopWidthDirty) {
            updateLoopWidth();
          }
          
          if (loopWidth > 0 && pos <= -loopWidth) {
            pos += loopWidth;
          }
          el.style.transform = `translateX(${pos}px)`;
        }
        last = now;
        rafId = requestAnimationFrame(tick);
      };

      // Start after a short delay (layout stabilization)
      const startDelay = setTimeout(() => {
        updateLoopWidth();
        rafId = requestAnimationFrame(tick);
      }, 100);

      return () => {
        clearTimeout(startDelay);
        cancelAnimationFrame(rafId);
      };
    };

    const stops = [
      gameplayGallery?.images ? startTicker(trackRefGameplay, carouselSpeed) : null,
      devGallery?.images ? startTicker(trackRefDev, carouselSpeed) : null,
    ].filter(Boolean);
    
    return () => stops.forEach(stop => stop && stop());
  }, [gameplayGallery, devGallery, carouselSpeed]);

  const renderGallery = (gallery, ref, key) => {
    if (!gallery || !gallery.images || gallery.images.length === 0) return null;
    
    return (
      <>
        <hr className="section-divider" />
        <h2>{gallery.title}</h2>
        <div className="carousel-wrapper">
          <div className="carousel-track" ref={ref} style={{ minHeight: '180px' }}>
            {[...gallery.images, ...gallery.images].map((src, i) => (
              <img
                key={`${key}-${i}-${src}`}
                src={src}
                alt={`${gallery.title} ${i + 1}`}
                onClick={() => handleZoom(src)}
                loading="lazy"
                decoding="async"
                style={{ width: '300px', height: '180px' }}
              />
            ))}
          </div>
        </div>
      </>
    );
  };

  const renderContent = (content) => {
    if (typeof content === 'string') {
      return <p>{content}</p>;
    }
    if (Array.isArray(content)) {
      return content.map((item, idx) => 
        typeof item === 'string' ? <p key={`content-${idx}`}>{item}</p> : item
      );
    }
    return content;
  };

  return (
    <div className="project-detail">
      <div className="project-navigation">
        <button 
          className="nav-button back-button"
          onClick={() => navigate('/projects')}
          aria-label={navText.back}
        >
          {navText.back}
        </button>
        <div className="project-nav-arrows">
          <button
            className="nav-button prev-button"
            onClick={() => prev && navigate(prev.path)}
            disabled={!prev}
            aria-label={prev ? `${navText.prev}: ${prev.title}` : navText.prev}
            title={prev ? `${navText.prev}: ${prev.title}` : navText.prev}
          >
            ←
          </button>
          <button
            className="nav-button next-button"
            onClick={() => next && navigate(next.path)}
            disabled={!next}
            aria-label={next ? `${navText.next}: ${next.title}` : navText.next}
            title={next ? `${navText.next}: ${next.title}` : navText.next}
          >
            →
          </button>
        </div>
      </div>
      <h1>{title}</h1>
      
      {(meta.period || meta.teamSize || meta.tech) && (
        <div className="project-meta">
          {meta.period && <span className="meta-item">{meta.period}</span>}
          {meta.teamSize && <span className="meta-item">{meta.teamSize}</span>}
              {meta.tech && (
            <span className="meta-item meta-tech-icons">
              {meta.tech.split(' / ').map((tech, idx) => {
                const iconMap = {
                  'Unity': 'unity',
                  'C#': 'csharp',
                  'C++': 'cplusplus',
                  'Unreal Engine': 'unrealengine',
                  'React': 'react',
                  'Three.js': 'threedotjs',
                  'Framer Motion': 'framer',
                  'React Router': 'reactrouter',
                  'Ollama': 'ollama',
                  'Nintendo Switch API': 'nintendo',
                  'Visual Studio': 'visualstudio',
                  'Visual Studio C++': 'visualstudio',
                  'Ollama (Planned)': 'ollama'
                };
                const cleanTech = tech.replace(/\s*\(.*?\)\s*$/, '').trim();
                let iconName = iconMap[cleanTech] || iconMap[tech.trim()];
                
                // Handle "Visual Studio C++" - use Visual Studio icon
                if (!iconName && tech.includes('Visual Studio')) {
                  iconName = 'visualstudio';
                }
                
                if (iconName) {
                  const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconName}.svg`;
                  return (
                    <span key={idx} className="meta-tech-icon-wrapper" title={tech.trim()}>
                      <img 
                        src={iconUrl} 
                        alt={tech.trim()}
                        className="meta-tech-icon"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.nextSibling) {
                            e.target.nextSibling.style.display = 'inline';
                          }
                        }}
                      />
                      <span className="meta-tech-fallback" style={{ display: 'none' }}>{tech.trim()}</span>
                    </span>
                  );
                }
                
                return <span key={idx} className="meta-tech-text">{tech.trim()}</span>;
              })}
            </span>
          )}
        </div>
      )}

      {demoVideo && (
        <>
          <h2>{demoVideo.title || 'Demo'}</h2>
          <video className="demo-video" controls autoPlay muted loop>
            <source src={demoVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}

      {renderGallery(gameplayGallery, trackRefGameplay, 'gameplay')}

      {role && (
        <>
          <hr className="section-divider" />
          <h2><strong>Role:</strong> {role}</h2>
        </>
      )}

      {overview && (
        <>
          <hr className="section-divider" />
          <h2>{overview.title || 'Overview'}</h2>
          {renderContent(overview.content)}
        </>
      )}

      {renderGallery(devGallery, trackRefDev, 'dev')}

      {highlights && (
        <>
          <hr className="section-divider" />
          <h2>{highlights.title || 'Highlights'}</h2>
          <ul className="feature-list">
            {highlights.items.map((item, idx) => (
              <li key={`highlight-${idx}`}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {systems && (
        <>
          <hr className="section-divider" />
          <h2>{systems.title || 'Systems & Tech'}</h2>
          <ul className="feature-list">
            {systems.items.map((item, idx) => (
              <li key={`system-${idx}`}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {customSections.map((section, idx) => (
        <div key={`custom-${idx}`}>
          <hr className="section-divider" />
          <h2>{section.title}</h2>
          {renderContent(section.content)}
        </div>
      ))}

      {zoomImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    </div>
  );
}
