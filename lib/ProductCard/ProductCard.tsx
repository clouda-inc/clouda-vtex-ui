
import React from 'react';

export interface ProductCardProps {
  /**
   * Whether the card is in a loading/skeleton state.
   */
  loading?: boolean;
  /**
   * Product title
   */
  title?: string;
  /**
   * Product image URL
   */
  imageUrl?: string;
  /**
  /**
   * Product price
   */
  price?: string;
  /**
   * Card width (e.g., '250px', '100%')
   * @default '250px'
   */
  width?: string;
  /**
   * Card height (e.g., '350px', 'auto')
   * @default '350px'
   */
  height?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  loading = false,
  title,
  imageUrl,
  price,
  width = '250px',
  height = '350px'
}) => {
  const containerStyle = { width, height };

  if (loading) {
    return (
      <div 
        className="bg-white px-[10px] flex flex-col items-center"
        style={containerStyle}
      >
         {/* Layout based on Figma Node 30616-42724 */}
        <div className="bg-[#d7deec] w-full flex-grow mt-[10px] rounded-[5px]" /> 
         {/* Skeleton content below image */}
         <div className="w-[65%] h-[20px] bg-[#d7deec] rounded-[20px] mt-[15px] shrink-0" />
         <div className="flex gap-[15px] mt-[15px] mb-[15px] shrink-0">
            <div className="w-[35%] h-[25px] bg-[#d7deec]" />
            <div className="w-[35%] h-[25px] bg-[#d7deec]" />
         </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white p-[10px] shadow-sm flex flex-col items-center transition-transform hover:scale-105 duration-200"
      style={containerStyle}
    >
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full flex-1 object-cover rounded-[5px] min-h-0" />
      )}
      <div className="mt-4 text-center shrink-0 w-full mb-2">
        <h3 className="font-['Proxima_Nova'] font-bold text-lg text-black truncate w-full px-2">
          {title}
        </h3>
        <p className="font-['Proxima_Nova'] font-normal text-md text-gray-600 mt-1">
          {price}
        </p>
      </div>
    </div>
  );
};
