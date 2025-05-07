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
      <h2>About Me</h2>
      <p>
        Hello! I'm <strong>Rundee</strong>, a passionate game developer and creative coder based in Redmond, WA.  
        I'm currently studying at DigiPen Institute of Technology, majoring in Computer Science.
      </p>
      <p>
        I specialize in AI development, pathfinding, and systems programming using C++ and Unreal Engine.
        I'm constantly exploring new ways to make virtual agents behave more intelligently in CQB simulations and tactical environments.
      </p>
      <p>
        When I'm not coding, I enjoy customizing mods for Fallout 4, playing tactical shooters, and building personal tools.
      </p>
    </motion.section>
  );
}
