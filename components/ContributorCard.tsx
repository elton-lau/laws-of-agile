import React from 'react';
import { Contributor } from '../types';
import Icon from './Icon';

interface ContributorCardProps {
  contributor: Contributor;
}

const ContributorCard: React.FC<ContributorCardProps> = ({ contributor }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 md:p-10 border border-slate-100 dark:border-slate-800 transition-colors duration-300 h-full">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-20 h-20 bg-white dark:bg-slate-700 rounded-full flex-shrink-0 flex items-center justify-center border border-slate-200 dark:border-slate-600 shadow-sm transition-colors duration-300 overflow-hidden">
           <span className="font-bold text-xl text-slate-400 dark:text-slate-300">{contributor.initials}</span>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{contributor.name}</h3>
          <div className="flex flex-wrap gap-6 mt-4 justify-center sm:justify-start">
            {contributor.socials.map((social, index) => (
              <a 
                key={index}
                className="text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 cursor-pointer" 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {social.label} <Icon name="north_east" className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;