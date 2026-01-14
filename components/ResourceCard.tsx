import React from 'react';
import Icon from './Icon';

interface ResourceCardProps {
  type: string;
  title: string;
  subtitle: string;
  link?: string;
  onClick?: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ type, title, subtitle, link, onClick }) => {
  return (
    <a 
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="group block p-8 bg-slate-50 dark:bg-slate-800/50 hover:bg-primary hover:text-white transition-all duration-300 no-underline cursor-pointer"
    >
      <div className="flex items-center justify-between mb-8 opacity-60 group-hover:opacity-100">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors">
          {type}
        </span>
        <Icon 
          name="arrow_forward" 
          className="group-hover:translate-x-2 transition-transform text-slate-600 dark:text-slate-400 group-hover:text-white"
        />
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm opacity-80 mb-0 group-hover:text-white text-slate-500 dark:text-slate-400 transition-colors">
        {subtitle}
      </p>
    </a>
  );
};

export default ResourceCard;