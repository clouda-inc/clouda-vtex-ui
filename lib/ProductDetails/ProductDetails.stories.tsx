
import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetails } from './ProductDetails';

const meta = {
  title: 'Components/ProductDetails',
  component: ProductDetails,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProductDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
