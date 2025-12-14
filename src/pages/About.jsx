import './About.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const COPY = {
  en: {
    photos: { profile: 'Profile photo', illustration: 'Profile illustration' },
    aboutTitle: 'About Me',
    intro: [
      <>Hello! I'm <strong>Haneul Lee (a.k.a Rundee)</strong>, a passionate game developer and creative coder based in Redmond, WA. I'm currently studying at DigiPen Institute of Technology, majoring in Computer Science.</>,
      'I specialize in AI development, pathfinding, and systems programming using C++ and Unreal Engine. I am constantly exploring new ways to make virtual agents behave more intelligently in CQB simulations and tactical environments.',
      'When I am not coding, I enjoy customizing mods for Fallout 4, playing tactical shooters, and building personal tools.'
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        role: 'Co-Founder / Technical Director – Udangtang Studio',
        date: 'May 2025 – Present · Daegu, South Korea · Hybrid',
        description: 'Oversee studio-wide engineering direction, scheduling, workflow management, and cross-team coordination to keep multiple projects on track.',
        bullets: [
          'FEAR (formerly Catalog: X, Project abnormal) – Unity horror game; designed and implemented the sub-event system driving core gameplay, contributed gameplay programming, event scripting, and system integration to deliver an immersive player experience.',
          'Moored – Maritime Adventure Project – Led ship-system architecture and ocean-based event mechanics; managed engineering workflow, scheduling, and task distribution to keep design, art, and gameplay aligned.'
        ]
      },
      {
        role: 'Teaching Assistant – DigiPen Institute of Technology',
        date: 'Sep 2024 – Apr 2025 · United States · Part-time',
        description: 'Supported CS100 and CS180 students with labs, grading, and instructional assistance.'
      },
      {
        role: 'Teaching Assistant – DigiPen Institute of Technology',
        date: 'Apr 2023 – Sep 2024 · Daegu, South Korea · Full-time',
        description: 'Supported CS100, CS120, CS170, CS180, CS200, CS225, CS230, CS250, CS280 and project courses GAM100, GAM150, GAM200, GAM250; mentored students and coordinated lab operations.'
      },
      {
        role: 'Republic of Korea Army – Radar Operator',
        date: 'Oct 2021 – Apr 2023 · South Korea · On-site',
        description: 'Served primarily as Radar Operator and additionally supported the Operational Situation Unit, maintaining situational awareness and communication for field teams.'
      },
      {
        role: 'Teaching Assistant – DigiPen Institute of Technology',
        date: 'Sep 2021 – Oct 2021 · Daegu, South Korea · Full-time',
        description: 'Assisted accelerated cohorts for CS100, CS120, CS180, CS200, CS225 and GAM100, GAM200 with instruction, debugging support, and grading.'
      },
      {
        role: 'Technical Director (Intern) – AT THE MOMENT',
        date: 'Jul 2020 – Sep 2020 · Daegu, South Korea',
        description: 'Led technical direction for mobile application projects, ensuring stable integration, cross-platform performance, and user experience across Android and iOS builds.',
        bullets: [
          'ICOU – Android & iOS Coupon Service Application – Integrated the Facebook API for deep-link generation; focused on backend integration and mobile performance optimization to improve customer accessibility and engagement.',
          'PhotoZone – AR Camera Application – Developed an AR camera as a supplemental project; implemented UI/UX programming, interaction logic, and seamless integration of AR features to deliver responsive real-time camera interactions.'
        ]
      }
    ],
    educationTitle: 'Education',
    education: [
      {
        school: 'DigiPen Institute of Technology',
        date: 'Sep 2019 – Apr 2026',
        description: 'Bachelor of Science in Computer Science – Real-Time Interactive Simulation'
      },
      {
        school: 'Keimyung University',
        date: 'Mar 2019 – Apr 2026',
        description: 'Bachelor of Science in Computer Science – Real-Time Interactive Simulation',
        extra: 'Student Council President, Vice-President'
      }
    ]
  },
  ko: {
    photos: { profile: '프로필 사진', illustration: '프로필 일러스트' },
    aboutTitle: '소개',
    intro: [
      <>안녕하세요! 저는 <strong>이하늘 (Rundee)</strong>입니다. 워싱턴주 레드먼드에서 활동하는 게임 개발자이자 크리에이티브 코더이며, 현재 DigiPen Institute of Technology에서 컴퓨터공학을 전공하고 있습니다.</>,
      'C++과 언리얼 엔진을 활용한 AI 개발, 경로 탐색, 시스템 프로그래밍을 전문으로 하며, CQB 시뮬레이션과 전술 환경에서 가상 에이전트가 더 지능적으로 움직이도록 연구하고 있습니다.',
      '코딩하지 않을 때는 Fallout 4 모드를 커스터마이즈하고, 전술 슈터를 즐기며, 개인용 도구를 만드는 것을 좋아합니다.'
    ],
    experienceTitle: '경력',
    experience: [
      {
        role: '공동 창업자 / 테크니컬 디렉터 – Udangtang Studio',
        date: '2025년 5월 – 현재 · 대한민국 대구 · 하이브리드',
        description: '스튜디오 전체 엔지니어링 방향, 일정·워크플로 관리, 크로스팀 조율을 맡아 여러 프로젝트를 일정에 맞춰 진행합니다.',
        bullets: [
          'FEAR (구 Catalog: X) – Unity 공포 게임; 핵심 게임플레이를 이끄는 서브 이벤트 시스템을 설계·구현하고, 게임플레이 프로그래밍·이벤트 스크립팅·시스템 연동으로 몰입감 있는 경험을 제공.',
          'Moored – Maritime Adventure Project – 선박 시스템 아키텍처와 해양 이벤트 메커닉을 주도했으며, 디자인·아트·게임플레이 정렬을 위해 엔지니어링 워크플로, 일정, 업무 분배를 관리.'
        ]
      },
      {
        role: '튜터 / 티칭 어시스턴트 – DigiPen Institute of Technology',
        date: '2024년 9월 – 2025년 4월 · 미국 · 파트타임',
        description: 'CS100, CS180 학생들의 실습, 채점, 수업 보조를 지원했습니다.'
      },
      {
        role: '티칭 어시스턴트 – DigiPen Institute of Technology',
        date: '2023년 4월 – 2024년 9월 · 대한민국 대구 · 풀타임',
        description: 'CS100, CS120, CS170, CS180, CS200, CS225, CS230, CS250, CS280 및 GAM100, GAM150, GAM200, GAM250 프로젝트 과목을 지원하고 멘토링·랩 운영을 조율했습니다.'
      },
      {
        role: '대한민국 육군 – 레이더 운용병',
        date: '2021년 10월 – 2023년 4월 · 대한민국 · 현장 근무',
        description: '주로 레이더 운용병으로 복무하며 작전상황실을 지원, 현장 팀을 위한 상황 인지와 통신을 유지했습니다.'
      },
      {
        role: '티칭 어시스턴트 – DigiPen Institute of Technology',
        date: '2021년 9월 – 2021년 10월 · 대한민국 대구 · 풀타임',
        description: '가속 과정 CS100, CS120, CS180, CS200, CS225 및 GAM100, GAM200을 대상으로 수업, 디버깅 지원, 채점을 진행했습니다.'
      },
      {
        role: '테크니컬 디렉터 (인턴) – AT THE MOMENT',
        date: '2020년 7월 – 2020년 9월 · 대한민국 대구',
        description: '모바일 앱 프로젝트의 기술 방향을 총괄해 안정적 통합과 크로스플랫폼 성능, 사용자 경험을 확보했습니다.',
        bullets: [
          'ICOU – 안드로이드·iOS 쿠폰 서비스 앱 – 딥링크 생성을 위해 Facebook API를 통합하고, 백엔드 연동 및 모바일 성능 최적화로 접근성과 참여도를 높였습니다.',
          'PhotoZone – AR 카메라 앱 – 부가 프로젝트로 AR 카메라를 개발하며 UI/UX 프로그래밍, 상호작용 로직, AR 기능 연동을 구현해 반응성 있는 실시간 카메라 경험을 제공했습니다.'
        ]
      }
    ],
    educationTitle: '학력',
    education: [
      {
        school: '디지펜 공과대학교',
        date: '2019년 9월 – 2026년 4월',
        description: '컴퓨터공학 학사 – 실시간 인터랙티브 시뮬레이션'
      },
      {
        school: '계명대학교',
        date: '2019년 3월 – 2026년 4월',
        description: '컴퓨터공학 학사 – 실시간 인터랙티브 시뮬레이션',
        extra: '학생회장, 부회장'
      }
    ]
  }
};

