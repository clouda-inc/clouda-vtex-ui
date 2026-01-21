
import type { Meta, StoryObj } from '@storybook/react';
import { PDPLayout } from './PDPLayout';

const meta = {
  title: 'Components/PDPLayout',
  component: PDPLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PDPLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
