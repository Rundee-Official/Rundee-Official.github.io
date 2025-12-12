import './BigMoth2.css';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function BigMoth2() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      demo: 'Demo',
      gameplay: 'Gameplay Gallery',
      dev: 'Dev Gallery',
      role: 'UI/UX & Gameplay Programmer',
      overviewTitle: 'Overview',
      overview1: 'Big Moth 2 is a whimsical 3D bug-catching game built during a DigiPen Junior team project. I owned interactive UI/UX systems in Unreal Engine Blueprints: main menus, tabbed inventory, companion moth displays, and tutorial quest integration.',
      overview2: 'Collaborated with UI designers and gameplay engineers, adding animated menus, in-game pause/debug UIs, 3D model overlays for inventory items, and tutorial triggers. Solved Perforce integration, resolution scaling, and blueprint modularity issues while hitting milestones.',
      highlights: [
        '🎨 Designed & implemented animated UI: main menu, pause, debug, market',
        '📦 Developed tabbed inventory with 3D moth preview & companion grid',
        '🧭 Created tutorial quest system and integrated in-game prompts',
        '🛠️ Resolved scaling/UI bugs across resolutions and menus',
        '🔗 Integrated UIs with Unreal Blueprints & Perforce version control',
      ]
    },
    ko: {
      demo: '데모',
      gameplay: '게임플레이 갤러리',
      dev: '개발 갤러리',
      role: 'UI/UX & 게임플레이 프로그래머',
      overviewTitle: '개요',
      overview1: 'Big Moth 2는 DigiPen 주니어 팀 프로젝트로 만든 아기자기한 3D 벌레잡기 게임입니다. 언리얼 블루프린트로 메인 메뉴, 탭형 인벤토리, 동료 나방 표시, 튜토리얼 퀘스트 연계를 맡았습니다.',
      overview2: 'UI 디자이너·게임플레이 엔지니어와 협업하며 애니메이티드 메뉴, 인게임 일시정지/디버그 UI, 인벤토리 3D 모델 오버레이, 튜토리얼 트리거를 추가했고, Perforce 연동·해상도 스케일링·블루프린트 모듈화 문제를 해결했습니다.',
      highlights: [
        '🎨 메인/일시정지/디버그/마켓 등 애니메이티드 UI 설계·구현',
        '📦 3D 나방 프리뷰와 동료 그리드가 있는 탭형 인벤토리 개발',
        '🧭 튜토리얼 퀘스트 시스템과 인게임 프롬프트 연동',
        '🛠️ 해상도별 스케일링·UI 버그 해결',
        '🔗 Unreal Blueprints & Perforce 연동',
      ]
    }
  };
  const t = copy[lang] || copy.en;

  const [zoomImage, setZoomImage] = useState(null);
  const handleZoom = (src) => setZoomImage(src);
  const closeZoom = () => setZoomImage(null);

  return (
    <div className="project-detail">
      <h1>Big Moth 2</h1>
      
      <h2>{t.demo}</h2>
      <video className="demo-video" controls autoPlay muted loop>
        <source src="/videos/big-moth-2/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2>{t.gameplay}</h2>
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
      <h2><strong>Role:</strong> {t.role}</h2>
      <h2>{t.overviewTitle}</h2>
      <p>{t.overview1}</p>
      <p>{t.overview2}</p>
      
      <h2>{t.dev}</h2>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[4, 1, 2, 3, 4, 1].map((n, i) => (
            <img
              key={i}
              src={`/images/big-moth-2/big-moth-2-dev-${n}.png`}
              alt={`Dev ${n}`}
              onClick={() => handleZoom(`/images/big-moth-2/big-moth-2-dev-${n}.png`)}
            />
          ))}
        </div>
      </div>

      {zoomImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}

      <h2>Highlights</h2>
      <ul className="feature-list">
        {t.highlights.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}
