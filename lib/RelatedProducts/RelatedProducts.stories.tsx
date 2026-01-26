import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RelatedProducts from './RelatedProducts';
import type { RelatedProductItem } from './RelatedProducts';

const meta: Meta<typeof RelatedProducts> = {
    title: 'Components/RelatedProducts',
    component: RelatedProducts,
    tags: ['autodocs'],
    argTypes: {
        products: { control: 'object' },
        title: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof RelatedProducts>;

// Mock Data Helper
// Mock Data Helper
const productImages = [
    'https://storecomponents.vtexassets.com/arquivos/ids/155491/Frame-3.jpg?v=636793763988630000',
    'https://storecomponents.vtexassets.com/arquivos/ids/155492/Frame-3.jpg?v=636793763988630000', // Hypothesized ID
    'https://storecomponents.vtexassets.com/arquivos/ids/155493/Frame-3.jpg?v=636793763988630000',
    'https://storecomponents.vtexassets.com/arquivos/ids/155481/Frame-1.jpg?v=636793763988630000',
    'https://storecomponents.vtexassets.com/arquivos/ids/155472/Frame-2.jpg?v=636793763988630000',
    'https://storecomponents.vtexassets.com/arquivos/ids/155444/Frame-1.jpg?v=636793763988630000'
];

const createMockProduct = (id: number): RelatedProductItem => ({
    variant: 'compact',
    title: `Product ${id}`,
    image: productImages[(id - 1) % productImages.length] || productImages[0],
    buttonText: 'Get a Quote',
    attributes: [
        'Lorem ipsum tincidunt in',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
        'Incididunt ut labore',
        'Et dolore magna aliqua'
    ],
    onGetQuote: () => console.log(`Quote for Product ${id}`),
    onQuantityChange: (q) => console.log(`Qty ${q} for Product ${id}`),
});

const mockProducts = Array(8).fill(null).map((_, i) => createMockProduct(i + 1));

export const Default: Story = {
    args: {
        title: 'Related Products',
        products: mockProducts,
    },
};

export const FewerProducts: Story = {
    args: {
        title: 'You Might Also Like',
        products: mockProducts.slice(0, 3), // Less than slidesToShow
    },
};

export const NoTitle: Story = {
    args: {
        products: mockProducts,
    },
};

export const CustomAttributes: Story = {
    args: {
        title: 'Comparison',
        products: mockProducts.map((p, i) => ({
            ...p,
            attributes: i % 2 === 0
                ? ['Feature A', 'Feature B']
                : ['Spec X', 'Spec Y', 'Spec Z', 'Spec W']
        })),
    }
};
