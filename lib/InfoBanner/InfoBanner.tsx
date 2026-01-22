import React from 'react';
import { Button } from '../Button/Button';

interface InfoBannerProps {
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const InfoBanner: React.FC<InfoBannerProps> = ({
  text,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="w-full bg-[#FFDB0A] py-8 px-4 md:px-16 flex justify-center items-center">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="font-['Proxima_Nova'] font-semibold text-[30px] leading-[38px] text-black">
                {text}
            </h2>
             <Button 
                variant="outline"
                className="!rounded-full !border-black !text-black hover:!bg-black/10 px-8 py-2 h-auto"
                onClick={onButtonClick}
            >
                {buttonText}
            </Button>
        </div>
    </div>
  );
};
