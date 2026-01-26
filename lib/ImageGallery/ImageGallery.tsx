import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Image {
    url: string;
    alternateName: string;
}

export interface ImageGalleryProps {
    /**
     * Array of images to display
     */
    images: Image[];
    /**
     * Custom block class for styling flexibility
     */
    blockClass?: string;
}

// Arrow components for better styling control
const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block", right: "25px", zIndex: 1, ...style }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block", left: "25px", zIndex: 1, ...style }}
            onClick={onClick}
        />
    );
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, blockClass = '' }) => {
    const [nav1, setNav1] = React.useState<Slider | null>(null);
    const [nav2, setNav2] = React.useState<Slider | null>(null);
    const [imageErrors, setImageErrors] = React.useState<Record<number, boolean>>({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const handleImageError = (index: number) => {
        setImageErrors(prev => ({ ...prev, [index]: true }));
    };

    // Mobile Settings
    const mobileSettings: Settings = {
        dots: false, // Customized external dots
        arrows: false, // Customized external arrows
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    };

    // Desktop Main Slider Settings
    const desktopMainSettings: Settings = {
        asNavFor: nav2 || undefined,
        arrows: false,
        dots: false,
        infinite: true,
    };

    // Desktop Thumbnail Settings
    const desktopThumbSettings: Settings = {
        asNavFor: nav1 || undefined,
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
        infinite: true,
        nextArrow: <SampleNextArrow style={{ right: "-35px", color: "black" }} />,
        prevArrow: <SamplePrevArrow style={{ left: "-35px", color: "black" }} />,
    };

    const renderImage = (img: Image, index: number, isThumb: boolean = false) => {
        if (!img.url || imageErrors[index]) {
            return (
                <div className={`w-full bg-[#EAEAEA] flex items-center justify-center ${isThumb ? 'aspect-square rounded-[8px]' : 'aspect-square rounded-[8px]'}`}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                        <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor" />
                    </svg>
                </div>
            );
        }
        return (
            <img
                src={img.url}
                alt={img.alternateName}
                onError={() => handleImageError(index)}
                className={`w-full h-full object-cover rounded-[8px] ${isThumb ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
            />
        );
    };

    return (
        <div className={`w-full max-w-[800px] mx-auto relative ${blockClass}`}>
            <style>{`
                /* Active dot styling */
                .slick-dots li.slick-active div {
                    background-color: #4E46B4 !important;
                    width: 25px !important;
                    border-radius: 5px !important;
                }
                
                /* Arrow styling */
                .slick-prev:before, .slick-next:before {
                    color: black;
                    font-size: 24px;
                }
                
                /* Desktop: Thumbnails active state border */
                .slick-current .thumb-wrapper {
                     border: 2px solid #000;
                     border-radius: 10px;
                }
                
                
                /* Desktop: Position thumbnail arrows outside */
                .thumbnail-slider .slick-prev {
                    left: -40px !important;
                    z-index: 10;
                }
                .thumbnail-slider .slick-next {
                    right: -40px !important;
                    z-index: 10;
                }

                /* Mobile: Force slider to respect container width */
                .mobile-image-gallery {
                    width: 100% !important;
                    overflow: hidden !important;
                    box-sizing: border-box !important;
                }
                .mobile-image-gallery .slick-list {
                    overflow: hidden !important;
                }
            `}</style>

            {/* Mobile View */}
            <div className="block md:hidden mobile-image-gallery" style={{ width: '100%', maxWidth: 'calc(100vw - 32px)', margin: '0 auto' }}>
                <Slider {...mobileSettings} ref={sliderRef}>
                    {images.map((img, index) => (
                        <div key={index} className="outline-none">
                            <div className="w-full aspect-square relative">
                                {!img.url || imageErrors[index] ? (
                                    <div className="absolute inset-0 bg-[#EAEAEA] flex items-center justify-center rounded-[8px]">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#9CA3AF' }}>
                                            <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                ) : (
                                    <img
                                        src={img.url}
                                        alt={img.alternateName}
                                        onError={() => handleImageError(index)}
                                        className="w-full h-full object-cover rounded-[8px] absolute inset-0"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Custom Navigation Controls */}
                <div className="flex items-center justify-center gap-4 mt-4">
                    {/* Left Arrow */}
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="p-2 focus:outline-none"
                        aria-label="Previous slide"
                    >
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 7L7 1" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => sliderRef.current?.slickGoTo(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === index
                                    ? 'w-8 bg-[#4B5563]'
                                    : 'w-2.5 bg-[#D1D5DB]'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="p-2 focus:outline-none"
                        aria-label="Next slide"
                    >
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L1 1" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
                <div className="mb-4">
                    <Slider {...desktopMainSettings} ref={(slider) => setNav1(slider)}>
                        {images.map((img, index) => (
                            <div key={index} className="outline-none">
                                <div className="w-full aspect-square">
                                    {renderImage(img, index)}
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="text-center mt-2 text-sm text-gray-500 font-['DM_Sans']">
                        Roll over image to zoom in
                    </div>
                </div>

                <div className="px-12 thumbnail-slider">
                    <Slider {...desktopThumbSettings} ref={(slider) => setNav2(slider)}>
                        {images.map((img, index) => (
                            <div key={index} className="px-2 outline-none">
                                <div className="thumb-wrapper p-1 rounded-[10px] border-2 border-transparent transition-all">
                                    <div className="w-full aspect-square">
                                        {renderImage(img, index, true)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
