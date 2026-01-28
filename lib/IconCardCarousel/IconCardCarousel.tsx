import React, { useState, useEffect, useRef } from 'react';
import ContentCard from '../ContentCard/ContentCard';
import type { ContentCardProps } from '../ContentCard/ContentCard';

export interface IconCardCarouselProps {
    /**
     * Array of card data to display in the carousel
     */
    cards: ContentCardProps[];
    /**
     * Autoplay interval in milliseconds
     * @default 3000
     */
    autoPlayInterval?: number;
    /**
     * Custom block class for container
     */
    blockClass?: string;
}

export const IconCardCarousel: React.FC<IconCardCarouselProps> = ({
    cards,
    autoPlayInterval = 3000,
    blockClass = '',
}) => {
    // Early return for empty cards - no carousel needed
    if (!cards || cards.length === 0) {
        return null;
    }

    // Single card - just render the card without carousel
    if (cards.length === 1) {
        return (
            <div className={`w-full ${blockClass}`}>
                <div className="w-full px-2">
                    <ContentCard {...cards[0]} variant="Icon" />
                </div>
            </div>
        );
    }

    // Only use hooks if we have multiple cards
    return <IconCardCarouselMultiple cards={cards} autoPlayInterval={autoPlayInterval} blockClass={blockClass} />;
};

const IconCardCarouselMultiple: React.FC<IconCardCarouselProps> = ({
    cards,
    autoPlayInterval = 3000,
    blockClass = '',
}) => {
    // On mobile: 1 card visible, slide through all cards (0 to cards.length - 1)
    // On desktop: 2 cards visible, slide until last 2 cards are showing (0 to cards.length - 2)
    // For pagination bars, we use desktop logic (cards.length - 1) to avoid showing too many bars
    const desktopCardsVisible = 2;
    const maxDesktopSlides = Math.max(1, cards.length - desktopCardsVisible + 1);

    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Reset timer on interaction or slide change
    const resetTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex: number) => {
                // Loop back to 0 after reaching the last slide
                return prevIndex === maxDesktopSlides - 1 ? 0 : prevIndex + 1;
            });
        }, autoPlayInterval);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, autoPlayInterval, maxDesktopSlides]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        resetTimer();
    };

    return (
        <div className={`w-full px-5 md:px-10 lg:px-20 ${blockClass}`}>
            {/* Carousel Track */}
            <style>{`
                .carousel-track-${blockClass} {
                    transform: none;
                }
                @media (min-width: 768px) {
                    .carousel-track-${blockClass} {
                        transform: translateX(calc(-50% * ${currentIndex}));
                        transition: transform 500ms ease-in-out;
                    }
                }
            `}</style>

            {/* Content wrapper - this is the positioning context */}
            <div className="w-full md:overflow-hidden relative">
                {/* Pagination Strips - Desktop Only - now inside content area */}
                {maxDesktopSlides > 1 && (
                    <div className="hidden md:flex absolute top-0 right-2 z-10 gap-2 w-auto max-w-[200px]">
                        {Array.from({ length: maxDesktopSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${currentIndex === index
                                    ? 'bg-gray-900' // Active: Dark
                                    : 'bg-gray-200 hover:bg-gray-300' // Inactive: Light Gray
                                    }`}
                                style={{ minWidth: '48px' }} // Ensure visibility
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                <div className={`flex flex-col md:flex-row w-full carousel-track-${blockClass} md:pt-12 pb-8 gap-4 md:gap-0`}>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/2 md:flex-shrink-0 px-2 box-border"
                        >
                            <ContentCard
                                {...card}
                                variant="Icon" // Enforce Icon variant as requested
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default IconCardCarousel;
