import React from 'react';

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ children, className = "", isActive = false, ...props }) => {
  const baseStyles = "text-xs font-bold uppercase tracking-[0.2em] transition-colors";
  const colorStyles = isActive 
    ? "text-primary" 
    : "text-slate-900 dark:text-slate-100 hover:text-primary";
  
  return (
    <button 
      className={`${baseStyles} ${colorStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default NavButton;