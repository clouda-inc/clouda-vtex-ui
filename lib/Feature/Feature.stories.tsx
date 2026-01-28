import type { Meta, StoryObj } from '@storybook/react';
import { Feature } from './Feature';

const meta: Meta<typeof Feature> = {
    title: 'Components/Feature',
    component: Feature,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        onButtonClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof Feature>;

export const Default: Story = {
    args: {
        eyebrow: 'Lorem ipsum ut mi mi',
        title: 'Lorem ipsum ut mi mi',
        description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
        buttonText: 'Button text',
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
