import type { Meta, StoryObj } from '@storybook/react';
import ButtonWithText from './ButtonWithText';

const meta: Meta<typeof ButtonWithText> = {
  title: 'Components/ButtonWithText',
  component: ButtonWithText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonWithText>;

export const Default: Story = {
  args: {
    text: 'Looking for customised products? Get a quote from our experts.',
    buttonText: 'Get a Quote',
    buttonProps: {
      variant: 'custom',
      shape: 'pill',
      className: 'bg-[#FFDB0A] text-black hover:bg-[#ebd035] font-normal',
    },
    onButtonClick: () => alert('Button Clicked'),
  }
};
