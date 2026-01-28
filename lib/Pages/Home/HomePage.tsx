import React from 'react';
import HomeHeroBanner from '../../HomeHeroBanner/HomeHeroBanner';
import { Button } from '../../Button/Button';
import HomeTitle from '../../HomeTitle/HomeTitle';
import HomeNumbers from '../../HomeNumbers/HomeNumbers';
import Feature from '../../Feature/Feature';
import FeatureBrands from '../../FeatureBrands/FeatureBrands';
import IconCardCarousel from '../../IconCardCarousel/IconCardCarousel';
import { Testimonial } from '../../Testimonial/Testimonial';
import StandardCardCarousel from '../../StandardCardCarousel/StandardCardCarousel';
import featureImage from './assets/feature-image.svg';
import brandLogo from './assets/brand-logo.svg';

// Import assets if needed, or use placeholders
const PLACEHOLDER_IMAGE = featureImage;

export const HomePage: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center bg-white">
            {/* 1. HomeHeroBanner */}
            <div className="w-full max-w-[100%]">
                <HomeHeroBanner
                    title="Lorem ipsum ut mi mi"
                    description="Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh."
                    ctaText="Button text"
                    backgroundImage={PLACEHOLDER_IMAGE}
                />
            </div>

            {/* 2. Button */}
            {/* 2. Intro Section with Button */}
            <div className="w-full max-w-[1440px] px-5 md:px-10 lg:px-20 py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
                    <p className="font-['DM_Sans'] text-base text-gray-900 leading-relaxed max-w-[800px]">
                        Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.
                    </p>
                    <div className="shrink-0">
                        <Button variant="primary" customColor="#4E46B4" className="!rounded-lg">
                            Button text
                        </Button>
                    </div>
                </div>
            </div>

            {/* 3. HomeTitle */}
            <HomeTitle
                eyebrow="Lorem ipsum ut mi mi"
                title="Lorem ipsum ut mi mi"
                description="Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh."
            />

            {/* 4. HomeNumbers */}
            <HomeNumbers
                items={[
                    { title: "200+", description: "Lorem ipsum dolor sit amet consectetur." },
                    { title: "200+", description: "Lorem ipsum dolor sit amet consectetur." },
                    { title: "200+", description: "Lorem ipsum dolor sit amet consectetur." },
                    { title: "200+", description: "Lorem ipsum dolor sit amet consectetur." },
                ]}
            />

            {/* 5. Feature (1) */}
            <Feature
                eyebrow="Lorem ipsum ut mi mi"
                title="Lorem ipsum ut mi mi"
                description="Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh."
                buttonText="Button text"
                imageSrc={PLACEHOLDER_IMAGE}
            />

            {/* 6. Feature (2) */}
            <Feature
                eyebrow="Lorem ipsum ut mi mi"
                title="Lorem ipsum ut mi mi"
                description="Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh."
                buttonText="Button text"
                imageSrc={PLACEHOLDER_IMAGE}
            />

            {/* 7. FeatureBrands */}
            <FeatureBrands
                eyebrow="Lorem ipsum ut mi mi"
                title="Lorem ipsum ut mi mi"
                description="Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh."
                buttonText="Button text"
                brandLogos={Array(8).fill({ src: brandLogo, alt: "Brand Logo" })}
                imageSrc={PLACEHOLDER_IMAGE}
            />

            {/* 8. HomeTitle */}
            <HomeTitle
                eyebrow="Lorem ipsum ut mi mi"
                title="Lorem ipsum ut mi mi"
                description="Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh."
            />

            {/* 9. IconCardCarousel */}
            <div className="w-full max-w-[1440px]">
                <IconCardCarousel
                    cards={Array(6).fill({
                        imageSrc: featureImage,
                        icon: (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        ),
                        title: "Lorem Ipsum",
                        description: "Lorem ipsum dolor sit amet consectetur.",
                        buttonText: "Button text",
                    })}
                />
            </div>

            {/* 10. Testimonial */}
            <div className="w-full max-w-[1440px] flex justify-center">
                <Testimonial
                    heading="Lorem ipsum ut mi mi"
                    quote="Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum."
                    authorName="Lorem ipsum dolor"
                    authorTitle="Lorem ipsum dolor"
                />
            </div>

            {/* 11. HomeTitle */}
            <HomeTitle
                eyebrow="Lorem ipsum ut mi mi"
                title="Lorem ipsum ut mi mi"
                description="Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh."
            />

            {/* 12. StandardCardCarousel */}
            <div className="w-full max-w-[1440px]">
                <StandardCardCarousel
                    cards={Array(8).fill({
                        imageSrc: PLACEHOLDER_IMAGE,
                        title: "Lorem Ipsum",
                        description: "Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.",
                        date: "January 28, 2026",
                        buttonText: "Button",
                    })}
                />
            </div>
        </div>
    );
};

export default HomePage;
