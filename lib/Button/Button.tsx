import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  customColor?: string;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  showIcon = false,
  icon,
  customColor,
  rounded = false,
  style: userStyle,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm gap-2',
    md: 'h-10 px-4 py-2 gap-2',
    lg: 'h-12 px-6 text-lg gap-3',
  };

  const roundedClass = rounded ? 'rounded-full' : 'rounded-md';

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    roundedClass,
    className,
  ].filter(Boolean).join(' ');

  const computedStyle: React.CSSProperties = {};
  if (variant === 'primary' && customColor) {
    computedStyle.backgroundColor = customColor;
  }

  const finalStyle = userStyle ? { ...computedStyle, ...userStyle } : computedStyle;

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      style={finalStyle}
      {...props}
    >
      {showIcon && icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

export { Button };
export default Button;
