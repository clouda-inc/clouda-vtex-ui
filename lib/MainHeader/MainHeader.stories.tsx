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

export const Default: Story = {};

export const CustomNavigation: Story = {
  args: {
    navItems: [
      { label: 'Shop', hasDropdown: true },
      { label: 'Learn', href: '#' },
      { label: 'Support', hasDropdown: true },
    ],
    actions: [
      { label: 'Profile', iconSrc: '/assets/images/icon-user.svg', href: '#' },
      { label: 'Bag', iconSrc: '/assets/images/icon-cart.svg', href: '#' },
    ],
  },
};
