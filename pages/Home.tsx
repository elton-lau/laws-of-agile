import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { categories, getLawsByLocale } from '../data';
import { useNavigation } from '../App';
import LawCard from '../components/LawCard';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo, currentRoute } = useNavigation();
  const [activeSection, setActiveSection] = useState(categories[0].id);
  
  const laws = getLawsByLocale(currentRoute.locale);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -80% 0px',
        threshold: 0
      }
    );

    categories.forEach((cat) => {
      const element = document.getElementById(cat.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getLawsByCategory = (categoryId: string) => {
    return laws.filter(law => law.category === categoryId);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 150; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12 md:py-24">
      <SEO 
        title={t('seo.homeTitle')} 
        description={t('seo.homeDescription')}
        keywords={["Agile", "DevOps", "Laws", "Heuristics", "Software Engineering", "Little's Law", "Conway's Law"]}
        path="/"
      />
      <StructuredData type="website" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-40 space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-slate-900 dark:text-white transition-colors duration-300">
            {t('home.title')} <br/>
            <span className="text-primary">{t('home.titleHighlight')}</span>
          </h1>
          <div className="max-w-md">
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-colors duration-300">
              {t('home.subtitle')}
            </p>
          </div>
          <div className="pt-8 hidden lg:block">
            <div className="flex flex-col gap-4">
              {categories.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={(e) => scrollToSection(e, cat.id)}
                  className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center gap-2 hover:text-primary ${activeSection === cat.id ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}
                >
                  <span className={`w-1 h-1 rounded-full ${activeSection === cat.id ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}></span> 
                  {t(`categories.${cat.id}.title`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 xl:col-span-9 w-full space-y-24">
          
          {categories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-48 md:scroll-mt-32">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-10 flex items-baseline justify-between transition-colors duration-300">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
                  {t(`categories.${category.id}.title`)}
                </h2>
                <span className="text-primary font-mono text-sm uppercase tracking-widest hidden sm:inline-block">
                  {t(`categories.${category.id}.subtitle`)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {getLawsByCategory(category.id).map((law) => (
                  <LawCard 
                    key={law.id} 
                    law={law} 
                    onClick={() => navigateTo({ page: 'law', lawId: law.id, locale: currentRoute.locale })} 
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
