import type { Meta, StoryObj } from '@storybook/react';
import ProductDetailsSection from './ProductDetailsSection';

const meta = {
  title: 'Components/ProductDetailsSection',
  component: ProductDetailsSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductDetailsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOverviewHtml = `
  <div>
    <h3 class="text-xl font-bold mb-4">Product Features</h3>
    <p class="mb-4">
      Lorem ipsum non nullam laoreet amet malesuada adipiscing rhoncus senectus magna lorem. 
      Tincidunt in lorem ipsum tincidunt in.
    </p>
    <ul class="list-disc pl-5 mb-4">
      <li>Feature 1: High quality performance</li>
      <li>Feature 2: Durable materials</li>
      <li>Feature 3: Easy to use</li>
    </ul>
    <p>
      More detailed description about the product goes here. It handles various use cases and is built to last.
    </p>
  </div>
`;

const mockSpecs = [
  { name: 'Resolution', value: '1920x1080' },
  { name: 'Aspect Ratio', value: '16:9' },
  { name: 'Refresh Rate', value: '144Hz' },
  { name: 'Response Time', value: '1ms' },
  { name: 'Panel Type', value: 'IPS' },
  { name: 'Brightness', value: '350 cd/m²' },
];

const mockDownloads = [
  { name: 'User Manual', image: 'https://placehold.co/210x297/png?text=PDF', url: '#' },
  { name: 'Drivers', image: 'https://placehold.co/210x297/png?text=DRV', url: '#' },
  { name: 'Warranty Info', image: 'https://placehold.co/210x297/png?text=DOC', url: '#' },
];

export const Default: Story = {
  args: {
    overviewHtml: mockOverviewHtml,
    specifications: mockSpecs,
    partNumber: 'Lorem ipsum',
    downloads: mockDownloads,
  },
};

export const EmptyDownloads: Story = {
  args: {
    overviewHtml: mockOverviewHtml,
    specifications: mockSpecs,
    partNumber: 'Model-X123',
    downloads: [],
  },
};

export const CustomColor: Story = {
  args: {
    overviewHtml: mockOverviewHtml,
    specifications: mockSpecs,
    partNumber: 'Green Theme',
    downloads: mockDownloads,
    primaryColor: '#10B981', // Emerald-500
  },
};
