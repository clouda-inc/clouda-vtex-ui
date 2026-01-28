import React from 'react';
import { ImageGallery, type ImageGalleryProps } from '../../ImageGallery/ImageGallery';
import { ProductConfiguration, type ProductConfigurationProps } from '../../ProductConfiguration/ProductConfiguration';
import ProductDetailsSection, { type ProductDetailsSectionProps } from '../../ProductDetailsSection/ProductDetailsSection';
import { RelatedProducts, type RelatedProductsProps } from '../../RelatedProducts/RelatedProducts';
import { Button } from '../../Button/Button';

export interface ProductPageProps {
  galleryProps: ImageGalleryProps;
  configProps: ProductConfigurationProps;
  detailsProps: ProductDetailsSectionProps;
  relatedProductsProps: RelatedProductsProps;
  /**
   * Title of the product
   */
  productTitle: string;
  /**
   * Intro/Description text below title
   */
  productDescription: string;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  galleryProps,
  configProps,
  detailsProps,
  relatedProductsProps,
  productTitle,
  productDescription
}) => {
  // We can manage state here or pass it down. 
  // For the visual implementation, we assume props handle content.

  return (
    <div className="w-full bg-white font-['DM_Sans',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-8">
        
        {/* Top Section: Gallery + Configuration */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
          
          {/* Left Column: Image Gallery */}
          <div className="w-full lg:w-1/2">
             <div className="bg-[#f0f0f0] rounded-none p-0 mb-4 flex items-center justify-center">
                <ImageGallery {...galleryProps} blockClass="w-full" />
             </div>
          </div>

          {/* Right Column: Info & Configuration */}
          <div className="w-full lg:w-1/2 flex flex-col pr-0 lg:pr-12">
            <h1 className="text-[32px] md:text-[40px] font-bold text-black mb-4 leading-tight">
              {productTitle}
            </h1>
            <p className="text-base text-[#4B4B4B] mb-8 leading-normal">
              {productDescription}
            </p>

            {/* Scrollable Configuration Area */}
            <div className="flex-1 w-full mb-6">
                <ProductConfiguration 
                    {...configProps} 
                    specsHeight="400px" // enabling scroll
                    blockClass="w-full"
                />
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full">
                {/* 
                   Based on screenshot:
                   [Get Price & Avail] (Primary, Long)
                   [Add to cart] (Primary, Medium)
                   [Wishlist] (Primary, Medium)
                */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <Button 
                        variant="primary" 
                        customColor="#4e46b4" 
                        className="flex-1 h-[48px] whitespace-nowrap"
                        icon={
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                               <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                            </svg>
                        }
                        showIcon
                    >
                        Get Price & Availability
                    </Button>
                    
                    <Button 
                        variant="primary" 
                        customColor="#4e46b4"
                        className="flex-none px-6 h-[48px] whitespace-nowrap"
                        icon={
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        }
                        showIcon
                    >
                        Add to cart
                    </Button>

                    <Button 
                        variant="primary" 
                        customColor="#4e46b4"
                        className="flex-none px-6 h-[48px] whitespace-nowrap"
                        icon={
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="white"/>
                            </svg>
                        }
                        showIcon
                    >
                        Wishlist
                    </Button>
                </div>
            </div>

             {/* Quote Section */}
             <div className="flex flex-col md:flex-row items-center justify-end gap-4 w-full">
                <p className="text-[14px] leading-[20px] font-normal text-black font-['DM_Sans',sans-serif] text-right">
                    Looking for customised products? Get a quote from our experts.
                </p>
                <Button 
                    variant="primary" 
                    customColor="#4e46b4"
                    className="w-full md:w-auto px-8 h-[40px] text-sm"
                >
                    Get a Quote
                </Button>
             </div>

          </div>
        </div>

        {/* Product Details Tabs Section */}
        <div className="w-full mb-16 px-0">
            <ProductDetailsSection {...detailsProps} />
        </div>

        {/* Related Products Section */}
        <div className="w-full bg-[#f8f8f8] py-8 rounded-none">
             <RelatedProducts {...relatedProductsProps} />
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
