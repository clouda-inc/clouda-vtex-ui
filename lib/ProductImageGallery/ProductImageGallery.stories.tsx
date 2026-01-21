import type { Meta, StoryObj } from '@storybook/react';
import { ProductImageGallery } from './ProductImageGallery';

const meta: Meta<typeof ProductImageGallery> = {
  title: 'Components/ProductImageGallery',
  component: ProductImageGallery,
  tags: ['autodocs'],
  argTypes: {
    images: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof ProductImageGallery>;

const SAMPLE_IMAGES = [
  'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export const Default: Story = {
  args: {
    images: SAMPLE_IMAGES,
  },
};

export const SingleImage: Story = {
  args: {
    images: [SAMPLE_IMAGES[0]],
  },
};

export const FewImages: Story = {
  args: {
    images: SAMPLE_IMAGES.slice(0, 3),
  },
};
