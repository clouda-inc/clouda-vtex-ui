import React from 'react';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { Button } from '../Button/Button';

interface NewsletterProps {
  title: string;
  description: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full bg-white py-16 px-4 flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
             <ProductInfo 
                title={title}
                description={description}
                alignment="center"
            />
        </div>
        
        <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center mt-8">
            <input 
                type="text" 
                placeholder="First Name" 
                className="border border-gray-300 rounded p-3 w-full md:w-[300px] focus:outline-none focus:border-black"
            />
            <input 
                type="email" 
                placeholder="Email" 
                className="border border-gray-300 rounded p-3 w-full md:w-[300px] focus:outline-none focus:border-black"
            />
        </div>

        <Button 
            variant="primary" 
            shape="pill"
            className="!bg-[#FFDB0A] !text-black hover:!bg-[#eecb09] border-none font-bold px-12 py-3 h-auto mt-4 uppercase"
        >
            SUBSCRIBE
        </Button>

        <p className="text-gray-500 text-sm mt-4">
            By submitting your information, you agree to our use of your data in accordance with our <a href="#" className="text-[#006fff] underline">Privacy Policy.</a>
        </p>
      </div>
    </div>
  );
};
