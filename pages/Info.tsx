// Author: Senior Frontend Engineer
// OS support: Mac/Linux/Windows
// Description: Info/About page component

import React from 'react';
import { ways, contributors } from '../data';
import WayItem from '../components/WayItem';
import ContributorCard from '../components/ContributorCard';
import SEO from '../components/SEO';

const Info: React.FC = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12 md:py-24">
      <SEO 
        title="About - Laws of Agile" 
        description="About the Laws of Agile project, the Three Ways of DevOps, and contributors."
        path="/info"
      />
      <div className="mb-24 md:mb-32">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-none transition-colors duration-300">
          About<span className="text-primary">.</span>
        </h1>
      </div>

      {/* Summary / Purpose Section */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 transition-colors duration-300">
        <div className="lg:col-span-3 xl:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sticky top-32">Summary / Purpose</h2>
        </div>
        <div className="lg:col-span-9 xl:col-span-6">
          <p className="text-2xl md:text-4xl font-bold leading-tight text-slate-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
            Laws of Agile is a curated collection of heuristic principles, maxims, and observations for tech leaders and practitioners.
          </p>
          <div className="prose prose-lg dark:prose-invert prose-slate text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-none transition-colors duration-300">
            <p>
              This resource collects the underlying "laws" that govern software delivery, team interactions, and organizational dynamics. While not strict physical laws, these observations—captured by organization psychology, computer science, and systems dynamics—provide a powerful lens to understand why agile transformations succeed or fail.
            </p>
            <p className="mt-6">
              By understanding the forces at play within complex systems, we can make better decisions, design more resilient organizations, and foster environments where innovation flows naturally.
            </p>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 transition-colors duration-300">
        <div className="lg:col-span-3 xl:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sticky top-32">The Project</h2>
        </div>
        <div className="lg:col-span-9 xl:col-span-6">
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 transition-colors duration-300">
            In the complex world of DevOps and Agile, it's easy to get lost in tooling and frameworks. This project aims to bring focus back to the fundamental dynamics of systems and people. The collection is structured around the <strong>Three Ways</strong> of DevOps:
          </p>
          <div className="space-y-8">
            {ways.map((way, index) => (
              <WayItem key={index} way={way} />
            ))}
          </div>
        </div>
      </div>

      {/* Contributors Section */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 transition-colors duration-300">
        <div className="lg:col-span-3 xl:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sticky top-32">Contributors</h2>
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
// --- End of pages/Info.tsx ---