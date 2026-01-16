import React from 'react';
import Markdown from 'react-markdown';
import { laws } from '../data';
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
  const { navigateTo } = useNavigation();
  const law = laws.find(l => l.id === lawId);
  
  if (!law) {
    return (
      <>
        <SEO title="Law Not Found - Laws of Agile" path="/404" />
        <div className="p-20 text-center">Law not found</div>
      </>
    );
  }

  const relatedLaws = laws.filter(l => law.relatedLaws.includes(l.id));

  // Helper to split name for the visual style (e.g., Brooks's Law -> Brooks's <br/> Law.)
  const nameParts = law.name.split(' ');
  const lastName = nameParts.pop();
  const firstName = nameParts.join(' ');

  return (
    <div className="max-w-[900px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <SEO 
        title={`${law.name} - Laws of Agile`}
        description={law.summary}
        keywords={[law.name, "Agile Law", "Heuristic", law.category]}
        path={`/laws/${law.id}`}
        article={{
          author: law.origin.author
        }}
      />
      <StructuredData type="article" law={law} />
      <StructuredData 
        type="breadcrumb" 
        items={[
          { name: 'Home', url: 'https://lawsofagile.com/' },
          { name: law.name, url: `https://lawsofagile.com/laws/${law.id}` }
        ]} 
      />
      {/* Hero Section */}
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
      </div>

      <div className="prose prose-xl prose-slate dark:prose-invert max-w-none space-y-24 transition-colors duration-300">
        
        {/* Overview (Markdown Body) */}
        <section>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900 dark:text-white transition-colors duration-300">Overview</h2>
          <div className="text-xl leading-relaxed font-light text-slate-600 dark:text-slate-300 transition-colors duration-300 markdown-body [&_strong]:text-slate-900 [&_strong]:dark:text-white [&_strong]:font-semibold">
            <Markdown>{law.description}</Markdown>
          </div>
        </section>

        {/* Takeaways */}
        <section>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900 dark:text-white transition-colors duration-300">Key Takeaways</h2>
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

        {/* Origin */}
        <section>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900 dark:text-white transition-colors duration-300">Origin</h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 transition-colors duration-300">
               The law was coined by <strong className="text-slate-900 dark:text-white">{law.origin.author}</strong>. {law.origin.context}
            </p>
            <div className="border-l-4 border-primary pl-8 py-2 my-8">
              <blockquote className="not-italic font-bold text-2xl md:text-3xl text-slate-900 dark:text-white leading-tight transition-colors duration-300">
                "{law.origin.quote}"
              </blockquote>
              <cite className="block mt-4 text-sm font-bold uppercase tracking-wider text-primary not-italic">— {law.origin.author}</cite>
            </div>
          </div>
        </section>

        {/* Further Reading */}
        {law.resources && law.resources.length > 0 && (
          <section>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900 dark:text-white transition-colors duration-300">Further Reading</h2>
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

      {/* Related Heuristics */}
      <div className="mt-32 pt-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-12 text-center">Related Heuristics</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedLaws.map(related => (
            <RelatedLawRow 
              key={related.id} 
              law={related} 
              onClick={() => navigateTo({ page: 'law', lawId: related.id })} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawDetail;