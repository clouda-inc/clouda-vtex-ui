import type { Meta, StoryObj } from '@storybook/react';
import IconCardCarousel from './IconCardCarousel';

const meta: Meta<typeof IconCardCarousel> = {
    title: 'Components/IconCardCarousel',
    component: IconCardCarousel,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof IconCardCarousel>;

// Mock data for cards
const mockCards = [
    {
        title: 'Strategy & Consulting',
        description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum.',
        imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7V17M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        buttonText: 'Learn More',
    },
    {
        title: 'Digital Experience',
        description: 'Libero vitae pretium et faucibus elementum tortor lacus rutrum. Lorem ipsum dolor sit amet.',
        imageSrc: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        buttonText: 'Learn More',
    },
    {
        title: 'Technology Solutions',
        description: 'Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.',
        imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        buttonText: 'Learn More',
    },
    {
        title: 'Growth Marketing',
        description: 'Faucibus elementum tortor lacus rutrum. Lorem ipsum dolor sit amet consectetur.',
        imageSrc: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        buttonText: 'Learn More',
    },
];

export const Default: Story = {
    args: {
        cards: mockCards,
        autoPlayInterval: 3000,
    },
};

export const ManyCards: Story = {
    args: {
        cards: [...mockCards, ...mockCards], // 8 cards
        autoPlayInterval: 2000,
    },
};

export const SingleCard: Story = {
    args: {
        cards: [mockCards[0]],
        autoPlayInterval: 3000,
    },
};

export const NoCards: Story = {
    args: {
        cards: [],
        autoPlayInterval: 3000,
    },
};
