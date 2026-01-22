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

export const WithDescription: Story = {
  args: {
    title: 'Storage Capacity',
    children: (
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">Choose the storage capacity that fits your needs.</p>
        <div className="flex gap-2">
           <span className="p-2 border rounded bg-gray-50">256GB</span>
           <span className="p-2 border rounded bg-gray-50">512GB</span>
        </div>
      </div>
    ),
  }
};
