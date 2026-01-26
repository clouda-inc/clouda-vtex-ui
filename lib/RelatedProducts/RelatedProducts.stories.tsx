import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RelatedProducts from './RelatedProducts';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const meta: Meta<typeof RelatedProducts> = {
    title: 'Components/RelatedProducts',
    component: RelatedProducts,
    tags: ['autodocs'],
    argTypes: {
        attributes: { control: 'object' },
        onQuoteClick: { action: 'clicked' },
        onQuantityChange: { action: 'quantity changed' },
    },
};

export default meta;
type Story = StoryObj<typeof RelatedProducts>;

export const Default: Story = {
    args: {
        title: 'Lorem ipsum tincidunt in',
        description: 'Lorem ipsum dolor sit amet',
        initialQuantity: 1,
        attributes: [
            'Lorem ipsum tincidunt in',
            'Consectetur adipiscing elit',
            'Sed do eiusmod tempor',
            'Incididunt ut labore',
            'Et dolore magna aliqua'
        ],
    },
};

export const GridView: Story = {
    render: (args) => (
        <div className="flex gap-4 overflow-x-auto p-4 bg-gray-50">
            <RelatedProducts {...args} />
            <RelatedProducts
                {...args}
                title="Another Product"
                attributes={[
                    'Different text here',
                    'More features',
                    'High quality',
                    'Durable material',
                    'Warranty included'
                ]}
            />
            <RelatedProducts
                {...args}
                title="Third Item"
            />
        </div>
    ),
    args: {
        ...Default.args,
    }
};

// Custom Arrow Components
const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#4f46e5", // Indigo-600 approx matching design
                borderRadius: "4px",
                width: "40px",
                height: "40px",
                zIndex: 1,
                right: "-20px"
            }}
            onClick={onClick}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#4f46e5",
                borderRadius: "4px",
                width: "40px",
                height: "40px",
                zIndex: 1,
                left: "-20px"
            }}
            onClick={onClick}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

export const Carousel: Story = {
    render: (args) => {
        const sliderRef = React.useRef<Slider>(null);

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };

        // Generate mock items
        const items = Array(8).fill(null).map((_, i) => ({
            ...args,
            title: `Product ${i + 1}`,
            initialQuantity: 1,
        }));

        return (
            <div className="p-12 bg-white container mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold font-['DM_Sans']">Related Products</h2>
                    <div className="flex gap-2">
                        <PrevArrow className="cursor-pointer" onClick={() => sliderRef.current?.slickPrev()} style={{ position: 'static' }} />
                        <NextArrow className="cursor-pointer" onClick={() => sliderRef.current?.slickNext()} style={{ position: 'static' }} />
                    </div>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {items.map((item, index) => (
                        <div key={index} className="px-3">
                            <RelatedProducts {...item} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    },
    args: {
        ...Default.args
    }
};

export const NoAttributes: Story = {
    args: {
        title: 'Simple Product',
        attributes: [],
    },
};
