import type { Meta, StoryObj } from '@storybook/react';
import { ProductResult } from './ProductResult';

const meta: Meta<typeof ProductResult> = {
  title: 'Components/ProductResult',
  component: ProductResult,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ProductResult>;

const sampleProduct = {
  variant: 'summary' as const,
  title: 'Lorem ipsum tincidunt in',
  image: 'https://picsum.photos/800/800', // Placeholder as actual assets are local/figma specific
  description: 'Lorem ipsum tincidunt in',
  features: [
    'Lorem ipsum tincidunt in',
    'Lorem ipsum tincidunt in',
  ],
  onReadMore: () => alert('Read more clicked'),
  productLink: '#',
};

// Create an array of 8 products (2 rows on desktop)
const sampleProducts = Array(8).fill(sampleProduct).map((p, i) => ({
  ...p,
  title: `${p.title} ${i + 1}`, // Differentiate titles slightly
}));

export const Default: Story = {
  args: {
    products: sampleProducts,
    onLoadMore: () => alert('Load More Clicked'),
    loadMoreButtonColor: "#4E46B4"
  },
};

export const Empty: Story = {
  args: {
    products: [],
    onLoadMore: () => alert('Load More Clicked'),
  },
};

export const CustomButton: Story = {
  args: {
    products: sampleProducts.slice(0, 4), // Show fewer items for this example
    onLoadMore: () => alert('Custom Load More Clicked'),
    loadMoreText: 'Show More Products',
    loadMoreButtonColor: "#ff0000",
    loadMoreButtonTextColor: "#ffffff",
  },
};

export const CustomEmptyMessage: Story = {
  args: {
    products: [],
    emptyMessage: 'No items found matching your criteria.',
  },
};
