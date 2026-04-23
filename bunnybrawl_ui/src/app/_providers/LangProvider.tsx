"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type Lang = 'mn' | 'en';

interface LangContextType {
  lang: Lang;
  switchLang: () => void;
}

export const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'mn';
    return (localStorage.getItem('theme') as Lang) || 'mn';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('theme', lang);
  }, [lang]);
  const switchLang = () => {
    setLang((prev) => (prev === 'mn' ? 'en' : 'mn'));
  };
  //this one sets lang for html
  return (
    <LangContext.Provider value={{ lang, switchLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error(
      'is the LangProvider wrapper around your html to use the useLang?',
    );
  }
};
