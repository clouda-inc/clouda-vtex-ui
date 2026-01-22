import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onChange,
  min = 1,
  max = 99,
  className = ''
}) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className={`flex items-center h-[40px] border border-gray-200 rounded overflow-hidden max-w-[120px] ${className}`}>
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="w-10 h-full bg-[#FFDB0A] flex items-center justify-center hover:bg-[#ffe63b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xl font-medium"
      >
        −
      </button>
      <div className="w-10 h-full bg-white flex items-center justify-center border-x border-gray-200 font-medium text-gray-900">
        {quantity}
      </div>
      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="w-10 h-full bg-[#FFDB0A] flex items-center justify-center hover:bg-[#ffe63b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xl font-medium"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
