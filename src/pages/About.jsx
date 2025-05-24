import './About.css';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.img
        src="/images/about/profile.jpg"
        alt="Profile"
        className="about-profile"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <h2>About Me</h2>
      <p>
        Hello! I'm <strong>Haneul Lee (a.k.a Rundee)</strong>, a passionate game developer and creative coder based in Redmond, WA.  
        I'm currently studying at DigiPen Institute of Technology, majoring in Computer Science.
      </p>
      <p>
        I specialize in AI development, pathfinding, and systems programming using C++ and Unreal Engine.
        I'm constantly exploring new ways to make virtual agents behave more intelligently in CQB simulations and tactical environments.
      </p>
      <p>
        When I'm not coding, I enjoy customizing mods for Fallout 4, playing tactical shooters, and building personal tools.
      </p>
      
      <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Teaching Assistant – DigiPen Institute of Technology</h3>
              <span className="timeline-date">Sep 2024 – Apr 2025 · Redmond, WA</span>
              <p>Courses: CS100, CS180</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Teaching Assistant – DigiPen Institute of Technology</h3>
              <span className="timeline-date">Apr 2023 – Sep 2024 · Daegu, South Korea</span>
              <p>Courses: CS100 ~ CS280; GAM100 ~ GAM250</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Teaching Assistant – DigiPen Institute of Technology</h3>
              <span className="timeline-date">Sep 2021 – Oct 2021 · Daegu, South Korea</span>
              <p>Courses: CS100, CS120, CS180, CS200, CS225; GAM100, GAM200</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Technical Director (Intern) – AT THE MOMENT</h3>
              <span className="timeline-date">Jul 2020 – Sep 2020 · Daegu, South Korea</span>
              <p>Developed Unity-based mobile applications, integrated Facebook API for deep linking, and built an AR camera application with UI/UX features.</p>
            </div>
          </div>
        </div>

        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>DigiPen Institute of Technology</h3>
              <span className="timeline-date">Sep 2019 – Apr 2026</span>
              <p>Bachelor of Science in Computer Science – Real-Time Interactive Simulation</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Keimyung University</h3>
              <span className="timeline-date">Mar 2019 – Apr 2026</span>
              <p>Bachelor of Science in Computer Science – Real-Time Interactive Simulation</p>
              <p>Student Council President, Vice-President</p>
            </div>
          </div>
        </div>
    </motion.section>
  );
}
