import type { Meta, StoryObj } from '@storybook/react';
import { MyAccountPage } from './MyAccountPage';

const meta: Meta<typeof MyAccountPage> = {
  title: 'Pages/MyAccountPage',
  component: MyAccountPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MyAccountPage>;

const mockUser = {
    firstName: 'Jonathan',
    lastName: 'Patterson',
    initials: 'JP'
};

const mockOrders = [
    {
        id: '1',
        poNumber: 'PO-001',
        date: '2023-10-01',
        total: 1200.50,
        status: 'Processing',
        billTo: 'Nexra Warehouse - New York',
        shipTo: 'Main Warehouse - 123 Industrial Blvd, New York, NY'
    },
    {
        id: '2',
        poNumber: 'PO-002',
        date: '2023-10-05',
        total: 500.00,
        status: 'Shipped',
        billTo: 'Nexra Distribution Center - Chicago',
        shipTo: 'Distribution Center - 456 Commerce St, Chicago, IL'
    },
];

const getOrderDetails = (id: string) => {
    return {
        id: id,
        poNumber: `PO-00${id}`,
        date: '01/01/2026',
        status: 'Processing',
        paymentMethod: 'Credit Card',
        shippingMethod: 'FedEx Ground',
        items: [
            { id: '1', name: 'Product A', quantity: 2, price: 50, total: 100, image: 'https://placehold.co/50x50' },
        ],
        subTotal: 200,
        shipping: 20,
        tax: 15,
        total: 235,
        billingAddress: '123 Main St, New York, NY',
        shippingAddress: '123 Main St, New York, NY'
    };
};

export const Default: Story = {
  args: {
      user: mockUser,
      initialView: 'profile',
      quotesProps: {
          primaryColor: '#4E46B4',
      },
      orderHistoryProps: {
          orders: mockOrders,
          getOrderDetails: getOrderDetails
      },
      profileProps: {
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
      },
      onLogout: () => alert('Logout clicked'),
  },
};
