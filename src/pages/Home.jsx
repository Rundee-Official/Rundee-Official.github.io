import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="hero"
      style={{
        background: `radial-gradient(
          600px at ${mousePos.x}px ${mousePos.y}px,
          rgba(255, 255, 255, 0.15),
          #111 80%
        )`,
        transition: 'background 0.05s',
      }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>Hi, I'm Rundee 👋</h1>
        <p>A game programmer and creative developer.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.button>
      </motion.div>
    </section>
  );
}
