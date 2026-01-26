import type { Meta, StoryObj } from '@storybook/react';
import { Checkout } from './Checkout';

const meta: Meta<typeof Checkout> = {
    title: 'Components/Checkout',
    component: Checkout,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        onSoldToClick: { action: 'sold to clicked' },
        onShipToClick: { action: 'ship to clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof Checkout>;

const mockSoldTo = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    company: "Acme Corp",
    address: "123 Business Rd, Tech City, TC 90210"
};

const mockShipTo = {
    name: "Shipping Dept",
    email: "shipping@example.com",
    company: "Acme Corp Warehouse",
    address: "456 Logistics Blvd, Supply Chain, SC 54321"
};

const mockProducts = [
    {
        id: "1",
        productName: "Ergonomic Office Chair",
        description: "High-back mesh chair with lumbar support",
        price: 299.99,
        image: "https://via.placeholder.com/150?text=Chair"
    },
    {
        id: "2",
        productName: "Wireless Mechanical Keyboard",
        description: "RGB backlight, tactile switches",
        price: 149.50,
        image: "https://via.placeholder.com/150?text=Keyboard"
    },
    {
        id: "3",
        productName: "27-inch 4K Monitor",
        description: "IPS panel, 144Hz refresh rate",
        price: 450.00,
        image: "https://via.placeholder.com/150?text=Monitor"
    },
    {
        id: "4",
        productName: "USB-C Docking Station",
        description: "10-in-1 hub with HDMI, Ethernet",
        price: 89.99,
        image: "https://via.placeholder.com/150?text=Dock"
    }
];

export const Default: Story = {
    args: {
        soldTo: mockSoldTo,
        shipTo: mockShipTo,
        products: mockProducts,
    },
};

export const EmptyState: Story = {
    args: {
        soldTo: undefined,
        shipTo: undefined,
        products: [],
    },
};
