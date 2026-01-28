import type { Meta, StoryObj } from '@storybook/react';
import { ProductPage } from './ProductPage';

const meta: Meta<typeof ProductPage> = {
  title: 'Pages/ProductPage',
  component: ProductPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProductPage>;

const mockImages = [
  { url: 'https://placehold.co/600x600', alternateName: 'Product 1' },
  { url: 'https://placehold.co/600x600', alternateName: 'Product 2' },
  { url: 'https://placehold.co/600x600', alternateName: 'Product 3' },
  { url: 'https://placehold.co/600x600', alternateName: 'Product 4' },
  { url: 'https://placehold.co/600x600', alternateName: 'Product 5' },
];

export const Default: Story = {
  args: {
    productTitle: 'Lorem ipsum',
    productDescription: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Read More',
    galleryProps: {
      images: mockImages,
    },
    configProps: {
      partNumber: 'ABC-1234-XYZ',
      selectedItemColor: '#4e46b4',
      specifications: [
        {
          id: 'spec1',
          title: 'Lorem ipsum ut molestie',
          mode: 'pills',
          options: [
            { label: 'Lorem ipsum', value: '1' },
            { label: 'Lorem ipsum', value: '2' },
            { label: 'Lorem ipsum', value: '3' },
          ]
        },
        {
           id: 'spec2',
           title: 'Lorem ipsum ut molestie',
           mode: 'pills',
           options: [
             { label: 'Lorem ipsum', value: '1' },
             { label: 'Lorem ipsum', value: '2' },
             { label: 'Lorem ipsum', value: '3' },
           ]
        },
        {
           id: 'spec3',
           title: 'Lorem ipsum ut molestie',
           mode: 'pills',
           options: [
             { label: 'Lorem ipsum', value: '1' },
             { label: 'Lorem ipsum', value: '2' },
             { label: 'Lorem ipsum', value: '3' },
           ]
        },
        {
           id: 'spec4',
           title: 'Lorem ipsum ut molestie',
           mode: 'pills',
           options: [
             { label: 'Lorem ipsum', value: '1' },
             { label: 'Lorem ipsum', value: '2' },
             { label: 'Lorem ipsum', value: '3' },
           ]
        },
         {
           id: 'color1',
           title: 'Lorem ipsum',
           mode: 'color-dropdown',
           options: [
             { label: 'Yellow', value: 'y', color: '#FACC15' },
             { label: 'Blue', value: 'b', color: '#3B82F6' },
             { label: 'Red', value: 'r', color: '#EF4444' },
           ]
        },
        {
           id: 'color2',
           title: 'Lorem ipsum',
           mode: 'color-dropdown',
           options: [
             { label: 'Gray', value: 'g', color: '#6B7280' },
             { label: 'Black', value: 'bl', color: '#000000' },
           ]
        }
      ],
      quantityProps: {
          initialValue: 2,
          min: 1,
          max: 99
      },
      specsHeight: '400px'
    },
    detailsProps: {
      overviewHtml: `
        <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h3 class="text-xl font-bold mb-2">Lorem ipsum</h3>
        <ul class="list-disc pl-5 mt-4 space-y-2">
            <li>Lorem ipsum ullamcorper lobortis proin Lorem ipsum nunc scelerisque magna ut tellus felis tellus ornare ut vel vel fringilla amet.</li>
            <li>Lorem ipsum ullamcorper lobortis proin Lorem ipsum nunc scelerisque magna ut tellus felis tellus ornare ut vel vel fringilla amet.</li>
            <li>Lorem ipsum ullamcorper lobortis proin Lorem ipsum nunc scelerisque magna ut tellus felis tellus ornare ut vel vel fringilla amet.</li>
            <li>Lorem ipsum ullamcorper lobortis proin Lorem ipsum nunc scelerisque magna ut tellus felis tellus ornare ut vel vel fringilla amet.</li>
            <li>Lorem ipsum ullamcorper lobortis proin Lorem ipsum nunc scelerisque magna ut tellus felis tellus ornare ut vel vel fringilla amet.</li>
            <li>Lorem ipsum ullamcorper lobortis proin Lorem ipsum nunc scelerisque magna ut tellus felis tellus ornare ut vel vel fringilla amet.</li>
        </ul>
      `,
      specifications: [
         { name: 'Lorem ipsum', value: 'Lorem ipsum' },
         { name: 'Lorem ipsum', value: 'Lorem ipsum' },
      ],
      partNumber: 'ABC-123-DEF',
      downloads: []
    },
    relatedProductsProps: {
      title: 'Related Products',
      products: Array(6).fill({
         brand: 'Brand',
         name: 'Lorem ipsum tincidunt in',
         price: '$ 1.234,90',
         listPrice: '$ 1.500,00', // Optional
         sku: 'REF-123456',
         imageUrl: 'https://placehold.co/300x300',
         attributes: [
           'Lorem ipsum tincidunt in',
           'Lorem ipsum tincidunt in',
           'Lorem ipsum tincidunt in',
           'Lorem ipsum tincidunt in'
         ],
         quantitySelectorColor: '#FACC15', // Matches Yellow/Orange from screenshot (or user request)
         buttonColor: '#4e46b4' // Keep primary blue for the button
      })
    }
  },
};
