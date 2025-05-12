import './BigMoth2.css';
import { useState } from 'react';

export default function BigMoth2() {
  const [zoomImage, setZoomImage] = useState(null);

  const handleZoom = (src) => setZoomImage(src);
  const closeZoom = () => setZoomImage(null);

  return (
    <div className="project-detail">
      <h2>Big Moth 2</h2>
      {/* 🎞️ Video Section */}
      <video className="demo-video" controls autoPlay muted loop>
        <source src="/videos/big-moth-2/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🖼️ Full Width Carousel (Main Visual) */}
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[1, 2, 3, 1, 2, 3].map((n, i) => (
            <img
              key={i}
              src={`/images/big-moth-2/big-moth-2-${n}.png`}
              alt={`Gameplay ${n}`}
              onClick={() => handleZoom(`/images/big-moth-2/big-moth-2-${n}.png`)}
            />
          ))}
        </div>
      </div>

      {zoomImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}

      <p><strong>Role:</strong> UI/UX & Gameplay Programmer</p>

      <p>
        Big Moth 2 is a whimsical 2D bug-catching game built during a DigiPen team project.  
        I focused on creating intuitive UI, responsive gameplay, and natural AI behavior for moths.
      </p>

      <ul className="feature-list">
        <li>🧭 Designed & implemented animated UI and HUD</li>
        <li>🎮 Built player interaction with Unity Input System</li>
        <li>🦋 FSM-driven moth behavior with smooth transitions</li>
        <li>📦 Balanced mechanics for catching and befriending moths</li>
      </ul>

      <a
        className="github-link"
        href="https://github.com/Rundee-Official/big-moth-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        🔗 View on GitHub
      </a>
    </div>
  );
}
