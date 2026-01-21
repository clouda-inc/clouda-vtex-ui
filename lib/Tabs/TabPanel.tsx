import React from 'react';
import { useTabsContext } from './TabsContext';

export interface TabPanelProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({ index, children, className = '' }) => {
  const { selectedIndex } = useTabsContext();

  if (selectedIndex !== index) return null;

  return (
    <div className={className} role="tabpanel">
      {children}
    </div>
  );
};
export default TabPanel;
