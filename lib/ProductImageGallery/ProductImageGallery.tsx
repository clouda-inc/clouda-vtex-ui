import React, { useState, useRef, useEffect } from 'react';
import type { MouseEvent } from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface ProductImageGalleryProps {
  images: string[];
}

// Inline Chevron SVG Component
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 16 9" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path 
      d="M1.00001 1.00001L8.00001 7.22223L15 1.00001" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Custom Arrow Components
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute left-0 z-10 flex h-full w-6 items-center justify-center cursor-pointer hover:bg-black/5 transition-colors before:!content-none ${className}`}
      style={{ ...style, display: 'flex', background: 'transparent', width: '24px' }}
      onClick={onClick}
    >
      <div className="w-2.5 h-2 text-[#343843] rotate-90 flex items-center justify-center">
         <ChevronIcon />
      </div>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute right-0 z-10 flex h-full w-6 items-center justify-center cursor-pointer hover:bg-black/5 transition-colors before:!content-none ${className}`}
      style={{ ...style, display: 'flex', background: 'transparent', width: '24px' }} 
      onClick={onClick}
    >
      <div className="w-2.5 h-2 text-[#343843] -rotate-90 flex items-center justify-center">
         <ChevronIcon />
      </div>
    </div>
  );
};

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const slider1 = useRef<Slider>(null);
  const slider2 = useRef<Slider>(null);

  // Zoom State
  const [zoomPos, setZoomPos] = useState<{ x: number, y: number } | null>(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleMouseLeave = () => {
    setZoomPos(null);
  };

  const mainSettings: Settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav2 as Slider | undefined,
  };

  const thumbsSettings: Settings = {
    dots: false,
    arrows: true,
    infinite: images.length > 4, // Only infinite if enough images
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: nav1 as Slider | undefined,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
    variableWidth: false
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 w-full max-w-[500px]">
      {/* Main Image Slider */}
      <div className="border border-[#cccfd4] rounded-[4px] overflow-hidden relative z-0">
        <Slider ref={slider1} {...mainSettings}>
          {images.map((img, idx) => (
            <div 
                key={idx} 
                className="relative aspect-square w-full bg-white overflow-hidden cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img 
                    src={img} 
                    alt={`Product ${idx}`} 
                    className="w-full h-full object-contain pointer-events-none transition-transform duration-100 ease-out will-change-transform"
                    style={
                        zoomPos ? {
                            transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                            transform: 'scale(2.5)'
                        } : {
                            transformOrigin: 'center center',
                            transform: 'scale(1)'
                        }
                    }
                />
            </div>
          ))}
        </Slider>
      </div>

       {/* Text Hint */}
       <div className="text-center text-[#343843] text-sm font-normal font-['Proxima Nova'] leading-normal">
            Roll over image to zoom in
       </div>

      {/* Thumbnail Slider */}
      <div className="px-6 relative"> 
        <Slider ref={slider2} {...thumbsSettings} className="gap-2">
          {images.map((img, idx) => (
            <div key={idx} className="px-[5px]">
                 <div className="border border-[#cccfd4] rounded-[4px] aspect-square overflow-hidden cursor-pointer hover:border-[#3561a3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3561a3]">
                     <img 
                        src={img} 
                        alt={`Thumb ${idx}`} 
                        className="w-full h-full object-contain"
                    />
                 </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
