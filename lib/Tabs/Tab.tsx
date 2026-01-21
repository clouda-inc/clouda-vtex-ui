import type { ComponentProps } from 'react';
import React from 'react';
import { useTabsContext } from './TabsContext';

export interface TabProps extends Omit<ComponentProps<'button'>, 'onClick' | 'className'> {
  index: number;
  children: React.ReactNode;
  className?: string | ((props: { selected: boolean }) => string);
}

export const Tab: React.FC<TabProps> = ({ index, children, className, ...props }) => {
  const { selectedIndex, setSelectedIndex } = useTabsContext();
  const selected = selectedIndex === index;

  const resolvedClassName = typeof className === 'function' ? className({ selected }) : className;

  return (
    <button
      className={resolvedClassName}
      onClick={() => setSelectedIndex(index)}
      role="tab"
      aria-selected={selected}
      {...props}
    >
      {children}
    </button>
  );
};
export default Tab;
