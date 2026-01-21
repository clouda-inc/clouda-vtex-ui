import React, { useState } from 'react';
import { TabsContext } from './TabsContext';

export interface TabsProps {
  children: React.ReactNode;
  defaultIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ children, defaultIndex = 0, onChange, className = '' }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const handleSetSelectedIndex = (index: number) => {
    setSelectedIndex(index);
    onChange?.(index);
  };

  return (
    <TabsContext.Provider value={{ selectedIndex, setSelectedIndex: handleSetSelectedIndex }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export default Tabs;
