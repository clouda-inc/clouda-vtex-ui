import React, { useState } from 'react';
import { Button } from '../../Button/Button';

// Inline SVG Icons
const ChevronUp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 15L12 9L6 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export interface OrderItemData {
  id: string;
  sku: string;
  orderedQty: number;
  shippedDate: string;
  price: string;
  status: string;
  description: string;
  notes?: string;
  requestedDeliveryDate?: string;
  shippingCarrier?: string;
  trackingInfo?: string;
  invoice?: string;
}

interface OrderItemProps {
  item: OrderItemData;
  selected?: boolean;
  onSelect?: (id: string, selected: boolean) => void;
  onReorder?: (id: string) => void;
  primaryColor?: string;
}

export const OrderItem: React.FC<OrderItemProps> = ({
  item,
  selected = false,
  onSelect,
  onReorder,
  primaryColor = '#564FCC',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-[#E3E4E6] lg:border-b lg:border-t-0 lg:border-x-0 bg-[#F8F8F8] last:border-b-0 mb-4 lg:mb-0 rounded lg:rounded-none">
      {/* Collapsed View (Header) */}
      <div 
        className="flex flex-col lg:flex-row lg:items-center py-[16px] px-[16px] cursor-pointer hover:bg-gray-100 transition-colors relative"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Mobile/Tablet: Checkbox and SKU/Date row */}
        <div className="flex lg:hidden justify-between items-start mb-4 w-full">
           <div className="mr-[16px]" onClick={(e) => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={selected}
              onChange={(e) => onSelect?.(item.id, e.target.checked)}
              className="w-[20px] h-[20px] rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              style={{ accentColor: primaryColor }}
            />
          </div>
          {/* Mobile SKU/Date */}
           <div className="flex justify-between w-full">
               <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-black font-['DM_Sans']">SKU</span>
                   <span className="text-[14px] font-normal text-black font-['DM_Sans']">{item.sku}</span>
               </div>
                <div className="flex flex-col text-right">
                  <span className="text-[14px] font-normal text-black font-['DM_Sans']">{item.shippedDate}</span>
               </div>
           </div>
        </div>

        {/* Desktop Checkbox */}
        <div className="hidden lg:block mr-[16px]" onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => onSelect?.(item.id, e.target.checked)}
            className="w-[20px] h-[20px] rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            style={{ accentColor: primaryColor }}
          />
        </div>

        {/* Grid Data - Adaptive for Mobile/Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 flex-grow items-center w-full">
          {/* Desktop SKU */}
          <div className="hidden lg:flex flex-col">
            <span className="text-[14px] font-bold text-black font-['DM_Sans']">SKU</span>
            <span className="text-[14px] font-normal text-black font-['DM_Sans']">{item.sku}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] lg:text-[14px] font-bold text-black font-['DM_Sans']">Ordered QTY</span>
            <span className="text-[14px] font-normal text-black font-['DM_Sans']">{item.orderedQty}</span>
          </div>
          {/* Desktop Shipped Date */}
           <div className="hidden lg:flex flex-col">
            <span className="text-[14px] font-bold text-black font-['DM_Sans']">Shipped Date</span>
            <span className="text-[14px] font-normal text-black font-['DM_Sans']">{item.shippedDate}</span>
          </div>
           {/* Mobile Shipped Date Placeholder to keep grid structure if needed, or just hide */}
           <div className="flex lg:hidden flex-col">
             <span className="text-[12px] font-bold text-black font-['DM_Sans']">Shipped Date</span>
             <span className="text-[14px] font-normal text-black font-['DM_Sans']">{item.shippedDate}</span>
           </div>

          <div className="flex flex-col">
            <span className="text-[12px] lg:text-[14px] font-bold text-black font-['DM_Sans']">Price</span>
            <span className="text-[14px] font-normal text-black font-['DM_Sans']">{item.price}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] lg:text-[14px] font-bold text-black font-['DM_Sans']">Status</span>
            <span className="text-[14px] font-normal text-black font-['DM_Sans']">{item.status}</span>
          </div>
        </div>

        {/* Expand Icon / Button */}
        <div className="hidden lg:block ml-[16px]">
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>

         {/* Mobile Expand Button */}
         <div className="block lg:hidden w-full mt-4">
            <button className="flex items-center justify-between w-full px-4 py-2 bg-[#F2F4F7] border border-[#E3E4E6] rounded text-[14px] font-bold">
                 <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                 {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </button>
         </div>
      </div>

      {/* Expanded View (Details) */}
      {isExpanded && (
        <div className="px-[16px] pb-[24px] pt-[8px] bg-white border-t border-[#E3E4E6]">
          <div className="flex flex-col lg:flex-row gap-[32px]">
            {/* Item Description */}
            <div className="flex flex-col gap-[8px] flex-[2]">
              <h4 className="text-[16px] font-bold text-black font-['DM_Sans']">Item description</h4>
              <div className="text-[14px] font-normal text-[#341F1A] font-['DM_Sans'] space-y-1">
                 {item.requestedDeliveryDate && <p>Requested delivery date: {item.requestedDeliveryDate}</p>}
                 {/* Replicating the design structure for ship date, carrier etc */}
                 <p>Ship date: {item.shippedDate}</p>
                 {item.shippingCarrier && <p>Shipping Carrier : {item.shippingCarrier}</p>}
                 {item.trackingInfo && <p>Tracking Info: <span style={{ color: primaryColor }}>{item.trackingInfo}</span></p>}
                 {item.invoice && <p>Invoice : <span style={{ color: primaryColor }}>{item.invoice}</span></p>}
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-[8px] flex-1">
                 <h4 className="text-[16px] font-bold text-black font-['DM_Sans']">Notes</h4>
                 <p className="text-[14px] font-normal text-[#341F1A] font-['DM_Sans']">
                   {item.notes || 'No notes available.'}
                 </p>
            </div>
              
            {/* Actions */}
            <div className="flex items-center justify-end flex-1 mt-4 lg:mt-0">
                <Button 
                  variant="primary" 
                  onClick={() => onReorder?.(item.id)}
                  className="hover:opacity-90 transition-opacity w-full lg:w-auto"
                  style={{ backgroundColor: primaryColor }}
                  customColor={primaryColor}
                >
                  Reorder
                </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
