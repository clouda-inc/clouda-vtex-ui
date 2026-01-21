
import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const imgVidmar = "/assets/header/vidmar.png";
const imgLista = "/assets/header/lista.png";
const imgCribmaster = "/assets/header/cribmaster.png";
const imgMainLogo = "/assets/header/logo-main.svg";
const imgSearch = "/assets/header/search.svg";
const imgSignIn = "/assets/header/signin.svg";
const imgCart = "/assets/header/cart.svg";
const imgVidmarBlack = "/assets/header/vidmar-black.svg";
const imgHome = "/assets/header/home.png";
const imgCarrotRight = "/assets/header/carrot-right.svg";
const imgCarrotDown = "/assets/header/carrot-down.svg";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn("flex flex-col w-full font-['Proxima_Nova']", className)}
        {...props}
      >
        {/* Top Brand Bar */}
        <div className="flex h-[40px] items-center justify-between bg-[#eaeff8] px-[4.3%]">
          <div className="flex items-center gap-6">
            <img src={imgVidmar} alt="Vidmar" className="h-[14px]" />
            <img src={imgLista} alt="Lista" className="h-[14px]" />
            <img src={imgCribmaster} alt="CribMaster" className="h-[14px]" />
          </div>
          <div className="flex items-center gap-4 text-sm text-[#343843]">
            <span>CM Academy</span>
            <div className="flex items-center gap-1">
              <span className="flex items-center gap-1">
                 🇬🇧 EN
              </span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#343843"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex h-[80px] items-center justify-between bg-white px-[4.3%] shadow-sm z-10">
          <div className="flex items-center gap-10">
            <img src={imgMainLogo} alt="Smart Storage Solutions" className="h-[48px]" />
            <nav className="flex items-center gap-8">
              <button className="flex items-center gap-2 text-base text-black">
                Brands <img src={imgCarrotDown} alt="" className="w-3" />
              </button>
              <a href="#" className="text-base text-black">
                Industries
              </a>
              <button className="flex items-center gap-2 text-base text-black">
                About Us <img src={imgCarrotDown} alt="" className="w-3" />
              </button>
            </nav>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-base text-black">
              <img src={imgSearch} alt="Search" className="w-5 h-5" />
              Search
            </button>
            <button className="flex items-center gap-2 text-base text-black">
              <img src={imgSignIn} alt="Sign In" className="w-5 h-5" />
              Sign In
            </button>
            <button className="flex items-center gap-2 text-base text-black">
               <img src={imgCart} alt="Cart" className="w-5 h-5" />
              Cart
            </button>
          </div>
        </div>

        {/* Brand Bar (Yellow) */}
        <div className="flex h-[60px] items-center justify-between bg-[#ffdb0a] px-[4.3%]">
            <div className="flex items-center gap-8">
                <img src={imgVidmarBlack} alt="Vidmar" className="h-[24px]" />
                <nav className="flex items-center gap-6">
                    <button className="flex items-center gap-1 text-sm font-semibold text-[#343843]">
                        Products <img src={imgCarrotDown} alt="" className="w-3 opacity-50" />
                    </button>
                    <button className="flex items-center gap-1 text-sm font-semibold text-[#343843]">
                        Resources <img src={imgCarrotDown} alt="" className="w-3 opacity-50" />
                    </button>
                    <button className="flex items-center gap-1 text-sm font-semibold text-[#343843]">
                        Support <img src={imgCarrotDown} alt="" className="w-3 opacity-50" />
                    </button>
                     <a href="#" className="text-sm font-semibold text-[#343843]">
                        About Vidmar
                    </a>
                </nav>
            </div>
            <div className="flex items-center gap-6">
                <span className="text-sm font-semibold text-[#343843]">Locate your sales rep</span>
                <button className="rounded-full border border-black px-6 py-2 text-sm font-semibold uppercase tracking-wide text-black hover:bg-black/5 transition-colors">
                    Get a Quote
                </button>
            </div>
        </div>
        
        {/* Breadcrumbs */}
        <div className="flex h-[40px] items-center bg-[#343843] px-[4.3%] text-white text-sm">
            <div className="flex items-center gap-2 opacity-80">
                <img src={imgHome} alt="Home" className="w-4 h-4 invert brightness-0" />
                <img src={imgCarrotRight} alt="" className="w-2 opacity-50 invert brightness-0" />
                <span>Cabinets and Storage Systems</span>
                <img src={imgCarrotRight} alt="" className="w-2 opacity-50 invert brightness-0" />
                <span>Storage Cabinets</span>
                <img src={imgCarrotRight} alt="" className="w-2 opacity-50 invert brightness-0" />
                <span>Drawer Storage Cabinets</span>
            </div>
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";
