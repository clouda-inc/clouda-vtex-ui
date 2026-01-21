import type { Meta, StoryObj } from '@storybook/react';
import MainNav from './MainNav';

const meta = {
  title: 'Layouts/MainNav',
  component: MainNav,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
