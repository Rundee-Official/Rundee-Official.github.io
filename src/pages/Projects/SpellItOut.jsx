import './SpellItOut.css';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function SpellItOut() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      demo: 'Demo',
      gameplay: 'Gameplay Gallery',
      dev: 'Dev Gallery',
      role: 'Controller System Developer / Systems Programmer',
      overviewTitle: 'Overview',
      overview: [
        'Spell It Out is a 3D top-down dungeon adventure game developed as a school project. Players navigate through rooms, defeating monsters using Nintendo Switch Joy-Con controllers (by swinging or drawing on the Switch screen) or PC mouse input to cast spells, attacks, defense, and healing abilities.',
        'The project\'s unique challenge was developing a console game for Nintendo Switch. As Controller System Developer and Systems Programmer, I was responsible for connecting Unity with Nintendo Switch controllers, implementing key mapping systems, and enabling player actions through connected controllers.',
        'A custom Controller System architecture was developed to abstract input handling across multiple input methods. The system supports Joy-Con controller input, Switch screen touch drawing, and PC mouse/keyboard input, providing a unified interface for gameplay systems regardless of the input device.',
        'Keyboard and mouse fallback system was implemented for PC development workflow when Nintendo API was unavailable. This allowed development and testing to continue on PC while maintaining compatibility with the Nintendo Switch controller system.',
        'Input mapping and abstraction layer were created to handle different input methods seamlessly. The system maps controller inputs to game actions, processes gesture recognition for drawing-based spells, and provides consistent input handling across all supported platforms.',
        'An inventory and item system script was developed but remained unimplemented in the final prototype as the project focused on core gameplay mechanics. The script provided a foundation for item management that could be integrated in future iterations.',
        'Note: Nintendo controller-related code is confidential and cannot be shown directly in this portfolio.'
      ],
      highlightsTitle: 'Highlights',
      highlights: [
        'Controller System connecting Unity with Nintendo Switch controllers and key mapping',
        'Input abstraction layer supporting Joy-Con, Switch screen drawing, and PC mouse',
        'Keyboard/mouse fallback system for PC development workflow',
        'Modular input architecture for seamless multi-platform support',
        'Inventory and item system scripts (unimplemented in final prototype)'
      ],
      systemsTitle: 'Systems & Tech',
      systems: [
        'Unity Engine for cross-platform development',
        'Nintendo Switch API integration for Joy-Con controller support',
        'Custom Controller System architecture for input mapping and device abstraction',
        'Keyboard/mouse fallback system for PC development and testing',
        'Modular input handling to support multiple input methods seamlessly'
      ]
    },
    ko: {
      demo: '데모',
      gameplay: '게임플레이 갤러리',
      dev: '개발 갤러리',
      role: '컨트롤러 시스템 개발자 / 시스템 프로그래머',
      overviewTitle: '개요',
      overview: [
        'Spell It Out는 학교 프로젝트로 개발한 3D 탑뷰 던전 어드벤처 게임입니다. 플레이어는 각 방의 몬스터를 닌텐도 스위치 조이콘을 휘두르거나 스위치 스크린에 직접 그리거나, PC에서는 마우스로 그림을 그려 공격, 마법, 방어, 회복 같은 스킬을 사용해 무찌르고 던전을 빠져나갑니다.',
        '이 프로젝트의 특수성은 닌텐도 스위치 기반 콘솔 게임 개발이었습니다. 컨트롤러 시스템 개발자 및 시스템 프로그래머로서 Unity와 닌텐도 스위치 컨트롤러 연결, 키 매핑 시스템 구현, 연결된 컨트롤러를 통한 플레이어 동작 구현을 담당했습니다.',
        '다중 입력 방식을 추상화하는 커스텀 Controller System 아키텍처가 개발되었습니다. 이 시스템은 조이콘 컨트롤러 입력, 스위치 스크린 터치 그리기, PC 마우스/키보드 입력을 지원하며, 입력 디바이스에 관계없이 게임플레이 시스템을 위한 통합 인터페이스를 제공합니다.',
        'Nintendo API가 없는 PC 개발 환경에서 개발 워크플로우를 위한 키보드 및 마우스 폴백 시스템이 구현되었습니다. 이를 통해 닌텐도 스위치 컨트롤러 시스템과의 호환성을 유지하면서 PC에서도 개발 및 테스트를 계속할 수 있었습니다.',
        '다양한 입력 방식을 원활하게 처리하기 위한 입력 매핑 및 추상화 레이어가 만들어졌습니다. 이 시스템은 컨트롤러 입력을 게임 액션에 매핑하고, 그리기 기반 마법을 위한 제스처 인식을 처리하며, 지원되는 모든 플랫폼에서 일관된 입력 처리를 제공합니다.',
        '인벤토리 및 아이템 시스템 스크립트가 개발되었지만 프로젝트가 핵심 게임플레이 메커니즘에 집중했기 때문에 최종 프로토타입에는 적용되지 않았습니다. 스크립트는 향후 반복 작업에서 통합할 수 있는 아이템 관리 기반을 제공했습니다.',
        '참고: 닌텐도 컨트롤러 관련 코드는 기밀 사항이므로 이 포트폴리오에서는 직접 공개할 수 없습니다.'
      ],
      highlightsTitle: '하이라이트',
      highlights: [
        'Unity와 닌텐도 스위치 컨트롤러 연결 및 키 매핑을 포함한 Controller System',
        '조이콘, 스위치 스크린 그리기, PC 마우스를 지원하는 입력 추상화 레이어',
        'PC 개발 워크플로우를 위한 키보드/마우스 폴백 시스템',
        '원활한 다중 플랫폼 지원을 위한 모듈형 입력 아키텍처',
        '인벤토리 및 아이템 시스템 스크립트 (최종 프로토타입에는 미적용)'
      ],
      systemsTitle: '시스템 & 기술',
      systems: [
        '크로스 플랫폼 개발을 위한 Unity Engine',
        '조이콘 컨트롤러 지원을 위한 Nintendo Switch API 통합',
        '입력 매핑 및 디바이스 추상화를 위한 커스텀 Controller System 아키텍처',
        'PC 개발 및 테스트를 위한 키보드/마우스 폴백 시스템',
        '다중 입력 방식을 원활하게 지원하는 모듈형 입력 처리'
      ]
    }
  };
  const t = copy[lang] || copy.en;

  const trackRefGameplay = useRef(null);
  const trackRefDev = useRef(null);
  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    const startTicker = (ref, speed = 55) => {
      if (!ref.current) return () => {};
      let pos = 0, last = performance.now(), rafId;
      const tick = (now) => {
        const dt = (now - last) / 1000;
        pos -= speed * dt;
        const el = ref.current;
        if (el) {
          const loopWidth = el.scrollWidth / 2;
          if (loopWidth > 0 && pos <= -loopWidth) pos += loopWidth;
          el.style.transform = `translateX(${pos}px)`;
        }
        last = now;
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafId);
    };
    const stops = [
      trackRefGameplay.current ? startTicker(trackRefGameplay, 55) : null,
      trackRefDev.current ? startTicker(trackRefDev, 55) : null
    ].filter(Boolean);
    return () => stops.forEach(stop => stop && stop());
  }, [lang]);

  const handleZoom = (src) => setZoomImage(src);
  const closeZoom = () => setZoomImage(null);

  const gameplayShots = [
    '/images/spell-it-out/spell-it-out-gameplay1.png',
    '/images/spell-it-out/spell-it-out-gameplay2.png',
    '/images/spell-it-out/spell-it-out-gameplay3.png'
  ];

  const devShots = [
    '/images/spell-it-out/spell-it-out-dev1.png',
    '/images/spell-it-out/spell-it-out-dev2.png',
    '/images/spell-it-out/spell-it-out-dev3.png'
  ];

  return (
    <div className="project-detail">
      <h1>Spell It Out</h1>
      
      <h2>{t.demo}</h2>
      <video className="demo-video" controls autoPlay muted loop>
        <source src="/videos/spell-it-out/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {gameplayShots.length > 0 && (
        <>
          <h2>{t.gameplay}</h2>
          <div className="carousel-wrapper">
            <div className="carousel-track" ref={trackRefGameplay}>
              {gameplayShots.concat(gameplayShots).map((src, i) => (
                <img
                  key={`g-${i}-${src}`}
                  src={src}
                  alt={`Gameplay ${i + 1}`}
                  onClick={() => handleZoom(src)}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {zoomImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}

      <h2><strong>Role:</strong> {t.role}</h2>
      <h2>{t.overviewTitle}</h2>
      {t.overview.map((p, idx) => <p key={`ov-${idx}`}>{p}</p>)}

      {devShots.length > 0 && (
        <>
          <h2>{t.dev}</h2>
          <div className="carousel-wrapper">
            <div className="carousel-track" ref={trackRefDev}>
              {devShots.concat(devShots).map((src, i) => (
                <img
                  key={`d-${i}-${src}`}
                  src={src}
                  alt={`Dev ${i + 1}`}
                  onClick={() => handleZoom(src)}
                />
              ))}
            </div>
          </div>
        </>
      )}

      <h2>{t.highlightsTitle}</h2>
      <ul className="feature-list">
        {t.highlights.map((item, idx) => <li key={`hi-${idx}`}>{item}</li>)}
      </ul>

      <h2>{t.systemsTitle}</h2>
      <ul className="feature-list">
        {t.systems.map((item, idx) => <li key={`sys-${idx}`}>{item}</li>)}
      </ul>

      {zoomImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    </div>
  );
}

