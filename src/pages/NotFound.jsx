/**
 * File Name: NotFound.jsx
 * Author: Haneul Lee (Rundee)
 * Description: 404 Not Found page component
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './NotFound.css';

const copy = {
  en: {
    title: '404',
    heading: 'Page Not Found',
    message: 'The page you are looking for does not exist.',
    button: 'Go to Home'
  },
  ko: {
    title: '404',
    heading: '페이지를 찾을 수 없습니다',
    message: '요청하신 페이지가 존재하지 않습니다.',
    button: '홈으로 가기'
  }
};

export default function NotFound() {
  const { lang } = useLanguage();
  const text = copy[lang] || copy.en;

  return (
    <section className="not-found">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="not-found-title"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          {text.title}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {text.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {text.message}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/" className="not-found-button">
            {text.button}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

