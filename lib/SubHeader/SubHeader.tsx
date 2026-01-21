export interface SubHeaderProps {
  brandLogo?: { src: string; alt: string; href: string };
  menuItems?: { label: string; href?: string; hasDropdown?: boolean }[];
  salesRepLink?: { label: string; href: string };
  quoteAction?: { label: string; onClick?: () => void };
}

const SubHeader = ({
  brandLogo = { 
    src: '/assets/images/vidmar-logo.png', 
    alt: 'Vidmar', 
    href: '#' 
  },
  menuItems = [
    { label: 'Products', hasDropdown: true },
    { label: 'Resources', hasDropdown: true },
    { label: 'Support', hasDropdown: true },
    { label: 'About Vidmar', href: '#' },
  ],
  salesRepLink = { label: 'Locate your sales rep', href: '#' },
  quoteAction = { label: 'Get a Quote' }
}: SubHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between bg-[#FFD100] px-[4.35%] py-3 text-[#343843] font-sans">
      
      {/* Left: Brand Logo & Nav */}
      <div className="flex items-center gap-10">
        <img src={brandLogo.src} alt={brandLogo.alt} className="h-6 object-contain" />
        
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
                  <img 
                    src="/assets/images/icon-chevron-down-v2.svg" 
                    alt="" 
                    className="size-4 group-hover:rotate-180 transition-transform duration-200" 
                  />
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
        <a href={salesRepLink.href} className="hover:underline">{salesRepLink.label}</a>
        
        <button 
          className="border border-black px-6 py-2 rounded-full uppercase font-medium text-sm hover:bg-black hover:text-[#FFD100] transition-colors"
          onClick={quoteAction.onClick}
        >
          {quoteAction.label}
        </button>
      </div>

    </div>
  );
};

export default SubHeader;

