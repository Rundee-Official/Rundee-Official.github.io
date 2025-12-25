/**
 * File Name: BigMoth2.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Big Moth 2 project detail page
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import ProjectDetailTemplate from './ProjectDetailTemplate';
import { useLanguage } from '../../context/LanguageContext';

export default function BigMoth2() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      title: 'Big Moth 2',
      demo: 'Demo',
      gameplay: 'Gameplay Gallery',
      dev: 'Dev Gallery',
      role: 'UI/UX Programmer / Gameplay Programmer',
      period: 'Sep 2024 – Apr 2025',
      teamSize: 'Team Size: 21',
      tech: 'Unreal Engine / C++',
      overviewTitle: 'Overview',
      overview: [
        'Big Moth 2 is a whimsical 3D bug-catching game built during a DigiPen Junior team project. As UI/UX and Gameplay Programmer, I designed and implemented all interactive UI systems and integrated them with core gameplay mechanics.',
        'Comprehensive UI systems were developed in Unreal Engine Blueprints including animated main menus, tabbed inventory interfaces with drag-and-drop functionality, marketplace UI with item browsing and trading, companion moth display grids showing caught moths, tutorial systems with step-by-step guidance, pause menus with settings and save options, debug interfaces for development tools, and HUD elements for in-game information display.',
        'A structured Request/Quest System was created using data tables and seed-based generation. The system enables dynamic quest creation, tracks player progress through quest steps, displays active requests in the UI, and integrates tutorial triggers that guide players through game mechanics. Quest data is organized in tables for easy authoring and maintenance by designers.',
        'Custom event bindings were implemented to connect UI systems with gameplay systems efficiently. Instead of using direct references or tick-based updates, an event-driven architecture was created where UI widgets subscribe to gameplay events, reducing overhead and ensuring UI updates only occur when necessary. This approach maintains performance while keeping UI responsive to game state changes.',
        '3D model overlay systems were built for inventory items, allowing players to preview moths and items in 3D space within UI panels. The system renders 3D models to render targets and displays them in widget materials, creating immersive inventory browsing experiences.',
        'UI systems were integrated with the inventory system, enabling drag-and-drop item management, slot-based organization, and visual feedback for item interactions. The inventory UI supports multiple tabs for different item categories and provides clear visual indicators for item states.',
        'Tutorial quest integration was developed to guide players through core game mechanics. Tutorial triggers are embedded in quest data and activate corresponding UI prompts, ensuring players understand how to catch moths, use inventory, trade at marketplace, and manage companion moths.',
        'UI scaling issues across different screen resolutions were solved by implementing anchor-based layouts and responsive widget sizing. This ensures UI elements maintain proper proportions and readability on various display sizes.',
        'UI performance was optimized by implementing efficient widget lifecycle management, reducing unnecessary widget updates, and using object pooling for frequently created and destroyed UI elements. All UI systems were designed with scalability to support future content additions.'
      ],
      systemsTitle: 'Systems & Tech',
      systems: [
        'Unreal Engine Blueprints for UI and gameplay flows',
        'Custom event bindings to connect UI and quest system with minimal overhead',
        'Structured quest data using data tables and seed-based generation',
        '3D model overlay system with render targets for inventory previews',
        'Anchor-based responsive layouts for multi-resolution support'
      ],
      highlights: [
        'Comprehensive UI systems: animated menus, tabbed inventory, marketplace interfaces',
        'Request/Quest System with dynamic quest generation and tutorial integration',
        'Event-driven architecture connecting UI widgets with gameplay systems',
        '3D model overlay system for immersive inventory browsing',
        'UI performance optimization with widget lifecycle management and object pooling'
      ]
    },
    ko: {
      title: 'Big Moth 2',
      demo: '데모',
      gameplay: '게임플레이 갤러리',
      dev: '개발 갤러리',
      role: 'UI/UX & 게임플레이 프로그래머',
      period: '2024년 9월 – 2025년 4월',
      teamSize: '팀 크기: 21명',
      tech: 'Unreal Engine / C++',
      overviewTitle: '개요',
      overview: [
        'Big Moth 2는 DigiPen 주니어 팀 프로젝트로 만든 아기자기한 3D 벌레잡기 게임입니다. UI/UX 및 게임플레이 프로그래머로서 모든 인터랙티브 UI 시스템을 설계하고 구현했으며 핵심 게임플레이 메커니즘과 통합했습니다.',
        'Unreal Engine Blueprints로 애니메이션 메인 메뉴, 드래그 앤 드롭 기능이 있는 탭형 인벤토리 인터페이스, 아이템 탐색 및 거래가 가능한 마켓플레이스 UI, 잡은 나방을 표시하는 동료 나방 디스플레이 그리드, 단계별 가이드가 있는 튜토리얼 시스템, 설정 및 저장 옵션이 있는 일시정지 메뉴, 개발 도구용 디버그 인터페이스, 인게임 정보 표시용 HUD 요소를 포함한 종합적인 UI 시스템이 개발되었습니다.',
        '데이터 테이블과 시드 기반 생성을 사용하는 구조화된 Request/Quest System이 만들어졌습니다. 이 시스템은 동적 퀘스트 생성, 퀘스트 단계를 통한 플레이어 진행 추적, UI에서 활성 요청 표시, 게임 메커니즘을 안내하는 튜토리얼 트리거 통합을 가능하게 합니다. 퀘스트 데이터는 디자이너가 쉽게 작성하고 유지보수할 수 있도록 테이블로 구성되었습니다.',
        'UI 시스템을 게임플레이 시스템과 효율적으로 연결하기 위한 커스텀 이벤트 바인딩이 구현되었습니다. 직접 참조나 틱 기반 업데이트 대신 UI 위젯이 게임플레이 이벤트를 구독하는 이벤트 기반 아키텍처가 만들어져 오버헤드를 줄이고 필요한 경우에만 UI 업데이트가 발생하도록 했습니다. 이 접근 방식은 UI가 게임 상태 변경에 반응하도록 유지하면서 성능을 유지합니다.',
        '인벤토리 아이템용 3D 모델 오버레이 시스템이 구축되어 플레이어가 UI 패널 내에서 3D 공간에 나방과 아이템을 미리 볼 수 있게 되었습니다. 이 시스템은 3D 모델을 렌더 타겟에 렌더링하고 위젯 머티리얼에 표시하여 몰입감 있는 인벤토리 탐색 경험을 만듭니다.',
        'UI 시스템이 인벤토리 시스템과 통합되어 드래그 앤 드롭 아이템 관리, 슬롯 기반 구성, 아이템 상호작용에 대한 시각적 피드백이 가능해졌습니다. 인벤토리 UI는 다양한 아이템 카테고리에 대한 여러 탭을 지원하고 아이템 상태에 대한 명확한 시각적 표시기를 제공합니다.',
        '핵심 게임 메커니즘을 안내하는 튜토리얼 퀘스트 통합이 개발되었습니다. 튜토리얼 트리거는 퀘스트 데이터에 포함되어 있으며 해당 UI 프롬프트를 활성화하여 플레이어가 나방 잡기, 인벤토리 사용, 마켓플레이스 거래, 동료 나방 관리 방법을 이해하도록 합니다.',
        '앵커 기반 레이아웃과 반응형 위젯 크기 조정을 구현하여 다양한 화면 해상도에서 UI 스케일링 문제가 해결되었습니다. 이를 통해 UI 요소가 다양한 디스플레이 크기에서 적절한 비율과 가독성을 유지합니다.',
        '효율적인 위젯 생명주기 관리 구현, 불필요한 위젯 업데이트 감소, 자주 생성되고 파괴되는 UI 요소에 대한 오브젝트 풀링 사용을 통해 UI 성능이 최적화되었습니다. 모든 UI 시스템은 향후 콘텐츠 추가를 지원할 수 있도록 확장성을 고려해 설계되었습니다.'
      ],
      systemsTitle: '시스템 & 기술',
      systems: [
        'UI와 게임플로우를 Unreal Engine Blueprints로 구현',
        'UI-퀘스트 시스템을 커스텀 이벤트 바인딩으로 최적 연동',
        '데이터 테이블과 시드 기반 생성을 사용하는 구조화된 퀘스트 데이터',
        '인벤토리 프리뷰를 위한 렌더 타겟 기반 3D 모델 오버레이 시스템',
        '다중 해상도 지원을 위한 앵커 기반 반응형 레이아웃'
      ],
      highlights: [
        '종합적인 UI 시스템: 애니메이션 메뉴, 탭형 인벤토리, 마켓플레이스 인터페이스',
        '동적 퀘스트 생성과 튜토리얼 통합을 포함한 Request/Quest System',
        'UI 위젯과 게임플레이 시스템을 연결하는 이벤트 기반 아키텍처',
        '몰입감 있는 인벤토리 탐색을 위한 3D 모델 오버레이 시스템',
        '위젯 생명주기 관리와 오브젝트 풀링을 통한 UI 성능 최적화'
      ]
    }
  };
  const t = copy[lang] || copy.en;

  return (
    <ProjectDetailTemplate
      title={t.title}
      meta={{
        period: t.period,
        teamSize: t.teamSize,
        tech: t.tech
      }}
      demoVideo={{
        title: t.demo,
        src: '/videos/big-moth-2/demo.mp4'
      }}
      gameplayGallery={{
        title: t.gameplay,
        images: [
          '/images/big-moth-2/big-moth-2-gameplay1.png',
          '/images/big-moth-2/big-moth-2-gameplay2.png',
          '/images/big-moth-2/big-moth-2-gameplay3.png'
        ]
      }}
      role={t.role}
      overview={{
        title: t.overviewTitle,
        content: t.overview
      }}
      devGallery={{
        title: t.dev,
        images: [
          '/images/big-moth-2/big-moth-2-dev1.png',
          '/images/big-moth-2/big-moth-2-dev2.png',
          '/images/big-moth-2/big-moth-2-dev3.png',
          '/images/big-moth-2/big-moth-2-dev4.png'
        ]
      }}
      highlights={{
        title: 'Highlights',
        items: t.highlights
      }}
      systems={{
        title: t.systemsTitle,
        items: t.systems
      }}
    />
  );
}
