import './PortfolioWebsite.css';
import { useState } from 'react';

export default function PortfolioWebsite() {
  const [zoomImage, setZoomImage] = useState(null);

  const handleZoom = (src) => setZoomImage(src);
  const closeZoom = () => setZoomImage(null);

  return (
    <div className="project-detail">
      <h1>Portfolio Website</h1>

      {/* 🎞️ Demo Video */}
      <video className="demo-video" controls autoPlay muted loop>
        <source src="/videos/portfolio/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🖼️ Carousel */}
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[1, 2, 3, 1, 2, 3].map((n, i) => (
            <img
              key={i}
              src={`/images/portfolio/portfolio-${n}.png`}
              alt={`Portfolio ${n}`}
              onClick={() => handleZoom(`/images/portfolio/portfolio-${n}.png`)}
            />
          ))}
        </div>
      </div>

      {zoomImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}

      <h2><strong>Role:</strong> Full Stack Developer</h2>
      <p>
        This portfolio site was built using React.js with custom Three.js background effects and framer-motion animations. 
        I developed all components from scratch, including dynamic routing with React Router, custom shaders for the background, and a responsive layout.
      </p>

      <p>
        It showcases my projects, experience, and contact info in a clear, performant, and interactive way. I also added background music toggling, conditional backgrounds, and auto-type animations on the homepage.
      </p>

      <ul className="feature-list">
        <li>🎨 Designed full responsive UI with CSS3 & Flexbox/Grid</li>
        <li>⚙️ Implemented Three.js animated particle background with bloom effects</li>
        <li>🎵 Added audio playback logic with play/pause toggle & auto volume</li>
        <li>💡 Route-based conditional rendering for background effects</li>
        <li>🚀 Deployed via GitHub Pages with custom domain support</li>
      </ul>
    </div>
  );
}
