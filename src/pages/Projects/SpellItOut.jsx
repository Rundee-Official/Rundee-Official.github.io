/**
 * File Name: SpellItOut.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Spell It Out project detail page
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import ProjectDetailTemplate from './ProjectDetailTemplate';
import { useLanguage } from '../../context/LanguageContext';

export default function SpellItOut() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      title: 'Spell It Out',
      demo: 'Demo',
      gameplay: 'Gameplay Gallery',
      dev: 'Dev Gallery',
      role: 'Controller System Developer / Systems Programmer',
      period: 'Nov 2025 – Dec 2025',
      teamSize: 'Team Size: 4',
      tech: 'Unity',
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
      title: 'Spell It Out',
      demo: '데모',
      gameplay: '게임플레이 갤러리',
      dev: '개발 갤러리',
      role: '컨트롤러 시스템 개발자 / 시스템 프로그래머',
      period: '2025년 11월 – 2025년 12월',
      teamSize: '팀 크기: 4명',
      tech: 'Unity',
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
    <ProjectDetailTemplate
      title={t.title}
      meta={{
        period: t.period,
        teamSize: t.teamSize,
        tech: t.tech
      }}
      demoVideo={{
        title: t.demo,
        src: '/videos/spell-it-out/demo.mp4'
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
