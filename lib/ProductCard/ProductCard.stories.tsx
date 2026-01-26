import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['summary', 'compact'],
    },
    buttonColor: { control: 'color' },
    quantitySelectorColor: { control: 'color' },
    buttonText: { control: 'text' },
    productLink: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

const placeholderImage = 'https://placehold.co/300x300?text=Product+Image';

export const Summary: Story = {
  args: {
    variant: 'summary',
    title: 'Lorem ipsum tincidunt in',
    image: placeholderImage,
    description: 'Lorem ipsum tincidunt in <br/> <ul><li>Bullet 1</li><li>Bullet 2</li></ul>',
    className: 'w-[250px]',
    productLink: '#',
  },
};

export const Compact: Story = {
  args: {
    variant: 'compact',
    title: 'Lorem ipsum tincidunt in',
    image: placeholderImage,
    className: 'w-[250px]',
  },
};

export const Customized: Story = {
  args: {
    variant: 'compact',
    title: 'Custom Product',
    image: placeholderImage,
    className: 'w-[250px]',
    buttonColor: '#ff5722',
    quantitySelectorColor: '#ff5722',
    buttonText: 'Buy Now',
    buttonClassName: 'hover:opacity-90',
  },
};

export const Detailed: Story = {
  args: {
    variant: 'detailed',
    title: 'Detailed Product',
    image: placeholderImage,
    description: "This is a <b>detailed</b> product description. <br/> <ul><li>Feature 1</li><li>Feature 2</li></ul>",
    className: 'w-[250px]',
    onAddToWishlist: () => console.log('Added to Wishlist'),
    onAddToCart: () => console.log('Added to Cart'),
    onGetQuote: () => console.log('Get Quote Clicked'),
    onCompare: () => console.log('Compare Clicked'),
    productLink: '#',
    buttonColor: "#4E46B4"
  },
};
