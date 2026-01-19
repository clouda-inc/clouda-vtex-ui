import type { Meta, StoryObj } from '@storybook/react';
import HeroBanner from './HeroBanner';

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: 'text',
      description: 'Main heading text for the hero banner',
    },
    description: {
      control: 'text',
      description: 'Description text displayed below the heading',
    },
    buttonLabel: {
      control: 'text',
      description: 'Label for the call-to-action button',
    },
    buttonOnClick: {
      action: 'clicked',
      description: 'Callback function when button is clicked',
    },
    imageSrc: {
      control: 'text',
      description: 'URL of the background/feature image',
    },
    imageAlt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

// Primary variation (default)
export const Primary: Story = {
  args: {
    heading: 'Lorem ipsum ut mi mi',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    buttonLabel: 'Button label',
    imageSrc: 'https://via.placeholder.com/800x600/EEF1F4/545F71?text=Hero+Image',
    imageAlt: 'Hero banner placeholder image',
  },
};

// Desktop view
export const Desktop: Story = {
  args: {
    heading: 'Lorem ipsum ut mi mi',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    buttonLabel: 'Button label',
    imageSrc: 'https://via.placeholder.com/800x600/EEF1F4/545F71?text=Desktop+View',
    imageAlt: 'Desktop view image',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// Tablet view
export const Tablet: Story = {
  args: {
    heading: 'Lorem ipsum ut mi mi',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    buttonLabel: 'Button label',
    imageSrc: 'https://via.placeholder.com/768x400/EEF1F4/545F71?text=Tablet+View',
    imageAlt: 'Tablet view image',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

// Mobile view
export const Mobile: Story = {
  args: {
    heading: 'Lorem ipsum ut mi mi',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    buttonLabel: 'Button label',
    imageSrc: 'https://via.placeholder.com/400x300/EEF1F4/545F71?text=Mobile+View',
    imageAlt: 'Mobile view image',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Without button
export const WithoutButton: Story = {
  args: {
    heading: 'Lorem ipsum ut mi mi',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    imageSrc: 'https://via.placeholder.com/800x600/EEF1F4/545F71?text=No+Button',
    imageAlt: 'Hero banner without button',
  },
};

// Without image
export const WithoutImage: Story = {
  args: {
    heading: 'Lorem ipsum ut mi mi',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    buttonLabel: 'Button label',
  },
};

// Short content
export const ShortContent: Story = {
  args: {
    heading: 'Welcome',
    description: 'A brief description of what we offer.',
    buttonLabel: 'Learn More',
    imageSrc: 'https://via.placeholder.com/800x600/EEF1F4/545F71?text=Short+Content',
    imageAlt: 'Short content hero image',
  },
};
