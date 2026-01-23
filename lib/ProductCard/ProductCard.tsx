import React from 'react';
import { Button } from '../Button/Button';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';

export interface ProductCardProps {
  /**
   * The variation of the card to render.
   */
  variant: 'summary' | 'compact';
  /**
   * Product title.
   */
  title: string;
  /**
   * Product image URL.
   */
  image: string;

  // Style Props
  /**
   * Link to the product page.
   */
  productLink?: string;
  /**
   * Color for the action buttons.
   */
  buttonColor?: string;
  /**
   * Color for the quantity selector (Compact variant only).
   */
  quantitySelectorColor?: string;
  /**
   * Text for the main action button (defaults to "Get a Quote").
   */
  buttonText?: string;

  // Customization Classes
  /**
   * Custom class for the root container.
   */
  className?: string;
  /**
   * Custom class for the image element/container.
   */
  imageClassName?: string;
  /**
   * Custom class for the buttons.
   */
  buttonClassName?: string;

  // Summary Variant Data
  /**
   * Description text or HTML content (Summary variant only).
   */
  /**
   * Description text (Summary variant only). 
   * Rendered before the "read more" link.
   */
  description?: string;
  /**
   * List of features to display as bullet points (Summary variant only).
   * Rendered after the "read more" link.
   */
  features?: string[];
  /**
   * Callback for "read more" link (Summary variant only).
   */
  onReadMore?: () => void;

  // Compact Variant Data
  /**
   * Callback when quantity changes (Compact variant only).
   */
  onQuantityChange?: (quantity: number) => void;
  /**
   * Callback for "Get a Quote" button (Compact variant only).
   */
  onGetQuote?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  variant,
  title,
  image,
  productLink,
  buttonColor,
  quantitySelectorColor,
  buttonText = 'Get a Quote',
  className = '',
  imageClassName = '',
  buttonClassName = '',
  description,
  features,
  onReadMore,
  onQuantityChange,
  onGetQuote,
}) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (productLink) {
      return (
        <a href={productLink} className="block w-full h-full text-inherit no-underline">
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  const renderSummaryVariant = () => (
    <div 
      className={`bg-white border border-[#e7e7e7] flex flex-col items-start p-[10px] relative shrink-0 ${className}`}
    >
      <Wrapper>
        <div className="flex flex-col gap-[10px] items-start w-full relative">
          {/* Image Section - Default to aspect-square (1:1) for "average" card size */}
          <div className={`relative w-full overflow-hidden shrink-0 aspect-square ${imageClassName}`}>
             <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Title - Left Aligned */}
          <h3 className="font-['DM_Sans'] font-semibold text-[14px] leading-[24px] text-left text-black w-full">
            {title}
          </h3>

          {/* Description - Left Aligned */}
          {/* Description + Read More */}
          {(description || onReadMore) && (
             <div className="text-[12px] text-left w-full text-black font-['DM_Sans'] leading-[16px]">
               {description && <span>{description}</span>}
               {' '}
               {onReadMore && (
                 <button 
                   onClick={(e) => {
                     e.preventDefault(); // Prevent link click if wrapped
                     onReadMore();
                   }}
                   className="text-[#4e46b4] underline decoration-solid cursor-pointer font-['DM_Sans'] text-[12px] leading-[16px]"
                 >
                   read more
                 </button>
               )}
             </div>
          )}

          {/* Features List */}
          {features && features.length > 0 && (
            <ul className="list-disc pl-5 text-[12px] text-left w-full text-black font-['DM_Sans'] leading-[16px]">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      </Wrapper>
    </div>
  );

  const renderCompactVariant = () => (
    <div 
      className={`bg-white border border-[#bbbbbb] flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 ${className}`}
    >
      <Wrapper>
        <div className="flex flex-col gap-[10px] items-start w-full relative">
           {/* Image Section - Default to aspect-square (1:1) */}
          <div className={`relative w-full overflow-hidden shrink-0 aspect-square ${imageClassName}`}>
             <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Title - Left Aligned */}
          <h3 className="font-['DM_Sans'] font-semibold text-[14px] leading-[24px] text-left text-black w-full">
            {title}
          </h3>
        </div>
      </Wrapper>

      <div className="flex items-center justify-between w-full h-[36px] gap-2 mt-auto">
         {/* Quantity Selector */}
         <div className="shrink-0">
           <QuantitySelector 
             initialValue={1} 
             onChange={onQuantityChange} 
             min={1}
             label="" // No label for this compact view
             customColor={quantitySelectorColor}
           />
         </div>

         {/* Action Button */}
         <Button 
           variant="primary" 
           size="sm"
           className={`h-[35px] text-[12px] font-bold px-3 py-0 whitespace-nowrap bg-[#4e46b4] hover:bg-[#3d3790] ${buttonClassName}`}
           customColor={buttonColor}
           onClick={onGetQuote}
         >
           {buttonText}
         </Button>
      </div>
    </div>
  );

  return variant === 'summary' ? renderSummaryVariant() : renderCompactVariant();
};
