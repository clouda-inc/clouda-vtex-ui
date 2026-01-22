import type { Meta, StoryObj } from '@storybook/react';
import { CTABanner } from './CTABanner';

const meta: Meta<typeof CTABanner> = {
  title: 'Components/CTABanner',
  component: CTABanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CTABanner>;

export const Default: Story = {
  args: {
    title: 'Happy to discuss about your requirement',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    primaryButtonText: 'Request a Demo',
    secondaryButtonText: 'Request a Free Site Visit',
  },
};
