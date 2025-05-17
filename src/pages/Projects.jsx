import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: 'Big Moth 2',
      description: 'Catch Moths! Be a friend with them!',
      role: 'UI/UX & Gameplay Programmer',
      link: '/projects/BigMoth2',
      image: '/images/big-moth-2/big-moth-2.png'
    },
    {
      title: 'Portfolio Website',
      description: 'A creative developer’s portfolio with React and WebGL.',
      role: 'Full Stack Developer',
      link: '/projects/PortfolioWebsite',
      image: '/images/portfolio-webpage/portfolio-webpage.png'
    }
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
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
              <p className="project-role"><strong>Role:</strong> {p.role}</p>
              <p>{p.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
