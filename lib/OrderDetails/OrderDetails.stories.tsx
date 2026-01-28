import type { Meta, StoryObj } from '@storybook/react';
import { OrderDetails } from './OrderDetails';

const meta: Meta<typeof OrderDetails> = {
  title: 'Components/OrderDetails',
  component: OrderDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OrderDetails>;

const mockItems = [
  {
    id: '1',
    sku: '111111111',
    orderedQty: 120,
    shippedDate: '12/12/2024',
    price: '$1000.00',
    status: 'Completed',
    description: 'Lorem ipsum dolor sit amet consectetur. Platea amet maecenas dui dolor.',
    notes: 'Lorem ipsum dolor sit amet consectetur.',
    requestedDeliveryDate: '12-13-2024',
    shippingCarrier: 'ABC',
    trackingInfo: '4558543',
    invoice: '1234567890',
  },
  {
    id: '2',
    sku: '111111111',
    orderedQty: 120,
    shippedDate: '12/12/2024',
    price: '$1000.00',
    status: 'Completed',
    description: 'Lorem ipsum dolor sit amet consectetur. Platea amet maecenas dui dolor.',
    notes: 'Lorem ipsum dolor sit amet consectetur.',
    requestedDeliveryDate: '12-13-2024',
    shippingCarrier: 'ABC',
    trackingInfo: '4558543',
    invoice: '1234567890',
  },
];

const mockOrder = {
  id: '12345',
  details: 'Lorem ipsum dolor sit amet consectetur. Platea amet maecenas dui dolor.',
  billingAddress: 'Lorem ipsum dolor sit amet consectetur. Platea amet maecenas dui dolor.',
  shippingAddress: 'Lorem ipsum dolor sit amet consectetur. Platea amet maecenas dui dolor.',
  items: mockItems,
};

export const Default: Story = {
  args: {
    order: mockOrder,
    onBack: () => console.log('Back clicked'),
    onReorderAll: () => console.log('Reorder all clicked'),
    onExport: () => console.log('Export clicked'),
  },
};
