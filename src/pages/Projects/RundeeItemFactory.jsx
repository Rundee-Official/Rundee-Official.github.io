import './RundeeItemFactory.css';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function RundeeItemFactory() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      period: '2025.11 - Current',
      teamSize: 'Personal Project',
      tech: 'Visual Studio C++ / Unity Engine / Unreal Engine (Planned)',
      overviewTitle: 'Overview',
      overview: 'RundeeItemFactory is an LLM-powered item pipeline that generates Food/Drink/Material/Weapon/WeaponComponent/Ammo via local Ollama and imports them straight into Unity as ScriptableObjects through a custom EditorWindow. It supports presets (Default/Forest/Desert/Coast/City), retries, JSON merge, ID prefixing, and balance reports so you can batch-generate, validate, and deploy items in one flow.',
      techTitle: 'Tech & Workflow',
      tech: 'Visual Studio C++ / Unity Engine / Unreal Engine (Planned)',
      role: 'Tools & Systems Programmer',
      highlights: [
        '🧠 Local LLM (Ollama) with prompts/presets, exponential backoff retries, and JSON validation.',
        '🗃️ Six item types, ID prefixing, JSON merge, duplicate filtering, and per-type validators.',
        '🛠️ Unity EditorWindow one-click generate/import, Resources auto-save, Item Manager & Database for runtime lookup.',
        '📊 Balance reports (rarity/stats distribution and warnings) and batch mode for multi-job runs.',
      ]
    },
    ko: {
      period: '2025.11 - Current',
      teamSize: '개인 프로젝트',
      tech: 'Visual Studio C++ / Unity 엔진 / 언리얼 엔진 (추가 예정)',
      overviewTitle: '개요',
      overview: 'RundeeItemFactory는 로컬 LLM(Ollama)으로 Food/Drink/Material/Weapon/WeaponComponent/Ammo를 생성해 커스텀 Unity EditorWindow에서 ScriptableObject로 바로 임포트하는 파이프라인입니다. 프리셋(Default/Forest/Desert/Coast/City), 재시도, JSON 병합, ID 프리픽스, 밸런스 리포트를 지원하여 대량 생성/검증/배치를 한 번에 처리합니다.',
      techTitle: '기술 & 워크플로우',
      tech: 'Visual Studio C++ / Unity 엔진 / 언리얼 엔진 (추가 예정)',
      role: '툴/시스템 프로그래머',
      highlights: [
        '🧠 로컬 LLM(Ollama) + 프롬프트/프리셋, 지수 백오프 재시도, JSON 검증.',
        '🗃️ 6종 아이템, ID 프리픽스, JSON 병합/중복 제거, 타입별 밸리데이터.',
        '🛠️ Unity EditorWindow 원클릭 생성/임포트, Resources 자동 저장, Item Manager & Database 제공.',
        '📊 밸런스 리포트(레어리티/스탯 분포, 경고)와 배치 모드.',
      ]
    }
  };
  const t = copy[lang] || copy.en;

  const [zoomImage, setZoomImage] = useState(null);

  const gallery = ['cover', 'editor', 'dataflow'];
  const handleZoom = (src) => setZoomImage(src);
  const closeZoom = () => setZoomImage(null);

  return (
    <div className="project-detail">
      <h1>Rundee Item Factory</h1>
      <div className="project-meta">
        <span className="meta-item">{t.period}</span>
        <span className="meta-item">{t.teamSize}</span>
        <span className="meta-item">{t.tech}</span>
      </div>
      <h2>{t.overviewTitle}</h2>
      <p>{t.overview}</p>

      <h2>{t.techTitle}</h2>
      <p>{t.tech}</p>

      <h2><strong>Role:</strong> {t.role}</h2>
      <h2>Highlights</h2>
      <ul className="feature-list">
        {t.highlights.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {gallery.concat(gallery).map((name, i) => (
            <img
              key={`${name}-${i}`}
              src={`/images/rundee-item-factory/${name}.svg`}
              alt={`${name} preview`}
              onClick={() => handleZoom(`/images/rundee-item-factory/${name}.svg`)}
            />
          ))}
        </div>
      </div>

      {zoomImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    </div>
  );
}

