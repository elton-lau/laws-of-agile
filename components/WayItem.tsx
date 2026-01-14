import React from 'react';
import { Way } from '../types';

interface WayItemProps {
  way: Way;
}

const WayItem: React.FC<WayItemProps> = ({ way }) => {
  return (
    <div className="group">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3 transition-colors duration-300">
        <span className={`w-2 h-2 rounded-full ${way.highlight ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
        {way.title}
      </h3>
      <p className="mt-2 text-slate-500 dark:text-slate-400 pl-5 text-base md:text-lg transition-colors duration-300">
        {way.description}
      </p>
    </div>
  );
};

export default WayItem;