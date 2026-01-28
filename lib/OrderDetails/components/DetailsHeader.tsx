import React from 'react';
import { Button } from '../../Button/Button';

// Inline SVG Icon for Export
const ExportIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3.33334V13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 8.33334L10 13.3333L15 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.8333 16.6667H4.16666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface DetailsHeaderProps {
  onReorderAll?: () => void;
  onExport?: () => void;
  primaryColor?: string;
}

export const DetailsHeader: React.FC<DetailsHeaderProps> = ({
  onReorderAll,
  onExport,
  primaryColor = '#564FCC',
}) => {
  return (
    <div className="w-full font-['DM_Sans']">
      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden gap-[16px]">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[24px] font-bold leading-[32px] text-black tracking-[-0.5px]">
            Order Details
          </h1>
          <Button 
            variant="outline" 
            showIcon={true} 
            icon={<ExportIcon />} 
            onClick={onExport}
            className="w-[40px] h-[40px] p-0 border-[#E3E4E6] text-[#341F1A] flex items-center justify-center min-w-0"
          />
        </div>
        <Button 
          variant="primary" 
          onClick={onReorderAll}
          className="w-full hover:opacity-90 transition-opacity"
          style={{ backgroundColor: primaryColor }}
          customColor={primaryColor}
        >
          Reorder All
        </Button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row justify-between items-center w-full">
        <h1 className="text-[32px] font-bold leading-[40px] text-black tracking-[-0.5px]">
          Order Details
        </h1>
        <div className="flex gap-[12px]">
          <Button 
            variant="primary" 
            onClick={onReorderAll}
            className="hover:opacity-90 transition-opacity"
            style={{ backgroundColor: primaryColor }}
            customColor={primaryColor}
          >
            Reorder All
          </Button>
          <Button 
            variant="outline" 
            showIcon={true} 
            icon={<ExportIcon />} 
            onClick={onExport}
            className="border-[#341F1A] text-[#341F1A] hover:bg-gray-50 bg-transparent"
          >
            Export
          </Button>
        </div>
      </div>
    </div>
  );
};
