/**
 * File Name: Projects.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Projects page component with filtering and project cards
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import { useEffect, useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import './Projects.css';
import { useLanguage } from '../context/LanguageContext';

function ProjectCard({ project, text, isExisting = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLanguage();

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
        opacity: { duration: 0.3, delay: isExisting ? 0 : 0.5 },
        scale: { duration: 0.3, delay: isExisting ? 0 : 0.5 },
        layout: { 
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.8
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
        {project.tech && project.tech.length > 0 && (
          <>
            <hr className="project-card-divider" />
            <div className="project-tags">
              <span className="project-tags-label">{text.tags}:</span>
              <div className="project-tags-list">
                {project.tech.map((tag, idx) => {
                  const iconMap = {
                    'Unity': 'unity',
                    'C#': 'csharp',
                    'Unity Netcode': 'unity',
                    'Unreal Engine': 'unrealengine',
                    'Blueprints': 'unrealengine',
                    'C++': 'cplusplus',
                    'React': 'react',
                    'Three.js': 'threedotjs',
                    'Framer Motion': 'framer',
                    'React Router': 'reactrouter',
                    'Ollama': 'ollama',
                    'Nintendo Switch API': 'nintendo'
                  };
                  const iconName = iconMap[tag] || tag.toLowerCase().replace(/\s+/g, '');
                  const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconName}.svg`;
                  return (
                    <span key={idx} className="project-tag-icon-wrapper" title={tag}>
                      <img 
                        src={iconUrl} 
                        alt={tag}
                        className="project-tag-icon"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'inline';
                        }}
                      />
                      <span className="project-tag-fallback" style={{ display: 'none' }}>{tag}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </>
        )}
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
        id: 'all',
        label: 'All',
        items: []
      },
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
            org: 'udangtang',
            tech: ['Unity', 'C#'],
            date: '2025-05',
            order: 1
          },
          {
            title: 'Big Moth 2',
            description: 'Catch moths and befriend them in a whimsical 3D game.',
            role: 'UI/UX Programmer\nGameplay Programmer',
            link: '/projects/BigMoth2',
            image: '/images/big-moth-2/big-moth-2-cover.png',
            video: '/videos/big-moth-2/demo.mp4',
            kind: 'game',
            org: 'school',
            tech: ['Unreal Engine', 'C++'],
            date: '2024-09',
            order: 2
          },
          {
            title: 'Spell It Out',
            description: 'Draw spells with Joy-Con or mouse to defeat monsters.',
            role: 'Controller System Developer\nSystems Programmer',
            link: '/projects/SpellItOut',
            image: '/images/spell-it-out/spell-it-out-cover.png',
            video: '/videos/spell-it-out/demo.mp4',
            kind: 'game',
            org: 'school',
            tech: ['Unity', 'C#', 'Nintendo Switch API'],
            date: '2025-11',
            order: 3
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
            image: '/images/rundee-item-factory/cover.png',
            kind: 'tool',
            org: 'personal',
            tech: ['Unity', 'Unreal Engine', 'C++', 'Ollama'],
            date: '2025-11',
            order: 1
          },
          {
            title: 'Rundee Discord Bot',
            description: 'Discord bot for meeting reminders and GitHub activity notifications.',
            role: 'Full Stack Developer',
            link: '/projects/DiscordBot',
            image: '/images/rundee-discord-bot/cover.png',
            kind: 'web',
            org: 'personal',
            tech: ['Node.js', 'Express', 'Discord API'],
            date: '2025-12',
            order: 2
          },
          {
            title: 'Rundee Website',
            description: 'React + Three.js portfolio with animated background and routing.',
            role: 'Full Stack Developer',
            link: '/projects/RundeeWebsite',
            image: '/images/rundee-website/rundee-website-cover.png',
            kind: 'web',
            org: 'personal',
            tech: ['React', 'Three.js', 'Framer Motion', 'React Router'],
            date: '2025-05',
            order: 3
          }
        ]
      }
    ],
    empty: 'No projects to show yet.',
    searchPlaceholder: 'Search projects...',
    sortLabel: 'Sort by',
    sortOptions: {
      nameAsc: 'Name (A-Z)',
      nameDesc: 'Name (Z-A)',
      dateDesc: 'Newest First',
      dateAsc: 'Oldest First'
    },
    count: 'Showing {count} project{plural}',
    tags: 'Tech Stack'
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
        id: 'all',
        label: '전체',
        items: []
      },
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
            org: 'udangtang',
            tech: ['Unity', 'C#'],
            date: '2025-05',
            order: 1
          },
          {
            title: 'Big Moth 2',
            description: '3D에서 나방을 잡고 친구가 되는 아기자기한 게임.',
            role: 'UI/UX 프로그래머\n게임플레이 프로그래머',
            link: '/projects/BigMoth2',
            image: '/images/big-moth-2/big-moth-2-cover.png',
            video: '/videos/big-moth-2/demo.mp4',
            kind: 'game',
            org: 'school',
            tech: ['Unreal Engine', 'C++'],
            date: '2024-09',
            order: 2
          },
          {
            title: 'Spell It Out',
            description: '3D 탑뷰 던전 어드벤처: 조이콘이나 마우스로 그림을 그려 마법을 사용해 몬스터를 무찌르는 게임.',
            role: '컨트롤러 시스템 개발자\n시스템 프로그래머',
            link: '/projects/SpellItOut',
            image: '/images/spell-it-out/spell-it-out-cover.png',
            video: '/videos/spell-it-out/demo.mp4',
            kind: 'game',
            org: 'school',
            tech: ['Unity', 'C#', 'Nintendo Switch API'],
            date: '2025-11',
            order: 3
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
            image: '/images/rundee-item-factory/cover.png',
            kind: 'tool',
            org: 'personal',
            tech: ['Unity', 'Unreal Engine', 'C++', 'Ollama'],
            date: '2025-11',
            order: 1
          },
          {
            title: 'Rundee Discord Bot',
            description: '회의 알림 및 GitHub 활동 알림을 제공하는 Discord 봇.',
            role: '풀스택 개발자',
            link: '/projects/DiscordBot',
            image: '/images/rundee-discord-bot/cover.png',
            kind: 'web',
            org: 'personal',
            tech: ['Node.js', 'Express', 'Discord API'],
            date: '2025-12',
            order: 2
          },
          {
            title: 'Rundee Website',
            description: 'React + Three.js 포트폴리오, 애니메이티드 배경과 라우팅.',
            role: '풀스택 개발자',
            link: '/projects/RundeeWebsite',
            image: '/images/rundee-website/rundee-website-cover.png',
            kind: 'web',
            org: 'personal',
            tech: ['React', 'Three.js', 'Framer Motion', 'React Router'],
            date: '2025-05',
            order: 3
          }
        ]
      }
    ],
    empty: '표시할 프로젝트가 없습니다.',
    searchPlaceholder: '프로젝트 검색...',
    sortLabel: '정렬',
    sortOptions: {
      nameAsc: '이름 (가-하)',
      nameDesc: '이름 (하-가)',
      dateDesc: '최신순',
      dateAsc: '오래된순'
    },
    count: '{count}개의 프로젝트',
    tags: '기술 스택'
  }
};

export default function Projects() {
  const { lang } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const text = copy[lang] || copy.en;
  const categories = text.categories || [];
  
  // Initialize state from URL params or defaults
  const getInitialCategory = () => {
    const category = searchParams.get('category');
    return category && categories.find(c => c.id === category) ? category : categories[0]?.id || '';
  };
  
  const getInitialFilter = () => {
    return searchParams.get('filter') || 'all';
  };
  
  const getInitialSearch = () => {
    return searchParams.get('search') || '';
  };
  
  const [categoryId, setCategoryId] = useState(getInitialCategory);
  const [orgFilter, setOrgFilter] = useState(getInitialFilter);
  const [filterMode, setFilterMode] = useState('org'); // 'org' | 'kind'
  const [searchQuery, setSearchQuery] = useState(getInitialSearch);
  const skipUrlUpdate = useRef(false);
  
  // Update URL params when state changes
  useEffect(() => {
    if (skipUrlUpdate.current) {
      skipUrlUpdate.current = false;
      return;
    }
    
    const params = new URLSearchParams();
    if (categoryId && categoryId !== categories[0]?.id) {
      params.set('category', categoryId);
    }
    if (orgFilter && orgFilter !== 'all') {
      params.set('filter', orgFilter);
    }
    if (searchQuery.trim()) {
      params.set('search', searchQuery.trim());
    }
    
    const newSearch = params.toString();
    const currentSearch = searchParams.toString();
    
    // Only update if different to avoid unnecessary re-renders
    if (newSearch !== currentSearch) {
      setSearchParams(params, { replace: true });
    }
  }, [categoryId, orgFilter, searchQuery, searchParams, setSearchParams, categories]);
  
  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      skipUrlUpdate.current = true;
      const urlCategory = searchParams.get('category');
      const urlFilter = searchParams.get('filter');
      const urlSearch = searchParams.get('search');
      
      if (urlCategory && categories.find(c => c.id === urlCategory)) {
        setCategoryId(urlCategory);
      } else {
        setCategoryId(categories[0]?.id || '');
      }
      
      setOrgFilter(urlFilter || 'all');
      setSearchQuery(urlSearch || '');
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [searchParams, categories]);

  const activeCategory = categories.find(c => c.id === categoryId) || categories[0] || { items: [] };

  useEffect(() => {
    if (categoryId === 'all') {
      setFilterMode('org');
    } else {
      setFilterMode(categoryId === 'individual' ? 'kind' : 'org');
    }
    // Reset filter to 'all' when category changes, but preserve URL param if it exists
    const urlFilter = searchParams.get('filter');
    if (!urlFilter || urlFilter === 'all') {
      setOrgFilter('all');
    }
  }, [categoryId, searchParams]);

  // Get all items when 'all' category is selected
  const allItems = useMemo(() => {
    if (categoryId === 'all') {
      // Get items in order: team first, then individual
      const teamItems = categories.find(cat => cat.id === 'team')?.items || [];
      const individualItems = categories.find(cat => cat.id === 'individual')?.items || [];
      return [...teamItems, ...individualItems];
    }
    return activeCategory.items || [];
  }, [categoryId, categories, activeCategory]);

  const filterOptions = useMemo(() => {
    const set = new Set();
    allItems.forEach(item => {
      const key = filterMode === 'kind' ? item.kind : item.org;
      if (key) set.add(key);
    });
    const options = Array.from(set);
    // Sort filter options: for org, prioritize udangtang -> school -> personal
    if (filterMode === 'org') {
      const order = ['udangtang', 'school', 'personal'];
      options.sort((a, b) => {
        const aIndex = order.indexOf(a);
        const bIndex = order.indexOf(b);
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      });
    }
    return ['all', ...options];
  }, [allItems, filterMode]);

  const filteredItems = useMemo(() => {
    let items = allItems.filter((item) => {
      const key = filterMode === 'kind' ? item.kind : item.org;
      return orgFilter === 'all' || key === orgFilter;
    });

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      items = items.filter((item) => {
        const titleMatch = item.title?.toLowerCase().includes(query);
        const descMatch = item.description?.toLowerCase().includes(query);
        const techMatch = item.tech?.some(t => t.toLowerCase().includes(query));
        return titleMatch || descMatch || techMatch;
      });
    }

    // Apply sorting: team projects first, then individual projects
    // Within each category, use order field if available, otherwise use dateDesc
    const sorted = [...items].sort((a, b) => {
      // First, separate team projects (org: udangtang or school) from individual projects (org: personal)
      const aIsTeam = a.org === 'udangtang' || a.org === 'school';
      const bIsTeam = b.org === 'udangtang' || b.org === 'school';
      
      // Team projects come before individual projects
      if (aIsTeam && !bIsTeam) return -1;
      if (!aIsTeam && bIsTeam) return 1;
      
      // Within the same category (both team or both individual), use order or date
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      // If only one has order, prioritize it
      if (a.order !== undefined) return -1;
      if (b.order !== undefined) return 1;
      // If neither has order, use dateDesc (newest first)
      return (b.date || '').localeCompare(a.date || '');
    });

    return sorted;
  }, [allItems, filterMode, orgFilter, searchQuery]);

  // Track previously filtered items (to distinguish existing cards from new ones)
  const prevFilteredItemsRef = useRef(filteredItems.map(p => p.title));
  
  useEffect(() => {
    prevFilteredItemsRef.current = filteredItems.map(p => p.title);
  }, [filteredItems]);

  return (
    <section className="projects">
      <h1>{text.title}</h1>

      <div className="projects-controls">
        <div className="projects-search">
          <input
            type="text"
            placeholder={text.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setSearchQuery('');
                e.target.blur();
              }
            }}
            className="projects-search-input"
            aria-label={text.searchPlaceholder}
          />
          {searchQuery && (
            <button
              className="projects-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label={lang === 'ko' ? '검색어 지우기' : 'Clear search'}
              type="button"
            >
              ×
            </button>
          )}
        </div>
      </div>

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

      <AnimatePresence mode="wait">
        {categoryId !== 'all' && (
          <motion.div
            key={categoryId}
            className="projects-filters"
            aria-label="Filter"
            initial={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '1.5rem', marginBottom: '1.5rem' }}
            exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {filterOptions.map((opt) => (
              <button
                key={opt}
                className={orgFilter === opt ? 'active' : ''}
                onClick={() => setOrgFilter(opt)}
              >
                {opt === 'all' ? text.filters.all : (text.filters[opt] || opt)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

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
                isExisting={isExisting}
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
