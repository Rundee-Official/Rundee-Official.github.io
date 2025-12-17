/**
 * File Name: RundeeItemFactory.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Rundee Item Factory project detail page
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import ProjectDetailTemplate from './ProjectDetailTemplate';
import { useLanguage } from '../../context/LanguageContext';

export default function RundeeItemFactory() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      title: 'Rundee Item Factory',
      period: 'Nov 2025 – Present',
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
      title: 'Rundee Item Factory',
      period: '2025년 11월 – 현재',
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

  const galleryImages = [
    '/images/rundee-item-factory/cover.svg',
    '/images/rundee-item-factory/editor.svg',
    '/images/rundee-item-factory/dataflow.svg'
  ];

  return (
    <ProjectDetailTemplate
      title={t.title}
      meta={{
        period: t.period,
        teamSize: t.teamSize,
        tech: t.tech
      }}
      overview={{
        title: t.overviewTitle,
        content: t.overview
      }}
      customSections={[
        {
          title: t.techTitle,
          content: t.tech
        }
      ]}
      role={t.role}
      highlights={{
        title: 'Highlights',
        items: t.highlights
      }}
      devGallery={{
        title: 'Gallery',
        images: galleryImages
      }}
    />
  );
}
