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

export const Default: Story = {};

export const CustomLinks: Story = {
  args: {
    menuItems: [
        { label: 'New Arrivals', href: '#' },
        { label: 'Sale', href: '#' },
    ],
    salesRepLink: { label: 'Find a Store', href: '#' },
    quoteAction: { label: 'Order Now' },
  },
};
