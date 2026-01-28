import React from 'react';
import { Button } from '../Button/Button';
import placeholderImage from './assets/feature-image.svg';

export interface FeatureProps {
    /**
     * Header text appearing above the main title (Eyebrow)
     */
    eyebrow?: string;
    /**
     * Main title of the feature section
     */
    title: string;
    /**
     * Description text
     */
    description: string;
    /**
     * Text to display on the button
     */
    buttonText?: string;
    /**
     * Callback when button is clicked
     */
    onButtonClick?: () => void;
    /**
     * URL for the feature image
     */
    imageSrc?: string;
    /**
     * Block class for custom styling extensibility
     */
    blockClass?: string;
}

export const Feature: React.FC<FeatureProps> = ({
    eyebrow = 'Lorem ipsum ut mi mi',
    title = 'Lorem ipsum ut mi mi',
    description = 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    buttonText = 'Button text',
    onButtonClick,
    imageSrc = placeholderImage,
    blockClass = '',
}) => {
    return (
        <div className={`w-full max-w-[1440px] mx-auto bg-white px-5 py-4 md:px-10 md:py-14 lg:px-20 ${blockClass}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Mobile: Eyebrow/Title first. Desktop: Image first (Order handled by grid placement if needed, or structured here)
            Figma Mobile: Eyebrow/Title -> Image -> Desc -> Button
            Figma Desktop: Image (Left) -> Content (Right)
            
            We can achieve this with a precise DOM order + md:order classes, or 2 separate columns for desktop.
            Given the split on Mobile (Text-Image-Text), a single container flow is tricky with Order.
            However, we can group the content for Desktop and "contents" display for Mobile?
            CSS Grid is best.
        */}

                {/* Header Group (Eyebrow + Title) */}
                <div className="flex flex-col gap-2 md:col-start-2 md:row-start-1">
                    {eyebrow && (
                        <span className="font-['DM_Sans'] text-base md:text-lg text-gray-900">
                            {eyebrow}
                        </span>
                    )}
                    <h2 className="font-['DM_Sans'] text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        {title}
                    </h2>
                </div>

                {/* Image */}
                <div className="w-full h-auto aspect-[3/2] md:col-start-1 md:row-span-2 md:row-start-1">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover rounded-none md:rounded-lg"
                    />
                </div>

                {/* Body Group (Desc + Button) */}
                <div className="flex flex-col gap-6 md:col-start-2 md:row-start-2">
                    <p className="font-['DM_Sans'] text-base text-gray-600 leading-relaxed">
                        {description}
                    </p>
                    <div>
                        <Button
                            variant="primary"
                            customColor="#4e46b4"
                            onClick={onButtonClick}
                            className="!rounded-md"
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Feature;
