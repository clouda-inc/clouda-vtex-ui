import quoteIcon from './assets/quote-icon.svg';
import placeholderUser from './assets/placeholder-user.svg';

export interface TestimonialProps {
    /**
     * Additional CSS classes for component container
     */
    blockClass?: string;
    /**
     * Main heading text
     */
    heading?: string;
    /**
     * The testimonial quote content
     */
    quote?: string;
    /**
     * Name of the author
     */
    authorName?: string;
    /**
     * Title or role of the author
     */
    authorTitle?: string;
    /**
     * URL for the author's image.
     * Defaults to a placeholder if not provided.
     */
    imageSrc?: string;
}

export const Testimonial = ({
    blockClass = "",
    heading = "Lorem ipsum ut mi mi",
    quote = "Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.Lorem ipsum dolor sit amet consectetur. Consectetur libero vitae pretium et faucibus elementum tortor lacus rutrum.",
    authorName = "Lorem ipsum dolor",
    authorTitle = "Lorem ipsum dolor",
    imageSrc,
}: TestimonialProps) => {
    return (
        <div
            className={`clouda-testimonial bg-white flex flex-col items-start w-full relative px-5 py-8 max-w-[375px] md:max-w-[1440px] md:px-10 md:py-12 lg:px-20 gap-6 md:gap-12 ${blockClass}`}
            data-testid="testimonial"
        >
            {/* Heading */}
            <h3 className="clouda-testimonial__heading font-['DM_Sans'] text-lg md:text-xl font-normal text-black leading-7 md:leading-8">
                {heading}
            </h3>

            {/* Quote Section */}
            <div className="flex flex-col items-start gap-6 md:gap-6 w-full">
                {/* Icon */}
                <div className="clouda-testimonial__icon w-[30px] h-[20px] relative shrink-0">
                    <img
                        src={quoteIcon}
                        alt="Quote"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Quote Text */}
                <p className="clouda-testimonial__quote font-['DM_Sans'] text-base font-normal text-black leading-6 md:text-base md:leading-6">
                    {quote}
                </p>
            </div>

            {/* Author Section */}
            <div className="clouda-testimonial__author flex items-center gap-4 mt-2 md:mt-0">
                <div className="clouda-testimonial__avatar w-[60px] h-[60px] rounded-full overflow-hidden shrink-0">
                    <img
                        src={imageSrc || placeholderUser}
                        alt={authorName}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-start">
                    <span className="clouda-testimonial__author-name font-['DM_Sans'] text-base font-bold text-black leading-6">
                        {authorName}
                    </span>
                    <span className="clouda-testimonial__author-title font-['DM_Sans'] text-base font-normal text-gray-500 leading-6">
                        {authorTitle}
                    </span>
                </div>
            </div>
        </div>
    );
}
