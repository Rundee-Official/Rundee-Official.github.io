/**
 * File Name: Fear.jsx
 * Author: Haneul Lee (Rundee)
 * Description: FEAR project detail page
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import ProjectDetailTemplate from './ProjectDetailTemplate';
import { useLanguage } from '../../context/LanguageContext';

const copy = {
  en: {
    title: 'FEAR',
    role: 'Technical Director / Gameplay Programmer',
    period: 'May 2025 – Aug 2025',
    teamSize: 'Team Size: 8',
    tech: 'Unity',
    demo: 'Demo',
    overviewTitle: 'Overview',
    overview: [
      'FEAR (formerly Catalog: X, Project abnormal) is a Unity horror project built at Udangtang Studio. As Technical Director and Gameplay Programmer, I architected and implemented core systems that drive branching scares, player interactions, and narrative progression.',
      'A modular Sub-Event System sequences scares, interactions, and ambient cues across multiple event types (SubEvent1-8). Each sub-event operates independently with its own trigger conditions, event sequences, and recovery paths. The system uses an EventController that executes EventBase-derived scripts, enabling designers to chain events, control player movement, trigger VFX, and manage state transitions without requiring code changes.',
      'The Mission Manager system uses JSON-based mission data to track progress across multiple steps, handle condition validation (Collect, Submit, TalkTo, MoveTo, Timeout), and manage mission state (InProgress, Completed, Failed). It supports exclusive missions with return-after-completion logic and integrates with Unity Netcode for multiplayer synchronization, updating tablet UI across all clients.',
      'Full multiplayer networking support was implemented using Unity Netcode for GameObjects. The networking system handles player synchronization, room detection across clients, event triggering in multiplayer sessions, and server-authoritative mission state management. NetworkVariables and ServerRpc/ClientRpc patterns ensure consistent game state across all connected players.',
      'Gameplay scripting was integrated with level triggers and narrative beats, creating event pipelines that connect sub-events with mission progression. The system manages timing, reusable prefabs, and state transitions to keep designers productive while maintaining performance in dark, VFX-heavy scenes.',
      'All systems were designed with performance optimization in mind, using object pooling, efficient state management, and optimized VFX toggles to maintain stable frame rates. Systems were built to be reusable and maintainable for rapid iteration during development.',
      'Note: Development is temporarily paused due to studio circumstances.'
    ],
    highlightsTitle: 'Highlights',
    highlights: [
      'Modular Sub-Event System with eight independent event types for branching scares and interactions',
      'Mission Manager with JSON-based data, condition validation, and multiplayer synchronization',
      'Full multiplayer networking using Unity Netcode with server-authoritative state management',
      'AI Propagation System using NavMesh triangulation for dynamic AI awareness',
      'Performance optimizations with object pooling and VFX toggles for stable frame rates'
    ],
    systemsTitle: 'Systems & Tech',
    systems: [
      'Sub-Event System with EventController and EventBase architecture',
      'Mission Manager with JSON data and Unity Netcode integration',
      'Unity Netcode for GameObjects with NetworkVariables and RPC patterns',
      'AI Propagation System building triangle graphs from NavMesh',
      'Object pooling and VFX toggle systems for performance optimization'
    ],
    gameplayGallery: 'Gameplay Gallery',
    devGallery: 'Dev Gallery'
  },
  ko: {
    title: 'FEAR',
    role: '테크니컬 디렉터 / 게임플레이 프로그래머',
    period: '2025년 5월 – 2025년 8월',
    teamSize: '팀 크기: 8명',
    tech: 'Unity',
    demo: '데모',
    overviewTitle: '개요',
    overview: [
      'FEAR(구 Catalog: X, Project abnormal)는 우당탕 스튜디오에서 만든 Unity 공포 프로젝트입니다. 테크니컬 디렉터 및 게임플레이 프로그래머로서 브랜칭 공포, 플레이어 인터랙션, 내러티브 진행을 이끄는 핵심 시스템을 설계하고 구현했습니다.',
      '다양한 이벤트 타입(SubEvent1-8)에 걸쳐 공포, 인터랙션, 앰비언트 큐를 시퀀싱하는 모듈형 서브 이벤트 시스템이 구축되었습니다. 각 서브 이벤트는 독립적으로 작동하며 고유한 트리거 조건, 이벤트 시퀀스, 복구 경로를 가집니다. EventBase를 상속받는 스크립트를 실행하는 EventController를 사용해 디자이너가 코드 변경 없이 이벤트를 체인하고, 플레이어 이동을 제어하며, VFX를 트리거하고, 상태 전환을 관리할 수 있도록 했습니다.',
      'Mission Manager 시스템은 JSON 기반 미션 데이터를 사용해 여러 단계에 걸쳐 진행을 추적하고, 조건 검증(Collect, Submit, TalkTo, MoveTo, Timeout)을 처리하며, 미션 상태(InProgress, Completed, Failed)를 관리합니다. 완료 후 복귀 로직을 지원하는 독점 미션을 지원하며, Unity Netcode와 통합해 멀티플레이어 동기화를 수행하고 모든 클라이언트의 태블릿 UI를 업데이트합니다.',
      'Unity Netcode for GameObjects를 사용한 완전한 멀티플레이어 네트워킹 지원이 구현되었습니다. 네트워킹 시스템은 플레이어 동기화, 클라이언트 간 룸 감지, 멀티플레이어 세션에서의 이벤트 트리거, 서버 권한 미션 상태 관리를 처리합니다. NetworkVariables와 ServerRpc/ClientRpc 패턴을 사용해 연결된 모든 플레이어 간 일관된 게임 상태를 보장합니다.',
      '레벨 트리거와 내러티브 비트와 게임플레이 스크립팅이 통합되어 서브 이벤트와 미션 진행을 연결하는 이벤트 파이프라인이 생성되었습니다. 이 시스템은 타이밍, 재사용 가능한 프리팹, 상태 전환을 관리하여 디자이너가 생산적으로 작업할 수 있도록 하면서 어둡고 VFX가 많은 씬에서도 성능을 유지합니다.',
      '모든 시스템은 성능 최적화를 고려해 설계되었으며, 오브젝트 풀링, 효율적인 상태 관리, 최적화된 VFX 토글을 사용해 안정적인 프레임률을 유지합니다. 시스템은 개발 중 빠른 반복을 위해 재사용 가능하고 유지보수 가능하도록 구축되었습니다.',
      '현재 스튜디오 사정으로 개발이 일시 중지된 상태입니다.'
    ],
    highlightsTitle: '하이라이트',
    highlights: [
      '브랜칭 공포와 인터랙션을 위한 8가지 독립 이벤트 타입을 가진 모듈형 서브 이벤트 시스템',
      'JSON 기반 데이터, 조건 검증, 멀티플레이어 동기화를 지원하는 Mission Manager',
      '서버 권한 상태 관리를 포함한 Unity Netcode 기반 멀티플레이어 네트워킹',
      'NavMesh 삼각형 분할을 활용한 AI Propagation System으로 동적 AI 인식 구현',
      '오브젝트 풀링과 VFX 토글을 통한 성능 최적화로 안정적인 프레임률 유지'
    ],
    systemsTitle: '시스템 & 기술',
    systems: [
      'EventController와 EventBase 아키텍처를 사용하는 서브 이벤트 시스템',
      'JSON 데이터와 Unity Netcode 통합을 포함한 Mission Manager',
      'NetworkVariables와 RPC 패턴을 사용하는 Unity Netcode for GameObjects',
      'NavMesh에서 삼각형 그래프를 구축하는 AI Propagation System',
      '성능 최적화를 위한 오브젝트 풀링과 VFX 토글 시스템'
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
        src: '/videos/fear/demo.mp4'
      }}
      gameplayGallery={{
        title: t.gameplayGallery,
        images: gameplayShots
      }}
      role={t.role}
      overview={{
        title: t.overviewTitle,
        content: t.overview
      }}
      devGallery={{
        title: t.devGallery,
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
      carouselSpeed={60}
    />
  );
}
