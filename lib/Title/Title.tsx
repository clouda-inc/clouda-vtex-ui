import React from 'react';
import { Button } from '../Button/Button';

export interface TitleProps {
  /**
   * The main title text
   */
  title: string;
  /**
   * Optional subtitle text
   */
  subtitle?: string;
  /**
   * Label for the action button
   */
  actionLabel?: string;
  /**
   * Click handler for the action button
   */
  onActionClick?: () => void;
  /**
   * Variant for the action button
   * @default 'primary'
   */
  actionVariant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * Text alignment
   * @default 'left'
   */
  alignment?: 'left' | 'center' | 'right';
  /**
   * Custom CSS class for the title text color
   * @default 'text-black'
   */
  titleColor?: string;
  /**
   * Custom CSS class for the subtitle text color
   * @default 'text-gray-600'
   */
  subtitleColor?: string;
  /**
   * Custom CSS hex color for the button background
   */
  buttonColor?: string;
  /**
   * Additional CSS classes for the wrapper
   */
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  title,
  subtitle,
  actionLabel,
  onActionClick,
  actionVariant = 'primary',
  alignment = 'left',
  titleColor = 'text-black',
  subtitleColor = 'text-gray-600',
  buttonColor,
  className = '',
}) => {
  // Adjust flex layout based on alignment
  let wrapperClasses = 'flex flex-col gap-4';
  
  if (alignment === 'left') {
    // Modified: removed justify-between to keep button closer to text
    wrapperClasses += ' md:flex-row md:items-center md:justify-start md:gap-20'; 
  } else if (alignment === 'center') {
    wrapperClasses += ' items-center justify-center';
  } else if (alignment === 'right') {
      wrapperClasses += ' items-end justify-end';
  }

  return (
    <div className={`${wrapperClasses} ${className}`}>
      <div className={`flex flex-col ${alignment === 'center' ? 'items-center' : alignment === 'right' ? 'text-right items-end' : 'text-left items-start'}`}>
        <h2 className={`text-2xl font-bold font-['DM_Sans'] leading-8 ${titleColor}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-1 font-['DM_Sans'] ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </div>

      {actionLabel && (
        <div className={alignment === 'left' ? 'w-full md:w-auto flex md:block' : ''}>
           <Button
            variant={actionVariant}
            onClick={onActionClick}
            customColor={buttonColor}
            className={alignment === 'left' ? 'w-full md:w-auto' : ''}
          >
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Title;
