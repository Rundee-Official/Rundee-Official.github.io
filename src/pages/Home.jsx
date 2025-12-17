/**
 * File Name: Home.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Home page component with typing animation
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const phrases = useMemo(() => ({
    en: ['Game Programmer', 'Creative Developer', 'Progressive Leader', 'Passionate Teammate'],
    ko: ['게임 프로그래머', '크리에이티브 개발자', '진취적인 리더', '열정적인 팀원'],
  }), []);
  const buttonLabel = useMemo(() => lang === 'ko' ? '프로젝트 보기' : 'View Projects', [lang]);
  const title = useMemo(() => lang === 'ko' ? "안녕하세요, 이하늘 (a.k.a Rundee)입니다" : "Hi, I'm Haneul Lee (a.k.a Rundee)", [lang]);
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const handleNavigate = useCallback(() => navigate('/projects'), [navigate]);

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
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <h1>{title}</h1>
        <p className="typing-text" aria-live="polite" aria-atomic="true">
          <span className="typing-prefix">{lang === 'ko' ? '저는 ' : 'who is a '}</span>
          <span className="typing-content">{displayText}<span className="blinking-cursor" aria-hidden="true" /></span>
        </p>
        <button 
          onClick={handleNavigate}
          aria-label={buttonLabel}
        >
          {buttonLabel}
        </button>
      </motion.div>
    </section>
  );
}
