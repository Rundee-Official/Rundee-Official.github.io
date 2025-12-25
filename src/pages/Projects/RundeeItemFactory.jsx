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
      tech: 'Unity / Unreal Engine / C++ / Ollama',
      demo: 'Demo',
      gameplay: 'Gameplay Gallery',
      dev: 'Dev Gallery',
      role: 'Tools Developer / Systems Developer',
      overviewTitle: 'Overview',
      overview: [
        'RundeeItemFactory is an LLM-powered item generation system that automatically creates game item data using local LLM servers (Ollama). The system operates completely offline and provides a GUI integrated with Unity Editor, enabling game developers to generate, validate, and deploy items in a streamlined workflow.',
        'The core of the system is a Dynamic Profile System that allows custom item structures to be defined without code modifications. Users can create Item Profiles and Player Profiles through Unity Editor GUI, defining fields, validation rules, and world context. These profiles are stored as JSON files and used to generate prompts for the LLM.',
        'The system consists of two main components: a C++ executable (RundeeItemFactory.exe) that communicates with Ollama to generate item JSON, and a Unity Editor package that provides profile management, GUI, and ScriptableObject conversion. The C++ executable loads profiles, generates dynamic prompts using DynamicPromptBuilder, calls the LLM via OllamaClient, and saves generated items as JSON files.',
        'A complete workflow is provided: profile creation in Unity Editor, item generation through the C++ executable, and automatic import of JSON files into Unity ScriptableObjects. The DynamicItemImporter converts JSON files to ScriptableObjects based on the Item Profile field definitions, storing them in Resources folders for runtime access.',
        'The system includes an ID registry system to prevent duplicate item IDs. ItemGeneratorRegistry tracks generated item IDs by type, loads existing IDs before generation, includes them in prompts to prevent duplicates, and updates the registry after successful generation.',
        'Advanced features include batch generation support, retry logic with exponential backoff for LLM calls, JSON validation, balance reports showing rarity and stats distribution, and support for multiple item types (Food, Drink, Material, Weapon, WeaponComponent, Ammo). The system also supports custom presets and world context to guide LLM generation.',
        'The Unity Editor integration provides a comprehensive ItemFactoryMainWindow with multiple tabs: Item Factory for generation, Player Profile Manager, Item Profile Manager, and Import Item From Json. The window includes Ollama installation verification, executable download management, model selection, and status indicators for system health.'
      ],
      highlightsTitle: 'Highlights',
      highlights: [
        'Dynamic Profile System enabling custom item structures without code modifications',
        'Local LLM integration using Ollama for completely offline operation',
        'Unity Editor integration with GUI-based profile management and item generation',
        'Automated workflow from profile creation to ScriptableObject conversion',
        'ID registry system preventing duplicate item IDs across generations'
      ],
      systemsTitle: 'Systems & Tech',
      systems: [
        'C++17 executable with nlohmann/json and WinHTTP for LLM communication',
        'Dynamic Prompt Builder generating prompts from profile definitions',
        'OllamaClient with exponential backoff retry logic and timeout handling',
        'Unity Editor package with custom EditorWindow and ScriptableObject system',
        'Dynamic Item Importer converting JSON to ScriptableObjects based on profiles'
      ]
    },
    ko: {
      title: 'Rundee Item Factory',
      period: '2025년 11월 – 현재',
      teamSize: '개인 프로젝트',
      tech: 'Unity / Unreal Engine / C++ / Ollama',
      demo: '데모',
      gameplay: '게임플레이 갤러리',
      dev: '개발 갤러리',
      role: '툴 개발자 / 시스템 개발자',
      overviewTitle: '개요',
      overview: [
        'RundeeItemFactory는 로컬 LLM 서버(Ollama)를 활용하여 게임 아이템 데이터를 자동 생성하는 LLM 기반 아이템 생성 시스템입니다. 완전히 오프라인에서 작동하며 Unity Editor와 통합된 GUI를 제공하여 게임 개발자가 효율적인 워크플로우로 아이템을 생성, 검증, 배포할 수 있도록 합니다.',
        '시스템의 핵심은 코드 수정 없이 커스텀 아이템 구조를 정의할 수 있는 Dynamic Profile System입니다. 사용자는 Unity Editor GUI를 통해 Item Profile과 Player Profile을 생성하고, 필드, 검증 규칙, 월드 컨텍스트를 정의할 수 있습니다. 이러한 프로필은 JSON 파일로 저장되며 LLM용 프롬프트 생성에 사용됩니다.',
        '시스템은 두 가지 주요 컴포넌트로 구성됩니다: Ollama와 통신하여 아이템 JSON을 생성하는 C++ 실행 파일(RundeeItemFactory.exe)과 프로필 관리, GUI, ScriptableObject 변환을 제공하는 Unity Editor 패키지입니다. C++ 실행 파일은 프로필을 로드하고, DynamicPromptBuilder를 사용하여 동적 프롬프트를 생성하며, OllamaClient를 통해 LLM을 호출하고, 생성된 아이템을 JSON 파일로 저장합니다.',
        '완전한 워크플로우가 제공됩니다: Unity Editor에서 프로필 생성, C++ 실행 파일을 통한 아이템 생성, JSON 파일의 Unity ScriptableObject 자동 임포트. DynamicItemImporter는 Item Profile 필드 정의를 기반으로 JSON 파일을 ScriptableObject로 변환하여 런타임 액세스를 위해 Resources 폴더에 저장합니다.',
        '시스템에는 중복 아이템 ID를 방지하는 ID 레지스트리 시스템이 포함되어 있습니다. ItemGeneratorRegistry는 타입별로 생성된 아이템 ID를 추적하고, 생성 전에 기존 ID를 로드하며, 중복을 방지하기 위해 프롬프트에 포함시키고, 성공적인 생성 후 레지스트리를 업데이트합니다.',
        '고급 기능에는 배치 생성 지원, LLM 호출을 위한 지수 백오프 재시도 로직, JSON 검증, 레어리티 및 스탯 분포를 보여주는 밸런스 리포트, 여러 아이템 타입(Food, Drink, Material, Weapon, WeaponComponent, Ammo) 지원이 포함됩니다. 시스템은 또한 LLM 생성을 안내하기 위한 커스텀 프리셋 및 월드 컨텍스트를 지원합니다.',
        'Unity Editor 통합은 여러 탭이 있는 종합적인 ItemFactoryMainWindow를 제공합니다: 생성용 Item Factory, Player Profile Manager, Item Profile Manager, Import Item From Json. 윈도우에는 Ollama 설치 검증, 실행 파일 다운로드 관리, 모델 선택, 시스템 상태 표시기가 포함되어 있습니다.'
      ],
      highlightsTitle: '하이라이트',
      highlights: [
        '코드 수정 없이 커스텀 아이템 구조를 정의할 수 있는 Dynamic Profile System',
        '완전 오프라인 작동을 위한 Ollama를 사용한 로컬 LLM 통합',
        'GUI 기반 프로필 관리 및 아이템 생성을 포함한 Unity Editor 통합',
        '프로필 생성부터 ScriptableObject 변환까지 자동화된 워크플로우',
        '생성 간 중복 아이템 ID를 방지하는 ID 레지스트리 시스템'
      ],
      systemsTitle: '시스템 & 기술',
      systems: [
        'LLM 통신을 위한 nlohmann/json과 WinHTTP를 사용하는 C++17 실행 파일',
        '프로필 정의에서 프롬프트를 생성하는 Dynamic Prompt Builder',
        '지수 백오프 재시도 로직과 타임아웃 처리를 포함한 OllamaClient',
        '커스텀 EditorWindow와 ScriptableObject 시스템을 포함한 Unity Editor 패키지',
        '프로필을 기반으로 JSON을 ScriptableObject로 변환하는 Dynamic Item Importer'
      ]
    }
  };
  const t = copy[lang] || copy.en;

  const gameplayShots = [
    '/images/rundee-item-factory/rundee-item-factory-gameplay1.png',
    '/images/rundee-item-factory/rundee-item-factory-gameplay2.png',
    '/images/rundee-item-factory/rundee-item-factory-gameplay3.png',
    '/images/rundee-item-factory/rundee-item-factory-gameplay4.png',
    '/images/rundee-item-factory/rundee-item-factory-gameplay5.png'
  ];

  const devShots = [
    '/images/rundee-item-factory/rundee-item-factory-dev1.png',
    '/images/rundee-item-factory/rundee-item-factory-dev2.png'
  ];

  return (
    <ProjectDetailTemplate
      title={t.title}
      meta={{
        period: t.period,
        teamSize: t.teamSize,
        tech: t.tech
      }}
      gameplayGallery={{
        title: t.gameplay,
        images: gameplayShots
      }}
      role={t.role}
      overview={{
        title: t.overviewTitle,
        content: t.overview
      }}
      devGallery={{
        title: t.dev,
        images: devShots
      }}
      highlights={{
        title: t.highlightsTitle,
        items: t.highlights
      }}
      systems={{
        title: t.systemsTitle,
        items: t.systems
      }}
    />
  );
}
