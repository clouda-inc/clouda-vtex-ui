import type { Meta, StoryObj } from '@storybook/react';
import { MyProfile } from './MyProfile';

const meta: Meta<typeof MyProfile> = {
  title: 'Components/MyProfile',
  component: MyProfile,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof MyProfile>;

export const Default: Story = {};

export const WithData: Story = {
    args: {
        userData: {
            firstName: 'Jonathan',
            lastName: 'Patterson',
            email: 'jonathan.patterson@nexra.com',
            mobile: '+1 (555) 123-4567',
            department: 'Procurement',
            designation: 'Senior Manager',
            company: 'Nexra Industries',
            companyPhone: '+1 (555) 987-6543',
            industry: 'Manufacturing'
        }
    }
};
