import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
    title: 'Components/ProductCard',
    component: ProductCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onQuoteClick: { action: 'clicked' },
        onQuantityChange: { action: 'quantity changed' },
    },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
    args: {
        title: 'Lorem ipsum tincidunt in',
        description: 'Lorem ipsum tincidunt in',
        initialQuantity: 2,
    },
};

export const WithImage: Story = {
    args: {
        title: 'Professional Camera',
        description: 'High quality DSLR camera',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        initialQuantity: 1,
    },
};
