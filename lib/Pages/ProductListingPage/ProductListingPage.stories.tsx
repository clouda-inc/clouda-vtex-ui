import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProductListingPage } from './ProductListingPage';

const meta: Meta<typeof ProductListingPage> = {
  title: 'Pages/ProductListingPage',
  component: ProductListingPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProductListingPage>;

const mockTitle = {
  title: 'Drawer Storage Cabinets (120 Products)',
};

const mockFilterSections = [
    {
        id: 'category-01',
        title: 'Category 01',
        type: 'checkbox' as const,
        options: [
            { label: 'Lorem ipsum cursus', value: '1', checked: true },
            { label: 'Lorem ipsum dignissim', value: '2' },
            { label: 'Lorem ipsum vel', value: '3' },
            { label: 'Lorem ipsum malesuada', value: '4' },
            { label: 'Lorem ipsum', value: '5' },
        ]
    },
    {
        id: 'category-02',
        title: 'Category 02',
        type: 'checkbox' as const,
        options: [
             { label: 'Lorem ipsum cursus', value: '1', checked: true },
            { label: 'Lorem ipsum dignissim', value: '2' },
            { label: 'Lorem ipsum vel', value: '3' },
             { label: 'Lorem ipsum malesuada', value: '4' },
            { label: 'Lorem ipsum', value: '5' },
        ]
    },
    {
        id: 'category-03',
        title: 'Category 03',
        type: 'checkbox' as const,
        options: [
             { label: 'Lorem ipsum cursus', value: '1', checked: true },
            { label: 'Lorem ipsum dignissim', value: '2' },
            { label: 'Lorem ipsum vel', value: '3' },
             { label: 'Lorem ipsum malesuada', value: '4' },
            { label: 'Lorem ipsum', value: '5' },
        ]
    },
     {
        id: 'price-range',
        title: 'Price Range',
        type: 'range' as const,
        min: 0,
        max: 500,
        rangeValue: [0, 500] as [number, number],
    },
];

const mockProducts = Array(8).fill(null).map((_, i) => ({
    id: `product-${i}`,
    title: 'Lorem ipsum tincidunt in',
    image: 'https://placehold.co/254x254/e2e8f0/1e293b?text=Product',
    description: 'Lorem ipsum tincidunt in read more',
    price: 153.00,
    listPrice: i % 2 === 0 ? 180.00 : undefined,
    rating: 4.5,
    reviews: 12,
    sku: 'SKU-12345',
    brand: 'Brand Name',
    specifications: [
        { name: 'Color', value: 'Blue' },
        { name: 'Size', value: 'M' }
    ],
    variant: 'detailed' as const // Explicitly cast as const
}));

const mockInfoCard = {
    title: 'Lorem ipsum ut mi mi',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    primaryButtonLabel: 'Button text',
    secondaryButtonLabel: 'Button text',
    onPrimaryClick: () => console.log('InfoCard Primary Click'),
    onSecondaryClick: () => console.log('InfoCard Secondary Click'),
    imageSrc: 'https://placehold.co/640x400/e2e8f0/1e293b?text=Info+Card'
};

// Interactive Render Component
const InteractiveProductListingPage = (args: any) => {
  const [sections, setSections] = React.useState(args.filterNavigatorProps.sections);

  const handleFilterChange = (sectionId: string, payload: any) => {
    setSections((prevSections: any) => {
      return prevSections.map((section: any) => {
        if (section.id !== sectionId) return section;

        if (section.type === 'checkbox') {
           // payload is { value: string, checked: boolean }
           return {
             ...section,
             options: section.options.map((opt: any) => 
               opt.value === payload.value ? { ...opt, checked: payload.checked } : opt
             )
           };
        } else if (section.type === 'range') {
            // payload is [min, max]
            return {
                ...section,
                rangeValue: payload
            };
        } else if (section.type === 'toggle') {
            // payload is { value: string, checked: boolean }
             return {
             ...section,
             options: section.options.map((opt: any) => 
               opt.value === payload.value ? { ...opt, checked: payload.checked } : opt
             )
           };
        }
        return section;
      });
    });
    console.log('Filter Change:', sectionId, payload);
  };

  const handleClearAll = () => {
      setSections((prevSections: any) => 
        prevSections.map((section: any) => {
            if (section.type === 'checkbox' || section.type === 'toggle') {
                return {
                    ...section,
                    options: section.options.map((opt: any) => ({ ...opt, checked: false }))
                };
            }
            if (section.type === 'range') {
                return {
                    ...section,
                    rangeValue: [section.min, section.max]
                };
            }
            return section;
        })
      );
      console.log('Clear All Filters');
  };

  return (
    <ProductListingPage 
      {...args} 
      filterNavigatorProps={{
          ...args.filterNavigatorProps,
          sections: sections,
          onFilterChange: handleFilterChange,
          onClearAll: handleClearAll
      }} 
    />
  );
};

export const Default: Story = {
  render: (args) => <InteractiveProductListingPage {...args} />,
  args: {
    heroBannerProps: {
        "heading": "",
        "description": "",
        "imageSrc": "https://placehold.co/800?text=Sample+Image&font=roboto",
        "imageAlt": "Hero Banner Image"
    },
    titleProps: mockTitle,
    filterNavigatorProps: {
        sections: mockFilterSections,
        onFilterChange: () => {}, // Handled in render
        onClearAll: () => {}, // Handled in render
    },
    sortToolbarProps: {
        onSortChange: (opt) => console.log('Sort Change:', opt),
        onViewChange: (view) => console.log('View Change:', view),
    },
    productResultProps: {
        products: mockProducts,
        onLoadMore: () => console.log('Load More'),
        addToCartButtonColor: '#4e46b4',
        quantitySelectorColor: '#4e46b4',
    },
    infoCardProps: {
        ...mockInfoCard,
        onPrimaryClick: () => console.log('InfoCard Primary Click'),
        onSecondaryClick: () => console.log('InfoCard Secondary Click'),
        primaryButtonColor: '#4e46b4', // Example custom color
        secondaryButtonColor: '#341f1a', // Example custom color
    },
  },
};
