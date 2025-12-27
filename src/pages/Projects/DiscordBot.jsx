/**
 * File Name: DiscordBot.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Rundee Discord Bot project detail page
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import ProjectDetailTemplate from './ProjectDetailTemplate';
import { useLanguage } from '../../context/LanguageContext';

export default function DiscordBot() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      title: 'Rundee Discord Bot',
      demo: 'Demo',
      gameplay: 'Gameplay Gallery',
      dev: 'Dev Gallery',
      role: 'Full Stack Developer',
      period: 'Dec 2025 – Present',
      teamSize: 'Personal Project',
      tech: 'Node.js / Express / Discord API',
      overviewTitle: 'Overview',
      overview: [
        'Rundee Discord Bot is a Discord bot that provides meeting schedule management and GitHub activity notifications for Discord servers. The bot helps teams stay organized by automatically sending meeting reminders and tracking GitHub repository activities in real-time.',
        'The bot features a comprehensive meeting management system that supports both single and recurring meetings. Users can register one-time meetings or set up recurring meetings with various repeat patterns (daily, weekly, bi-weekly, monthly). The system includes automatic reminder notifications sent at configurable intervals before meetings, and supports multiple reminder times for each meeting.',
        'A robust scheduling system was implemented using node-cron for task scheduling. The system handles timezone conversions, weekday exclusions, and end dates for recurring meetings. Meeting data is stored in a SQLite database using better-sqlite3, providing fast and reliable data persistence with support for complex queries and transactions.',
        'GitHub integration was built using webhook endpoints that receive and process GitHub events in real-time. The system supports a wide range of GitHub events including push, pull request, issue events, branch/tag creation/deletion, commit comments, issue comments, releases, forks, stars, deployments, wiki updates, and collaborator management. Each event type is processed with detailed notification messages tailored to the specific event.',
        'The bot uses Discord slash commands for user interactions, providing an intuitive interface for meeting management and configuration. Commands are organized into logical groups: meeting management (/meeting), configuration (/config), and GitHub setup (/setup-github). The bot supports both Korean and English languages with per-guild language settings stored in the database.',
        'Webhook signature verification ensures secure GitHub integration. The system validates incoming webhook requests using HMAC SHA-256 signatures, preventing unauthorized access. Express middleware handles raw body parsing for signature verification while maintaining JSON parsing for other endpoints.',
        'The bot architecture separates concerns with dedicated modules: app.js for main application logic, commands.js for command registration, database.js for data access, messages.js for internationalization, and utils.js for Discord API utilities. This modular design enables easy maintenance and feature expansion.'
      ],
      highlightsTitle: 'Highlights',
      highlights: [
        'Comprehensive meeting management with single and recurring meeting support',
        'Automatic reminder notifications with configurable intervals',
        'GitHub webhook integration supporting multiple event types',
        'Timezone-aware scheduling with weekday exclusion support',
        'Multi-language support (Korean/English) with per-guild settings'
      ],
      systemsTitle: 'Systems & Tech',
      systems: [
        'Node.js with Express for web server and API endpoints',
        'better-sqlite3 for fast and reliable database operations',
        'node-cron for scheduled task management and meeting reminders',
        'discord-interactions for Discord slash command handling',
        'GitHub webhook integration with HMAC SHA-256 signature verification'
      ]
    },
    ko: {
      title: 'Rundee Discord Bot',
      demo: '데모',
      gameplay: '게임플레이 갤러리',
      dev: '개발 갤러리',
      role: '풀스택 개발자',
      period: '2025년 12월 – 현재',
      teamSize: '개인 프로젝트',
      tech: 'Node.js / Express / Discord API',
      overviewTitle: '개요',
      overview: [
        'Rundee Discord Bot은 Discord 서버에서 회의 일정 관리와 GitHub 활동 알림을 제공하는 Discord 봇입니다. 봇은 자동으로 회의 알림을 전송하고 GitHub 저장소 활동을 실시간으로 추적하여 팀이 체계적으로 관리할 수 있도록 도와줍니다.',
        '봇은 단일 회의와 반복 회의를 모두 지원하는 종합적인 회의 관리 시스템을 제공합니다. 사용자는 일회성 회의를 등록하거나 다양한 반복 패턴(매일, 매주, 격주, 매월)으로 반복 회의를 설정할 수 있습니다. 시스템은 회의 전 설정 가능한 간격으로 자동 알림을 전송하며, 각 회의에 대해 여러 알림 시간을 지원합니다.',
        'node-cron을 사용한 강력한 스케줄링 시스템이 구현되었습니다. 시스템은 타임존 변환, 요일 제외, 반복 회의 종료 날짜를 처리합니다. 회의 데이터는 better-sqlite3를 사용하여 SQLite 데이터베이스에 저장되며, 복잡한 쿼리와 트랜잭션을 지원하는 빠르고 안정적인 데이터 영속성을 제공합니다.',
        'GitHub 통합은 웹훅 엔드포인트를 사용하여 GitHub 이벤트를 실시간으로 수신하고 처리합니다. 시스템은 push, pull request, issue 이벤트, 브랜치/태그 생성/삭제, 커밋 댓글, 이슈 댓글, 릴리즈, 포크, 스타, 배포, 위키 업데이트, 협력자 관리 등 광범위한 GitHub 이벤트를 지원합니다. 각 이벤트 타입은 특정 이벤트에 맞춘 상세한 알림 메시지로 처리됩니다.',
        '봇은 사용자 상호작용을 위해 Discord 슬래시 명령어를 사용하여 회의 관리 및 설정을 위한 직관적인 인터페이스를 제공합니다. 명령어는 논리적 그룹으로 구성됩니다: 회의 관리 (/meeting), 설정 (/config), GitHub 설정 (/setup-github). 봇은 데이터베이스에 저장된 서버별 언어 설정을 통해 한국어와 영어를 모두 지원합니다.',
        '웹훅 서명 검증은 안전한 GitHub 통합을 보장합니다. 시스템은 HMAC SHA-256 서명을 사용하여 들어오는 웹훅 요청을 검증하여 무단 액세스를 방지합니다. Express 미들웨어는 다른 엔드포인트에 대한 JSON 파싱을 유지하면서 서명 검증을 위한 원시 본문 파싱을 처리합니다.',
        '봇 아키텍처는 전용 모듈로 관심사를 분리합니다: app.js는 메인 애플리케이션 로직, commands.js는 명령어 등록, database.js는 데이터 액세스, messages.js는 국제화, utils.js는 Discord API 유틸리티를 담당합니다. 이 모듈형 설계는 쉬운 유지보수와 기능 확장을 가능하게 합니다.'
      ],
      highlightsTitle: '하이라이트',
      highlights: [
        '단일 및 반복 회의 지원을 포함한 종합적인 회의 관리',
        '설정 가능한 간격의 자동 알림 알림',
        '다양한 이벤트 타입을 지원하는 GitHub 웹훅 통합',
        '요일 제외 지원을 포함한 타임존 인식 스케줄링',
        '서버별 설정을 포함한 다국어 지원(한국어/영어)'
      ],
      systemsTitle: '시스템 & 기술',
      systems: [
        '웹 서버 및 API 엔드포인트를 위한 Node.js와 Express',
        '빠르고 안정적인 데이터베이스 작업을 위한 better-sqlite3',
        '예약된 작업 관리 및 회의 알림을 위한 node-cron',
        'Discord 슬래시 명령어 처리를 위한 discord-interactions',
        'HMAC SHA-256 서명 검증을 포함한 GitHub 웹훅 통합'
      ]
    }
  };
  const t = copy[lang] || copy.en;

  const gameplayShots = [
    '/images/rundee-discord-bot/discord-rundee-bot-gameplay1.png',
    '/images/rundee-discord-bot/discord-rundee-bot-gameplay2.png',
    '/images/rundee-discord-bot/discord-rundee-bot-gameplay3.png'
  ];

  const devShots = [
    '/images/rundee-discord-bot/discord-rundee-bot-dev1.png',
    '/images/rundee-discord-bot/discord-rundee-bot-dev2.png',
    '/images/rundee-discord-bot/discord-rundee-bot-dev3.png'
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

