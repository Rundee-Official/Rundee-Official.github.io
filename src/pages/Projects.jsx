import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      title: 'My Projects',
      roleLabel: 'Role',
      projects: [
        {
          title: 'Big Moth 2',
          description: 'Catch moths and befriend them in a whimsical 3D game.',
          role: 'UI/UX & Gameplay Programmer',
          link: '/projects/BigMoth2',
          image: '/images/big-moth-2/big-moth-2.png'
        },
        {
          title: 'Rundee Item Factory',
          description: 'LLM-powered item generator (Unity/UE) · presets · balance reports',
          role: 'Tools & Systems Programmer',
          link: '/projects/RundeeItemFactory',
          image: '/images/rundee-item-factory/cover.svg'
        },
        {
          title: 'Portfolio Website',
          description: 'React + Three.js portfolio with animated background and routing.',
          role: 'Full Stack Developer',
          link: '/projects/PortfolioWebsite',
          image: '/images/portfolio-webpage/portfolio-webpage.png'
        },
        {
          title: 'RundeeEngine',
          description: 'Multi-threaded engine with SDL and OpenGL(GLAD).',
          role: 'Solo Developer',
          link: '/projects/RundeeEngine',
          image: '/images/rundee-engine/rundee-engine.png'
        },
        {
          title: 'Modular Weapon System',
          description: 'Modular weapon system using Unreal Engine.',
          role: 'System Developer',
          link: '',
          image: ''
        },
        {
          title: '3D Map Generator',
          description: 'Procedural 3D map generator built with Unreal Engine.',
          role: 'Solo Developer',
          link: '',
          image: ''
        }
      ]
    },
    ko: {
      title: '프로젝트',
      roleLabel: '역할',
      projects: [
        {
          title: 'Big Moth 2',
          description: '3D에서 나방을 잡고 친구가 되는 아기자기한 게임.',
          role: 'UI/UX & 게임플레이 프로그래머',
          link: '/projects/BigMoth2',
          image: '/images/big-moth-2/big-moth-2.png'
        },
        {
          title: 'Rundee Item Factory',
          description: 'LLM 기반 아이템 제너레이터 (Unity/UE) · 프리셋 · 밸런스 리포트',
          role: '툴/시스템 프로그래머',
          link: '/projects/RundeeItemFactory',
          image: '/images/rundee-item-factory/cover.svg'
        },
        {
          title: 'Portfolio Website',
          description: 'React + Three.js 포트폴리오, 애니메이티드 배경과 라우팅.',
          role: '풀스택 개발자',
          link: '/projects/PortfolioWebsite',
          image: '/images/portfolio-webpage/portfolio-webpage.png'
        },
        {
          title: 'RundeeEngine',
          description: 'SDL과 OpenGL(GLAD) 기반 멀티스레드 엔진.',
          role: '단독 개발자',
          link: '/projects/RundeeEngine',
          image: '/images/rundee-engine/rundee-engine.png'
        },
        {
          title: 'Modular Weapon System',
          description: '언리얼 엔진으로 만든 모듈러 무기 시스템.',
          role: '시스템 개발자',
          link: '',
          image: ''
        },
        {
          title: '3D Map Generator',
          description: '언리얼 엔진 기반 프로시저럴 3D 맵 생성기.',
          role: '단독 개발자',
          link: '',
          image: ''
        }
      ]
    }
  };

  const text = copy[lang] || copy.en;
  const projectList = text.projects;

  return (
    <section className="projects">
      <h1>{text.title}</h1>
      <div className="project-grid">
        {projectList.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Link to={p.link} className="project-link">
              <img src={p.image} alt={p.title} className="project-image" />
              <h3>{p.title}</h3>
              <p className="project-role"><strong>{text.roleLabel}:</strong> {p.role}</p>
              <p>{p.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
