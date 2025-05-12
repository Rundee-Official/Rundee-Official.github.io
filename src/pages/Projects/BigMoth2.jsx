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
        I was primarily responsible for building interactive UI/UX systems using Unreal Engine Blueprints, 
        including main menus, tabbed inventory, companion moth displays, and tutorial quest integration.
      </p>

      <p>
        Throughout development, I collaborated closely with UI designers and gameplay programmers. 
        I implemented features like animated menus, in-game pause/debug UIs, 3D model overlays for inventory items, 
        and tutorial triggers. I also tackled challenges like Perforce integration, resolution scaling, and 
        blueprint modularity. Despite midterms and external blockers, I consistently contributed core systems to meet milestones.
      </p>

      <ul className="feature-list">
        <li>🎨 Designed & implemented animated UI: main menu, pause, debug, market</li>
        <li>📦 Developed tabbed inventory with 3D moth preview & companion grid</li>
        <li>🧭 Created tutorial quest system and integrated in-game prompts</li>
        <li>🛠️ Resolved scaling/UI bugs across resolutions and menus</li>
        <li>🔗 Integrated UIs with Unreal Blueprints & Perforce version control</li>
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
