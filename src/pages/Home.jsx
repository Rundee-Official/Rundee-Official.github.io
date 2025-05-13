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
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!deleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDeleting(!deleting);
        if (!deleting) return;
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

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
          <span>{displayText}</span>
          <span className="blinking-cursor" />
        </p>
        <button>View Projects</button>
      </motion.div>
    </section>
  );
}
