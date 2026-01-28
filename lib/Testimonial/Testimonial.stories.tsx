import type { Meta, StoryObj } from '@storybook/react';
import { Testimonial } from './Testimonial';

const meta = {
    title: 'Components/Testimonial',
    component: Testimonial,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        blockClass: { control: 'text' },
        heading: { control: 'text' },
        quote: { control: 'text' },
        authorName: { control: 'text' },
        authorTitle: { control: 'text' },
    },
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        heading: "Lorem ipsum ut mi mi",
        quote: "Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.",
        authorName: "Lorem ipsum dolor",
        authorTitle: "Lorem ipsum dolor",
    },
};

export const MobileView: Story = {
    args: {
        ...Default.args,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};

export const WithCustomImage: Story = {
    args: {
        ...Default.args,
        imageSrc: "https://i.pravatar.cc/150?img=32", // Example image
        authorName: "Jane Doe",
    },
};
