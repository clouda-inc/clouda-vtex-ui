import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isHome?: boolean;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  backgroundColor?: string;
  textColor?: string;
  separatorColor?: string;
}

const Breadcrumb = ({
  items = [
    { label: 'Home', href: '/', isHome: true },
    { label: 'Cabinets and Storage Systems', href: '#' },
    { label: 'Storage Cabinets', href: '#' },
    { label: 'Drawer Storage Cabinets', href: '#' },
  ],
  backgroundColor = '#343843',
  textColor = '#ffffff',
  separatorColor = '#ffffff',
}: BreadcrumbProps) => {
  return (
    <div 
      className="flex w-full items-center px-[4.35%] h-[40px] text-[14px] font-sans leading-[20px] transition-colors"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="flex items-center gap-[15px]">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div 
              className={`flex items-center gap-1 transition-colors duration-200 ${
                index === items.length - 1 
                  ? 'cursor-default' 
                  : 'hover:opacity-100 opacity-80'
              }`}
            >
              <a href={item.href} className="flex items-center leading-none" style={{ color: 'inherit' }}>
                {index === 0 ? (
                   <svg 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     strokeWidth={1.5} 
                     stroke="currentColor" 
                     className="w-[16px] h-[17.78px]"
                     style={{ color: 'inherit' }}
                   >
                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                   </svg>
                ) : (
                   <span>{item.label}</span>
                )}
              </a>
            </div>
            
            {index < items.length - 1 && (
               <div className="flex items-center justify-center w-[10px]">
                   <svg 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     strokeWidth={1.5} 
                     stroke="currentColor" 
                     className="h-[10px] w-auto opacity-100"
                     style={{ color: separatorColor }}
                   >
                     <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                   </svg>
               </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


export default Breadcrumb;
