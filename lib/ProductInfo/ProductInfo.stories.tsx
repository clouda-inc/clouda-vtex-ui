
import type { Meta, StoryObj } from '@storybook/react';
import { ProductInfo } from './ProductInfo';

const meta: Meta<typeof ProductInfo> = {
  title: 'Components/ProductInfo',
  component: ProductInfo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductInfo>;

export const Default: Story = {
  args: {
    title: 'EW1350 Heavy-Duty Drawer Cabinets',
    description: 'Customizable, heavy-duty drawers with full-height sidewalls and drawer backs for max cubic storage capacity.',
    onReadMore: () => alert('Read More clicked'),
  },
};
