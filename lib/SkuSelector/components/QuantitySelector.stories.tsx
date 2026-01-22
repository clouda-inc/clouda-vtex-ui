import type { Meta, StoryObj } from '@storybook/react';
import QuantitySelector from './QuantitySelector';
import React from 'react';

const meta: Meta<typeof QuantitySelector> = {
  title: 'Components/QuantitySelector',
  component: QuantitySelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuantitySelector>;

// Wrapper to handle state
const QuantitySelectorWrapper = (args: any) => {
  const [qty, setQty] = React.useState(args.quantity || 1);
  return <QuantitySelector {...args} quantity={qty} onChange={setQty} />;
};

export const Default: Story = {
  render: (args) => <QuantitySelectorWrapper {...args} />,
  args: {
    quantity: 1,
    min: 1,
    max: 10,
  }
};
