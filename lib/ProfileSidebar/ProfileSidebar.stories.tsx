import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileSidebar, type ProfileSidebarProps } from './ProfileSidebar';

const meta = {
  title: 'Components/ProfileSidebar',
  component: ProfileSidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onLogout: { action: 'logout clicked' },
  },
} satisfies Meta<typeof ProfileSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper component
const InteractiveProfileSidebar = (args: ProfileSidebarProps) => {
  const [activeItem, setActiveItem] = useState(() => {
    return args.items.find(i => i.active)?.label || args.items[0]?.label || '';
  });
  
  const items = args.items.map(item => ({
    ...item,
    active: item.label === activeItem,
    onClick: () => {
      setActiveItem(item.label);
      item.onClick?.();
    }
  }));

  return <ProfileSidebar {...args} items={items} />;
};

export const Default: Story = {
  render: (args) => <InteractiveProfileSidebar {...args} />,
  args: {
    user: {
      firstName: 'Daniel',
      lastName: 'Ni',
      initials: 'DN'
    },
    items: [
      { label: 'Profile', onClick: () => console.log('Profile clicked') },
      { label: 'Order History', onClick: () => console.log('Orders clicked') },
      { label: 'Quotes', onClick: () => console.log('Quotes clicked') },
    ],
  },
};

export const ProfileActive: Story = {
  render: (args) => {
    // Wrapper to set initial state to Profile
    const [activeItem, setActiveItem] = useState('Profile');
    const items = args.items.map(item => ({
        ...item,
        active: item.label === activeItem,
        onClick: () => {
        setActiveItem(item.label);
        item.onClick?.();
        }
    }));
    return <ProfileSidebar {...args} items={items} />;
  },
  args: {
    user: {
      firstName: 'Daniel',
      lastName: 'Ni',
    },
    items: [
      { label: 'Profile', onClick: () => console.log('Profile clicked') },
      { label: 'Order History', onClick: () => console.log('Orders clicked') },
      { label: 'Quotes', onClick: () => console.log('Quotes clicked') },
    ],
  },
};

export const LongName: Story = {
  render: (args) => <InteractiveProfileSidebar {...args} />,
  args: {
    user: {
      firstName: 'Sebastiano',
      lastName: 'Guerriero',
    },
    items: [
      { label: 'Profile', onClick: () => console.log('Profile clicked') },
      { label: 'Order History', onClick: () => console.log('Orders clicked') },
      { label: 'Quotes', onClick: () => console.log('Quotes clicked') },
    ],
  },
};

export const Customized: Story = {
  render: (args) => <InteractiveProfileSidebar {...args} />,
  args: {
    width: '400px',
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    itemBackgroundColor: '#333333',
    itemActiveBackgroundColor: '#E50914',
    itemTextColor: '#ffffff',
    itemActiveTextColor: '#ffffff',
    itemHoverBackgroundColor: '#444444',
    user: {
      firstName: 'Dark',
      lastName: 'Mode',
      initials: 'DM'
    },
    items: [
      { label: 'Profile', onClick: () => console.log('Profile clicked') },
      { label: 'Settings', onClick: () => console.log('Settings clicked') },
      { label: 'Billing', onClick: () => console.log('Billing clicked') },
    ],
  },
};
