import React from 'react';

interface TextOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface TextSelectorProps {
  options: TextOption[];
  selectedValue?: string;
  onChange: (value: string) => void;
  className?: string;
}

const TextSelector: React.FC<TextSelectorProps> = ({ 
  options, 
  selectedValue, 
  onChange,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => !option.disabled && onChange(option.value)}
          disabled={option.disabled}
          className={`
            px-4 py-2 min-w-[50px] border rounded text-sm transition-all
            ${selectedValue === option.value 
              ? 'border-gray-900 ring-1 ring-gray-900 text-gray-900 bg-white' 
              : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-white'
            }
            ${option.disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default TextSelector;
