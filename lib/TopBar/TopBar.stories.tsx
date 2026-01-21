import type { Meta, StoryObj } from '@storybook/react';
import TopBar from './TopBar';

const meta = {
  title: 'Components/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    logos: [
      { src: '/assets/images/vidmar-logo.png', alt: 'Vidmar' },
      { src: '/assets/images/lista-logo.png', alt: 'Lista' },
    ],
    academyLink: { label: 'Custom Link', href: '#' },
    currentLocale: 'FR',
  },
};
