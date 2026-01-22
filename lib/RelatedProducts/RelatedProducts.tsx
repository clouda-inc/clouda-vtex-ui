
import React from 'react';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { ProductCard, type ProductCardProps } from '../ProductCard/ProductCard';

export interface RelatedProductsProps {
  products?: ProductCardProps[];
  title?: string;
  description?: string;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ 
  products = [], 
  title = "Related Products", 
  description = "Please select a valid SKU to view related products" 
}) => {
  return (
    <div className="relative w-full bg-[#eaeff8] pt-[28px] pb-[60px] flex flex-col items-center">
      {/* Yellow top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] border-t border-solid border-[#ffdb0a]" />
      
      {/* Title section */}
      <div className="mb-[60px] max-w-[656px]">
        <ProductInfo
          title={title}
          description={description}
          alignment="center"
        />
      </div>

      {/* Cards Grid */}
      <div className="flex gap-[20px] flex-wrap px-[20px] md:px-[55px] w-full justify-center">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))
        ) : (
          // Default empty/skeleton state if no products provided
          Array.from({ length: 5 }).map((_, index) => (
            <ProductCard key={index} loading={true} />
          ))
        )}
      </div>
    </div>
  );
};
