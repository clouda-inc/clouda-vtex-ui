import React from 'react';
import { Button } from '../Button/Button';
import { ProductInfo } from '../ProductInfo/ProductInfo';

interface CTABannerProps {
  imageSrc?: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  imageSrc = 'https://picsum.photos/1000/800',
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt="Consultation" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start">
        <ProductInfo 
          title={title}
          description={description}
          alignment="left"
        />
        
        <div className="flex gap-4 mt-8">
            <Button 
                variant="primary" 
                shape="pill"
                className="!bg-[#FFDB0A] !text-black hover:!bg-[#eecb09] border-none font-bold px-8"
                onClick={onPrimaryClick}
            >
                {primaryButtonText}
            </Button>
            <Button 
                variant="primary" 
                shape="pill"
                className="!bg-[#FFDB0A] !text-black hover:!bg-[#eecb09] border-none font-bold px-8"
                onClick={onSecondaryClick}
            >
                {secondaryButtonText}
            </Button>
        </div>
      </div>
    </div>
  );
};
