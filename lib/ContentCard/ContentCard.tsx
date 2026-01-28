import React from 'react';
import { Button } from '../Button/Button';

export type ContentCardVariant = 'Standard' | 'Blog' | 'Vertical' | 'Icon';

export interface ContentCardProps {
    /**
     * The variant of the card to render
     * @default 'Standard'
     */
    variant?: ContentCardVariant;
    /**
     * Main title of the card
     */
    title: string;
    /**
     * Description text
     */
    description: string;
    /**
     * Image source URL
     */
    imageSrc?: string;
    /**
     * Icon source URL or React Node (for Icon variant)
     */
    icon?: string | React.ReactNode;
    /**
     * Date string (optional)
     */
    date?: string;
    /**
     * Text for the action button
     */
    buttonText?: string;
    /**
     * Handler for button click
     */
    onButtonClick?: () => void;
    /**
     * Custom Block Class for styling overrides
     */
    blockClass?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({
    variant = 'Standard',
    title,
    description,
    imageSrc,
    icon,
    date,
    buttonText,
    onButtonClick,
    blockClass = '',
}) => {
    // Base container classes with fixed height for Icon variant
    const containerClasses = `bg-white p-6 rounded-lg shadow-sm ${variant === 'Icon' ? 'min-h-[320px] md:min-h-[380px] flex flex-col' : ''
        } ${blockClass}`;

    // Helper to format date if it looks like a timestamp or date string
    const formatDate = (dateStr: string) => {
        if (!dateStr) return '';
        // Check if it's a numeric timestamp
        const timestamp = Number(dateStr);
        if (!isNaN(timestamp) && timestamp > 100000000000) { // arbitrary threshold for ms
            return new Date(timestamp).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        }
        // Try parsing as date
        const d = new Date(dateStr);
        if (d.toString() !== 'Invalid Date') {
            return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        }
        return dateStr; // fallback
    };

    // Variant specific layouts
    const getLayoutClasses = () => {
        switch (variant) {
            case 'Standard':
                return 'flex flex-col md:flex-row gap-6';
            case 'Blog':
                return 'flex flex-col md:flex-row gap-6';
            case 'Vertical':
                return 'flex flex-col gap-6';
            case 'Icon':
                // Mobile: Image Left (Row), Content Right. Desktop: Image Right (Row Reverse), Content Left.
                return 'flex flex-row md:flex-row-reverse gap-4 md:gap-6';
            default:
                return 'flex flex-col md:flex-row gap-6';
        }
    };

    const renderImage = () => {
        if (!imageSrc) return null;

        // Image sizing per variant
        let imageClasses = 'bg-[#EEF1F4] overflow-hidden rounded-md';
        if (variant === 'Standard') {
            // Standard: Larger landscape on desktop
            imageClasses += ' w-full md:w-1/2 aspect-[343/240] md:aspect-[540/300]';
        } else if (variant === 'Blog') {
            // Blog: Square-ish on desktop
            imageClasses += ' w-full md:w-1/3 aspect-[343/240] md:aspect-square';
        } else if (variant === 'Vertical') {
            // Vertical: Full width
            imageClasses += ' w-full aspect-[343/240]';
        } else if (variant === 'Icon') {
            // Icon: Mobile side-by-side (w-1/3 or similar), Desktop fixed width
            imageClasses += ' w-1/3 md:w-5/12 aspect-[120/140] md:aspect-[343/240] md:h-auto object-cover self-start md:self-auto';
        }

        return (
            <div className={imageClasses}>
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            </div>
        );
    };

    const renderContent = () => {
        // Content width logic
        let contentWidthClass = 'w-full';
        if (variant === 'Standard') contentWidthClass = 'md:w-1/2';
        else if (variant === 'Blog') contentWidthClass = 'md:w-2/3';
        else if (variant === 'Icon') contentWidthClass = 'w-2/3 md:w-7/12'; // Remaining width for Icon variant

        return (
            <div className={`flex flex-col ${contentWidthClass}`}>

                {/* Icon Rendering for Icon Variant */}
                {variant === 'Icon' && icon && (
                    <div className="w-8 h-8 md:w-12 md:h-12 mb-4 text-[#2563EB]">
                        {typeof icon === 'string' ? (
                            <img src={icon} alt="" className="w-full h-full object-contain" />
                        ) : (
                            icon
                        )}
                    </div>
                )}

                {/* Top content wrapper to group title/desc */}
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 font-['DM_Sans']">
                        {title}
                    </h3>
                    <p className="text-sm md:text-base text-[#545F71] mb-6 leading-relaxed font-['DM_Sans']">
                        {description}
                    </p>
                </div>

                {/* Bottom content: Date & Button */}
                <div className="mt-auto flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                    {/* Date - Hidden for Blog, Vertical, and Icon variants */}
                    {date && variant !== 'Blog' && variant !== 'Vertical' && variant !== 'Icon' ? (
                        <div className="flex items-center gap-2 text-sm text-[#949494] w-full md:w-auto">
                            {/* Calendar Icon */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>{formatDate(date)}</span>
                        </div>
                    ) : (
                        variant !== 'Blog' && variant !== 'Vertical' && variant !== 'Icon' && <div /> /* Spacer if no date and not Blog/Vertical/Icon */
                    )}

                    {buttonText && (
                        <Button
                            variant="primary"
                            customColor="#4e46b4"
                            className={`${variant === 'Blog' || variant === 'Vertical' || variant === 'Icon' ? 'w-full' : 'w-full md:w-auto self-start md:self-end'}`}
                            onClick={onButtonClick}
                        >
                            {buttonText}
                        </Button>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className={containerClasses}>
            <div className={`${getLayoutClasses()} ${variant === 'Icon' ? 'flex-1' : ''}`}>
                {renderImage()}
                {renderContent()}
            </div>
        </div>
    );
};

export default ContentCard;
