import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../../Button/Button';

// Inline SVG Chevron Down
const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="#341f1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface BulkActionsProps {
  onProceed?: (selectedAction: string) => void;
  className?: string;
  itemsSelected?: boolean;
  primaryColor?: string;
}

export const BulkActions: React.FC<BulkActionsProps> = ({ 
  onProceed, 
  className = '', 
  itemsSelected = false,
  primaryColor = '#564FCC', // Default to the purple used elsewhere
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string>('Select multiple');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const actions = ['Reorder All', 'Export Selected', 'Remove Selected'];

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

  const handleActionSelect = (action: string) => {
    setSelectedAction(action);
    setIsOpen(false);
  };

  const isDisabled = selectedAction === 'Select multiple' || !itemsSelected;

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-[16px] w-full mt-[32px] ${className}`}>
      {/* Label and Dropdown Group */}
      <div className="flex flex-row justify-between lg:justify-start items-center w-full lg:w-auto gap-[16px]">
        <span className="font-['DM_Sans'] text-[16px] leading-[24px] text-black whitespace-nowrap">
          Bulk Actions
        </span>
        
        <div className="relative w-full lg:w-[200px]" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full h-[40px] px-[12px] bg-white border border-[#E3E4E6] rounded-[4px] focus:outline-none"
          >
            <span className="font-['DM_Sans'] text-[14px] leading-[24px] text-[#341F1A] truncate">
              {selectedAction}
            </span>
            <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
              <ChevronDown />
            </div>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#E3E4E6] rounded-[4px] shadow-sm z-10 py-1">
              {actions.map((action) => (
                <button
                  key={action}
                  onClick={() => handleActionSelect(action)}
                  className="w-full text-left px-[12px] py-[6px] text-[14px] font-['DM_Sans'] text-[#341F1A] hover:bg-gray-50"
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <Button 
        variant="primary" 
        onClick={() => onProceed?.(selectedAction)}
        disabled={isDisabled}
        className="w-full lg:w-auto min-w-[100px] disabled:bg-[#9FA2B4] disabled:opacity-100 disabled:cursor-not-allowed disabled:pointer-events-auto"
        customColor={isDisabled ? undefined : primaryColor}
      >
        Proceed
      </Button>
    </div>
  );
};
