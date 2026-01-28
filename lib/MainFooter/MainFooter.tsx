// MainFooter.tsx
import React from 'react';
import { Button } from '../Button/Button';
import { MenuList } from '../MenuList/MenuList';

export interface FooterMenu {
  title: string;
  items: { label?: string; href: string; imageSrc?: string; imageAlt?: string }[];
}

export interface FooterAction {
  label: string;
  href: string;
  variant?: 'primary' | 'outline';
}

export interface MainFooterProps {
  // Brand
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  description?: string;

  // content
  menus?: FooterMenu[];
  socialLinks?: { icon: React.ReactNode; href: string }[];
  actions?: FooterAction[];

  // Bottom Area
  copyrightText?: string;
  legalLinks?: { label: string; href: string }[];
  
  // Styles
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  borderColor?: string;
  iconBackgroundColor?: string;
  iconColor?: string;
  
  // Button Styles
  primaryButtonBackgroundColor?: string;
  primaryButtonTextColor?: string;
}

export const MainFooter: React.FC<MainFooterProps> = ({
  // Brand Defaults
  logoSrc = '/assets/images/logoipsum-1.png',
  logoAlt = 'Company Logo',
  logoHref = '/',
  description = 'Providing quality solutions for your business needs since 2023.',

  // Content Defaults
  menus = [
    {
      title: 'Partners',
      items: [
        { href: '#', imageSrc: '/assets/images/logoipsum-1.png', imageAlt: 'Partner A' },
        { href: '#', imageSrc: '/assets/images/logoipsum-3.png', imageAlt: 'Partner B' },
        { label: 'Partner Industry', href: '#' },
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Our Organization', href: '#' },
        { label: 'Careers & Opportunities', href: '#' },
        { label: 'News & Press Releases', href: '#' },
        { label: 'Contact Support Team', href: '#' },
      ]
    },
    {
       title: 'Resources',
       items: [
         { label: 'Documentation & Guides', href: '#' },
         { label: 'Customer Success Stories', href: '#' },
         { label: 'Privacy & Security Center', href: '#' },
       ]
    }
  ],
  socialLinks = [
    { 
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      href: '#' 
    },
    { 
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ), 
      href: '#' 
    },
    { 
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      href: '#' 
    },
  ],
  actions = [
    { label: 'Contact Us', href: '#', variant: 'primary' },
    { label: 'Documentation', href: '#', variant: 'outline' },
  ],

  // Bottom Defaults
  copyrightText = `©${new Date().getFullYear()} Your Company. All Rights Reserved.`,
  legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Sitemap', href: '#' },
  ],

  // Style Defaults - Light Theme Default
  backgroundColor = '#ffffff', // white
  textColor = '#374151', // gray-700
  borderColor = '#e5e7eb', // gray-200
  iconBackgroundColor = '#f3f4f6', // gray-100
  iconColor = '#4b5563', // gray-600
  
  primaryButtonBackgroundColor = '#87CEEB', // sky-300
  primaryButtonTextColor = '#000000',
}) => {
  return (
    <footer 
      className="w-full pt-16 pb-8 px-4 font-sans border-t"
      style={{ backgroundColor, color: textColor, borderColor }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-12">
        
        {/* Column 1: Brand & Social */}
        <div className="flex flex-col gap-6 w-full md:w-1/4">
           {/* Logo */}
           <a href={logoHref} className="block">
              <img src={logoSrc} alt={logoAlt} className="h-10 object-contain" />
           </a>
           
           {description && (
             <p className="text-sm leading-6 opacity-80" style={{ color: 'inherit' }}>
               {description}
             </p>
           )}

           <div className="flex gap-4 mt-2">
              {socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.href} 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ backgroundColor: iconBackgroundColor, color: iconColor }}
                >
                   {link.icon}
                </a>
              ))}
           </div>
        </div>

        {/* Dynamic Menus */}
        {menus.map((menu, i) => (
           <div key={i} className="flex flex-col gap-6 w-full md:w-1/6">
              <MenuList 
                title={menu.title}
                items={menu.items}
                titleClassName="!text-current font-semibold"
                itemClassName="hover:!text-yellow-500 opacity-80 hover:opacity-100 transition-opacity"
              />
           </div>
        ))}

        {/* Column 4: Actions */}
        <div className="flex flex-col w-full md:w-1/4 items-start md:items-end">
            <div className="flex flex-col gap-4 w-full md:w-auto">
              {actions.map((action, i) => (
                <a key={i} href={action.href} className="w-full">
                    <Button 
                        variant={action.variant || 'primary'}
                        className={`font-bold px-8 py-3 h-auto w-full rounded-full ${
                          action.variant === 'primary' 
                            ? 'border-none transition-opacity hover:opacity-80' 
                            : '!bg-transparent !border-current !text-current hover:!bg-white/10'
                        }`}
                        style={
                          action.variant === 'primary' 
                            ? { backgroundColor: primaryButtonBackgroundColor, color: primaryButtonTextColor }
                            : undefined
                        }
                    >
                        {action.label}
                    </Button>
                </a>
              ))}
            </div>
        </div>
      </div>

      <hr className="my-8 opacity-20" style={{ borderColor: 'currentColor' }} />

      {/* Footer Bottom */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
         <p>{copyrightText}</p>
         <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link, i) => (
               <a key={i} href={link.href} className="hover:underline">{link.label}</a>
            ))}
            <div className="flex items-center gap-2 cursor-pointer hover:underline ml-4">
                 <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                   <circle cx="12" cy="12" r="10" />
                   <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                 </svg>
                 <span>English</span>
            </div>
         </div>
      </div>
    </footer>
  );
};
