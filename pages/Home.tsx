import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { categories, getLawsByLocale } from '../data';
import { useNavigation } from '../App';
import LawCard from '../components/LawCard';
import Icon from '../components/Icon';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo, currentRoute } = useNavigation();
  const [activeSection, setActiveSection] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const laws = getLawsByLocale(currentRoute.locale);

  const filteredLaws = useMemo(() => {
    return laws.filter((law) => {
      const matchesCategory = selectedCategory === 'all' || law.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const nameMatch = law.name.toLowerCase().includes(q);
      const summaryMatch = law.summary.toLowerCase().includes(q);
      const descMatch = law.description.toLowerCase().includes(q);
      const authorMatch = law.origin.author.toLowerCase().includes(q);
      const quoteMatch = law.origin.quote.toLowerCase().includes(q);
      const takeawayMatch = law.takeaways.some(
        (t) => t.title.toLowerCase().includes(q) || t.content.toLowerCase().includes(q)
      );

      return nameMatch || summaryMatch || descMatch || authorMatch || quoteMatch || takeawayMatch;
    });
  }, [laws, selectedCategory, searchQuery]);

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

        <div className="lg:col-span-8 xl:col-span-9 w-full space-y-12">
          {/* Search Bar & Category Filter Controls */}
          <div className="space-y-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
            <div className="relative flex items-center">
              <Icon name="search" className="absolute left-4 text-slate-400 text-xl pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('search.placeholder')}
                className="w-full pl-12 pr-10 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary text-base shadow-sm transition-colors duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  aria-label="Clear search"
                >
                  <Icon name="close" className="text-lg" />
                </button>
              )}
            </div>

            {/* Three Ways Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {t('search.allCategories')}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {t(`categories.${cat.id}.title`)}
                </button>
              ))}
            </div>
          </div>

          {/* Laws Content Sections */}
          {filteredLaws.length === 0 ? (
            <div className="py-16 text-center text-slate-500 dark:text-slate-400 font-medium text-lg">
              {t('search.noResults')}
            </div>
          ) : (
            categories.map((category) => {
              const categoryLaws = filteredLaws.filter((l) => l.category === category.id);
              if (categoryLaws.length === 0) return null;

              return (
                <section key={category.id} id={category.id} className="scroll-mt-48 md:scroll-mt-32 space-y-8">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex items-baseline justify-between transition-colors duration-300">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
                      {t(`categories.${category.id}.title`)}
                    </h2>
                    <span className="text-primary font-mono text-sm uppercase tracking-widest hidden sm:inline-block">
                      {t(`categories.${category.id}.subtitle`)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {categoryLaws.map((law) => (
                      <LawCard
                        key={law.id}
                        law={law}
                        onClick={() => navigateTo({ page: 'law', lawId: law.id, locale: currentRoute.locale })}
                      />
                    ))}
                  </div>
                </section>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
