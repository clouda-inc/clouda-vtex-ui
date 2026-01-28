import type { Meta, StoryObj } from '@storybook/react';
import { StandardCardCarousel } from './StandardCardCarousel';
import type { ContentCardProps } from '../ContentCard/ContentCard';

const meta: Meta<typeof StandardCardCarousel> = {
    title: 'Components/StandardCardCarousel',
    component: StandardCardCarousel,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StandardCardCarousel>;

// Helper to create sample cards
const createCard = (id: number): ContentCardProps => ({
    title: `Card Title ${id}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    buttonText: 'Learn More',
    date: 'October 24, 2023',
});

const sampleCards = Array.from({ length: 8 }, (_, i) => createCard(i + 1));

export const Default: Story = {
    args: {
        cards: sampleCards,
    },
};

export const WithManyCards: Story = {
    args: {
        cards: Array.from({ length: 12 }, (_, i) => createCard(i + 1)),
    },
};

export const MobileView: Story = {
    args: {
        cards: sampleCards,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
