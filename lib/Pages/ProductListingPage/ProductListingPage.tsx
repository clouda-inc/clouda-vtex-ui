import React from 'react';
import HeroBanner from '../../HeroBanner/HeroBanner';
import type { HeroBannerProps } from '../../HeroBanner/HeroBanner';
import Title from '../../Title/Title';
import type { TitleProps } from '../../Title/Title';
import { FilterNavigator } from '../../FilterNavigator/FilterNavigator';
import type { FilterNavigatorProps } from '../../FilterNavigator/FilterNavigator';
import { SortToolbar } from '../../SortToolbar/SortToolbar';
import type { SortToolbarProps } from '../../SortToolbar/SortToolbar';
import { ProductResult } from '../../ProductResult/ProductResult';
import type { ProductResultProps } from '../../ProductResult/ProductResult';
import InfoCard from '../../InfoCard/InfoCard';
import type { InfoCardProps } from '../../InfoCard/InfoCard';

export interface ProductListingPageProps {
  heroBannerProps: HeroBannerProps;
  titleProps: TitleProps;
  filterNavigatorProps: FilterNavigatorProps;
  sortToolbarProps: SortToolbarProps;
  productResultProps: ProductResultProps;
  infoCardProps: InfoCardProps;
  className?: string;
}

export const ProductListingPage: React.FC<ProductListingPageProps> = ({
  heroBannerProps,
  titleProps,
  filterNavigatorProps,
  sortToolbarProps,
  productResultProps,
  infoCardProps,
  className = '',
}) => {
  return (
    <div className={`w-full bg-white ${className}`}>
        {/* Hero Banner Section */}
        <section className="w-full mb-10">
            <HeroBanner {...heroBannerProps} />
        </section>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            {/* Title and Sort Toolbar Section */}
            <section className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                 <Title {...titleProps} className="!gap-2 md:!gap-4" />
                 <SortToolbar {...sortToolbarProps} />
            </section>

            <div className="flex flex-col lg:flex-row gap-8 relative">
                 {/* Sidebar / Filter Section */}
                 <aside className="w-full lg:w-[297px] flex-shrink-0">
                     <FilterNavigator {...filterNavigatorProps} />
                 </aside>

                 {/* Product Grid Section */}
                 <main className="flex-1">
                     <ProductResult {...productResultProps} />
                 </main>
            </div>
        </div>

        {/* Info Card Section */}
        <section className="w-full mt-20 max-w-[1440px] mx-auto px-4 md:px-8 mb-20">
             <InfoCard {...infoCardProps} />
        </section>
    </div>
  );
};

export default ProductListingPage;
