import React, { useState, useRef, useEffect } from 'react';

// Using a simple SVG for the chevron down icon
const ChevronDown = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface ColorOption {
  value: string;
  label: string;
  colorCode?: string; // Hex code or generic color name
  disabled?: boolean;
}

interface ColorSelectorProps {
  options: ColorOption[];
  selectedValue?: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  options,
  selectedValue,
  onChange,
  className = '',
  placeholder = 'Select Color'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative w-full max-w-[200px] ${className}`} ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[40px] px-3 bg-white border border-gray-300 rounded flex items-center justify-between hover:border-gray-400 focus:outline-none"
      >
         <div className="flex items-center gap-2">
            {selectedOption?.colorCode && (
              <span 
                className="w-6 h-6 rounded border border-gray-200" 
                style={{ backgroundColor: selectedOption.colorCode }}
              />
            )}
            <span className="text-gray-900 text-sm truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
         </div>
         <ChevronDown />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              disabled={option.disabled}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`
                w-full px-3 py-2 flex items-center gap-2 text-left text-sm hover:bg-gray-50
                ${selectedValue === option.value ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}
                ${option.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              {option.colorCode && (
                <span 
                  className="w-6 h-6 rounded border border-gray-200 flex-shrink-0" 
                  style={{ backgroundColor: option.colorCode }}
                />
              )}
              <span className="truncate">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorSelector;
