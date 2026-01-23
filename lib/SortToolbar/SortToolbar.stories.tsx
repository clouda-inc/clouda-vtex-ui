import type { Meta, StoryObj } from '@storybook/react';
import { SortToolbar } from './SortToolbar';

const meta: Meta<typeof SortToolbar> = {
  title: 'Components/SortToolbar',
  component: SortToolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSortChange: { action: 'sort changed' },
    onViewChange: { action: 'view changed' },
    view: {
      control: 'radio',
      options: ['grid', 'list'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SortToolbar>;

export const Default: Story = {
  args: {
    currentSort: 'Best Match',
    view: 'grid',
  },
};

export const GridActive: Story = {
  args: {
    currentSort: 'Price: Low to High',
    view: 'grid',
  },
};

export const ListActive: Story = {
  args: {
    currentSort: 'Price: High to Low',
    view: 'list',
  },
};

export const CustomOptions: Story = {
  args: {
    sortByOptions: ['Newest', 'Oldest', 'Popularity'],
    currentSort: 'Newest',
    view: 'grid',
  },
};
