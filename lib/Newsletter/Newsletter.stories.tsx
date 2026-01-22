import type { Meta, StoryObj } from '@storybook/react';
import { Newsletter } from './Newsletter';

const meta: Meta<typeof Newsletter> = {
  title: 'Components/Newsletter',
  component: Newsletter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Newsletter>;

export const Default: Story = {
  args: {
    title: 'Join Our Email List',
    description: 'Stay current on newsworthy trends, thought leadership, product releases, events, and more by signing up to receive our direct communications customized by industry.',
  },
};
