import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeBackground from '../components/HomeBackground';
import './Home.css';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const phrases = useMemo(() => ({
    en: ['Game Programmer', 'Creative Developer', 'Progressive Leader', 'Passionate Teammate'],
    ko: ['게임 프로그래머', '크리에이티브 개발자', '진취적인 리더', '열정적인 팀원'],
  }), []);
  const buttonLabel = lang === 'ko' ? '프로젝트 보기' : 'View Projects';
  const title = lang === 'ko' ? "안녕하세요, 이하늘 (a.k.a Rundee)입니다 👋" : "Hi, I'm Haneul Lee (a.k.a Rundee) 👋";
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Reset animation when language changes to avoid index drift
    setDisplayText('');
    setCharIndex(0);
    setPhraseIndex(0);
    setDeleting(false);
  }, [lang]);

  useEffect(() => {
    const currentPhrases = phrases[lang] || phrases.en;
    const current = currentPhrases[phraseIndex % currentPhrases.length];
    const typingSpeed = 65;
    const deletingSpeed = 35;
    const pauseAfterComplete = 1000;
    const pauseAfterDelete = 250;
    let timeoutId;

    if (!deleting) {
      if (charIndex < current.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => setDeleting(true), pauseAfterComplete);
      }
    } else {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, deletingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setDeleting(false);
          setPhraseIndex((phraseIndex + 1) % currentPhrases.length);
        }, pauseAfterDelete);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, deleting, phraseIndex, lang, phrases]);


  return (
    <section className="hero">
      <HomeBackground />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <h1>{title}</h1>
        <p className="typing-text">
          <span>{lang === 'ko' ? '저는 ' : 'who is a '}{displayText}</span>
          <span className="blinking-cursor" />
        </p>
        <button onClick={() => navigate('/projects')}>{buttonLabel}</button>
      </motion.div>
    </section>
  );
}
