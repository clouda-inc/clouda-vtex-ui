import type { Meta, StoryObj } from '@storybook/react';
import { QuantitySelector } from './QuantitySelector';
import { useState } from 'react';

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

export const Default: Story = {
    args: {
        label: 'Lorem ipsum',
        initialValue: 2,
    },
};

export const WithLimits: Story = {
    args: {
        label: 'Limit 0-10',
        min: 0,
        max: 10,
        initialValue: 0,
    },
};

export const CustomStyling: Story = {
    args: {
        label: 'Custom Block',
        blockClass: 'bg-gray-100 p-4 rounded',
        initialValue: 5,
    },
};

export const LargeNumbers: Story = {
    args: {
        label: 'Large Values',
        initialValue: 10000,
    },
};

export const Controlled = () => {
    const [val, setVal] = useState(1);
    return (
        <div className="flex flex-col gap-4">
            <p>Parent Value: {val}</p>
            <QuantitySelector
                value={val}
                onChange={setVal}
                min={1}
                max={20}
                label="Controlled Input"
            />
            <button onClick={() => setVal(5)} className="px-3 py-1 bg-blue-100 rounded self-start">Reset to 5</button>
        </div>
    )
}
