import type { Meta, StoryObj } from '@storybook/react';
import { HomeNumbers } from './HomeNumbers';

const meta: Meta<typeof HomeNumbers> = {
    title: 'Components/HomeNumbers',
    component: HomeNumbers,
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: 'object',
            description: 'List of number items to display',
        },
    },
};

export default meta;
type Story = StoryObj<typeof HomeNumbers>;

export const Default: Story = {
    args: {
        items: [
            {
                title: '20+',
                description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.',
            },
            {
                title: '20+',
                description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.',
            },
            {
                title: '20+',
                description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.',
            },
            {
                title: '20+',
                description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.',
            },
        ],
    },
};
