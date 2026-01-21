export interface Logo {
  src: string;
  alt: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TopBarProps {
  logos?: Logo[];
  academyLink?: NavLink;
  currentLocale?: string;
}

const TopBar = ({ 
  logos = [
    { src: '/assets/images/vidmar-logo.png', alt: 'Vidmar' },
    { src: '/assets/images/lista-logo.png', alt: 'Lista' },
    { src: '/assets/images/cribmaster-logo.png', alt: 'Cribmaster' },
  ],
  academyLink = { label: 'CM Academy', href: '#' },
  currentLocale = 'EN'
}: TopBarProps) => {
  return (
    <div className="flex w-full items-center justify-between bg-[#EAEFF8] px-[4.35%] py-2 text-sm text-[#343843] font-sans">
      {/* Brand Logos */}
      <div className="flex items-center gap-6">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-3 object-contain" />
        ))}
      </div>

      {/* Utility Navigation */}
      <div className="flex items-center gap-6">
        <a href={academyLink.href} className="hover:text-black transition-colors">{academyLink.label}</a>
          <div className="relative group flex items-center gap-2 cursor-pointer hover:text-black transition-colors py-2">
            <div className="flex items-center gap-2">
               <img src="/assets/images/flag-uk-final.png" alt="UK" className="h-4 w-5 object-cover rounded-sm border border-gray-200" />
               <span className="font-medium">{currentLocale}</span>
               <img src="/assets/images/icon-chevron-down-v2.svg" alt="" className="size-3 group-hover:rotate-180 transition-transform duration-200" />
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

