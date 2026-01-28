import type { Meta, StoryObj } from '@storybook/react';
import TopBar from './TopBar';

const meta = {
  title: 'Components/TopNavBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#1f2937', // gray-800
    textColor: '#f9fafb', // gray-50
    locale: 'DE',
    brandLogos: [
      { src: '/assets/images/logoipsum-2.png', alt: 'Brand A' },
      { src: '/assets/images/logoipsum-4.png', alt: 'Brand B' },
    ],
  },
};
