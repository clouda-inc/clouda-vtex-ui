import type { Meta, StoryObj } from '@storybook/react';
import { MainFooter } from './MainFooter';

const meta: Meta<typeof MainFooter> = {
  title: 'Components/MainFooter',
  component: MainFooter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainFooter>;

export const Default: Story = {
  args: {
    quickLinks: [
      { label: 'Industries', href: '#' },
    ],
    aboutLinks: [
      { label: 'Our Story', href: '#' },
      { label: 'Work With Us', href: '#' },
      { label: 'News and Events', href: '#' },
      { label: 'Blogs', href: '#' },
    ],
  },
};
