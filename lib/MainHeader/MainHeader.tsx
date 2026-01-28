export interface MainHeaderProps {
  // Logo Props
  logoIcon?: React.ReactNode | string;
  logoBrandName?: string;
  logoHref?: string;

  // Navigation & Actions
  navItems?: { label: string; href?: string; hasDropdown?: boolean }[];
  actions?: { label: string; icon: React.ReactNode; href: string }[];

  // Style Props
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  navColor?: string;
  // logoColor?: string; // Optional, can derive from navColor or separate
  logoColor?: string;
}

const MainHeader = ({
  // Logo Defaults
  logoIcon = "/assets/images/logoipsum-1.png",
  logoBrandName = '',
  logoHref = '/',

  // Nav Defaults
  navItems = [
    { label: 'Products', hasDropdown: true },
    { label: 'Solutions', href: '#' },
    { label: 'Resources', hasDropdown: true },
    { label: 'Pricing', href: '#' },
  ],
  actions = [
    { 
      label: 'Search', 
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 group-hover:scale-110 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      ), 
      href: '#' 
    },
    { 
      label: 'Sign In', 
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 group-hover:scale-110 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ), 
      href: '#' 
    },
    { 
      label: 'Cart', 
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 group-hover:scale-110 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      ), 
      href: '#' 
    },
  ],

  // Style Defaults
  backgroundColor = 'white',
  textColor = '#343843',
  borderColor = '#f3f4f6',
  navColor, // Optional override
  logoColor = '#0C3875',
}: MainHeaderProps) => {
  return (
    <div 
      className="flex w-full items-center justify-between px-[4.35%] py-5 border-b font-sans transition-colors"
      style={{
        backgroundColor,
        color: textColor,
        borderColor,
      }}
    >
      
      {/* Left: Logo & Nav */}
      <div className="flex items-center gap-12">
        {logoHref ? (
          <a 
            href={logoHref} 
            className="shrink-0 flex items-center gap-2 transition-colors"
            style={{ color: logoColor }}
          >
             {typeof logoIcon === 'string' ? (
               <img src={logoIcon} alt={logoBrandName || "Logo"} className="h-8 w-auto object-contain" />
             ) : (
               logoIcon
             )}
             {logoBrandName && <span className="font-bold text-xl tracking-tight">{logoBrandName}</span>}
          </a>
        ) : (
          <div 
            className="shrink-0 flex items-center gap-2 transition-colors"
            style={{ color: logoColor }}
          >
             {typeof logoIcon === 'string' ? (
               <img src={logoIcon} alt={logoBrandName || "Logo"} className="h-8 w-auto object-contain" />
             ) : (
               logoIcon
             )}
             {logoBrandName && <span className="font-bold text-xl tracking-tight">{logoBrandName}</span>}
          </div>
        )}

        <nav className="hidden md:flex items-center gap-8 text-[16px]">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 cursor-pointer group relative transition-colors h-full"
              style={{ color: navColor }}
            >
              {item.href ? (
                <a 
                  href={item.href} 
                  className="flex items-center gap-2 py-4 hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                >
                   <span>{item.label}</span>
                   {item.hasDropdown && (
                    <svg 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="size-4 group-hover:rotate-180 transition-transform duration-200"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                   )}
                </a>
              ) : (
                <div className="flex items-center gap-2 py-4">
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <svg 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="size-4 group-hover:rotate-180 transition-transform duration-200"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
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
          <button 
            key={index} 
            className="flex items-center gap-2 transition-colors hover:opacity-80"
            style={{ color: navColor }}
          >
            {action.icon}
            <span>{action.label}</span>
          </button>
        ))}
      </div>

    </div>
  );
};

export default MainHeader;

