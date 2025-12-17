/**
 * File Name: Navbar.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Navigation bar component with language selector and music toggle
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ isPlaying, toggleMusic }) {
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const labels = {
    en: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact', langLabel: 'Language', musicToggle: 'Toggle background music' },
    ko: { home: '홈', about: '소개', projects: '프로젝트', contact: '연락처', langLabel: '언어', musicToggle: '배경음악 토글' },
  };
  const text = labels[lang] || labels.en;

  // Keyboard navigation: Focus management with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        // Move focus to first navigation link when Escape is pressed
        const firstLink = document.querySelector('.navbar-links a');
        if (firstLink) {
          firstLink.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <ul className="navbar-links" role="menubar">
        <li role="none">
          <Link 
            to="/" 
            role="menuitem"
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            {text.home}
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/about" 
            role="menuitem"
            aria-current={location.pathname === '/about' ? 'page' : undefined}
          >
            {text.about}
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/projects" 
            role="menuitem"
            aria-current={location.pathname === '/projects' || location.pathname.startsWith('/projects/') ? 'page' : undefined}
          >
            {text.projects}
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/contact" 
            role="menuitem"
            aria-current={location.pathname === '/contact' ? 'page' : undefined}
          >
            {text.contact}
          </Link>
        </li>
      </ul>
      <div className="navbar-actions" role="group" aria-label="Settings">
        <label className="lang-select-label" aria-label={text.langLabel}>
          <select
            className="lang-select"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label={text.langLabel}
          >
            <option value="en">EN</option>
            <option value="ko">KO</option>
          </select>
        </label>
        <button 
          className="music-toggle" 
          onClick={toggleMusic} 
          aria-label={text.musicToggle}
          aria-pressed={isPlaying}
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>
      </div>
    </nav>
  );
}
