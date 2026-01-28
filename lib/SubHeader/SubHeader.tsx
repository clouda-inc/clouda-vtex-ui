export interface SubHeaderProps {
  // Logo
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;

  // Nav
  menuItems?: { label: string; href?: string; hasDropdown?: boolean }[];

  // Actions
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  primaryActionLabel?: string;
  onPrimaryActionClick?: () => void;

  // Styles
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
}

const SubHeader = ({
  logoSrc = '/assets/images/logoipsum-3.png',
  logoAlt = 'Brand Logo',
  logoHref = '#',
  menuItems = [
    { label: 'Products', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Resources', hasDropdown: true },
    { label: 'Company', href: '#' },
  ],
  secondaryActionLabel = 'Store Locator',
  secondaryActionHref = '#',
  primaryActionLabel = 'Contact Sales',
  onPrimaryActionClick,
  
  backgroundColor = '#f3f4f6', // gray-100
  textColor = '#1f2937', // gray-800
  iconColor = '#4b5563', // gray-600
}: SubHeaderProps) => {
  return (
    <div 
      className="flex w-full items-center justify-between px-[4.35%] py-3 font-sans transition-colors"
      style={{ backgroundColor, color: textColor }}
    >
      
      {/* Left: Brand Logo & Nav */}
      {/* Left: Brand Logo & Nav */}
      <div className="flex items-center gap-10">
        {logoSrc && (
          <a href={logoHref}>
             <img src={logoSrc} alt={logoAlt} className="h-6 object-contain" />
          </a>
        )}
        
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium h-full">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center gap-1 cursor-pointer relative group h-full">
              <div className="flex items-center gap-1 group-hover:opacity-75 transition-opacity py-3">
                {item.href ? (
                   <a href={item.href}>{item.label}</a>
                ) : (
                   <span>{item.label}</span>
                )}
                
                {item.hasDropdown && (
                  <svg 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-4 group-hover:rotate-180 transition-transform duration-200"
                    style={{ color: iconColor }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                )}
              </div>
              
              {item.hasDropdown && (
                <div className="absolute top-full left-0 pt-2 w-40 hidden group-hover:block z-50">
                  <div className="bg-white shadow-lg rounded-md py-2 text-black">
                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">Sub-option A</a>
                     <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">Sub-option B</a>
                  </div>
                </div>
              )}
            </div>
          ))}

        </nav>
      </div>

      {/* Right: CTA */}
      <div className="flex items-center gap-6 text-[15px]">
        <a 
          href={secondaryActionHref} 
          className="hover:underline"
          style={{ color: 'inherit' }}
        >
          {secondaryActionLabel}
        </a>
        
        <button 
          className="border border-current px-6 py-2 rounded-full uppercase font-medium text-sm hover:opacity-80 transition-opacity"
          style={{ borderColor: 'currentColor', color: 'inherit' }}
          onClick={onPrimaryActionClick}
        >
          {primaryActionLabel}
        </button>
      </div>

    </div>
  );
};

export default SubHeader;

