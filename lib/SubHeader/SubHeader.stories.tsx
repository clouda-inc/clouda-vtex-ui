import type { Meta, StoryObj } from '@storybook/react';
import SubHeader from './SubHeader';

const meta = {
  title: 'Components/SubHeader',
  component: SubHeader,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SubHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoSrc: "/assets/images/logoipsum-3.png",
    logoAlt: "Sample Logo",
    logoHref: "#"
  }
};

export const CustomLinks: Story = {
  args: {
    menuItems: [
        { label: 'New Arrivals', href: '#' },
        { label: 'Sale', href: '#' },
    ],
    secondaryActionLabel: 'Store Locator',
    secondaryActionHref: '#',
    primaryActionLabel: 'Order Now',
    logoSrc: "/assets/images/logoipsum-1.png",
    logoAlt: "Sample Logo"
  },
};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#1f2937', // gray-800
    textColor: '#f9fafb', // gray-50
    iconColor: '#e5e7eb', // gray-200
    
    logoSrc: "/assets/images/logoipsum-2.png",
    logoAlt: 'Dark Mode Logo',
  },
};
