import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HomeBackground from '../components/HomeBackground';
import './Home.css';

export default function Home() {
  const phrases = ['Game Programmer', 'Creative Developer', 'Progressive Leader', 'Passionate Teammate'];
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
  const interval = setInterval(() => {
    const current = phrases[phraseIndex];

    if (!deleting && charIndex < current.length) {
      setDisplayText(current.slice(0, charIndex + 1));
      setCharIndex(prev => prev + 1);
    } else if (deleting && charIndex > 0) {
      setDisplayText(current.slice(0, charIndex - 1));
      setCharIndex(prev => prev - 1);
    } else {
      if (!deleting) {
        setTimeout(() => setDeleting(true), 1000); // 대기 시간 부여
      } else {
        setDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
        setCharIndex(0);
      }
      clearInterval(interval);
    }
  }, 50);

  return () => clearInterval(interval);
  }, [charIndex, deleting, phraseIndex]);


  return (
    <section className="hero">
      <HomeBackground />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <h1>Hi, I'm Haneul Lee (a.k.a Rundee) 👋</h1>
        <p className="typing-text">
          <span>who is a {displayText}</span>
          <span className="blinking-cursor" />
        </p>
        <button>View Projects</button>
      </motion.div>
    </section>
  );
}
