/**
 * File Name: Footer.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Footer component with copyright and links
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const copy = {
  en: {
    copyright: 'Copyright',
    rights: 'All Rights Reserved',
    year: '2025'
  },
  ko: {
    copyright: '저작권',
    rights: 'All Rights Reserved',
    year: '2025'
  }
};

export default function Footer() {
  const { lang } = useLanguage();
  const text = copy[lang] || copy.en;

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          {text.copyright} &copy; {text.year} Haneul Lee (Rundee). {text.rights}
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/Rundee-Official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <span className="footer-separator">|</span>
          <a
            href="https://linkedin.com/in/haneul-lee-ba1262199"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <span className="footer-separator">|</span>
          <a
            href="mailto:rundee.official@gmail.com"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}






