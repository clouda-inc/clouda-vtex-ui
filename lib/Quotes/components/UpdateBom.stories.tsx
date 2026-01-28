import type { Meta, StoryObj } from '@storybook/react';
import { UpdateBom } from './UpdateBom';

const meta: Meta<typeof UpdateBom> = {
    title: 'Components/UpdateBom',
    component: UpdateBom,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClose: { action: 'closed' },
        onUpload: { action: 'uploaded' },
    },
};

export default meta;
type Story = StoryObj<typeof UpdateBom>;

export const Default: Story = {
    args: {
        isOpen: true,
        primaryColor: '#4E46B4',
    },
};

export const CustomColor: Story = {
    args: {
        isOpen: true,
        primaryColor: '#D92D20', // Red
    },
};
