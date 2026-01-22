
import React from 'react';

export interface ProductInfoProps {
  /**
   * The name of the product to display.
   */
  title: string;
  /**
   * The description text to display.
   */
  description: string;
  /**
   * Callback when "Read More" is clicked.
   */
  onReadMore?: () => void;
  /**
   * Text alignment for the component.
   */
  alignment?: 'left' | 'center' | 'right';
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ 
  title, 
  description, 
  onReadMore,
  alignment = 'left' 
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[alignment];

  return (
    <div className={`flex flex-col gap-2 ${alignmentClass}`}>
      <h1 className="font-['Proxima_Nova'] font-extrabold text-[42px] leading-[50px] text-black">
        {title}
      </h1>
      <div className="font-['Proxima_Nova'] text-[16px] leading-[24px] text-black">
        <span>{description} </span>
        <button 
          onClick={onReadMore}
          className="text-[#006fff] underline font-normal bg-transparent border-none p-0 cursor-pointer hover:text-[#005bb5] transition-colors"
        >
          Read More
        </button>
      </div>
    </div>
  );
};
