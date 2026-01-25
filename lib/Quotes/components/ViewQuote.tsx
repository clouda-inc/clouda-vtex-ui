import React from 'react';
import { Button } from '../../Button/Button';

// Interfaces for the detailed view
export interface ProductItem {
    id: string;
    name: string;
    sku: string;
    image: string;
    price: number;
    quantity: number;
    total: number;
}

export interface QuoteDetail {
    id: string;
    quotationNumber: string;
    items: ProductItem[];
    salesRep: string;
    issuedDate: string;
    expiredDate: string;
    subTotal: number;
    shippingCost: number;
    tax: number;
    grandTotal: number;
}

interface ViewQuoteProps {
    data: QuoteDetail;
    onClose: () => void;
    primaryColor?: string;
}

const DownloadIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.577L8.461 12.039L9.169 11.319L11.5 13.65V5H12.5V13.65L14.83 11.32L15.539 12.039L12 15.577ZM6.616 19C6.15533 19 5.771 18.846 5.463 18.538C5.155 18.23 5.00067 17.8453 5 17.384V14.961H6V17.384C6 17.538 6.064 17.6793 6.192 17.808C6.32 17.9367 6.461 18.0007 6.615 18H17.385C17.5383 18 17.6793 17.936 17.808 17.808C17.9367 17.68 18.0007 17.5387 18 17.384V14.961H19V17.384C19 17.8447 18.846 18.229 18.538 18.537C18.23 18.845 17.8453 18.9993 17.384 19H6.616Z" fill="currentColor"/>
    </svg>
)

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M18 6L6 18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M6 6L18 18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
   </svg>
)

export const ViewQuote: React.FC<ViewQuoteProps> = ({
    data,
    onClose,
}) => {
    return (
        <div className="bg-white w-full max-w-[1440px] h-full lg:h-[90vh] overflow-y-auto relative flex flex-col font-['DM_Sans']">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 lg:p-8 lg:pb-0 gap-4 lg:gap-0 shrink-0">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl lg:text-[32px] font-bold text-[#1A1A1A] leading-8 lg:leading-[40px] tracking-[-0.5px]">
                        Quote #{data.quotationNumber}
                    </h1>
                    <span className="text-base font-normal text-gray-500 md:hidden">
                        {data.items.length} Products
                    </span>
                </div>
                
                <div className="flex flex-col-reverse md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
                     <Button variant="outline" className="font-bold text-sm text-[#1A1A1A] border-gray-300 gap-2 h-10 px-4 justify-center w-full md:w-auto">
                        <DownloadIcon />
                        Export
                    </Button>
                    {/* Close button - absolute on mobile top right, inline on desktop */}
                    <div className="absolute top-4 right-4 md:static cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={onClose}>
                        <CloseIcon />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row p-4 lg:p-8 gap-4 lg:gap-8 h-auto lg:h-full lg:pb-8">
                {/* Left Column: Products List */}
                <div className="flex-1 bg-white border-0 md:border border-gray-200 rounded-lg md:p-6">
                    <h2 className="hidden md:block text-[24px] font-normal text-[#1A1A1A] mb-6">{data.items.length} Products</h2>
                    
                    {/* Tablet/Desktop Table Header */}
                    <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr] gap-4 mb-4 text-sm font-normal text-[#1A1A1A] pb-2">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Qty</div>
                        <div className="text-right">Total</div>
                    </div>

                    {/* Products */}
                    <div className="flex flex-col gap-4 lg:gap-6">
                        {data.items.map((item) => (
                            <div key={item.id} className="flex flex-col md:grid md:grid-cols-[3fr_1fr_1fr_1fr] md:gap-4 md:items-center md:border-b md:border-gray-100 md:last:border-0 md:pb-6 md:last:pb-0 border border-gray-200 md:border-0 rounded-lg p-4 md:p-0">
                                {/* Mobile/Desktop Common: Image & Name */}
                                <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0">
                                    <div className="w-[72px] h-[72px] bg-[#F4F4F4] rounded flex items-center justify-center shrink-0">
                                        <img src={item.image || "https://placehold.co/72x72/F4F4F4/cccccc?text=Img"} alt={item.name} className="w-full h-full object-cover rounded mix-blend-multiply" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs text-gray-500">{item.sku}</span>
                                        <span className="text-base font-bold text-[#1A1A1A]">{item.name}</span>
                                    </div>
                                </div>
                                
                                {/* Mobile Grid for details */}
                                <div className="grid grid-cols-3 gap-4 md:contents">
                                    <div className="flex flex-col md:block">
                                        <span className="text-xs text-gray-500 md:hidden mb-1">Price</span>
                                        <span className="text-sm text-[#1A1A1A]">${item.price}</span>
                                    </div>
                                    <div className="flex flex-col md:block">
                                        <span className="text-xs text-gray-500 md:hidden mb-1">Qty</span>
                                        <span className="text-sm text-[#1A1A1A]">{item.quantity}</span>
                                    </div>
                                    <div className="flex flex-col md:block text-right">
                                        <span className="text-xs text-gray-500 md:hidden mb-1">Total</span>
                                        <span className="text-sm text-[#1A1A1A]">${item.total}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Details & Summary */}
                <div className="w-full lg:w-[400px] grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-6 shrink-0 lg:mb-0 pb-10 md:pb-0">
                    {/* Details Card */}
                    <div className="bg-[#F9F9F9] border border-gray-200 rounded-lg p-6">
                        <h2 className="text-[24px] font-normal text-[#1A1A1A] mb-6">Details</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-normal text-[#1A1A1A]">Sales Rep</span>
                                <span className="text-sm font-normal text-[#1A1A1A]">{data.salesRep}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-normal text-[#1A1A1A]">Issued Date</span>
                                <span className="text-sm font-normal text-[#1A1A1A]">{data.issuedDate}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-normal text-[#1A1A1A]">Expired Date</span>
                                <span className="text-sm font-normal text-[#1A1A1A]">{data.expiredDate}</span>
                            </div>
                        </div>
                    </div>

                    {/* Summary Card */}
                    <div className="bg-[#F9F9F9] border border-gray-200 rounded-lg p-6">
                        <h2 className="text-[24px] font-normal text-[#1A1A1A] mb-6">Summary</h2>
                        <div className="flex flex-col gap-4 mb-6">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-normal text-[#1A1A1A]">Sub Total</span>
                                <span className="text-base font-bold text-[#1A1A1A]">${data.subTotal}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-normal text-[#1A1A1A]">Shipping Cost</span>
                                <span className="text-sm font-normal text-[#1A1A1A]">${data.shippingCost}</span>
                            </div>
                             <div className="flex justify-between items-center">
                                <span className="text-sm font-normal text-[#1A1A1A]">Tax</span>
                                <span className="text-sm font-normal text-[#1A1A1A]">${data.tax}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                            <span className="text-base font-normal text-[#1A1A1A]">Grand Total</span>
                            <span className="text-lg font-bold text-[#1A1A1A]">${data.grandTotal}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
