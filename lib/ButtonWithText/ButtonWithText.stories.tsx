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

export const PromoBanner: Story = {
  args: {
    text: 'Limited time offer: Get 20% off fast shipping!',
    buttonText: 'Claim Offer',
    className: 'bg-red-50 p-4 rounded-lg',
    buttonProps: {
      variant: 'primary',
      className: 'bg-red-600 hover:bg-red-700 text-white border-none',
      size: 'sm'
    },
    onButtonClick: () => alert('Offer Claimed'),
  }
};
