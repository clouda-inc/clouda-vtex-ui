import type { Meta, StoryObj } from '@storybook/react';
import ColorSelector from './ColorSelector';
import React from 'react';

const meta: Meta<typeof ColorSelector> = {
  title: 'Components/ColorSelector',
  component: ColorSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ColorSelector>;

const ColorSelectorWrapper = (args: any) => {
  const [selected, setSelected] = React.useState(args.selectedValue);
  return <ColorSelector {...args} selectedValue={selected} onChange={setSelected} />;
};

export const Default: Story = {
  render: (args) => <ColorSelectorWrapper {...args} />,
  args: {
    options: [
      { label: 'Red', value: 'red', colorCode: '#FF0000' },
      { label: 'Green', value: 'green', colorCode: '#00FF00' },
      { label: 'Blue', value: 'blue', colorCode: '#0000FF' },
    ],
    selectedValue: 'red',
    placeholder: 'Select a color',
  }
};
