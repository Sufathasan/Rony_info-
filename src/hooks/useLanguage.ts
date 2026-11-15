import { useEffect, useState } from 'react';

export type Language = 'en' | 'bn';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return saved === 'bn' ? 'bn' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  return { language, setLanguage };
}
