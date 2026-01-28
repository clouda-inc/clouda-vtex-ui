import type { Meta, StoryObj } from '@storybook/react';
import { MainFooter } from './MainFooter';

const meta: Meta<typeof MainFooter> = {
  title: 'Components/MainFooter',
  component: MainFooter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainFooter>;

export const Default: Story = {};

export const DarkTheme: Story = {
  args: {
    backgroundColor: '#111827', // gray-900
    textColor: '#f3f4f6', // gray-100
    borderColor: '#374151', // gray-700
    iconBackgroundColor: '#1f2937', // gray-800
    iconColor: '#e5e7eb', // gray-200
    logoSrc: '/assets/images/logoipsum-2.png',
    
    menus: [
      {
        title: 'Partners',
        items: [
          { href: '#', imageSrc: '/assets/images/logoipsum-2.png', imageAlt: 'Partner A' },
          { href: '#', imageSrc: '/assets/images/logoipsum-4.png', imageAlt: 'Partner B' },
          { label: 'Partner Industry', href: '#' },
        ]
      },
      {
        title: 'Platform Overview',
        items: [
          { label: 'Enterprise Features', href: '#' },
          { label: 'Integrations & API', href: '#' },
          { label: 'Security & Compliance', href: '#' },
          { label: 'System Status', href: '#' },
        ]
      }
    ],
    
    actions: [
      { label: 'Start Free Trial', href: '#', variant: 'primary' },
      { label: 'Contact Sales', href: '#', variant: 'outline' },
    ]
  },
};

export const CustomSocials: Story = {
  args: {
    backgroundColor: '#fffbeb', // amber-50
    textColor: '#78350f', // amber-900
    borderColor: '#fde68a', // amber-200
    iconBackgroundColor: '#fef3c7', // amber-100
    iconColor: '#d97706', // amber-600
    primaryButtonBackgroundColor: '#d97706', // amber-600
    primaryButtonTextColor: '#ffffff',
    logoSrc: '/assets/images/logoipsum-3.png',

    menus: [
      {
        title: 'Platform',
        items: [
          { label: 'Platform Overview', href: '#' },
          { label: 'Feature Comparison', href: '#' },
          { label: 'Enterprise Integrations', href: '#' },
          { label: 'Data Security & Compliance', href: '#' },
          { label: 'Success Stories', href: '#' },
          { label: 'Request a Demo', href: '#' },
        ]
      },
      {
         title: 'Resources',
         items: [
           { label: 'Developer Documentation', href: '#' },
           { label: 'API Reference', href: '#' },
           { label: 'Community Forum', href: '#' },
           { label: 'Blog & Insights', href: '#' },
           { label: 'Webinars', href: '#' },
           { label: 'Help Center', href: '#' },
         ]
      },
      {
        title: 'Company',
        items: [
          { label: 'About Us', href: '#' },
          { label: 'Careers - We\'re Hiring!', href: '#' },
          { label: 'Leadership', href: '#' },
          { label: 'Press & Media', href: '#' },
          { label: 'Contact Support', href: '#' },
        ]
      }
    ],

    socialLinks: [
      {
        icon: (
           <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
             <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
           </svg>
        ),
        href: '#'
      },
      {
        icon: (
           <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
           </svg>
        ),
        href: '#'
      }
    ],

    actions: [
      { label: 'Subscribe Now', href: '#', variant: 'primary' },
    ]
  }
};
