/**
 * File Name: Projects.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Projects page component with filtering and project cards
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import { useEffect, useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Projects.css';
import { useLanguage } from '../context/LanguageContext';

function ProjectCard({ project, text, isExisting = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isHovered && project.video && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isHovered && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered, project.video]);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      // Pass card position and size information via location.state
      const cardData = {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      };
      
      // Pass expansion animation information via state on navigation
      navigate(project.link || '#', {
        state: {
          expandAnimation: true,
          cardData: cardData
        }
      });
    } else {
      // Set state even if card ref is unavailable (navigation without animation)
      navigate(project.link || '#', {
        state: {
          expandAnimation: true
        }
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 0.8,
        transition: { duration: 0.3 }
      }}
      transition={{ 
        opacity: { duration: 0.3, delay: isExisting ? 0 : 0.5 }, // New cards appear after layout animation
        scale: { duration: 0.3, delay: isExisting ? 0 : 0.5 },
        layout: { 
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.5
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div onClick={handleClick} className="project-link" style={{ cursor: 'pointer' }}>
        <div className="project-media-wrapper">
          {project.image && (
            <img 
              src={project.image} 
              alt={project.title} 
              className={`project-image ${isHovered && project.video ? 'hidden' : ''}`}
              loading="lazy"
              decoding="async"
            />
          )}
          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              className={`project-video ${isHovered ? 'visible' : 'hidden'}`}
              muted
              loop
              playsInline
            />
          )}
        </div>
        <h3>{project.title}</h3>
        {(project.kind || project.org) && (
          <span className="project-badge">
            {project.org 
              ? (text.orgLabels?.[project.org] || project.org)
              : (text.filters?.[project.kind] || project.kind)
            }
          </span>
        )}
        {(project.kind || project.org) && <hr className="project-card-divider" />}
        <p className="project-role">
          <strong>{text.roleLabel}</strong><br />
          {project.role.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              {idx < project.role.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
        <hr className="project-card-divider" />
        <p>{project.description}</p>
      </div>
    </motion.div>
  );
}

const copy = {
  en: {
    title: 'Projects',
    roleLabel: 'Role',
    filters: {
      all: 'All',
      school: 'School Projects',
      udangtang: 'Udangtang Studio',
      personal: 'Personal',
      game: 'Games',
      tool: 'Tools',
      web: 'Web'
    },
    orgLabels: { school: 'School Project', udangtang: 'Udangtang Studio', personal: 'Personal' },
    categories: [
      {
        id: 'team',
        label: 'Team Projects',
        items: [
          {
            title: 'FEAR',
            description: 'Unity horror project: sub-event system, gameplay scripting, event pipelines.',
            role: 'Technical Director\nGameplay Programmer',
            link: '/projects/Fear',
            image: '/images/fear/fear-cover.png',
            video: '/videos/fear/demo.mp4',
            kind: 'game',
            org: 'udangtang'
          },
          {
            title: 'Big Moth 2',
            description: 'Catch moths and befriend them in a whimsical 3D game.',
            role: 'UI/UX Programmer\nGameplay Programmer',
            link: '/projects/BigMoth2',
            image: '/images/big-moth-2/big-moth-2-cover.png',
            video: '/videos/big-moth-2/demo.mp4',
            kind: 'game',
            org: 'school'
          },
          {
            title: 'Spell It Out',
            description: 'Draw spells with Joy-Con or mouse to defeat monsters.',
            role: 'Controller System Developer\nSystems Programmer',
            link: '/projects/SpellItOut',
            image: '/images/spell-it-out/spell-it-out-cover.png',
            video: '/videos/spell-it-out/demo.mp4',
            kind: 'game',
            org: 'school'
          }
        ]
      },
      {
        id: 'individual',
        label: 'Individual Projects',
        items: [
          {
            title: 'Rundee Item Factory',
            description: 'LLM-powered item generator (Unity/UE) · presets · balance reports',
            role: 'Tools Developer\nSystems Developer',
            link: '/projects/RundeeItemFactory',
            image: '/images/rundee-item-factory/cover.svg',
            kind: 'tool',
            org: 'personal'
          },
          {
            title: 'Rundee Website',
            description: 'React + Three.js portfolio with animated background and routing.',
            role: 'Full Stack Developer',
            link: '/projects/RundeeWebsite',
            image: '/images/rundee-website/rundee-website-cover.png',
            kind: 'web',
            org: 'personal'
          }
        ]
      }
    ],
    empty: 'No projects to show yet.'
  },
  ko: {
    title: '프로젝트',
    roleLabel: '역할',
    filters: {
      all: '전체',
      school: '학교 프로젝트',
      udangtang: '우당탕 스튜디오',
      personal: '개인',
      game: '게임',
      tool: '툴',
      web: '웹'
    },
    orgLabels: { school: '학교 프로젝트', udangtang: '우당탕 스튜디오', personal: '개인' },
    categories: [
      {
        id: 'team',
        label: '팀 프로젝트',
        items: [
          {
            title: 'FEAR',
            description: 'Unity 공포 프로젝트: 서브 이벤트 시스템, 게임플레이 스크립팅, 이벤트 파이프라인.',
            role: '테크니컬 디렉터\n게임플레이 프로그래머',
            link: '/projects/Fear',
            image: '/images/fear/fear-cover.png',
            video: '/videos/fear/demo.mp4',
            kind: 'game',
            org: 'udangtang'
          },
          {
            title: 'Big Moth 2',
            description: '3D에서 나방을 잡고 친구가 되는 아기자기한 게임.',
            role: 'UI/UX 프로그래머\n게임플레이 프로그래머',
            link: '/projects/BigMoth2',
            image: '/images/big-moth-2/big-moth-2-cover.png',
            video: '/videos/big-moth-2/demo.mp4',
            kind: 'game',
            org: 'school'
          },
          {
            title: 'Spell It Out',
            description: '3D 탑뷰 던전 어드벤처: 조이콘이나 마우스로 그림을 그려 마법을 사용해 몬스터를 무찌르는 게임.',
            role: '컨트롤러 시스템 개발자\n시스템 프로그래머',
            link: '/projects/SpellItOut',
            image: '/images/spell-it-out/spell-it-out-cover.png',
            video: '/videos/spell-it-out/demo.mp4',
            kind: 'game',
            org: 'school'
          }
        ]
      },
      {
        id: 'individual',
        label: '개인 프로젝트',
        items: [
          {
            title: 'Rundee Item Factory',
            description: 'LLM 기반 아이템 제너레이터 (Unity/UE) · 프리셋 · 밸런스 리포트',
            role: '툴 개발자\n시스템 개발자',
            link: '/projects/RundeeItemFactory',
            image: '/images/rundee-item-factory/cover.svg',
            kind: 'tool',
            org: 'personal'
          },
          {
            title: 'Rundee Website',
            description: 'React + Three.js 포트폴리오, 애니메이티드 배경과 라우팅.',
            role: '풀스택 개발자',
            link: '/projects/RundeeWebsite',
            image: '/images/rundee-website/rundee-website-cover.png',
            kind: 'web',
            org: 'personal'
          }
        ]
      }
    ],
    empty: '표시할 프로젝트가 없습니다.'
  }
};

export default function Projects() {
  const { lang } = useLanguage();
  const text = copy[lang] || copy.en;
  const categories = text.categories || [];
  const [categoryId, setCategoryId] = useState(categories[0]?.id || '');
  const [orgFilter, setOrgFilter] = useState('all');
  const [filterMode, setFilterMode] = useState('org'); // 'org' | 'kind'

  useEffect(() => {
    setCategoryId(categories[0]?.id || '');
    setOrgFilter('all');
    setFilterMode(categories[0]?.id === 'individual' ? 'kind' : 'org');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const activeCategory = categories.find(c => c.id === categoryId) || categories[0] || { items: [] };

  useEffect(() => {
    setFilterMode(categoryId === 'individual' ? 'kind' : 'org');
    setOrgFilter('all');
  }, [categoryId]);

  const filterOptions = useMemo(() => {
    const set = new Set();
    (activeCategory.items || []).forEach(item => {
      const key = filterMode === 'kind' ? item.kind : item.org;
      if (key) set.add(key);
    });
    return ['all', ...Array.from(set)];
  }, [activeCategory, filterMode]);

  const filteredItems = useMemo(() => {
    return (activeCategory.items || []).filter((item) => {
      const key = filterMode === 'kind' ? item.kind : item.org;
      return orgFilter === 'all' || key === orgFilter;
    });
  }, [activeCategory.items, filterMode, orgFilter]);

  // Track previously filtered items (to distinguish existing cards from new ones)
  const prevFilteredItemsRef = useRef(filteredItems.map(p => p.title));
  
  useEffect(() => {
    prevFilteredItemsRef.current = filteredItems.map(p => p.title);
  }, [filteredItems]);

  return (
    <section className="projects">
      <h1>{text.title}</h1>

      <div className="projects-tabs" role="tablist" aria-label={text.title}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={categoryId === cat.id}
            className={categoryId === cat.id ? 'active' : ''}
            onClick={() => {
              setCategoryId(cat.id);
              setOrgFilter('all');
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-filters" aria-label="Filter">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            className={orgFilter === opt ? 'active' : ''}
            onClick={() => setOrgFilter(opt)}
          >
            {opt === 'all' ? text.filters.all : (text.filters[opt] || opt)}
          </button>
        ))}
      </div>

      <motion.div 
        className="project-grid"
        layout
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredItems.map((p) => {
            // Check if card existed in previous filter state
            const isExisting = prevFilteredItemsRef.current.includes(p.title);
            return (
              <ProjectCard 
                key={p.title} 
                project={p} 
                text={text}
                isExisting={isExisting} // No delay for existing cards
              />
            );
          })}
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <motion.p 
            className="projects-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {text.empty}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
