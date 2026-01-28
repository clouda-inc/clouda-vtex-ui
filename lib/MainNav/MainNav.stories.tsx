import type { Meta, StoryObj } from '@storybook/react';
import MainNav from './MainNav';

const meta = {
  title: 'Components/MainNav',
  component: MainNav,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomTheme: Story = {
  args: {
    topBarProps: {
      brandLogos: [
        { src: '/assets/images/logoipsum-2.png', alt: 'Brand 1' },
        { src: '/assets/images/logoipsum-4.png', alt: 'Brand 2' },
      ],
      utilityLinkLabel: 'concierge@luxury.com',
      utilityLinkUrl: '#',
      backgroundColor: '#09090b', // zinc-950
      textColor: '#a1a1aa', // zinc-400
    },
    mainHeaderProps: {
      "logoIcon": "/assets/images/logoipsum-2.png",
      "logoBrandName": "",
      "logoColor": "#ffffff",

      "navItems": [{
        "label": "COLLECTIONS",
        "href": "#",
        "hasDropdown": true
      }, {
        "label": "DESIGNERS",
        "href": "#",
        "hasDropdown": true
      }, {
        "label": "ATELIER",
        "href": "#",
        "hasDropdown": false
      }, {
        "label": "MAISON",
        "href": "#"
      }],

      "backgroundColor": "#000000",
      "textColor": "#ffffff",
      "navColor": "#d4d4d8",
      "borderColor": "#27272a"
    },
    subHeaderProps: {
      logoSrc: '', 
      menuItems: [
        { label: 'New This Week', href: '#' },
        { label: 'Best Sellers', href: '#' },
        { label: 'Exclusives', href: '#' },
      ],
      secondaryActionLabel: 'Book Appointment',
      primaryActionLabel: 'Private Client',
      backgroundColor: '#000000', // Pure Black for seamless luxury
      textColor: '#a1a1aa', // zinc-400
      iconColor: '#71717a' // zinc-500
    },
    breadcrumbProps: {
      "items": [{
        "label": "Home",
        "href": "/"
      }, {
        "label": "Collections",
        "href": "/collections"
      }, {
        "label": "Summer 2024",
        "href": "/collections/summer-2024"
      }],

      "backgroundColor": "#E5E4E2",
      "textColor": "#36454F",
      "separatorColor": "#3f3f46"
    }
  }
};
