import './Fear.css';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const copy = {
  en: {
    title: 'FEAR',
    role: 'Technical Director / Gameplay Programmer',
    demo: 'Demo',
    overviewTitle: 'Overview',
    overview: [
      'FEAR (formerly Catalog: X, Project abnormal) is a Unity horror project built at Udangtang Studio. I owned the sub-event system that drives branching scares and interactions, and integrated gameplay scripting with level triggers and narrative beats.',
      'Focused on reliable event pipelines, timing, and reusable prefabs to keep designers fast while preserving performance in dark, VFX-heavy scenes.',
      'Development is temporarily paused due to studio circumstances.'
    ],
    highlightsTitle: 'Highlights',
    highlights: [
      'Built sub-event framework that sequences scares, interactions, and ambient cues with designer-friendly scripts',
      'Integrated level triggers, timeline-driven scares, and fail-safe recovery paths to avoid stuck states',
      'Optimized lighting/VFX toggles to reduce overdraw and keep frame-times stable in dense scenes',
      'Authored gameplay scripts for core loops and coordinated with art/audio to keep timing tight'
    ],
    systemsTitle: 'Systems & Tech',
    systems: [
      'Event graph: modular sub-event nodes with cooldowns, priorities, and state guards',
      'Trigger toolkit: proximity, line-of-sight, item possession, and timed resets for replayable scares',
      'Performance passes: pooled props & VFX, culling-safe lights, and profiler-driven GPU/CPU trims'
    ],
    gameplayGallery: 'Gameplay Gallery',
    devGallery: 'Dev Gallery'
  },
  ko: {
    title: 'FEAR',
    role: '테크니컬 디렉터 / 게임플레이 프로그래머',
    demo: '데모',
    overviewTitle: '개요',
    overview: [
      'FEAR(구 Catalog: X)는 우당탕 스튜디오에서 만든 Unity 공포 프로젝트입니다. 브랜칭 공포/인터랙션을 담당하는 서브 이벤트 시스템을 구축하고, 게임플레이 스크립트를 레벨 트리거와 내러티브 비트에 연결했습니다.',
      '어두운 씬에서 VFX가 많은 환경에서도 성능을 유지하도록 이벤트 파이프라인, 타이밍, 재사용 가능한 프리팹에 집중했습니다.',
      '현재 스튜디오 사정으로 개발이 일시 중지된 상태입니다.'
    ],
    highlightsTitle: '하이라이트',
    highlights: [
      '디자이너 친화 스크립트로 공포/인터랙션/앰비언트 큐를 시퀀싱하는 서브 이벤트 프레임워크 구현',
      '레벨 트리거, 타임라인 기반 스케어, 실패 상태 복구 경로를 연동해 막힘 없이 진행',
      '라이팅/VFX 토글을 최적화해 오버드로를 줄이고 어두운 씬에서 프레임 유지',
      '핵심 루프 게임플레이 스크립트 작성, 아트/오디오와 타이밍 협업'
    ],
    systemsTitle: '시스템 & 기술',
    systems: [
      '이벤트 그래프: 쿨다운/우선순위/상태 가드가 있는 모듈형 서브 이벤트 노드',
      '트리거 툴킷: 근접, 시야, 아이템 보유, 타이머 리셋 등 반복 가능한 스케어를 위한 트리거',
      '성능 패스: 풀링된 프랍/VFX, 컬링 안전 조명, 프로파일러 기반 GPU/CPU 트림'
    ],
    gameplayGallery: '게임플레이 갤러리',
    devGallery: '개발 갤러리'
  }
};

const gameplayShots = [
  '/images/fear/fear-gameplay1.png',
  '/images/fear/fear-gameplay2.png',
  '/images/fear/fear-gameplay3.png',
  '/images/fear/fear-gameplay4.png',
  '/images/fear/fear-gameplay5.png'
];

const devShots = [
  '/images/fear/fear-dev1.png',
  '/images/fear/fear-dev2.png',
  '/images/fear/fear-dev3.png'
];

export default function Fear() {
  const { lang } = useLanguage();
  const t = copy[lang] || copy.en;
  const [zoomImage, setZoomImage] = useState(null);
  const trackRefGameplay = useRef(null);
  const trackRefDev = useRef(null);

  const handleZoom = (src) => setZoomImage(src);
  const closeZoom = () => setZoomImage(null);

  useEffect(() => {
    const startTicker = (ref, speed = 55) => {
      if (!ref.current) return () => {};
      let pos = 0;
      let last = performance.now();
      let rafId;

      const tick = (now) => {
        const dt = (now - last) / 1000;
        pos -= speed * dt;
        const el = ref.current;
        if (el) {
          const loopWidth = el.scrollWidth / 2;
          if (loopWidth > 0 && pos <= -loopWidth) {
            pos += loopWidth;
          }
          el.style.transform = `translateX(${pos}px)`;
        }
        last = now;
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafId);
    };

    const stops = [
      startTicker(trackRefGameplay, 60),
      startTicker(trackRefDev, 60),
    ];
    return () => stops.forEach(stop => stop && stop());
  }, [lang]);

  return (
    <div className="project-detail">
      <h1>{t.title}</h1>
      <h2>{t.demo}</h2>
      <video className="demo-video" controls autoPlay muted loop>
        <source src="/videos/fear/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {gameplayShots.length > 0 && (
        <>
          <h2>{t.gameplayGallery}</h2>
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

      <h2>{t.overviewTitle}</h2>
      {t.overview.map((p, idx) => <p key={`ov-${idx}`}>{p}</p>)}

      {devShots.length > 0 && (
        <>
          <h2>{t.devGallery}</h2>
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

