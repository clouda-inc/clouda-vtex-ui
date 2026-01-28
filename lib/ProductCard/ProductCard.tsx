import React from 'react';
import { Button } from '../Button/Button';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';

export interface ProductCardProps {
  /**
   * The variation of the card to render.
   */
  variant: 'summary' | 'compact' | 'detailed';
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
   * Text for the main action button (defaults to "Get a Quote" or "Add to Cart").
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
   * Description text or HTML content (Summary/Detailed variant).
   * Rendered before the "read more" link in Summary.
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

  // Compact/Detailed Variant Data
  /**
   * Callback when quantity changes (Compact/Detailed variant).
   */
  onQuantityChange?: (quantity: number) => void;
  /**
   * Callback for "Get a Quote" button (Compact variant: Main button, Detailed variant: Icon button).
   */
  onGetQuote?: () => void;

  // Detailed Variant Only
  /**
   * Callback for adding to wishlist (Detailed variant only).
   */
  onAddToWishlist?: () => void;
  /**
   * Callback for "Add to Cart" button (Detailed variant only).
   */
  onAddToCart?: () => void;
  /**
   * Callback for "Compare" button (Detailed variant only).
   */
  onCompare?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  variant,
  title,
  image,
  productLink,
  buttonColor,
  quantitySelectorColor,
  buttonText,
  className = '',
  imageClassName = '',
  buttonClassName = '',
  description,
  features,
  onReadMore,
  onQuantityChange,
  onGetQuote,
  onAddToWishlist,
  onAddToCart,
  onCompare,
}) => {
  const Wrapper = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    if (productLink) {
      return (
        <a href={productLink} className={`block text-inherit no-underline group/link ${className}`}>
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  /* Helper for Image Component with Fallback */
  const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    const [error, setError] = React.useState(false);

    if (!src || error) {
      return (
        <div className={`w-full h-full bg-[#EAEAEA] flex items-center justify-center ${className}`}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#9CA3AF" />
          </svg>
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setError(true)}
      />
    );
  };

  const renderSummaryVariant = () => (
    <div
      className={`bg-white border border-[#e7e7e7] flex flex-col items-start p-[10px] relative shrink-0 ${className}`}
    >
      <Wrapper className="w-full h-full">
        <div className="flex flex-col gap-[10px] items-start w-full relative">
          {/* Image Section - Default to aspect-square (1:1) for "average" card size */}
          <div className={`relative w-full overflow-hidden shrink-0 aspect-square ${imageClassName}`}>
            <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Title - Left Aligned */}
          <h3 className="font-['DM_Sans'] font-semibold text-[14px] leading-[24px] text-left text-black w-full">
            {title}
          </h3>

          {/* Description - Left Aligned */}
          {/* Description + Read More */}
          {(description || onReadMore) && (
            <div className="text-[12px] text-left w-full text-black font-['DM_Sans'] leading-[16px]">
              {description && <span dangerouslySetInnerHTML={{ __html: description }} />}
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

  const renderCompactVariant = () => {
    const finalButtonText = buttonText || 'Get a Quote';
    return (
      <div
        className={`bg-white border border-[#bbbbbb] flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 ${className}`}
      >
        <Wrapper className="w-full">
          <div className="flex flex-col gap-[10px] items-start w-full relative">
            {/* Image Section - Default to aspect-square (1:1) */}
            <div className={`relative w-full overflow-hidden shrink-0 aspect-square ${imageClassName}`}>
              <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
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
            {finalButtonText}
          </Button>
        </div>
      </div>
    );
  };

  const renderDetailedVariant = () => {
    const finalButtonText = buttonText || 'Add to Cart';

    return (
      <div className={`bg-white border border-[#e7e7e7] flex flex-col items-start p-[10px] relative shrink-0 ${className}`}>
        <Wrapper className="w-full">
          <div className="flex flex-col gap-[10px] items-start w-full relative">
            {/* Image Container */}
            <div className={`relative w-full overflow-hidden shrink-0 aspect-square group ${imageClassName}`}>
              <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />

              {/* Wishlist Button - Absolute Top Right */}
              {onAddToWishlist && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onAddToWishlist();
                  }}
                  className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors shadow-sm"
                  aria-label="Add to wishlist"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              )}

              {/* Compare Button - Absolute Bottom Right */}
              {onCompare && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onCompare();
                  }}
                  className="absolute bottom-2 right-2 p-1.5 bg-white/80 rounded hover:bg-white transition-colors shadow-sm border border-gray-200"
                  aria-label="Compare"
                >
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4375 5.9H5.875C5.37772 5.9 4.90081 6.10018 4.54917 6.4565C4.19754 6.81282 4 7.29609 4 7.8V19.2C4 19.7039 4.19754 20.1872 4.54917 20.5435C4.90081 20.8998 5.37772 21.1 5.875 21.1H12.4375M16.1875 5.9H17.125C17.6223 5.9 18.0992 6.10018 18.4508 6.4565C18.8025 6.81282 19 7.29609 19 7.8V8.75M19 18.25V19.2C19 19.7039 18.8025 20.1872 18.4508 20.5435C18.0992 20.8998 17.6223 21.1 17.125 21.1H16.1875M19 12.55V14.45M11.5 4V23" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </div>

            {/* Title */}
            <h3 className="font-['DM_Sans'] font-semibold text-[14px] leading-[24px] text-left text-black w-full">
              {title}
            </h3>

            {/* Description (HTML) */}
            {description && (
              <div className="text-[12px] text-left w-full text-black font-['DM_Sans'] [&_ul]:list-disc [&_ul]:pl-5 [&_li]:leading-[16px]">
                <span dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            )}
          </div>
        </Wrapper>

        {/* Bottom Actions Area */}
        <div className="w-full mt-auto pt-4 flex flex-col gap-3">
          {/* Quantity Selector */}
          <div className="w-full">
            <QuantitySelector
              initialValue={1}
              onChange={onQuantityChange}
              min={1}
              label=""
              customColor={quantitySelectorColor}
              fullWidth
            />
          </div>

          {/* Buttons Row */}
          <div className="flex gap-2 w-full">
            {/* Main Button (Add to Cart) */}
            <Button
              variant="primary"
              size="sm"
              className={`flex-1 h-[35px] text-[12px] font-bold px-3 py-0 whitespace-nowrap bg-[#4e46b4] hover:bg-[#3d3790] ${buttonClassName}`}
              customColor={buttonColor}
              onClick={onAddToCart}
            >
              {finalButtonText}
            </Button>

            {/* Secondary Button (Get Quote Icon) */}
            {onGetQuote && (
              <button
                onClick={onGetQuote}
                className="h-[35px] w-[35px] flex items-center justify-center border border-[#e7e7e7] rounded hover:bg-gray-50 shrink-0 text-[#282828]"
                title="Get a Quote"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  {/* Document Icon */}
                  <path transform="translate(4, 4)" d="M0 0V13.4444H10.3889V3.40972L10.2434 3.24787L7.12678 0.145303L6.96367 0.000517057L0 0ZM1.03889 1.03419H6.23333V4.13675H9.35V12.4103H1.03889V1.03419ZM7.27222 1.77777L8.60356 3.10256H7.27222V1.77777ZM2.59722 5.17094V6.20513H7.79167V5.17094H2.59722ZM2.59722 7.23932V8.2735H7.79167V7.23932H2.59722ZM2.59722 9.30769V10.3419H7.79167V9.30769H2.59722Z" fill="#341F1A" />
                  {/* Plus Badge */}
                  <path transform="translate(10, 10)" d="M10.0833 5.04167C10.0833 4.37959 9.95293 3.72399 9.69956 3.1123C9.44619 2.50062 9.07483 1.94483 8.60666 1.47667C8.1385 1.00851 7.58271 0.637141 6.97103 0.383773C6.35935 0.130406 5.70375 0 5.04167 0C4.37959 0 3.72399 0.130406 3.1123 0.383773C2.50062 0.637141 1.94483 1.00851 1.47667 1.47667C1.00851 1.94483 0.637141 2.50062 0.383774 3.1123C0.130407 3.72399 -9.86577e-09 4.37959 0 5.04167C1.99248e-08 6.3788 0.531174 7.66117 1.47667 8.60666C2.42217 9.55216 3.70453 10.0833 5.04167 10.0833C6.3788 10.0833 7.66117 9.55216 8.60666 8.60666C9.55216 7.66117 10.0833 6.3788 10.0833 5.04167ZM5.5 5.5L5.50092 7.79442C5.50092 7.91597 5.45263 8.03255 5.36667 8.11851C5.28072 8.20446 5.16414 8.25275 5.04258 8.25275C4.92103 8.25275 4.80445 8.20446 4.71849 8.11851C4.63254 8.03255 4.58425 7.91597 4.58425 7.79442V5.5H2.288C2.16644 5.5 2.04986 5.45171 1.96391 5.36576C1.87796 5.2798 1.82967 5.16322 1.82967 5.04167C1.82967 4.92011 1.87796 4.80353 1.96391 4.71758C2.04986 4.63162 2.16644 4.58333 2.288 4.58333H4.58333V2.29167C4.58333 2.17011 4.63162 2.05353 4.71758 1.96758C4.80353 1.88162 4.92011 1.83333 5.04167 1.83333C5.16322 1.83333 5.2798 1.88162 5.36576 1.96758C5.45171 2.05353 5.5 2.17011 5.5 2.29167V4.58333H7.78892C7.91047 4.58333 8.02705 4.63162 8.11301 4.71758C8.19896 4.80353 8.24725 4.92011 8.24725 5.04167C8.24725 5.16322 8.19896 5.2798 8.11301 5.36576C8.02705 5.45171 7.91047 5.5 7.78892 5.5H5.5Z" fill="#4E46B4" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  switch (variant) {
    case 'summary':
      return renderSummaryVariant();
    case 'compact':
      return renderCompactVariant();
    case 'detailed':
      return renderDetailedVariant();
    default:
      return renderSummaryVariant();
  }
};
