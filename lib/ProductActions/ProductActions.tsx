import React from 'react';
import { Button } from '../Button/Button';
import ButtonWithText from '../ButtonWithText/ButtonWithText';

// Simple Icons
const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H4L6.68 14.39C6.77144 14.8504 7.02191 15.264 7.38755 15.5583C7.75318 15.8526 8.2107 16.009 8.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="21" r="1.5" fill="black"/>
    <circle cx="20" cy="21" r="1.5" fill="black"/>
  </svg>
);

const HeartIcon = () => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
   </svg>
);

export interface ProductActionsProps {
  onGetPrice?: () => void;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onGetQuote?: () => void;
  className?: string;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  onGetPrice,
  onAddToCart,
  onAddToWishlist,
  onGetQuote,
  className = ''
}) => {
  return (
    <div className={`flex flex-col gap-6 ${className} font-['Proxima_Nova',_sans-serif]`}>
       {/* Top Row: Price, Cart, Wishlist */}
       <div className="flex flex-wrap gap-4 items-center">
          <Button 
            variant="outline" 
            shape="pill" 
            onClick={onGetPrice}
            className="border-black text-black text-normal min-w-[200px]"
          >
            Get Price & Availability
          </Button>

       <Button 
            variant="custom" 
            shape="pill" 
            iconLeft={<CartIcon />}
            onClick={onAddToCart}
            className="bg-[#FFDB0A] text-black hover:bg-[#ebd035] font-normal min-w-[150px]"
          >
            Add to cart
          </Button>

           <Button 
            variant="outline" 
            shape="pill" 
            iconLeft={<HeartIcon />}
            onClick={onAddToWishlist}
            className="border-black text-black font-normal min-w-[120px]"
          >
            Wishlist
          </Button>
       </div>

       {/* Bottom Row: Quote Text + Action */}
       <ButtonWithText 
         text="Looking for customised products? Get a quote from our experts."
         buttonText="Get a Quote"
         onButtonClick={onGetQuote}
         buttonProps={{
           variant: 'custom',
           shape: 'pill',
           className: 'bg-[#FFDB0A] text-black hover:bg-[#ebd035] font-normal'
         }}
       />
    </div>
  );
};

export default ProductActions;
