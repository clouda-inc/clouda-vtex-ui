import React from 'react';

export interface HeroBannerProps {
  heading: string;
  description: string;
  buttonLabel?: string;
  buttonOnClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  heading,
  description,
  buttonLabel,
  buttonOnClick,
  imageSrc,
  imageAlt = 'Hero banner image',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ 
        backgroundColor: '#EEF1F4', 
      }}
    >
      {/* Desktop: Background image covering entire component */}
      {imageSrc && (
        <div 
          className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label={imageAlt}
        />
      )}

      {/* Content Container */}
      <div className="flex flex-col lg:relative lg:z-10">
        {/* Content Section */}
        <div className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 lg:min-h-[500px]">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6" 
            style={{ color: '#000000' }}
          >
            {heading}
          </h1>
          <p 
            className="text-sm md:text-base leading-relaxed mb-6 lg:mb-8" 
            style={{ color: '#000000' }}
          >
            {description}
          </p>
          {buttonLabel && (
            <div>
              <button
                onClick={buttonOnClick}
                className="inline-flex items-center justify-center transition-colors duration-200 px-6 py-3 rounded-lg text-base font-medium"
                style={{
                  backgroundColor: '#545F71',
                  color: '#FFFFFF',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3d4552';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#545F71';
                }}
              >
                {buttonLabel}
              </button>
            </div>
          )}
        </div>

        {/* Mobile/Tablet: Image below content */}
        {imageSrc && (
          <div className="lg:hidden min-h-[250px] md:min-h-[350px]">
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
