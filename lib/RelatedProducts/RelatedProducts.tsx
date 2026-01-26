import React from 'react';
import { ProductCard, type ProductCardProps } from '../ProductCard/ProductCard';

export interface RelatedProductsProps extends ProductCardProps {
    /**
     * List of product attributes/specifications to display below the card
     */
    attributes?: string[];
    /**
     * Custom class for the attributes container
     */
    attributesBlockClass?: string;
    /**
     * Custom class for individual attribute rows
     */
    attributeRowBlockClass?: string;
    /**
     * Custom class for the root container
     */
    blockClass?: string;
}

/**
 * RelatedProducts component
 * Displays a product card with a list of attributes below it.
 * Designed for comparison grids.
 */
export const RelatedProducts: React.FC<RelatedProductsProps> = ({
    attributes = [],
    attributesBlockClass = "",
    attributeRowBlockClass = "",
    blockClass = "",
    ...productCardProps
}) => {
    return (
        <div className={`flex flex-col w-full max-w-[280px] ${blockClass}`}>
            {/* 
                Product Card Section
                Overriding rounded corners and bottom border to merge with attributes list
            */}
            <ProductCard
                {...productCardProps}
                className="rounded-b-none border-b-0"
            />

            {/* Attributes Section */}
            <div className={`flex flex-col border border-t-0 border-gray-100 rounded-b-lg overflow-hidden ${attributesBlockClass}`}>
                {attributes.map((attr, index) => (
                    <div
                        key={index}
                        className={`
                            px-4 py-3 text-sm text-gray-600 font-['DM_Sans'] text-left border-t border-gray-100 first:border-t-0
                            ${index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}
                            ${attributeRowBlockClass}
                        `}
                    >
                        {attr}
                    </div>
                ))}
                {attributes.length === 0 && (
                    <div className="p-4 text-sm text-gray-400 text-center italic">
                        No attributes
                    </div>
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;
