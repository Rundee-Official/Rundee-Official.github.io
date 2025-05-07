import { motion } from 'framer-motion';
import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: 'Big Moth 2',
      description: 'Catch Moths! Be a friend with them!',
      role: 'UI/UX & Gameplay Programmer',
      link: '/projects/BigMoth2',
      image: '/images/big-moth-2/big-moth-2.png'
    }
    // 필요한 만큼 더 추가 가능
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={p.image} alt={p.title} className="project-image" />
            <h3>{p.title}</h3>
            <p className="project-role"><strong>Role:</strong> {p.role}</p>
            <p>{p.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
