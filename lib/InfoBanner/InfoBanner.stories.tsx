import type { Meta, StoryObj } from '@storybook/react';
import { InfoBanner } from './InfoBanner';

const meta: Meta<typeof InfoBanner> = {
  title: 'Components/InfoBanner',
  component: InfoBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InfoBanner>;

export const Default: Story = {
  args: {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'Contact Us',
  },
};
