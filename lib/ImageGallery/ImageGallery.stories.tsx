
import type { Meta, StoryObj } from '@storybook/react';
import { ImageGallery } from './ImageGallery';

const meta: Meta<typeof ImageGallery> = {
    title: 'Components/ImageGallery',
    component: ImageGallery,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageGallery>;

const dummyImages = [
    {
        url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1000&q=80',
        alternateName: 'Photo by Jan Tinneberg',
    },
    {
        url: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1000&q=80',
        alternateName: 'Photo by Joshua Earle',
    },
    {
        url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80',
        alternateName: 'Photo by Luca Bravo',
    },
    {
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80',
        alternateName: 'Photo by Pietro De Grandi',
    },
    {
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80',
        alternateName: 'Photo by Ales Krivec',
    },
];

export const Default: Story = {
    args: {
        images: dummyImages,
        blockClass: '',
    },
};

export const MobileView: Story = {
    args: {
        images: dummyImages,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};

export const CustomStyling: Story = {
    args: {
        images: dummyImages,
        blockClass: 'border-4 border-red-500 p-2',
    },
};
export const MissingImages: Story = {
    args: {
        images: [
            {
                url: '', // Empty URL
                alternateName: 'Missing Image 1',
            },
            {
                url: 'https://invalid-url.com/image.jpg', // Invalid URL
                alternateName: 'Broken Image 2',
            },
            {
                url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1000&q=80',
                alternateName: 'Working Image',
            },
        ],
    },
};
