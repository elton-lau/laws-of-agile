import React from 'react';
import { useTranslation } from 'react-i18next';
import { contributors } from '../data';
import ContributorCard from '../components/ContributorCard';
import SEO from '../components/SEO';

const Info: React.FC = () => {
  const { t } = useTranslation();
  
  const translatedWays = [
    { key: 'first', highlight: true },
    { key: 'second', highlight: false },
    { key: 'third', highlight: false },
  ];

  return (
    <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12 md:py-24">
      <SEO 
        title={t('seo.infoTitle')} 
        description={t('seo.infoDescription')}
        path="/info"
      />
      <div className="mb-24 md:mb-32">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-none transition-colors duration-300">
          {t('info.pageTitle')}<span className="text-primary">.</span>
        </h1>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 transition-colors duration-300">
        <div className="lg:col-span-3 xl:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sticky top-32">{t('info.summarySection')}</h2>
        </div>
        <div className="lg:col-span-9 xl:col-span-6">
          <p className="text-2xl md:text-4xl font-bold leading-tight text-slate-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
            {t('info.summaryTitle')}
          </p>
          <div className="prose prose-lg dark:prose-invert prose-slate text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-none transition-colors duration-300">
            <p>
              {t('info.summaryP1')}
            </p>
            <p className="mt-6">
              {t('info.summaryP2')}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 transition-colors duration-300">
        <div className="lg:col-span-3 xl:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sticky top-32">{t('info.projectSection')}</h2>
        </div>
        <div className="lg:col-span-9 xl:col-span-6">
          <p 
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: t('info.projectIntro') }}
          />
          <div className="space-y-8">
            {translatedWays.map((way) => (
              <div key={way.key} className="group">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3 transition-colors duration-300">
                  <span className={`w-2 h-2 rounded-full ${way.highlight ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                  {t(`ways.${way.key}.title`)}
                </h3>
                <p className="mt-2 text-slate-500 dark:text-slate-400 pl-5 text-base md:text-lg transition-colors duration-300">
                  {t(`ways.${way.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 transition-colors duration-300">
        <div className="lg:col-span-3 xl:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sticky top-32">{t('info.contributorsSection')}</h2>
        </div>
        <div className="lg:col-span-9 xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributors.map((contributor, index) => (
            <ContributorCard key={index} contributor={contributor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
