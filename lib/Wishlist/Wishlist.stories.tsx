import type { Meta, StoryObj } from '@storybook/react';
import { Wishlist } from './Wishlist';

const meta: Meta<typeof Wishlist> = {
  title: 'Components/Wishlist',
  component: Wishlist,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Wishlist>;

export const Default: Story = {};
