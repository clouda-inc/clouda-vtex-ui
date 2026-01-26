import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import type { ProductCardProps } from '../ProductCard/ProductCard';
import { Button } from '../Button/Button';

export interface ProductResultProps {
  /**
   * Array of product objects to display.
   */
  products: ProductCardProps[];
  /**
   * Callback for the "Load More" button.
   */
  onLoadMore?: () => void;
  /**
   * Custom class for the root container.
   */
  className?: string;
  /**
   * Background color for the "Load More" button.
   */
  loadMoreButtonColor?: string;
  /**
   * Text color for the "Load More" button.
   */
  loadMoreButtonTextColor?: string;
  /**
   * Text for the "Load More" button.
   * @default "Load More"
   */
  loadMoreText?: string;
  /**
   * Message to display when there are no products.
   * @default "Search result not found"
   */
  emptyMessage?: string;
  /**
   * Color for the "Add to Cart" button in the product card.
   */
  addToCartButtonColor?: string;
  /**
   * Color for the quantity selector in the product card.
   */
  quantitySelectorColor?: string;
  /**
   * Variation of the product card to render.
   * @default "detailed"
   */
  cardVariant?: 'summary' | 'compact' | 'detailed';
}

export const ProductResult: React.FC<ProductResultProps> = ({
  products,
  onLoadMore,
  className = '',
  loadMoreButtonColor,
  loadMoreButtonTextColor,
  loadMoreText = 'Load More',
  emptyMessage = 'Search result not found',
  addToCartButtonColor,
  quantitySelectorColor,
  cardVariant = 'detailed',
}) => {
  if (products.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center w-full py-[40px] ${className}`}>
        <p className="font-['DM_Sans'] text-[16px] text-black">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-start w-full max-w-[1440px] mx-auto ${className}`}>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[20px] gap-y-[40px] w-full mb-[40px]">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            variant={cardVariant}
            className="w-full"
            onAddToWishlist={() => {}} // Dummy handler
            onAddToCart={() => {}}     // Dummy handler
            onCompare={() => {}}       // Dummy handler
            onGetQuote={() => {}}      // Dummy handler
            buttonColor={addToCartButtonColor}
            quantitySelectorColor={quantitySelectorColor}
          />
        ))}
      </div>

      {/* Load More Button */}
      {onLoadMore && (
        <div className="w-full flex justify-start">
          <Button
            variant="primary"
            size="lg"
            className="w-full lg:w-[320px] h-[48px] font-['DM_Sans'] font-bold text-[16px] leading-[24px] bg-[#4e46b4] hover:bg-[#3d3790] rounded-[4px]"
            onClick={onLoadMore}
            customColor={loadMoreButtonColor}
            style={loadMoreButtonTextColor ? { color: loadMoreButtonTextColor } : undefined}
          >
            {loadMoreText}
          </Button>
        </div>
      )}
    </div>
  );
};
