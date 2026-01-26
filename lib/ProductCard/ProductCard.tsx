import React from 'react';
import { Button } from '../Button/Button';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';

export interface ProductCardProps {
    /**
     * Title of the product
     */
    title?: string;
    /**
     * Short description or supporting text
     */
    description?: string;
    /**
     * URL of the product image
     */
    image?: string;
    /**
     * Alt text for the product image
     */
    imageAlt?: string;
    /**
     * Callback when "Get a Quote" is clicked
     */
    onQuoteClick?: () => void;
    /**
     * Callback when quantity changes
     */
    onQuantityChange?: (value: number) => void;
    /**
     * Initial quantity
     */
    initialQuantity?: number;
    /**
     * Custom class for the root element
     */
    blockClass?: string;
    /**
     * Custom background color for the Quantity Selector buttons
     */
    quantitySelectorColor?: string;
    /**
     * Custom background color for the 'Get a Quote' button
     */
    actionButtonColor?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    title = "Lorem ipsum tincidunt in",
    description,
    image,
    imageAlt = "Product image",
    onQuoteClick,
    onQuantityChange,
    initialQuantity = 1,
    blockClass = "",
    quantitySelectorColor = "#FACC15",
    actionButtonColor = "#4e46b4",
}) => {
    return (
        <div className={`p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col gap-4 max-w-[280px] ${blockClass}`}>
            {/* Image Placeholder */}
            <div className="w-full aspect-square bg-[#D9D9D9] rounded flex items-center justify-center text-gray-400">
                {image ? (
                    <img src={image} alt={imageAlt} className="w-full h-full object-cover rounded" />
                ) : (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.4453 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.4453 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium text-black font-['DM_Sans'] leading-tight">
                    {title}
                </h3>

                {/* Quantity Selector with Custom Styling Reuse */}
                {/* Using [&_button] selector to override the purple background of children buttons to yellow */}
                {/* Actions Row */}
                <div className="flex items-center gap-3 mt-1">
                    <div className="shrink-0">
                        <QuantitySelector
                            initialValue={initialQuantity}
                            onChange={onQuantityChange}
                            size="small"
                            buttonBackgroundColor={quantitySelectorColor}
                            // Using text-black for yellow background, but if color changes it might need contrast adjustment. 
                            // The user requested exposing color, we assume they handle contrast or we keep text-white default?
                            // Figma design had yellow buttons with black text.
                            // If we pass a custom color, the text might be white (default in QS).
                            // Let's add text-black only if default yellow is used? 
                            // Or better: use a simpler blockClass that doesn't override bg.
                            blockClass={`gap-0 ${quantitySelectorColor === '#FACC15' ? '[&_button]:text-black' : ''}`}
                            label=""
                        />
                    </div>

                    <Button
                        variant="primary"
                        size="sm"
                        customColor={actionButtonColor}
                        className="flex-1 whitespace-nowrap"
                        onClick={onQuoteClick}
                    >
                        Get a Quote
                    </Button>
                </div>

                {/* Supporting Text */}
                {description && (
                    <p className="text-sm text-gray-500 font-['DM_Sans']">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
