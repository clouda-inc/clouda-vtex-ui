import type { Meta, StoryObj } from '@storybook/react';
import { OrderHistory } from './OrderHistory';
import type { OrderData } from '../OrderDetails/OrderDetails';
import type { OrderItemData } from '../OrderDetails/components/OrderItem';

const meta: Meta<typeof OrderHistory> = {
  title: 'Pages/Orders/OrderHistory',
  component: OrderHistory,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof OrderHistory>;

const mockOrders = [
  { id: '1', poNumber: 'PO-001', date: '01/01/2026', billTo: 'Nexra Warehouse - New York', shipTo: 'Main Warehouse - 123 Industrial Blvd, New York, NY', total: '$100.00', status: 'Completed' },
  { id: '2', poNumber: 'PO-002', date: '01/02/2026', billTo: 'Nexra Distribution Center - Chicago', shipTo: 'Distribution Center - 456 Commerce St, Chicago, IL', total: '$250.50', status: 'Processing' },
  { id: '3', poNumber: 'PO-003', date: '01/03/2026', billTo: 'Nexra Warehouse - New York', shipTo: 'Distribution Center - 456 Commerce St, Chicago, IL', total: '$1,200.00', status: 'In Transit' },
  { id: '4', poNumber: 'PO-004', date: '01/04/2026', billTo: 'Nexra Distribution Center - Chicago', shipTo: 'Main Warehouse - 123 Industrial Blvd, New York, NY', total: '$50.00', status: 'Completed' },
];

// Helper to generate mock details for a given order ID (moved from component to story)
const getMockOrderDetails = (orderId: string): OrderData => {
    const historyOrder = mockOrders.find(o => o.id === orderId);

    // Default items mock
    const mockItems: OrderItemData[] = [
        {
            id: '1',
            sku: '111111111',
            orderedQty: 120,
            shippedDate: historyOrder?.date || '12/12/2024',
            price: historyOrder?.total || '$1000.00',
            status: historyOrder?.status || 'Completed',
            description: 'Lorem ipsum dolor sit amet consectetur. Platea amet maecenas dui dolor.',
            notes: 'Lorem ipsum dolor sit amet consectetur.',
            requestedDeliveryDate: '12-13-2024',
            shippingCarrier: 'ABC',
            trackingInfo: '4558543',
            invoice: '1234567890',
        },
        {
            id: '2',
            sku: '222222222',
            orderedQty: 50,
            shippedDate: historyOrder?.date || '12/12/2024',
            price: '$500.00',
            status: historyOrder?.status || 'Completed',
            description: 'Another item description here.',
            notes: 'Handle with care.',
        }
    ];

    return {
        id: orderId,
        details: 'Lorem ipsum dolor sit amet consectetur. Platea amet maecenas dui dolor.',
        billingAddress: historyOrder?.billTo || 'Lorem ipsum dolor sit amet consectetur. Platea amet maecenas dui dolor.',
        shippingAddress: historyOrder?.shipTo || 'Lorem ipsum dolor sit amet consectetur. Platea amet maecenas dui dolor.',
        items: mockItems,
    };
};

export const Default: Story = {
  args: {
    orders: mockOrders,
    getOrderDetails: getMockOrderDetails,
  },
};

export const CustomColors: Story = {
  args: {
    primaryColor: '#008080', // Teal
    orders: mockOrders,
    getOrderDetails: getMockOrderDetails,
  },
};

export const CustomData: Story = {
  args: {
    orders: [
        { id: '101', poNumber: 'PO-9999-A', date: '12/12/2025', billTo: 'HQ - Austin', shipTo: 'Warehouse 1', total: '$5,000.00', status: 'Processing' },
        { id: '102', poNumber: 'PO-9999-B', date: '12/15/2025', billTo: 'HQ - Austin', shipTo: 'Warehouse 2', total: '$750.00', status: 'Completed' },
    ],
    getOrderDetails: getMockOrderDetails,
  },
};
