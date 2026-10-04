import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Markdown from 'react-markdown';
import { getLawByIdAndLocale, getLawsByLocale } from '../data';
import { useNavigation } from '../App';
import Icon from '../components/Icon';
import ResourceCard from '../components/ResourceCard';
import RelatedLawRow from '../components/RelatedLawRow';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

interface LawDetailProps {
  lawId: string;
}

const LawDetail: React.FC<LawDetailProps> = ({ lawId }) => {
  const { t } = useTranslation();
  const { navigateTo, currentRoute } = useNavigation();
  const [copiedType, setCopiedType] = useState<'markdown' | 'text' | 'image' | null>(null);

  const law = getLawByIdAndLocale(lawId, currentRoute.locale);
  const laws = getLawsByLocale(currentRoute.locale);
  
  if (!law) {
    return (
      <>
        <SEO title={t('seo.notFoundTitle')} path="/404" />
        <div className="p-20 text-center">{t('lawDetail.notFound')}</div>
      </>
    );
  }

  const relatedLaws = laws.filter(l => law.relatedLaws.includes(l.id));

  const nameParts = law.name.split(' ');
  const lastName = nameParts.pop();
  const firstName = nameParts.join(' ');

  const pathUrl = currentRoute.locale === 'en'
    ? `/laws/${law.id}`
    : `/${currentRoute.locale}/laws/${law.id}`;
  const cardImage = currentRoute.locale === 'zh-TW'
    ? `/cards/zh-TW/${law.id}.png`
    : `/cards/en/${law.id}.png`;

  return (
    <div className="max-w-[900px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <SEO 
        title={`${law.name} - ${t('common.siteName')}`}
        description={law.summary}
        keywords={[law.name, "Agile Law", "Heuristic", law.category]}
        path={pathUrl}
        ogImage={cardImage}
        locale={currentRoute.locale}
        article={{
          author: law.origin.author
        }}
      />
      <StructuredData type="article" law={law} />
      <StructuredData 
        type="breadcrumb" 
        items={[
          { name: 'Home', url: `https://lawsofagile.com${currentRoute.locale === 'en' ? '' : `/${currentRoute.locale}`}/` },
          { name: law.name, url: `https://lawsofagile.com${pathUrl}` }
        ]} 
      />
      <div className="mb-24 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-slate-900 dark:text-white transition-colors duration-300">
            {firstName}<br/>
            <span className="text-primary">{lastName}.</span>
          </h1>
          <div className="aspect-square flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 relative shrink-0 mt-2 bg-[radial-gradient(circle_at_center,rgba(0,0,255,0.03)_0%,rgba(255,255,255,0)_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,255,0.08)_0%,rgba(15,23,42,0)_60%)]">
            <Icon 
              name={law.icon} 
              className="text-5xl md:text-6xl text-slate-900 dark:text-slate-100 font-thin opacity-90 transition-colors duration-300"
            />
            <Icon 
              name="add" 
              className="absolute top-1/4 right-1/4 translate-x-2 -translate-y-2 text-2xl text-primary animate-pulse"
            />
          </div>
        </div>
        <p className="text-2xl md:text-3xl font-bold leading-snug text-slate-800 dark:text-slate-200 max-w-3xl transition-colors duration-300">
          {law.summary}
        </p>

        {/* Action Toolbar: Download Card, Copy Image, Copy Text */}
        <div className="mt-8 flex flex-wrap items-center gap-3 not-prose">
          <button
            onClick={() => {
              const cardUrl = currentRoute.locale === 'zh-TW'
                ? `/cards/zh-TW/${law.id}.png`
                : `/cards/en/${law.id}.png`;
              const link = document.createElement('a');
              link.href = cardUrl;
              link.download = `${law.id}-${currentRoute.locale}.png`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-blue-600 text-white text-xs font-bold rounded-xl shadow-sm transition-colors duration-200"
          >
            <Icon name="download" className="text-sm" />
            {t('card.downloadCard')}
          </button>

          <button
            onClick={async () => {
              try {
                const cardUrl = currentRoute.locale === 'zh-TW'
                  ? `/cards/zh-TW/${law.id}.png`
                  : `/cards/en/${law.id}.png`;
                const response = await fetch(cardUrl);
                const blob = await response.blob();
                await navigator.clipboard.write([
                  new ClipboardItem({ [blob.type]: blob })
                ]);
                setCopiedType('image');
                setTimeout(() => setCopiedType(null), 2000);
              } catch (err) {
                console.error('Failed to copy image:', err);
              }
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors duration-200"
          >
            <Icon name={copiedType === 'image' ? 'check' : 'image'} className="text-sm text-primary" />
            {copiedType === 'image' ? t('card.imageCopied') : t('card.copyImage')}
          </button>

          <button
            onClick={() => {
              const localePrefix = currentRoute.locale === 'en' ? '' : `/${currentRoute.locale}`;
              const sourceUrl = `https://lawsofagile.com${localePrefix}/laws/${law.id}`;
              const markdownText = `> **${law.name}**: ${law.summary}\n>\n> Source: [${sourceUrl}](${sourceUrl})`;
              navigator.clipboard.writeText(markdownText);
              setCopiedType('markdown');
              setTimeout(() => setCopiedType(null), 2000);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors duration-200"
          >
            <Icon name={copiedType === 'markdown' ? 'check' : 'content_copy'} className="text-sm text-primary" />
            {copiedType === 'markdown' ? t('copy.copied') : t('copy.copyAsMarkdown')}
          </button>

          <button
            onClick={() => {
              const localePrefix = currentRoute.locale === 'en' ? '' : `/${currentRoute.locale}`;
              const sourceUrl = `https://lawsofagile.com${localePrefix}/laws/${law.id}`;
              const plainText = `${law.name}: ${law.summary}\n\nSource: ${sourceUrl}`;
              navigator.clipboard.writeText(plainText);
              setCopiedType('text');
              setTimeout(() => setCopiedType(null), 2000);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors duration-200"
          >
            <Icon name={copiedType === 'text' ? 'check' : 'text_snippet'} className="text-sm text-primary" />
            {copiedType === 'text' ? t('copy.copied') : t('copy.copyAsPlainText')}
          </button>
        </div>

        {/* Card Image Preview Display */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
          <img
            src={currentRoute.locale === 'zh-TW' ? `/cards/zh-TW/${law.id}.png` : `/cards/en/${law.id}.png`}
            alt={`${law.name} Card`}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="prose prose-xl prose-slate dark:prose-invert max-w-none space-y-24 transition-colors duration-300">
        
        <section>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900 dark:text-white transition-colors duration-300">{t('lawDetail.overview')}</h2>
          <div className="text-xl leading-relaxed font-light text-slate-600 dark:text-slate-300 transition-colors duration-300 markdown-body [&_strong]:text-slate-900 [&_strong]:dark:text-white [&_strong]:font-semibold">
            <Markdown>{law.description}</Markdown>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900 dark:text-white transition-colors duration-300">{t('lawDetail.keyTakeaways')}</h2>
          <ul className="list-none pl-0 space-y-10 border-t border-slate-200 dark:border-slate-800 pt-8 transition-colors duration-300">
            {law.takeaways.map((takeaway, idx) => (
              <li key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start pl-0">
                <Icon name="check_circle" className="text-primary text-4xl shrink-0" />
                <div>
                  <strong className="block text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{takeaway.title}</strong>
                  <span className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">{takeaway.content}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900 dark:text-white transition-colors duration-300">{t('lawDetail.origin')}</h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 transition-colors duration-300">
               {t('lawDetail.originCoinedBy')} <strong className="text-slate-900 dark:text-white">{law.origin.author}</strong>. {law.origin.context}
            </p>
            <div className="border-l-4 border-primary pl-8 py-2 my-8">
              <blockquote className="not-italic font-bold text-2xl md:text-3xl text-slate-900 dark:text-white leading-tight transition-colors duration-300">
                "{law.origin.quote}"
              </blockquote>
              <cite className="block mt-4 text-sm font-bold uppercase tracking-wider text-primary not-italic">— {law.origin.author}</cite>
            </div>
          </div>
        </section>

        {law.resources && law.resources.length > 0 && (
          <section>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900 dark:text-white transition-colors duration-300">{t('lawDetail.furtherReading')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              {law.resources.map((resource, idx) => (
                <ResourceCard 
                  key={idx}
                  type={resource.type}
                  title={resource.title}
                  subtitle={resource.subtitle}
                  link={resource.url}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="mt-32 pt-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-12 text-center">{t('lawDetail.relatedHeuristics')}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedLaws.map(related => (
            <RelatedLawRow 
              key={related.id} 
              law={related} 
              onClick={() => navigateTo({ page: 'law', lawId: related.id, locale: currentRoute.locale })} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawDetail;
