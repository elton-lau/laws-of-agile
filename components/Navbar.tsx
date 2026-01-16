import React, { useState } from 'react';
import { useNavigation } from '../App';
import NavButton from './NavButton';
import Icon from './Icon';
import { Route } from '../types';

const Navbar: React.FC = () => {
  const { navigateTo, darkMode, toggleTheme } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (route?: Route) => {
    if (route) navigateTo(route);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full py-6 md:py-8 px-6 md:px-8 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
        <div
          className="flex items-center gap-3 md:gap-4 cursor-pointer group relative z-50"
          onClick={() => handleNavClick({ page: 'home' })}
        >
          <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-900 dark:bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white dark:text-slate-900 w-5 h-5 md:w-6 md:h-6">
              <path d="M12 2L5.5 14L6.5 14.5L12 12L17.5 14.5L18.5 14L12 2Z" fill="currentColor" />
              <path d="M2 17 Q5 15, 8 17 Q11 19, 14 17 Q17 15, 20 17 Q22 18, 22 17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M2 20 Q5 18, 8 20 Q11 22, 14 20 Q17 18, 20 20 Q22 21, 22 20" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
          <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors truncate">
            Laws of Agile
          </span>
        </div>

        <div className="flex items-center gap-4 lg:gap-8 relative z-50">
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <NavButton onClick={() => navigateTo({ page: 'home' })}>
              The Laws
            </NavButton>
            <NavButton onClick={() => navigateTo({ page: 'info' })}>
              About
            </NavButton>
            {/* <NavButton>
              Articles
            </NavButton> */}
            <a
              href="https://github.com/elton-lau/laws-of-agile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100 hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            <Icon name={darkMode ? "light_mode" : "dark_mode"} className="text-xl" />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white"
            aria-label="Toggle Menu"
          >
            <Icon name={isMenuOpen ? "close" : "menu"} className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white dark:bg-background-dark transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <button
            onClick={() => handleNavClick({ page: 'home' })}
            className="text-3xl font-black tracking-tight text-slate-900 dark:text-white hover:text-primary transition-colors"
          >
            The Laws
          </button>
          <button
            onClick={() => handleNavClick({ page: 'info' })}
            className="text-3xl font-black tracking-tight text-slate-900 dark:text-white hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick()}
            className="text-3xl font-black tracking-tight text-slate-900 dark:text-white hover:text-primary transition-colors"
          >
            Article
          </button>
          <a
            href="https://github.com/elton-lau/laws-of-agile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mt-8 hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
