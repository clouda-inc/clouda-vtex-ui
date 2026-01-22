
import type { Meta, StoryObj } from '@storybook/react';
import { RelatedProducts } from './RelatedProducts';

const meta: Meta<typeof RelatedProducts> = {
  title: 'Layouts/RelatedProducts',
  component: RelatedProducts,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof RelatedProducts>;

export const Default: Story = {
  args: {
    products: []
  }
};

export const WithData: Story = {
  args: {
    title: "Related Products",
    description: "Check out these similar items",
    products: [{
      "title": "Product 1",
      "price": "$100.00",
      "imageUrl": "https://picsum.photos/1000/1000"
    }, {
      "title": "Product 2",
      "price": "$120.00",
      "imageUrl": "https://picsum.photos/1000/1000"
    }, {
      "title": "Product 3",
      "price": "$90.00",
      "imageUrl": "https://picsum.photos/1000/1000"
    }, {
      "title": "Product 4",
      "price": "$150.00",
      "imageUrl": "https://picsum.photos/1000/1000"
    }, {
      "title": "Product 5",
      "price": "$200.00",
      "imageUrl": "https://picsum.photos/1000/1000"
    }]
  }
};
