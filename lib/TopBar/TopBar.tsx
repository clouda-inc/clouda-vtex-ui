export interface TopBarProps {
  brandLogos?: { src: string; alt: string }[];
  utilityLinkLabel?: string;
  utilityLinkUrl?: string;
  locale?: string;
  
  // Styles
  backgroundColor?: string;
  textColor?: string;
}

const TopBar = ({ 
  brandLogos = [
    { src: '/assets/images/logoipsum-1.png', alt: 'Brand A' },
    { src: '/assets/images/logoipsum-3.png', alt: 'Brand B' },
  ],
  utilityLinkLabel = 'Documentation',
  utilityLinkUrl = '#',
  locale = 'EN',
  backgroundColor = '#f3f4f6', // gray-100
  textColor = '#343843',
}: TopBarProps) => {
  return (
    <div 
      className="flex w-full items-center justify-between px-[4.35%] py-2 text-sm font-sans transition-colors"
      style={{ backgroundColor, color: textColor }}
    >
      {/* Brand Logos */}
      <div className="flex items-center gap-6">
        {brandLogos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-4 object-contain" />
        ))}
      </div>

      {/* Utility Navigation */}
      <div className="flex items-center gap-6">
        <a href={utilityLinkUrl} className="hover:opacity-80 transition-opacity" style={{ color: 'inherit' }}>{utilityLinkLabel}</a>
          <div className="relative group flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity py-2" style={{ color: 'inherit' }}>
            <div className="flex items-center gap-2">
               {/* Replaced specific flag image with generic indicator if needed, or just text */}
               <span className="font-medium">{locale}</span>
               <svg 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 strokeWidth={1.5} 
                 stroke="currentColor" 
                 className="size-3 group-hover:rotate-180 transition-transform duration-200"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
               </svg>
            </div>

            <div className="absolute top-full right-0 pt-2 w-32 hidden group-hover:block z-50">
              <div className="bg-white shadow-lg rounded-md py-1 border border-gray-100 text-gray-800">
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
                  <span className="text-xs font-bold w-6">EN</span> English
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
                  <span className="text-xs font-bold w-6">ES</span> Español
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
                  <span className="text-xs font-bold w-6">FR</span> Français
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
                   <span className="text-xs font-bold w-6">DE</span> Deutsch
                </a>
              </div>
            </div>
          </div>
        </div>


    </div>
  );
};

export default TopBar;

