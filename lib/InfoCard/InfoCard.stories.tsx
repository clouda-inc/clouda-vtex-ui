import type { Meta, StoryObj } from '@storybook/react';
import { InfoCard } from './InfoCard';

const meta: Meta<typeof InfoCard> = {
  title: 'Components/InfoCard',
  component: InfoCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onPrimaryClick: { action: 'primary clicked' },
    onSecondaryClick: { action: 'secondary clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

const defaultArgs = {
  title: 'Lorem ipsum ut mi mi',
  description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
  primaryButtonLabel: 'Button text',
  secondaryButtonLabel: 'Button text',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Mobile: Story = {
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const WithImage: Story = {
  args: {
    ...defaultArgs,
    imageSrc: 'https://via.placeholder.com/640x400',
  },
};
