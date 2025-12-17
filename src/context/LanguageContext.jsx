/**
 * File Name: LanguageContext.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Language context provider for internationalization
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import { createContext, useContext, useMemo, useState, useEffect } from 'react';

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const value = useMemo(() => ({ lang, setLang }), [lang]);

  // Dynamically set HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

