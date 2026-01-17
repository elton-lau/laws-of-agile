import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 mt-auto">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          © {currentYear} {t('footer.copyright')}.
        </div>

        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Inspired by{' '}
          <a
            href="https://lawsofux.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Laws of UX
          </a>
        </div>
        
        <a 
          href="http://creativecommons.org/licenses/by-sa/4.0/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
        >
          {t('footer.license')}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
