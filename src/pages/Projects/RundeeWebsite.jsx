/**
 * File Name: RundeeWebsite.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Rundee Website project detail page
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import ProjectDetailTemplate from './ProjectDetailTemplate';
import { useLanguage } from '../../context/LanguageContext';

export default function RundeeWebsite() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      title: 'Rundee Website',
      demo: 'Demo',
      gameplayGallery: 'Gallery',
      devGallery: 'Dev Gallery',
      role: 'Full Stack Developer',
      period: 'May 2025 – Present',
      teamSize: 'Personal Project',
      tech: 'React / Three.js / Framer Motion / React Router',
      overviewTitle: 'Overview',
      overview: [
        'Rundee Website is a modern, interactive portfolio site built with React.js, featuring a custom Three.js animated particle background system with bloom post-processing effects. The site showcases my game development projects, professional experience, and technical skills through an immersive, performant web experience.',
        'I architected and implemented all components from scratch, including dynamic routing with React Router, internationalization (i18n) support for English and Korean, code splitting with React.lazy for optimal performance, and a fully responsive layout using CSS3 Flexbox and Grid.',
        'The site features smooth page transitions with fade animations, a 1080-degree camera rotation system synchronized with navigation direction, and interactive project filtering with animated card layouts using Framer Motion. Image carousels with infinite scrolling, zoom overlays, and lazy loading ensure optimal performance across all devices.',
        'Accessibility was a key focus: I implemented ARIA labels, keyboard navigation support, semantic HTML structure, and proper focus management. The site also includes background music playback with toggle controls, auto-typing animations on the homepage, and smooth scroll behavior for enhanced user experience.',
        'Performance optimizations include lazy loading for images and routes, memoization with React hooks (useMemo, useCallback), CSS containment for layout stability, and efficient state management to minimize re-renders. The site is deployed via GitHub Pages with custom domain support.'
      ],
      highlightsTitle: 'Highlights',
      highlights: [
        'Fully responsive UI design with CSS3 Flexbox/Grid and mobile-first approach',
        'Three.js animated particle background with bloom post-processing effects and camera rotation system',
        'Internationalization (i18n) with English/Korean language switching and dynamic HTML lang attribute',
        'Code splitting with React.lazy and Suspense for optimal bundle size and load performance',
        'Interactive project filtering with animated card layouts using Framer Motion spring physics'
      ],
      systemsTitle: 'Systems & Tech',
      systems: [
        'React.js with functional components and hooks (useState, useEffect, useMemo, useCallback)',
        'React Router (HashRouter) for client-side routing with dynamic route handling',
        'Framer Motion for declarative animations (page transitions, card layouts, spring physics)',
        'Three.js with EffectComposer, RenderPass, and UnrealBloomPass for particle background',
        'Custom LanguageContext for i18n state management and HTML lang attribute synchronization'
      ]
    },
    ko: {
      title: 'Rundee Website',
      demo: '데모',
      gameplayGallery: '갤러리',
      devGallery: '개발 갤러리',
      role: '풀스택 개발자',
      period: '2025년 5월 – 현재',
      teamSize: '개인 프로젝트',
      tech: 'React / Three.js / Framer Motion / React Router',
      overviewTitle: '개요',
      overview: [
        'Rundee Website는 React.js로 제작된 현대적이고 인터랙티브한 포트폴리오 사이트로, 블룸 후처리 효과가 적용된 커스텀 Three.js 파티클 배경 애니메이션 시스템을 특징으로 합니다. 이 사이트는 몰입감 있고 성능 최적화된 웹 경험을 통해 게임 개발 프로젝트, 전문 경력, 기술적 역량을 소개합니다.',
        '모든 컴포넌트를 처음부터 설계하고 구현했으며, React Router를 사용한 동적 라우팅, 영어/한국어 지원을 위한 국제화(i18n), 최적 성능을 위한 React.lazy를 활용한 코드 스플리팅, CSS3 Flexbox와 Grid를 사용한 완전 반응형 레이아웃을 포함합니다.',
        '페이드 애니메이션을 사용한 부드러운 페이지 전환, 네비게이션 방향과 동기화된 1080도 카메라 회전 시스템, Framer Motion을 사용한 애니메이션 카드 레이아웃이 적용된 인터랙티브 프로젝트 필터링 기능을 제공합니다. 무한 스크롤 이미지 캐러셀, 줌 오버레이, 지연 로딩을 통해 모든 디바이스에서 최적의 성능을 보장합니다.',
        '접근성에 중점을 두어 ARIA 레이블, 키보드 네비게이션 지원, 시맨틱 HTML 구조, 적절한 포커스 관리를 구현했습니다. 또한 배경 음악 재생 토글 컨트롤, 홈페이지 자동 타이핑 애니메이션, 향상된 사용자 경험을 위한 부드러운 스크롤 동작을 포함합니다.',
        '이미지와 라우트의 지연 로딩, React 훅(useMemo, useCallback)을 사용한 메모이제이션, 레이아웃 안정성을 위한 CSS containment, 리렌더링 최소화를 위한 효율적인 상태 관리를 포함한 성능 최적화를 적용했습니다. 커스텀 도메인 지원과 함께 GitHub Pages를 통해 배포되었습니다.'
      ],
      highlightsTitle: '하이라이트',
      highlights: [
        'CSS3 Flexbox/Grid와 모바일 우선 접근 방식을 사용한 완전 반응형 UI 디자인',
        '블룸 후처리 효과와 카메라 회전 시스템이 적용된 Three.js 애니메이션 파티클 배경',
        '영어/한국어 언어 전환 및 동적 HTML lang 속성을 포함한 국제화(i18n)',
        '최적의 번들 크기와 로드 성능을 위한 React.lazy와 Suspense를 사용한 코드 스플리팅',
        'Framer Motion 스프링 물리를 사용한 애니메이션 카드 레이아웃이 적용된 인터랙티브 프로젝트 필터링'
      ],
      systemsTitle: '시스템 & 기술',
      systems: [
        '함수형 컴포넌트와 훅(useState, useEffect, useMemo, useCallback)을 사용한 React.js',
        '클라이언트 사이드 라우팅과 동적 라우트 처리를 위한 React Router (HashRouter)',
        '선언적 애니메이션(페이지 전환, 카드 레이아웃, 스프링 물리)을 위한 Framer Motion',
        '파티클 배경을 위한 EffectComposer, RenderPass, UnrealBloomPass를 사용한 Three.js',
        'i18n 상태 관리 및 HTML lang 속성 동기화를 위한 커스텀 LanguageContext'
      ]
    }
  };
  const t = copy[lang] || copy.en;

  const gameplayImages = [
    '/images/rundee-website/rundee-website-gameplay1.png',
    '/images/rundee-website/rundee-website-gameplay2.png',
    '/images/rundee-website/rundee-website-gameplay3.png'
  ];

  const devImages = [
    '/images/rundee-website/rundee-website-dev1.png',
    '/images/rundee-website/rundee-website-dev2.png',
    '/images/rundee-website/rundee-website-dev3.png'
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
        src: '/videos/rundee-website/demo.mp4'
      }}
      gameplayGallery={{
        title: t.gameplayGallery || t.gallery,
        images: gameplayImages
      }}
      devGallery={{
        title: 'Dev Gallery',
        images: devImages
      }}
      role={t.role}
      overview={{
        title: t.overviewTitle,
        content: t.overview
      }}
      highlights={{
        title: t.highlightsTitle || 'Highlights',
        items: t.highlights
      }}
      systems={{
        title: t.systemsTitle || 'Systems & Tech',
        items: t.systems
      }}
    />
  );
}

