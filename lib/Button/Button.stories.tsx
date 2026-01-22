import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};
export const PillShape: Story = {
  args: {
    children: 'Pill Button',
    shape: 'pill',
    variant: 'primary',
  },
};

export const SquareShape: Story = {
  args: {
    children: 'Square Button',
    shape: 'square',
    variant: 'secondary',
  },
};

export const WithIcons: Story = {
  args: {
    children: 'Button with Icons',
    iconLeft: <span>←</span>,
    iconRight: <span>→</span>,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};

export const CustomYellow: Story = {
  args: {
    children: 'Custom Yellow',
    variant: 'custom',
    className: 'bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-6'
  },
};
