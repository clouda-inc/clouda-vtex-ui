import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isHome?: boolean;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb = ({
  items = [
    { label: 'Home', href: '/', isHome: true },
    { label: 'Cabinets and Storage Systems', href: '#' },
    { label: 'Storage Cabinets', href: '#' },
    { label: 'Drawer Storage Cabinets', href: '#' },
  ]
}: BreadcrumbProps) => {
  return (
    <div className="flex w-full items-center bg-[#343843] px-[4.35%] h-[40px] text-white text-[14px] font-sans leading-[20px]">
      <div className="flex items-center gap-[15px]">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className={`flex items-center gap-1 transition-colors duration-200 ${
              index === items.length - 1 
                ? 'text-white cursor-default' 
                : 'text-white/80 hover:text-white'
            }`}>
              <a href={item.href} className="flex items-center leading-none">
                {index === 0 ? (
                   <img 
                     src="/assets/images/icon-home-final.svg" 
                     alt="Home" 
                     className="w-[16px] h-[17.78px]" 
                     style={{ filter: 'brightness(0) invert(1)' }} 
                   />
                ) : (
                   <span>{item.label}</span>
                )}
              </a>
            </div>
            
            {index < items.length - 1 && (
               <div className="flex items-center justify-center w-[10px]">
                   <img 
                     src="/assets/images/icon-chevron-right.svg" 
                     alt="" 
                     className="h-[10px] w-auto opacity-100" 
                     style={{ filter: 'brightness(0) invert(1)' }} 
                   />
               </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


export default Breadcrumb;
