import type { Meta, StoryObj } from '@storybook/react';
import { ViewQuote, type QuoteDetail } from './ViewQuote';

const meta: Meta<typeof ViewQuote> = {
    title: 'Components/ViewQuote',
    component: ViewQuote,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ViewQuote>;

const mockData: QuoteDetail = {
    id: '1',
    quotationNumber: 'QN00045',
    items: [
        {
            id: 'p1',
            name: 'Lorem ipsum Lorem ipsum',
            sku: 'Lorem ipsum ut molestie',
            image: "https://placehold.co/72x72/E6E6E6/CCCCCC?text=Img",
            price: 100,
            quantity: 2,
            total: 200,
        },
         {
            id: 'p2',
            name: 'Lorem ipsum Lorem ipsum',
            sku: 'Lorem ipsum ut molestie',
            image: "https://placehold.co/72x72/E6E6E6/CCCCCC?text=Img",
            price: 100,
            quantity: 2,
            total: 200,
        }
    ],
    salesRep: 'Lorem ipsum orci',
    issuedDate: 'Lorem ipsum orci',
    expiredDate: 'Lorem ipsum orci',
    subTotal: 40000,
    shippingCost: 150,
    tax: 100,
    grandTotal: 40300,
};

export const Default: Story = {
    args: {
        data: mockData,
        onClose: () => alert('Close clicked'),
    },
    decorators: [
        (Story) => (
            <div className="bg-gray-100 p-8 min-h-screen flex items-center justify-center">
                 <div className="w-full max-w-[1440px] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative">
                    <Story />
                 </div>
            </div>
        )
    ]
};
