import type { Meta, StoryObj } from '@storybook/react';
import SkuSelector from './SkuSelector';
import React, { useState } from 'react';

const meta: Meta<typeof SkuSelector> = {
  title: 'Layouts/SkuSelector',
  component: SkuSelector,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkuSelector>;

// Mock data based on Figma design
const mockVariations = [
  {
    name: 'No. of Drawers',
    type: 'text',
    options: [
      { label: '6', value: '6' },
      { label: '7', value: '7' },
      { label: '8', value: '8' },
      { label: '9', value: '9' },
      { label: '10', value: '10' },
      { label: '11', value: '11' },
      { label: '12', value: '12' },
      { label: '13', value: '13' },
    ]
  },
  {
    name: 'Lock',
    type: 'text',
    options: [
      { label: 'Includes Lock', value: 'yes' },
      { label: 'No Lock', value: 'no' },
    ]
  },
  {
    name: 'Base',
    type: 'text',
    options: [
      { label: 'Fork Truck Base', value: 'fork' },
      { label: 'No Base', value: 'no' },
    ]
  },
  {
    name: 'Accessories',
    type: 'text',
    options: [
      { label: 'Accessories Included', value: 'yes' },
      { label: 'No Accessories', value: 'no' },
    ]
  },
  {
    name: 'Width',
    type: 'text',
    options: [
      { label: '28.25 in | 71.76 cm', value: '28.25' },
      { label: '40.25 in | 102.24 cm', value: '40.25' },
    ]
  },
  {
    name: 'Depth',
    type: 'text',
    options: [
      { label: '22.5 in | 57.15 cm', value: '22.5' },
      { label: '28.5 in | 72.39 cm', value: '28.5' },
    ]
  },
  {
    name: 'Housing Color',
    type: 'color',
    options: [
      { label: 'Blue', value: 'blue', meta: '#2e73b7' },
      { label: 'Gray', value: 'gray', meta: '#808080' },
    ]
  },
   {
    name: 'Drawer Color',
    type: 'color',
    options: [
      { label: 'Blue', value: 'blue', meta: '#2e73b7' },
      { label: 'Gray', value: 'gray', meta: '#808080' },
    ]
  },
] as any; // Type assertion for simple story setup

const SkuSelectorWrapper = (args: any) => {
  const [selections, setSelections] = useState<Record<string, string>>({
    'No. of Drawers': '6',
    'Lock': 'yes',
    'Housing Color': 'blue',
    'Drawer Color': 'blue'
  });
  const [qty, setQty] = useState(1);

  const handleChange = (name: string, value: string) => {
    setSelections(prev => ({ ...prev, [name]: value }));
  };

  return (
    <SkuSelector 
      {...args} 
      selections={selections} 
      onSelectionChange={handleChange}
      quantity={qty}
      onQuantityChange={setQty}
    />
  );
};

export const Default: Story = {
  render: (args) => <SkuSelectorWrapper {...args} />,
  args: {
    variations: mockVariations,
    partNumber: 'ST-123456',
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    variations: [],
    selections: {},
    quantity: 1,
  }
};
