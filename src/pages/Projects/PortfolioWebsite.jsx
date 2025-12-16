import './PortfolioWebsite.css';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function PortfolioWebsite() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      demo: 'Demo',
      gallery: 'Gallery',
      role: 'Full Stack Developer',
      period: '2025.05 - Current',
      teamSize: 'Personal Project',
      tech: 'React',
      overviewTitle: 'Overview',
      overview1: 'This portfolio site was built using React.js with custom Three.js background effects and framer-motion animations. I developed all components from scratch, including dynamic routing with React Router, custom shaders for the background, and a responsive layout.',
      overview2: 'It showcases my projects, experience, and contact info in a clear, performant, and interactive way. I also added background music toggling, conditional backgrounds, and auto-type animations on the homepage.',
      highlights: [
        '🎨 Designed full responsive UI with CSS3 & Flexbox/Grid',
        '⚙️ Implemented Three.js animated particle background with bloom effects',
        '🎵 Added audio playback logic with play/pause toggle & auto volume',
        '💡 Route-based conditional rendering for background effects',
        '🚀 Deployed via GitHub Pages with custom domain support',
      ]
    },
    ko: {
      demo: '데모',
      gallery: '갤러리',
      role: '풀스택 개발자',
      period: '2025.05 - Current',
      teamSize: '개인 프로젝트',
      tech: 'React',
      overviewTitle: '개요',
      overview1: '이 포트폴리오는 React.js로 제작했으며 Three.js 배경 효과와 framer-motion 애니메이션을 추가했습니다. 라우팅, 배경 셰이더, 반응형 레이아웃까지 직접 구성했습니다.',
      overview2: '프로젝트와 경력, 연락처를 빠르게 확인할 수 있도록 배경 음악 토글, 라우트별 배경 전환, 홈 타이핑 애니메이션을 넣어 가볍고 인터랙티브하게 구성했습니다.',
      highlights: [
        '🎨 CSS3 & Flex/Grid로 전체 반응형 UI 설계',
        '⚙️ Three.js 파티클 배경과 블룸 효과 구현',
        '🎵 배경 음악 재생/일시정지 및 자동 볼륨 처리',
        '💡 라우트별 조건부 배경 렌더링',
        '🚀 GitHub Pages로 배포, 커스텀 도메인 지원',
      ]
    }
  };
  const t = copy[lang] || copy.en;

  const [zoomImage, setZoomImage] = useState(null);

  const handleZoom = (src) => setZoomImage(src);
  const closeZoom = () => setZoomImage(null);

  return (
    <div className="project-detail">
      <h1>Portfolio Website</h1>
      <div className="project-meta">
        <span className="meta-item">{t.period}</span>
        <span className="meta-item">{t.teamSize}</span>
        <span className="meta-item">{t.tech}</span>
      </div>
      <h2>{t.demo}</h2>
      <video className="demo-video" controls autoPlay muted loop>
        <source src="/videos/portfolio/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2>{t.gallery}</h2>
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

      <h2><strong>Role:</strong> {t.role}</h2>
      <h2>{t.overviewTitle}</h2>
      <p>{t.overview1}</p>
      <p>{t.overview2}</p>

      <h2>Highlights</h2>
      <ul className="feature-list">
        {t.highlights.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}
