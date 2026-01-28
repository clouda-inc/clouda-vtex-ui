import type { Meta, StoryObj } from '@storybook/react';
import { HomeTitle } from './HomeTitle';

const meta: Meta<typeof HomeTitle> = {
    title: 'Components/HomeTitle',
    component: HomeTitle,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HomeTitle>;

export const Default: Story = {
    args: {
        eyebrow: 'Lorem ipsum ut mi mi',
        title: 'Lorem ipsum ut mi mi',
        description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    },
};

export const Mobile: Story = {
    args: {
        ...Default.args,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
