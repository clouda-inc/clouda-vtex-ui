
import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    loading: false,
    title: "Default Product",
    price: "$99.99",
    imageUrl: "https://picsum.photos/300/300"
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const CustomSize: Story = {
  args: {
    loading: false,
    title: "Large Product",
    price: "$250.00",
    imageUrl: "https://picsum.photos/400/600",
    width: "300px",
    height: "450px"
  },
};
