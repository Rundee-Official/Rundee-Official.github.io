/**
 * File Name: Contact.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Contact page component with social links
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const copy = {
  en: {
    title: 'Contact Me',
    description: 'Feel free to reach out via the platforms below:',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn'
  },
  ko: {
    title: '연락하기',
    description: '아래 플랫폼을 통해 연락주세요:',
    email: '이메일',
    github: '깃허브',
    linkedin: '링크드인'
  }
};

export default function Contact() {
  const { lang } = useLanguage();
  const text = copy[lang] || copy.en;

  return (
    <section className="contact">
      <h2>{text.title}</h2>
      <hr className="section-divider" />
      <p>{text.description}</p>
      <motion.div
        className="contact-links"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.a 
          href="mailto:rundee.official@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`${text.email} - ${lang === 'ko' ? '이메일 보내기' : 'Send email'}`}
        >
          <span className="contact-icon" aria-hidden="true">📧</span>
          <span>{text.email}</span>
        </motion.a>
        <motion.a 
          href="https://github.com/Rundee-Official" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`${text.github} - ${lang === 'ko' ? '깃허브 프로필 보기' : 'View GitHub profile'}`}
        >
          <span className="contact-icon" aria-hidden="true">💻</span>
          <span>{text.github}</span>
        </motion.a>
        <motion.a 
          href="https://linkedin.com/in/haneul-lee-ba1262199" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`${text.linkedin} - ${lang === 'ko' ? '링크드인 프로필 보기' : 'View LinkedIn profile'}`}
        >
          <span className="contact-icon" aria-hidden="true">🔗</span>
          <span>{text.linkedin}</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
