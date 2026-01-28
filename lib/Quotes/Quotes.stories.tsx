import type { Meta, StoryObj } from '@storybook/react';
import { Quotes } from './Quotes';

const meta: Meta<typeof Quotes> = {
  title: 'Components/Quotes',
  component: Quotes,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
      primaryColor: { control: 'color' },
      secondaryColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Quotes>;

export const Default: Story = {};

export const CustomColors: Story = {
    args: {
        primaryColor: '#059669', // Emerald 600
        secondaryColor: '#DC2626', // Red 600
    }
};
