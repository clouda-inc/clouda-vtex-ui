import React from 'react';
import Slider from 'react-slick';
import { Button } from '../Button/Button';
import brandPlaceholder from './assets/brand-placeholder.svg';
import mainImage from './assets/main-image.svg';

// Import css files for slick-carousel if not globally imported
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface FeatureBrandsProps {
    /**
     * Eyebrow text above the title
     */
    eyebrow?: string;
    /**
     * Main heading title
     */
    title: string;
    /**
     * Description paragraph
     */
    description: string;
    /**
     * List of brand logo objects
     */
    brandLogos?: Array<{ src: string; alt: string }>;
    /**
     * Source for the main image
     */
    imageSrc?: string;
    /**
     * Text for the call-to-action button
     */
    buttonText?: string;
    /**
     * Callback for button click
     */
    onButtonClick?: () => void;
    /**
     * Autoplay speed in milliseconds
     * @default 3000
     */
    autoplaySpeed?: number;
    /**
     * Custom block class for styling extensibility
     */
    blockClass?: string;
}

export const FeatureBrands: React.FC<FeatureBrandsProps> = ({
    eyebrow = 'Lorem ipsum ut mi mi',
    title = 'Lorem ipsum ut mi mi',
    description = 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    brandLogos = Array(8).fill({ src: brandPlaceholder, alt: 'Brand Logo' }),
    imageSrc = mainImage,
    buttonText,
    onButtonClick,
    autoplaySpeed = 3000,
    blockClass = '',
}) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: autoplaySpeed,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        arrows: false,
        appendDots: (dots: React.ReactNode) => (
            <div className="w-full absolute -bottom-8 left-0 px-2 box-border">
                <ul className="flex w-full gap-2 m-0 p-0 list-none h-1.5 items-center"> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-full h-1 bg-gray-200 rounded-full transition-colors duration-300 cursor-pointer dot-strip" />
        ),
        responsive: [
            {
                breakpoint: 1024, // Tablet/Desktop
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    rows: 2,
                }
            },
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    rows: 2,
                    dots: true,
                }
            }
        ]
    };

    return (
        <div className={`w-full max-w-[1440px] mx-auto bg-white ${blockClass}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column: Content & Brands */}
                <div className="flex flex-col justify-between p-5 md:p-10 lg:p-20 order-1 lg:order-1">
                    {/* Text Content */}
                    <div className="mb-12">
                        {eyebrow && (
                            <p className="font-['DM_Sans'] text-lg text-gray-900 mb-4">{eyebrow}</p>
                        )}
                        <h2 className="font-['DM_Sans'] text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="font-['DM_Sans'] text-base text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Brand Slider */}
                    <div className="mb-12 w-full">
                        <Slider {...sliderSettings}>
                            {brandLogos.map((logo, index) => (
                                <div key={index} className="px-2 pb-4">
                                    <div className="bg-gray-200 rounded-lg flex items-center justify-center p-4 h-24">
                                        <img src={logo.src} alt={logo.alt} className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* CTA Button */}
                    {buttonText && (
                        <div>
                            <Button
                                variant="primary"
                                customColor="#4e46b4"
                                onClick={onButtonClick}
                                className="w-full lg:w-auto"
                            >
                                {buttonText}
                            </Button>
                        </div>
                    )}
                </div>

                {/* Right Column: Main Image */}
                <div className="relative w-full h-96 lg:h-auto order-2 lg:order-2 p-4 lg:p-8">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
            <style>{`
                .slick-dots li {
                    width: 100%;
                    margin: 0;
                }
                .slick-dots li.slick-active .dot-strip {
                    background-color: #111827; /* gray-900 */
                }
            `}</style>
        </div>
    );
};

export default FeatureBrands;
