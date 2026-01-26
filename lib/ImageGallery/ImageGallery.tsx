
import React from 'react';
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

    const handleImageError = (index: number) => {
        setImageErrors(prev => ({ ...prev, [index]: true }));
    };

    // Mobile Settings
    const mobileSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        customPaging: () => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#D9D9D9",
                }}
                className="slick-dot-custom"
            />
        )
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
                }
                .thumbnail-slider .slick-next {
                    right: -40px !important;
                }
                
                /* Mobile: Ensure slider renders properly */
                @media (max-width: 768px) {
                    .slick-slider {
                        width: 100%;
                    }
                    .slick-list {
                        width: 100%;
                    }
                    .slick-track {
                        display: flex;
                    }
                    .slick-slide {
                        float: none;
                    }
                    .slick-slide > div {
                        width: 100%;
                    }
                }
            `}</style>

            {/* Mobile View */}
            <div className="block md:hidden" style={{ width: '100%' }}>
                <Slider {...mobileSettings}>
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
