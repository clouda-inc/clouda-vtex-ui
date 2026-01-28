import type { Meta, StoryObj } from '@storybook/react';
import MainHeader from './MainHeader';

const meta = {
  title: 'Components/MainHeader',
  component: MainHeader,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoBrandName: ""
  }
};

export const CustomLogoIconOnly: Story = {
  args: {
    logoIcon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="size-8 text-blue-600">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
      </svg>
    ),
    // logoBrandName omitted
    logoHref: '#',
    navItems: [
      { label: 'Products', hasDropdown: true },
      { label: 'Solutions', href: '#' },
      { label: 'Developers', href: '#' },
    ],
  },
};

export const ImageLogo: Story = {
  args: {
    logoIcon: "https://cdn.clouda.io/Clouda_logo.svg",

    // logoBrandName omitted
    logoHref: "#",

    navItems: [
      { label: 'Platform', hasDropdown: true },
      { label: 'Solutions', href: '#' },
      { label: 'Developers', href: '#' },
      { label: 'Pricing', href: '#' },
    ],

    logoBrandName: ""
  },
};

export const NoLinkLogo: Story = {
  args: {
    logoIcon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="size-8 text-green-600">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
      </svg>
    ),
    logoBrandName: 'Static Brand',
    // logoHref omitted
    navItems: [
      { label: 'Overview', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
};

export const CustomNavigation: Story = {
  args: {
    navItems: [
      { label: 'Shop', hasDropdown: true },
      { label: 'Learn', href: '#' },
      { label: 'Support', hasDropdown: true },
    ],

    actions: [
      { 
        label: 'Profile', 
        icon: (
           <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 group-hover:scale-110 transition-transform">
             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
           </svg>
        ), 
        href: '#' 
      },
      { 
        label: 'Bag', 
        icon: (
           <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 group-hover:scale-110 transition-transform">
             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
           </svg>
        ), 
        href: '#' 
      },
    ],

    logoBrandName: ""
  },
};

export const DarkTheme: Story = {
  args: {
    backgroundColor: '#1f2937', // gray-800
    textColor: '#f9fafb', // gray-50
    borderColor: '#374151', // gray-700
    navColor: '#e5e7eb', // gray-200
    logoColor: '#ffffff',
    
    logoIcon: "/assets/images/logoipsum-2.png",
    logoBrandName: "",
    logoHref: '#',
  },
};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#312e81', // indigo-900
    textColor: '#e0e7ff', // indigo-100
    borderColor: '#4338ca', // indigo-700
    navColor: '#c7d2fe', // indigo-200
    logoColor: '#ffffff',

    logoIcon: "/assets/images/logoipsum-4.png",
    logoBrandName: "",
    logoHref: '#',
  },
};
