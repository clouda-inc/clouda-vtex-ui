import React from 'react';
import { Button } from '../Button/Button';

export interface HomeHeroBannerProps {
    /**
     * Title text
     */
    title?: string;
    /**
     * Description text
     */
    description?: string;
    /**
     * Call to action button text
     */
    ctaText?: string;
    /**
     * Click handler for CTA button
     */
    onCtaClick?: () => void;
    /**
     * Secondary Call to action button text (optional)
     */
    secondaryCtaText?: string;
    /**
     * Click handler for Secondary CTA button
     */
    onSecondaryCtaClick?: () => void;
    /**
     * Custom block class for styling overrides
     */
    blockClass?: string;
    /**
     * Background image URL
     */
    backgroundImage?: string;
}

export const HomeHeroBanner: React.FC<HomeHeroBannerProps> = ({
    title = "Lorem ipsum ut mi mi",
    description = "Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.",
    ctaText = "Button text",
    onCtaClick,
    secondaryCtaText,
    onSecondaryCtaClick,
    blockClass = "",
    backgroundImage,
}) => {
    return (
        <div
            className={`relative w-full overflow-hidden flex flex-col md:block min-h-0 md:min-h-[680px] ${blockClass}`}
            data-testid="home-hero-banner"
        >
            {/* 
        Mobile Layout: 
        1. Image Block with padding/margins (user req: "bit of a border not going to full width")
        2. Content Block on "normal bg" (white/transparent)
        
        Desktop Layout: 
        - Absolute background image covering all.
        - Content overlay.
      */}

            {/* ----------- MOBILE IMAGE SECTION ----------- */}
            <div className="md:hidden w-full bg-white p-4">
                {backgroundImage ? (
                    <img
                        src={backgroundImage}
                        alt="Hero Banner"
                        className="w-full aspect-[4/3] object-cover rounded-lg" // Added rounding/aspect ratio as inferred from "bit of a border"
                    />
                ) : (
                    <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                        <span className="sr-only">Image Placeholder</span>
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></svg>
                    </div>
                )}
            </div>

            {/* ----------- DESKTOP BACKGROUND IMAGE ----------- */}
            {backgroundImage && (
                <div
                    className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            )}
            {!backgroundImage && (
                <div className="hidden md:block absolute inset-0 w-full h-full bg-[#E9E8E4] pointer-events-none" />
            )}

            {/* ----------- CONTENT CONTAINER ----------- */}
            <div className="relative z-10 w-full bg-white md:bg-transparent px-6 pb-8 md:px-12 lg:px-24 md:py-0 md:h-full md:absolute md:inset-0 md:flex md:items-center max-w-none md:max-w-[1440px] mx-auto">
                <div className="max-w-[800px]">
                    <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold text-black font-['DM_Sans'] leading-[1.1] md:leading-[1.05] tracking-[-0.02em] mb-4 md:mb-6">
                        {title}
                    </h1>

                    <p className="text-base font-normal text-black font-['DM_Sans'] leading-[1.5] max-w-[600px] mb-8">
                        {description}
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button
                            variant="primary"
                            customColor="#4E46B4"
                            onClick={onCtaClick}
                            className="w-full sm:w-auto px-6 py-3 h-[48px] rounded-[8px]"
                        >
                            {ctaText}
                        </Button>

                        {secondaryCtaText && (
                            <Button
                                variant="outline"
                                onClick={onSecondaryCtaClick}
                                className="w-full sm:w-auto px-6 py-3 h-[48px] rounded-[8px] border-black text-black hover:bg-black/5"
                            >
                                {secondaryCtaText}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeroBanner;
