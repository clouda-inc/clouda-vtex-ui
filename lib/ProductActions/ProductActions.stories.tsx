import type { Meta, StoryObj } from '@storybook/react';
import ProductActions from './ProductActions';

const meta: Meta<typeof ProductActions> = {
  title: 'Layouts/ProductActions',
  component: ProductActions,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductActions>;

export const Default: Story = {
  args: {
    onGetPrice: () => alert('Get Price Clicked'),
    onAddToCart: () => alert('Add to Cart Clicked'),
    onAddToWishlist: () => alert('Wishlist Clicked'),
    onGetQuote: () => alert('Get Quote Clicked'),
  }
};
