import type { Meta, StoryObj } from '@storybook/react';
import { FeatureBrands } from './FeatureBrands';
import brandPlaceholder from './assets/brand-placeholder.svg';

const meta: Meta<typeof FeatureBrands> = {
    title: 'Components/FeatureBrands',
    component: FeatureBrands,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        onButtonClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof FeatureBrands>;

export const Default: Story = {
    args: {
        eyebrow: 'Lorem ipsum ut mi mi',
        title: 'Lorem ipsum ut mi mi',
        description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
        buttonText: 'Button text',
        autoplaySpeed: 3000,
        brandLogos: Array(24).fill({ src: brandPlaceholder, alt: 'Brand Logo' }),
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

export const NoButton: Story = {
    args: {
        ...Default.args,
        buttonText: undefined,
    },
};
