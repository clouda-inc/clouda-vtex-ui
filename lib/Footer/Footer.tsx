
import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const imgVidmar = "/assets/header/vidmar.png";
const imgLista = "/assets/header/lista.png";
const imgCribmaster = "/assets/header/cribmaster.png";
const imgMainLogo = "/assets/header/logo-main.svg";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn("flex flex-col w-full font-['Proxima_Nova']", className)}
        {...props}
      >
        {/* Top CTA Section */}
        <div className="flex w-full bg-white flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative bg-gray-200 h-[300px]">
                 {/* Placeholder for left image "Happy to discuss" */}
                 <img 
                    src="http://localhost:3845/assets/c7eaa4fafe6854c92fdb9ef4a161873506584d11.png" 
                    alt="Happy to discuss" 
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.style.backgroundColor = '#ccc';
                    }}
                 />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-black">Happy to discuss about your requirement</h2>
                <p className="text-gray-600 mb-8 max-w-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#ffdb0a] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e6c609] transition-colors">
                        Request a Demo
                    </button>
                    <button className="bg-[#ffdb0a] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e6c609] transition-colors">
                        Request a Free Site Visit
                    </button>
                </div>
            </div>
        </div>

        {/* Yellow Bar */}
        <div className="bg-[#ffdb0a] py-8 px-[4.3%] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
             <h3 className="text-xl font-semibold text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             </h3>
             <button className="border border-black text-black px-8 py-2 rounded-full font-semibold hover:bg-black/10 transition-colors uppercase text-sm whitespace-nowrap">
                Contact Us
             </button>
        </div>

        {/* Email Signup */}
        <div className="bg-white py-16 px-[4.3%] text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Join Our Email List</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Stay current on newsworthy trends, thought leadership, product releases, events, and more by signing up to receive our direct communications customized by industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto mb-6">
                <input 
                    type="text" 
                    placeholder="First Name" 
                    className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-500"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="flex justify-center sm:justify-end max-w-3xl mx-auto">
                 <button className="bg-[#ffdb0a] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e6c609] transition-colors uppercase text-sm w-full sm:w-auto">
                    Subscribe
                </button>
            </div>
            <p className="text-xs text-gray-500 mt-8">
                By submitting your information, you agree to our use of your data in accordance with our <a href="#" className="text-blue-600 hover:underline">Privacy Policy.</a>
            </p>
        </div>

        {/* Main Footer (Black) */}
        <div className="bg-black text-white pt-16 pb-8 px-[4.3%]">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                {/* Column 1: Logo & Social */}
                <div className="max-w-sm">
                    <img src={imgMainLogo} alt="Smart Storage Solutions" className="h-12 mb-6 brightness-0 invert" />
                    <p className="text-gray-400 mb-8 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                    <div className="flex flex-col gap-4">
                        <img src={imgLista} alt="Lista" className="h-4 brightness-0 invert" />
                        <img src={imgVidmar} alt="Vidmar" className="h-4 brightness-0 invert" />
                        <img src={imgCribmaster} alt="CribMaster" className="h-4 brightness-0 invert" />
                        <span className="text-gray-400 text-sm mt-2">Industries</span>
                    </div>
                </div>

                {/* Column 3: About Us */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">About Us</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white">Our Story</a></li>
                        <li><a href="#" className="hover:text-white">Work With Us</a></li>
                        <li><a href="#" className="hover:text-white">News and Events</a></li>
                        <li><a href="#" className="hover:text-white">Blogs</a></li>
                    </ul>
                </div>

                 {/* Column 4: Buttons */}
                 <div className="flex flex-col gap-4 w-full md:w-auto">
                    <button className="bg-[#ffdb0a] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e6c609] transition-colors w-full text-center">
                        Contact Us
                    </button>
                    <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors w-full text-center">
                        CM Academy
                    </button>
                 </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                <p className="text-center md:text-left">©2023 Smart Storage Solutions.All Rights Reserved.</p>
                <div className="flex gap-6">
                     <button className="flex items-center gap-1 hover:text-white">
                        🌐 English
                     </button>
                </div>
            </div>
             <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-gray-500 mt-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Cookie Settings</a>
                <a href="#" className="hover:text-white">Transparency in the Supply Chain</a>
                <a href="#" className="hover:text-white">Vulnerability Disclosure Policy</a>
                <a href="#" className="hover:text-white">Accessibility Statement</a>
                <a href="#" className="hover:text-white">California Privacy</a>
                <a href="#" className="hover:text-white">Sitemap</a>
            </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";
