import React from 'react';

export interface HomeTitleProps {
    /**
     * Eyebrow text above the title
     */
    eyebrow?: string;
    /**
     * Main heading title
     */
    title: string;
    /**
     * Description text
     */
    description?: string;
    /**
     * Custom block class for styling extensibility
     */
    blockClass?: string;
}

export const HomeTitle: React.FC<HomeTitleProps> = ({
    eyebrow = 'Lorem ipsum ut mi mi',
    title = 'Lorem ipsum ut mi mi',
    description = 'Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum. Imperdiet nulla eu eget amet. Sit sit vel faucibus mattis ut dolor nunc sit. Sit turpis magna id nibh.',
    blockClass = '',
}) => {
    return (
        <div className={`w-full max-w-[1440px] mx-auto bg-white px-5 py-12 md:px-10 md:py-12 lg:px-20 ${blockClass}`}>
            <div className="flex flex-col gap-6 w-full max-w-[625px]">
                <div className="flex flex-col gap-4">
                    {eyebrow && (
                        <p className="font-['DM_Sans'] text-xl font-normal text-gray-900 leading-8">
                            {eyebrow}
                        </p>
                    )}
                    <h2 className="font-['DM_Sans'] text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                        {title}
                    </h2>
                </div>
                {description && (
                    <p className="font-['DM_Sans'] text-base font-normal text-gray-900 leading-6">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default HomeTitle;