export default function About() {
  const { lang } = useLanguage();
  const t = COPY[lang] || COPY.en;

  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="about-photos">
        <motion.img
          src="/images/about/profile.jpg"
          alt={t.photos.profile}
          className="about-profile"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
          src="/images/about/profile_Rundee.png"
          alt={t.photos.illustration}
          className="about-profile"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        />
      </div>

      <h2>{t.aboutTitle}</h2>
      {t.intro.map((paragraph, idx) => (
        <p key={`intro-${idx}`}>{paragraph}</p>
      ))}

      <h2>{t.experienceTitle}</h2>
      <div className="timeline">
        {t.experience.map((item, idx) => (
          <div className="timeline-item" key={`exp-${idx}`}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <span className="timeline-date">{item.date}</span>
              {item.description && <p>{item.description}</p>}
              {item.bullets && (
                <ul className="timeline-details">
                  {item.bullets.map((detail, detailIdx) => (
                    <li key={`exp-${idx}-detail-${detailIdx}`}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2>{t.educationTitle}</h2>
      <div className="timeline">
        {t.education.map((item, idx) => (
          <div className="timeline-item" key={`edu-${idx}`}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.school}</h3>
              <span className="timeline-date">{item.date}</span>
              {item.description && <p>{item.description}</p>}
              {item.extra && <p>{item.extra}</p>}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
