import React from 'react';
import { Law } from '../types';
import Icon from './Icon';

interface LawCardProps {
  law: Law;
  onClick: () => void;
}

const LawCard: React.FC<LawCardProps> = ({ law, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 aspect-square flex flex-col items-center justify-center text-center hover:border-primary dark:hover:border-primary transition-all duration-300 relative cursor-pointer"
    >
      <div className="flex-grow flex items-center justify-center min-h-0">
        <Icon 
          name={law.icon} 
          className="text-6xl md:text-7xl text-slate-900 dark:text-slate-100 transition-transform duration-300 font-thin group-hover:scale-110 group-hover:text-primary"
        />
      </div>
      <div className="mt-auto w-full pt-6">
        <h2 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors text-slate-900 dark:text-white mb-3">
          {law.name}
        </h2>
        <p className="text-base text-slate-500 leading-relaxed dark:text-slate-400 line-clamp-3">
          {law.summary}
        </p>
        {law.tags && law.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            {law.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag.replace('-', ' ')}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LawCard;