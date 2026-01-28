import React from 'react';

export interface HomeNumbersItem {
    title: string;
    description: string;
}

export interface HomeNumbersProps {
    items: HomeNumbersItem[];
}

export const HomeNumbers: React.FC<HomeNumbersProps> = ({ items }) => {
    return (
        <div className="home-numbers bg-white flex flex-col items-center justify-center w-full relative">
            <div className="home-numbers__container flex flex-col items-center py-12 px-5 md:px-10 lg:px-20 w-full max-w-[1440px]">
                <div className="home-numbers__content flex flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-between w-full max-w-[1280px] gap-8 md:gap-y-12">
                    {items.map((item, index) => (
                        <div key={index} className="home-numbers__item flex flex-col items-center text-black gap-6">
                            <p className="home-numbers__title font-bold text-[32px] leading-[40px] tracking-[-0.5px] font-['DM_Sans',sans-serif]">
                                {item.title}
                            </p>
                            <p className="home-numbers__description font-normal text-[16px] leading-[24px] w-[288px] font-['DM_Sans',sans-serif]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeNumbers;
