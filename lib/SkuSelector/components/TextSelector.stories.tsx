import type { Meta, StoryObj } from '@storybook/react';
import TextSelector from './TextSelector';
import React from 'react';

const meta: Meta<typeof TextSelector> = {
  title: 'Components/TextSelector',
  component: TextSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextSelector>;

const TextSelectorWrapper = (args: any) => {
  const [selected, setSelected] = React.useState(args.selectedValue);
  return <TextSelector {...args} selectedValue={selected} onChange={setSelected} />;
};

export const Default: Story = {
  render: (args) => <TextSelectorWrapper {...args} />,
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3', disabled: true },
    ],
    selectedValue: '1',
  }
};
