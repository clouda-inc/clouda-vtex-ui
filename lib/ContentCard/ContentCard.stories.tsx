import type { Meta, StoryObj } from '@storybook/react';
import { ContentCard } from './ContentCard';

const meta: Meta<typeof ContentCard> = {
    title: 'Components/ContentCard',
    component: ContentCard,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['Standard', 'Blog', 'Vertical', 'Icon'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ContentCard>;

const placeholderImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

export const Standard: Story = {
    args: {
        variant: 'Standard',
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.',
        imageSrc: placeholderImage,
        date: 'Lorem ipsum dolor sit',
        buttonText: 'Button text',
    },
};

export const Blog: Story = {
    args: {
        variant: 'Blog',
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.',
        imageSrc: placeholderImage,
        date: 'Lorem ipsum dolor sit',
        buttonText: 'Button text',
    },
};

export const Vertical: Story = {
    args: {
        variant: 'Vertical',
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.',
        imageSrc: placeholderImage,
        buttonText: 'Button text',
    },
};

export const Icon: Story = {
    args: {
        variant: 'Icon',
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.',
        imageSrc: placeholderImage,
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#E2E8F0" />
                <path d="M24 24L32 16" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="24" r="10" stroke="#475569" strokeWidth="2" />
            </svg>
        ),
        buttonText: 'Button text',
    },
};
