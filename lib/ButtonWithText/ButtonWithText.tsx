import React from 'react';
import { Button } from '../Button/Button';
import type { ButtonProps } from '../Button/Button';

export interface ButtonWithTextProps {
  text: string;
  buttonText: string;
  buttonProps?: Partial<ButtonProps>;
  className?: string;
  onButtonClick?: () => void;
}

const ButtonWithText: React.FC<ButtonWithTextProps> = ({
  text,
  buttonText,
  buttonProps = {},
  className = '',
  onButtonClick
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className} font-['Proxima_Nova',_sans-serif]`}>
      <span className="text-[16px] text-gray-900 leading-[24px]">
        {text}
      </span>
      <Button 
        {...buttonProps}
        onClick={onButtonClick || buttonProps.onClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ButtonWithText;
