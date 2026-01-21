export interface MainHeaderProps {
  brandLogo?: { src: string; alt: string; href: string };
  navItems?: { label: string; href?: string; hasDropdown?: boolean }[];
  actions?: { label: string; iconSrc: string; href: string }[];
}

const MainHeader = ({
  brandLogo = { 
    src: '/assets/images/smart-storage-logo-final.png', 
    alt: 'Smart Storage Solutions', 
    href: '/' 
  },

  navItems = [
    { label: 'Brands', hasDropdown: true },
    { label: 'Industries', href: '#' },
    { label: 'About Us', hasDropdown: true },
  ],
  actions = [
    { label: 'Search', iconSrc: '/assets/images/icon-search.svg', href: '#' },
    { label: 'Sign In', iconSrc: '/assets/images/icon-user.svg', href: '#' },
    { label: 'Cart', iconSrc: '/assets/images/icon-cart.svg', href: '#' },
  ]
}: MainHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between bg-white px-[4.35%] py-5 text-[#343843] border-b border-gray-100 font-sans">
      
      {/* Left: Logo & Nav */}
      <div className="flex items-center gap-12">
        <a href={brandLogo.href} className="shrink-0">
          <img src={brandLogo.src} alt={brandLogo.alt} className="h-12" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[16px]">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 cursor-pointer group relative hover:text-black transition-colors h-full">
              {item.href ? (
                <a href={item.href} className="flex items-center gap-2 py-4">
                   <span>{item.label}</span>
                   {item.hasDropdown && (
                    <img 
                      src="/assets/images/icon-chevron-down-v2.svg" 
                      alt="" 
                      className="size-4 group-hover:rotate-180 transition-transform duration-200" 
                    />
                   )}
                </a>
              ) : (
                <div className="flex items-center gap-2 py-4">
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <img 
                      src="/assets/images/icon-chevron-down-v2.svg" 
                      alt="" 
                      className="size-4 group-hover:rotate-180 transition-transform duration-200" 
                    />
                  )}
                </div>
              )}
              
              {item.hasDropdown && (
                <div className="absolute top-full left-0 pt-2 w-48 hidden group-hover:block z-50">
                  <div className="bg-white shadow-lg rounded-md py-2 border border-gray-100 text-[#343843] font-normal">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">Option 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">Option 2</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">Option 3</a>
                  </div>
                </div>
              )}
            </div>
          ))}

        </nav>
      </div>


      {/* Right: Actions */}
      <div className="flex items-center gap-8 text-[16px]">
        {actions.map((action, index) => (
          <button key={index} className="flex items-center gap-2 hover:text-black transition-colors group">
            <img src={action.iconSrc} alt={action.label} className="size-5 group-hover:scale-110 transition-transform" />
            <span>{action.label}</span>
          </button>
        ))}
      </div>

    </div>
  );
};

export default MainHeader;

