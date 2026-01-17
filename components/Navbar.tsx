import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../App';
import NavButton from './NavButton';
import Icon from './Icon';
import { Route, SupportedLocale } from '../types';
import { SUPPORTED_LANGUAGES, LANGUAGE_NAMES } from '../i18n';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo, darkMode, toggleTheme, currentRoute, changeLanguage } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleNavClick = (route?: Route) => {
    if (route) navigateTo(route);
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (locale: SupportedLocale) => {
    changeLanguage(locale);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full py-6 md:py-8 px-6 md:px-8 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
        <div
          className="flex items-center gap-3 md:gap-4 cursor-pointer group relative z-50"
          onClick={() => handleNavClick({ page: 'home', locale: currentRoute.locale })}
        >
          <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-900 dark:bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white dark:text-slate-900 w-5 h-5 md:w-6 md:h-6">
              <path d="M12 2L5.5 14L6.5 14.5L12 12L17.5 14.5L18.5 14L12 2Z" fill="currentColor" />
              <path d="M2 17 Q5 15, 8 17 Q11 19, 14 17 Q17 15, 20 17 Q22 18, 22 17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M2 20 Q5 18, 8 20 Q11 22, 14 20 Q17 18, 20 20 Q22 21, 22 20" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
          <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors truncate">
            {t('navbar.title')}
          </span>
        </div>

        <div className="flex items-center gap-4 lg:gap-8 relative z-50">
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <NavButton onClick={() => navigateTo({ page: 'home', locale: currentRoute.locale })}>
              {t('navbar.theLaws')}
            </NavButton>
            <NavButton onClick={() => navigateTo({ page: 'info', locale: currentRoute.locale })}>
              {t('navbar.about')}
            </NavButton>
            <a
              href="https://github.com/elton-lau/laws-of-agile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100 hover:text-primary transition-colors"
            >
              {t('navbar.github')}
            </a>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider"
              aria-label={t('languageSwitcher.label')}
            >
              <Icon name="language" className="text-xl" />
              <span className="hidden sm:inline">{currentRoute.locale.toUpperCase()}</span>
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                      currentRoute.locale === lang 
                        ? 'text-primary font-bold' 
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {LANGUAGE_NAMES[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white"
            aria-label={t('navbar.toggleDarkMode')}
          >
            <Icon name={darkMode ? "light_mode" : "dark_mode"} className="text-xl" />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white"
            aria-label={t('navbar.toggleMenu')}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} className="text-2xl" />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-white dark:bg-background-dark transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <button
            onClick={() => handleNavClick({ page: 'home', locale: currentRoute.locale })}
            className="text-3xl font-black tracking-tight text-slate-900 dark:text-white hover:text-primary transition-colors"
          >
            {t('navbar.theLaws')}
          </button>
          <button
            onClick={() => handleNavClick({ page: 'info', locale: currentRoute.locale })}
            className="text-3xl font-black tracking-tight text-slate-900 dark:text-white hover:text-primary transition-colors"
          >
            {t('navbar.about')}
          </button>
          
          <div className="flex gap-4 mt-4">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`px-4 py-2 rounded-lg text-lg font-bold transition-colors ${
                  currentRoute.locale === lang
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {LANGUAGE_NAMES[lang]}
              </button>
            ))}
          </div>
          
          <a
            href="https://github.com/elton-lau/laws-of-agile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mt-8 hover:text-primary transition-colors"
          >
            {t('navbar.github')}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
