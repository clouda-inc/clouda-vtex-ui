import React from 'react';
import { Button } from '../Button/Button';
import { MenuList } from '../MenuList/MenuList';

interface FooterLink {
  label: string;
  href: string;
}

interface MainFooterProps {
  quickLinks: FooterLink[];
  aboutLinks: FooterLink[];
  contactLink?: string;
  academyLink?: string;
}

export const MainFooter: React.FC<MainFooterProps> = ({
  quickLinks,
  aboutLinks,
  contactLink = '#',
  academyLink = '#',
}) => {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-8 px-4 font-['Proxima_Nova']">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        
        {/* Column 1: Brand & Social */}
        <div className="flex flex-col gap-6 w-full md:w-1/4">
           {/* Logo Placeholders - using the ones downloaded */}
           <div className="flex items-center gap-2">
              <img src="/assets/images/smart-storage-logo-final.png" alt="Smart Storage Solutions" className="h-12" />
           </div>
           
           <p className="text-sm leading-6 text-gray-300">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           </p>

           <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                 <img src="/assets/images/footer/facebook.svg" alt="Facebook" className="w-5 h-5" />
              </a>
               <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                 <img src="/assets/images/footer/twitter.svg" alt="Twitter" className="w-5 h-5" />
              </a>
               <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                 <img src="/assets/images/footer/instagram.svg" alt="Instagram" className="w-5 h-5" />
              </a>
               <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                 <img src="/assets/images/footer/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
           </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-6 w-full md:w-1/6">
           <MenuList 
              title="Quick Links"
              items={[
                { href: '#', imageSrc: '/assets/images/lista-logo.png', imageAlt: 'Lista' },
                { href: '#', imageSrc: '/assets/images/vidmar-logo.png', imageAlt: 'Vidmar' },
                { href: '#', imageSrc: '/assets/images/cribmaster-logo.png', imageAlt: 'CribMaster' },
                ...quickLinks.map(link => ({ label: link.label, href: link.href }))
              ]}
              titleClassName="!text-white"
              itemClassName="!text-white hover:!text-[#FFDB0A]"
           />
        </div>

        {/* Column 3: About Us */}
        <div className="flex flex-col gap-6 w-full md:w-1/6">
            <MenuList 
              title="About Us"
              items={aboutLinks.map(link => ({ label: link.label, href: link.href }))}
              titleClassName="!text-white"
              itemClassName="!text-white hover:!text-[#FFDB0A]"
            />
        </div>

        {/* Column 4: Contact Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-1/4 items-start md:items-end">
            <a href={contactLink} className="w-full md:w-auto">
                <Button 
                    variant="primary" 
                    shape="pill"
                    className="!bg-[#FFDB0A] !text-black hover:!bg-[#eecb09] border-none font-bold px-8 py-3 h-auto w-full md:w-auto"
                >
                    Contact Us
                </Button>
            </a>
            <a href={academyLink} className="w-full md:w-auto">
                <Button 
                    variant="outline" 
                    shape="pill"
                    className="!border-white !text-white hover:!bg-white/10 font-bold px-8 py-3 h-auto w-full md:w-auto"
                >
                    CM Academy
                </Button>
            </a>
        </div>
      </div>

      <hr className="border-gray-800 my-8" />

      {/* Footer Bottom */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
         <p>©2023 Smart Storage Solutions.All Rights Reserved.</p>
         <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
            <a href="#" className="hover:text-white">Transparency in the Supply Chain ↗</a>
            <a href="#" className="hover:text-white">Vulnerability Disclosure Policy ↗</a>
             <a href="#" className="hover:text-white">Accessibility Statement ↗</a>
             <a href="#" className="hover:text-white">California Privacy ↗</a>
             <a href="#" className="hover:text-white">Sitemap</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white ml-4">
                 <span>🌐 English</span>
                 <span>^</span>
            </div>
         </div>
      </div>
    </footer>
  );
};
