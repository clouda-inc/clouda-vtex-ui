import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './Breadcrumb';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DeepPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', isHome: true },
      { label: 'Category', href: '#' },
      { label: 'Subcategory', href: '#' },
      { label: 'Product Family', href: '#' },
      { label: 'Current Item', href: '#' },
    ],
  },
};

export const CustomColors: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', isHome: true },
      { label: 'Section', href: '#' },
      { label: 'Subsection', href: '#' },
      { label: 'Current Page', href: '#' },
    ],
    backgroundColor: '#f3f4f6', // gray-100
    textColor: '#1f2937', // gray-800
    separatorColor: '#9ca3af', // gray-400
  },
};
