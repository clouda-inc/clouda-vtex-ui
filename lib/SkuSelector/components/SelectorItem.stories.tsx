import type { Meta, StoryObj } from '@storybook/react';
import SelectorItem from './SelectorItem';

const meta: Meta<typeof SelectorItem> = {
  title: 'Components/SelectorItem',
  component: SelectorItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectorItem>;

export const Default: Story = {
  args: {
    title: 'Selector Title',
    children: <div className="p-2 border border-gray-200 rounded">Child Content (Selector)</div>,
  }
};
