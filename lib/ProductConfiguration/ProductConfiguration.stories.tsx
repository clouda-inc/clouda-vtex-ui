import type { Meta, StoryObj } from '@storybook/react';
import { ProductConfiguration } from './ProductConfiguration';

const meta: Meta<typeof ProductConfiguration> = {
    title: 'Components/ProductConfiguration',
    component: ProductConfiguration,
    tags: ['autodocs'],
    argTypes: {
        specsHeight: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ProductConfiguration>;

const genericOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
    { label: 'Option 5 Long Label', value: '5' },
    { label: 'Option 6', value: '6' },
];

export const Default: Story = {
    args: {
        specsHeight: '650px',
        specifications: [
            {
                id: 'drawers',
                title: 'No. of Drawers',
                mode: 'pills',
                options: [
                    { label: '6', value: '6' },
                    { label: '7', value: '7' },
                    { label: '8', value: '8' },
                    { label: '9', value: '9' },
                    { label: '10', value: '10' },
                    { label: '11', value: '11' },
                    { label: '12', value: '12' },
                    { label: '13', value: '13' },
                ],
            },
            {
                id: 'lock',
                title: 'Lock',
                options: [
                    { label: 'Includes Lock', value: 'includes-lock' },
                    { label: 'No Lock', value: 'no-lock' },
                ],
            },
            {
                id: 'base',
                title: 'Base', // Maybe user wants dropdown here?
                mode: 'dropdown',
                options: [
                    { label: 'Fork Truck Base', value: 'fork-truck' },
                    { label: 'No Base', value: 'no-base' },
                ],
            },
            {
                id: 'accessories',
                title: 'Accessories',
                options: [
                    { label: 'Accessories Included', value: 'included' },
                    { label: 'No Accessories', value: 'none' },
                ],
            },
            {
                id: 'width',
                title: 'Width',
                options: [
                    { label: '28.25 in | 71.76 cm', value: '28.25' },
                    { label: '40.25 in | 102.24 cm', value: '40.25' },
                ],
            },
            {
                id: 'housing-color',
                title: 'Housing Color',
                mode: 'color-dropdown',
                options: [
                    { label: 'Classic Blue', value: 'blue', color: '#2563EB' },
                    { label: 'Red', value: 'red', color: '#DC2626' },
                ]
            },
            {
                id: 'drawer-color',
                title: 'Drawer Color',
                mode: 'color-dropdown',
                options: [
                    { label: 'Classic Blue', value: 'blue', color: '#2563EB' },
                    { label: 'Yellow', value: 'yellow', color: '#FACC15' },
                ]
            }
        ],
        partNumber: '123-456-789',
        quantityProps: {
            initialValue: 1,
            min: 1,
        }
    },
};

export const ScrollableExample: Story = {
    args: {
        specsHeight: 250, // Force specific height in pixels
        partNumber: '999-999',
        quantityProps: { initialValue: 5 },
        specifications: [
            { id: 's1', title: 'Section 1 (Pills)', options: genericOptions },
            { id: 's2', title: 'Section 2 (Dropdown)', mode: 'dropdown', options: genericOptions },
            { id: 'c1', title: 'Start Color', mode: 'color-dropdown', options: [{ label: 'Black', value: 'a', color: '#000' }, { label: 'White', value: 'b', color: '#fff' }] },
            { id: 's3', title: 'Section 3', options: genericOptions },
            { id: 's4', title: 'Section 4', options: genericOptions },
            { id: 's5', title: 'Section 5', options: genericOptions },
            { id: 'c2', title: 'End Color', mode: 'color-dropdown', options: [{ label: 'Red', value: 'r', color: 'red' }] },
            { id: 's6', title: 'Section 6', options: genericOptions },
            { id: 's7', title: 'Section 7', options: genericOptions },
            { id: 's8', title: 'Section 8', options: genericOptions },
            { id: 's9', title: 'Section 9', options: genericOptions },
            { id: 's10', title: 'Section 10', options: genericOptions },
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates the fixed footer behavior. Content scrolls within a 300px window while Quantity Selector stays pinned.',
            },
        },
    }
}
