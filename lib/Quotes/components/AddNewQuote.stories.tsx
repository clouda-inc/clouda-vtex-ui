import type { Meta, StoryObj } from '@storybook/react';
import { AddNewQuote } from './AddNewQuote';

const meta: Meta<typeof AddNewQuote> = {
    title: 'Components/AddNewQuote',
    component: AddNewQuote,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        onClose: { action: 'onClose' },
        onSubmit: { action: 'onSubmit' },
    },
};

export default meta;
type Story = StoryObj<typeof AddNewQuote>;

export const Default: Story = {
    args: {
        primaryColor: '#4E46B4',
        secondaryColor: '#D92D20',
    },
};

export const CustomColors: Story = {
    args: {
        primaryColor: '#00D084',
        secondaryColor: '#FF6900',
    },
};
