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
    width: 200
  }
};

export const MaterialFinishes: Story = {
  render: (args) => <ColorSelectorWrapper {...args} />,
  args: {
    options: [
      { label: 'Oak', value: 'oak', colorCode: '#C9A66B' },
      { label: 'Walnut', value: 'walnut', colorCode: '#5D4037' },
      { label: 'Cherry', value: 'cherry', colorCode: '#933D41' },
      { label: 'White Ash', value: 'white-ash', colorCode: '#EAE0C8' },
    ],

    selectedValue: 'oak',
    placeholder: 'Select Finish',
    width: 150
  }
};
