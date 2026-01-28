import React, { useRef } from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductCard, type ProductCardProps } from '../ProductCard/ProductCard';

// ----------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------

export interface RelatedProductItem extends ProductCardProps {
    /**
     * List of product attributes/specifications to display below the card
     */
    attributes?: string[];
}

export interface RelatedProductsProps {
    /**
     * Title of the section
     */
    title?: string;
    /**
     * List of products to display
     */
    products: RelatedProductItem[];
    /**
     * Custom class for the root container
     */
    blockClass?: string;
    /**
     * Custom settings for the slider
     */
    sliderSettings?: Settings;
}

// ----------------------------------------------------------------------
// Internal Component: Single Card
// ----------------------------------------------------------------------

const RelatedProductCard: React.FC<RelatedProductItem> = ({
    attributes = [],
    ...productCardProps
}) => {
    return (
        <div className="flex flex-col w-full">
            <ProductCard
                {...productCardProps}
                variant="compact"
            />

            {/* Attributes Section */}
            <div className="flex flex-col overflow-hidden">
                {attributes.map((attr, index) => (
                    <div
                        key={index}
                        className={`
                            px-[10px] py-3 text-sm text-gray-600 font-['DM_Sans'] text-left
                            ${index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}
                        `}
                    >
                        {attr}
                    </div>
                ))}
                {attributes.length === 0 && (
                    <div className="p-[10px] text-sm text-gray-400 text-center italic">
                        No attributes
                    </div>
                )}
            </div>
        </div>
    );
};

// ----------------------------------------------------------------------
// Arrow Components
// ----------------------------------------------------------------------

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#4f46e5", // Indigo-600 matching design
                borderRadius: "4px",
                width: "40px",
                height: "40px",
                zIndex: 1,
                right: "-20px"
            }}
            onClick={onClick}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#4f46e5",
                borderRadius: "4px",
                width: "40px",
                height: "40px",
                zIndex: 1,
                left: "-20px"
            }}
            onClick={onClick}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------

/**
 * RelatedProducts component
 * Displays a list of products in a carousel with attributes below each card.
 */
export const RelatedProducts: React.FC<RelatedProductsProps> = ({
    title,
    products,
    blockClass = "",
    sliderSettings
}) => {
    const sliderRef = useRef<Slider>(null);

    const settings: Settings = {
        dots: false,
        infinite: products.length > 4,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false, // Disable default internal arrows
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    // On small screens, we rely on the slider to show one item at a time.
                    // The item will take the full width of the slider container.
                }
            }
        ],
        ...sliderSettings
    };

    if (!products || products.length === 0) {
        return null;
    }

    return (
        <div className={`w-full max-w-[1280px] mx-auto px-4 md:px-12 py-8 bg-white ${blockClass}`}>
            <div className="flex justify-between items-center mb-6 border-b border-[#e7e7e7] pb-2">
                {title && (
                    <h2 className="text-xl md:text-2xl font-bold font-['DM_Sans'] text-gray-900">
                        {title}
                    </h2>
                )}

                {/* Navigation Arrows in Header */}
                <div className="flex gap-2">
                    <PrevArrow
                        className="cursor-pointer hover:bg-opacity-90 transition-opacity"
                        style={{ position: 'static' }}
                        onClick={() => sliderRef.current?.slickPrev()}
                    />
                    <NextArrow
                        className="cursor-pointer hover:bg-opacity-90 transition-opacity"
                        style={{ position: 'static' }}
                        onClick={() => sliderRef.current?.slickNext()}
                    />
                </div>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="px-3 pb-2">
                        {/* 
                            Fixed width constraint is handled by the generic container, 
                            but we ensure the card takes full available width of the slide 
                            and has a max-width to emulate "fixed" size if needed, 
                            though usually in a slider you want it to fill the slide track.
                            We'll use w-full.
                        */}
                        <RelatedProductCard {...product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default RelatedProducts;
