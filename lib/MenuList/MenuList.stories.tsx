import type { Meta, StoryObj } from '@storybook/react';
import { MenuList } from './MenuList';

const meta: Meta<typeof MenuList> = {
  title: 'Components/MenuList',
  component: MenuList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuList>;

export const Default: Story = {
  args: {
    title: 'About Us',
    items: [
      { label: 'Our Story', href: '#' },
      { label: 'Work With Us', href: '#' },
      { label: 'News and Events', href: '#' },
    ],
    titleClassName: 'text-black',
    itemClassName: 'text-gray-600',
  },
};

export const WithImages: Story = {
  args: {
    title: 'Quick Links',
    items: [
       { href: '#', imageSrc: '/assets/images/footer/logo-lista.svg', imageAlt: 'Lista' },
       { href: '#', imageSrc: '/assets/images/footer/logo-vidmar.svg', imageAlt: 'Vidmar' },
       { label: 'Industries', href: '#' },
    ],
    titleClassName: 'text-black',
    itemClassName: 'text-gray-600',
  },
};

export const DarkMode: Story = {
  args: {
    title: 'About Us',
    items: [
      { label: 'Our Story', href: '#' },
      { label: 'Work With Us', href: '#' },
    ],
    titleClassName: 'text-white',
    itemClassName: 'text-gray-300',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="bg-black p-8">
        <Story />
      </div>
    ),
  ],
};
