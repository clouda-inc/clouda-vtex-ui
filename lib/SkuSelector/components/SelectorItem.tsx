import React from 'react';

interface SelectorItemProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SelectorItem: React.FC<SelectorItemProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className="text-gray-900 font-normal">{title}</span>
      {children}
    </div>
  );
};

export default SelectorItem;
