import React from 'react';
import { Law } from '../types';
import Icon from './Icon';

interface RelatedLawRowProps {
  law: Law;
  onClick: () => void;
}

const RelatedLawRow: React.FC<RelatedLawRowProps> = ({ law, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group flex items-center gap-6 p-6 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
    >
      <Icon 
        name={law.icon} 
        className="text-5xl text-slate-300 group-hover:text-primary transition-colors"
      />
      <div>
        <h5 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors text-slate-900 dark:text-white">
          {law.name}
        </h5>
        <p className="text-sm text-slate-500">
          {law.summary}
        </p>
      </div>
    </div>
  );
};

export default RelatedLawRow;