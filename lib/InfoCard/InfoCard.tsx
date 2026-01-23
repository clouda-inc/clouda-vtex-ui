import React from 'react';
import { Button } from '../Button/Button';

export interface InfoCardProps {
  /**
   * The main title text
   */
  title: string;
  /**
   * Description text
   */
  description: string;
  /**
   * URL for the image
   */
  imageSrc?: string;
  /**
   * Label for the primary button
   */
  primaryButtonLabel?: string;
  /**
   * Click handler for the primary button
   */
  onPrimaryClick?: () => void;
  /**
   * Label for the secondary button
   */
  secondaryButtonLabel?: string;
  /**
   * Click handler for the secondary button
   */
  onSecondaryClick?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  imageSrc,
  primaryButtonLabel,
  onPrimaryClick,
  secondaryButtonLabel,
  onSecondaryClick,
  className = '',
}) => {
  return (
    <div className={`p-4 xl:p-0 font-['DM_Sans',sans-serif] ${className}`}>
      {/* Mobile Title - Visible only on mobile, active as first element visually */}
      <h2 className="block xl:hidden text-3xl font-bold text-[#545F71] mb-6 leading-[40px] tracking-[-0.5px]">
        {title}
      </h2>

      <div className="flex flex-col xl:flex-row xl:items-center xl:gap-20">
        {/* Image Section */}
        <div className="w-full xl:w-1/2 mb-6 xl:mb-0">
          <div className="bg-[#EEF1F4] aspect-[343/240] xl:aspect-[640/400] w-full flex items-center justify-center relative overflow-hidden border border-[#545F71]">
            {imageSrc ? (
              <img src={imageSrc} alt="" className="w-full h-full object-cover" />
            ) : (
                /* Placeholder Cross Line */
               <div className="absolute inset-0">
                 <svg className="w-full h-full text-[#545F71]" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="1" />
                    <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="1" />
                 </svg>
               </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full xl:w-1/2 flex flex-col justify-center">
            {/* Desktop Title - distinct from mobile title */}
            <h2 className="hidden xl:block text-3xl font-bold text-[#545F71] mb-4 leading-[40px] tracking-[-0.5px]">
                {title}
            </h2>

            <p className="text-base font-normal text-black mb-6 leading-6">
                {description}
            </p>

            <div className="flex flex-col xl:flex-row gap-4">
                {primaryButtonLabel && (
                    <div className="w-full xl:w-auto">
                        <Button
                            variant="primary"
                            onClick={onPrimaryClick}
                            className="w-full xl:w-auto px-6"
                        >
                            {primaryButtonLabel}
                        </Button>
                    </div>
                )}
                 {secondaryButtonLabel && (
                    <div className="w-full xl:w-auto">
                        <Button
                            variant="outline"
                            onClick={onSecondaryClick}
                            className="w-full xl:w-auto px-6"
                        >
                            {secondaryButtonLabel}
                        </Button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
