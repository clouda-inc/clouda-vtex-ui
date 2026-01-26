import React, { useState, useRef, useEffect } from 'react';

// Inline SVG Icons
const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="#341f1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GridViewIcon = ({ active }: { active: boolean }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="5.5" height="5.5" rx="0.5" stroke={active ? "#341f1a" : "#A8A9B2"} />
    <rect x="8.5" y="0.5" width="5.5" height="5.5" rx="0.5" stroke={active ? "#341f1a" : "#A8A9B2"} />
    <rect x="0.5" y="8.5" width="5.5" height="5.5" rx="0.5" stroke={active ? "#341f1a" : "#A8A9B2"} />
    <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="0.5" stroke={active ? "#341f1a" : "#A8A9B2"} />
  </svg>
);

const ListViewIcon = ({ active }: { active: boolean }) => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 3H16.5" stroke={active ? "#341f1a" : "#A8A9B2"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4.5 8H16.5" stroke={active ? "#341f1a" : "#A8A9B2"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4.5 13H16.5" stroke={active ? "#341f1a" : "#A8A9B2"} strokeWidth="1.5" strokeLinecap="round" />
    <rect x="0.5" y="2" width="2" height="2" rx="0.5" fill={active ? "#341f1a" : "#A8A9B2"} />
    <rect x="0.5" y="7" width="2" height="2" rx="0.5" fill={active ? "#341f1a" : "#A8A9B2"} />
    <rect x="0.5" y="12" width="2" height="2" rx="0.5" fill={active ? "#341f1a" : "#A8A9B2"} />
  </svg>
);

export interface SortToolbarProps {
  /**
   * List of sorting options available in the dropdown.
   * @default ['Best Match', 'Price: Low to High', 'Price: High to Low', 'Name: A-Z', 'Name: Z-A']
   */
  sortByOptions?: string[];
  /**
   * Callback fired when a sort option is selected.
   */
  onSortChange?: (option: string) => void;
  /**
   * The currently selected sort option.
   */
  currentSort?: string;
  /**
   * The current view mode.
   */
  view?: 'grid' | 'list';
  /**
   * Callback fired when the view mode changes.
   */
  onViewChange?: (view: 'grid' | 'list') => void;
  /**
   * Additional CSS classes for the container.
   */
  className?: string;
}

export const SortToolbar: React.FC<SortToolbarProps> = ({
  sortByOptions = [
    'Best Match',
    'Price: Low to High',
    'Price: High to Low',
    'Name: A-Z',
    'Name: Z-A',
  ],
  onSortChange,
  currentSort,
  view = 'grid',
  onViewChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(currentSort || sortByOptions[0]);
  const [currentView, setCurrentView] = useState(view);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentSort) {
      setSelectedSort(currentSort);
    }
  }, [currentSort]);

  useEffect(() => {
    setCurrentView(view);
  }, [view]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSortSelect = (option: string) => {
    setSelectedSort(option);
    setIsOpen(false);
    onSortChange?.(option);
  };

  const handleViewChange = (newView: 'grid' | 'list') => {
    setCurrentView(newView);
    onViewChange?.(newView);
  };

  return (
    <div className={`flex items-center gap-[13px] ${className}`}>
      {/* Sort By Label */}
      <span className="font-['DM_Sans'] text-[14px] leading-[24px] text-[#341f1a] whitespace-nowrap">
        Sort by:
      </span>

      {/* Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-[175px] h-[34px] px-[12px] bg-white border border-[#a8a9b2] rounded-[4px] focus:outline-none"
        >
          <span className="font-['DM_Sans'] text-[14px] leading-[24px] text-[#341f1a] truncate">
            {selectedSort}
          </span>
          <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown />
          </div>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#a8a9b2] rounded-[4px] shadow-sm z-10 py-1">
            {sortByOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleSortSelect(option)}
                className={`w-full text-left px-[12px] py-[6px] text-[14px] font-['DM_Sans'] hover:bg-gray-50 ${
                  selectedSort === option ? 'text-[#341f1a] font-medium' : 'text-[#341f1a]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* View Switcher */}
      <div className="flex items-center gap-[8px] border border-[#a8a9b2] rounded-[4px] h-[34px] px-[8px] bg-white">
        <button
          onClick={() => handleViewChange('grid')}
          className="p-1 hover:opacity-80 focus:outline-none"
          title="Grid View"
        >
          <GridViewIcon active={currentView === 'grid'} />
        </button>
        <div className="w-[1px] h-[24px] bg-[#a8a9b2]"></div>
        <button
          onClick={() => handleViewChange('list')}
          className="p-1 hover:opacity-80 focus:outline-none"
          title="List View"
        >
          <ListViewIcon active={currentView === 'list'} />
        </button>
      </div>
    </div>
  );
};
