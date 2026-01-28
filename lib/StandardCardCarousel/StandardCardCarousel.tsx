import React, { useState, useEffect, useRef } from 'react';
import ContentCard from '../ContentCard/ContentCard';
import type { ContentCardProps } from '../ContentCard/ContentCard';

export interface StandardCardCarouselProps {
    /**
     * Array of card data to display in the carousel
     */
    cards: ContentCardProps[];
    /**
     * Autoplay interval in milliseconds
     * @default 5000
     */
    autoPlayInterval?: number;
    /**
     * Custom block class for container
     */
    blockClass?: string;
}

export const StandardCardCarousel: React.FC<StandardCardCarouselProps> = ({
    cards,
    autoPlayInterval = 5000,
    blockClass = '',
}) => {
    // State
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Chunk cards for desktop (group of 4)
    const desktopChunkSize = 4;
    const desktopChunks = [];
    for (let i = 0; i < cards.length; i += desktopChunkSize) {
        desktopChunks.push(cards.slice(i, i + desktopChunkSize));
    }

    const totalSlides = desktopChunks.length;

    // Reset timer
    const resetTimer = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        }, autoPlayInterval);
    };

    useEffect(() => {
        if (totalSlides > 1) {
            resetTimer();
        }
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, totalSlides, autoPlayInterval]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        resetTimer();
    };

    if (!cards || cards.length === 0) return null;

    return (
        <div className={`w-full flex flex-col items-center gap-8 px-5 md:px-10 lg:px-20 ${blockClass}`}>

            {/* Carousel Container */}
            <div className="w-full lg:overflow-hidden relative">
                <style>{`
                    .standard-carousel-track {
                        transform: none;
                    }
                    @media (min-width: 1024px) {
                        .standard-carousel-track {
                            transform: translateX(-${currentIndex * 100}%);
                        }
                    }
                `}</style>
                <div
                    className="flex flex-col lg:flex-row transition-transform duration-500 ease-in-out w-full standard-carousel-track gap-6 lg:gap-0"
                >
                    {desktopChunks.map((chunk, slideIndex) => (
                        <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {chunk.map((card, cardIndex) => (
                                <div key={cardIndex} className="w-full">
                                    <ContentCard {...card} variant="Standard" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination controls - Bottom Center - Desktop Only */}
            {totalSlides > 1 && (
                <div className="hidden lg:flex justify-center items-center gap-2 mt-4 w-auto max-w-[200px]">
                    {desktopChunks.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${currentIndex === index
                                ? 'bg-gray-900' // Active: Dark
                                : 'bg-gray-200 hover:bg-gray-300' // Inactive: Light Gray
                                }`}
                            style={{ minWidth: '48px' }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default StandardCardCarousel;
