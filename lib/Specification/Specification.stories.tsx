import type { Meta, StoryObj } from '@storybook/react';
import Specification, { type SpecificationData } from './Specification';

const mockSpecificationData: SpecificationData = {
  overview: `
    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It contains:</p>
    <ul class="mb-4">
      <li>First item in a list</li>
      <li>Second item with <strong>bold text</strong></li>
      <li>Third item</li>
    </ul>
    <p class="mb-4">And an ordered list:</p>
    <ol>
      <li>Step one: Do this</li>
      <li>Step two: Do that</li>
    </ol>
  `,
  productPartNumber: "123-456789876-543",
  specifications: [
    { name: "Material", value: "Stainless Steel" },
    { name: "Weight Capacity", value: "440 lbs" },
    { name: "Warranty", value: "Lifetime Limited" }
  ],
  downloads: [
    { name: "Product Manual", image: "https://via.placeholder.com/100x140?text=PDF", url: "#" },
    { name: "Spec Sheet", image: "https://via.placeholder.com/100x140?text=PDF", url: "#" }
  ]
};

const meta = {
  title: 'Components/Specification',
  component: Specification,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Specification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockSpecificationData
  },
};

export const CustomData: Story = {
  args: {
    data: {
      overview: "<strong>Custom HTML Content</strong><br/><p>This content is rendered via dangerouslySetInnerHTML.</p>",
      productPartNumber: "999-CUSTOM-PART-001",
      specifications: [
        { name: "Custom Spec 1", value: "Value 1" },
        { name: "Custom Spec 2", value: "Value 2" }
      ],
      downloads: [
        { name: "User Manual", image: "https://placehold.co/200x280?text=PDF", url: "#" },
        { name: "Installation Guide", image: "https://placehold.co/200x280?text=PDF", url: "#" }
      ]
    }
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
  args: {
    data: mockSpecificationData,
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    data: mockSpecificationData,
  },
};
