import React from 'react';
import { Law } from '../types';
import Icon from './Icon';

interface RelatedLawRowProps {
  law: Law;
  onClick: () => void;
}

const RelatedLawRow: React.FC<RelatedLawRowProps> = ({ law, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-6 p-6 hover:bg-slate-50 dark:hover:bg-slate-800/30 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors cursor-pointer w-full text-left font-normal"
    >
      <Icon 
        name={law.icon} 
        className="text-5xl text-slate-300 group-hover:text-primary transition-colors shrink-0"
      />
      <div>
        <h5 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors text-slate-900 dark:text-white">
          {law.name}
        </h5>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {law.summary}
        </p>
      </div>
    </button>
  );
};

export default RelatedLawRow;
