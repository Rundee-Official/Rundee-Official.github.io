// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ isPlaying, toggleMusic }) {
  const { lang, setLang } = useLanguage();
  const labels = {
    en: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact', langLabel: 'Language' },
    ko: { home: '홈', about: '소개', projects: '프로젝트', contact: '연락처', langLabel: '언어' },
  };
  const text = labels[lang] || labels.en;

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">{text.home}</Link></li>
        <li><Link to="/about">{text.about}</Link></li>
        <li><Link to="/projects">{text.projects}</Link></li>
        <li><Link to="/contact">{text.contact}</Link></li>
      </ul>
      <div className="navbar-actions">
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
        <button className="music-toggle" onClick={toggleMusic} aria-label="Toggle music">
          {isPlaying ? '🔊' : '🔇'}
        </button>
      </div>
    </nav>
  );
}
