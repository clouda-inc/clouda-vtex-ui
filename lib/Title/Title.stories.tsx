import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    alignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    titleColor: { control: 'text' },
    subtitleColor: { control: 'text' },
    buttonColor: { control: 'color' },
    actionLabel: { control: 'text' },
    actionVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    title: 'Drawer Storage Cabinets',
    subtitle: 'High quality storage solutions for your workspace',
    actionLabel: 'View All Products',
    actionVariant: 'primary',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Drawer Storage Cabinets',
  },
};

export const WithSubtitleOnly: Story = {
  args: {
    title: 'Drawer Storage Cabinets',
    subtitle: 'Available in multiple finishes and sizes',
  },
};

export const WithButtonOnly: Story = {
  args: {
    title: 'Drawer Storage Cabinets',
    actionLabel: 'Shop Now',
    actionVariant: 'secondary',
  },
};

export const Centered: Story = {
  args: {
    title: 'Featured Collection',
    subtitle: 'Explore our best sellers',
    alignment: 'center',
    actionLabel: 'View Collection',
    actionVariant: 'outline',
  },
};

export const RightAligned: Story = {
  args: {
    title: 'Newsletter Signup',
    subtitle: 'Stay updated with our latest news',
    alignment: 'right',
    actionLabel: 'Subscribe',
    actionVariant: 'primary',
  },
};

export const CustomColors: Story = {
  args: {
    title: 'Summer Sale',
    subtitle: 'Up to 50% off on selected items',
    titleColor: 'text-red-600',
    subtitleColor: 'text-red-400',
    buttonColor: '#D32F2F', // Custom hex color
    actionLabel: 'Browse Sale',
    actionVariant: 'primary',
  },
};
