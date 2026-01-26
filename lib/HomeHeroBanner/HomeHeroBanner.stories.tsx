import type { Meta, StoryObj } from '@storybook/react';
import { HomeHeroBanner } from './HomeHeroBanner';

const meta: Meta<typeof HomeHeroBanner> = {
    title: 'Components/HomeHeroBanner',
    component: HomeHeroBanner,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        ctaText: { control: 'text' },
        onCtaClick: { action: 'clicked' },
        secondaryCtaText: { control: 'text' },
        onSecondaryCtaClick: { action: 'clicked' },
        backgroundImage: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof HomeHeroBanner>;

export const Default: Story = {
    args: {
        title: 'Lorem ipsum ut mi mi',
        description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
        ctaText: 'Button text',
        backgroundImage: 'https://via.placeholder.com/1440x680/E9E8E4/000000?text=Background+Curve',
    },
};

export const WithMobileLayout: Story = {
    args: {
        ...Default.args,
        secondaryCtaText: 'Button text',
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};

export const WithBackgroundImage: Story = {
    args: {
        ...Default.args,
        backgroundImage: 'https://via.placeholder.com/1440x680/E9E8E4/000000?text=Background+Curve',
    },
};
