import React, { useState } from 'react';
import { DetailsHeader } from './components/DetailsHeader';
import { OrderInfoSection } from './components/OrderInfoSection';
import { BulkActions } from './components/BulkActions';
import { OrderItemsList } from './components/OrderItemsList';
import type { OrderItemData } from './components/OrderItem';

// Inline SVG Back Arrow
const BackArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 6H0.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 11.25L0.75 6L6 0.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export interface OrderData {
  id: string;
  details: string;
  billingAddress: string;
  shippingAddress: string;
  items: OrderItemData[];
}

interface OrderDetailsProps {
  order: OrderData;
  onBack?: () => void;
  onReorderAll?: () => void;
  onExport?: () => void;
  primaryColor?: string;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({
  order,
  onBack,
  onReorderAll,
  onExport,
  primaryColor = '#564FCC',
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectItem = (id: string, selected: boolean) => {
    if (selected) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(order.items.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleBulkAction = (action: string) => {
    console.log(`Performing ${action} on items:`, selectedItems);
    // Implement bulk action logic here
  };

  const handleReorderItem = (id: string) => {
    console.log(`Reordering item: ${id}`);
    // Implement reorder logic
  };

  return (
    <div className="flex flex-col w-full py-[32px]">
      {/* Back Link */}
      <div 
        className="flex items-center gap-[10px] mb-[32px] cursor-pointer hover:opacity-70 w-fit"
        onClick={onBack}
      >
        <BackArrow />
        <span className="font-['DM_Sans'] text-[16px] font-normal leading-[24px] text-black">
          Back to Previous Page
        </span>
      </div>

      {/* Header */}
      <DetailsHeader 
        onReorderAll={onReorderAll}
        onExport={onExport}
        primaryColor={primaryColor}
      />

      {/* Info Section */}
      <OrderInfoSection 
        order={{
          details: order.details,
          billingAddress: order.billingAddress,
          shippingAddress: order.shippingAddress,
        }}
      />

      {/* Bulk Actions - Desktop Only (Above items) - Visible on Large screens */}
      <div className="hidden lg:block">
        <BulkActions 
          onProceed={handleBulkAction} 
          itemsSelected={selectedItems.length > 0}
          primaryColor={primaryColor}
        />
      </div>

      {/* Items List */}
      <OrderItemsList 
        items={order.items}
        selectedItems={selectedItems}
        onSelectItem={handleSelectItem}
        onSelectAll={handleSelectAll}
        onReorderItem={handleReorderItem}
        primaryColor={primaryColor}
      />

      {/* Bulk Actions - Mobile/Tablet Only (Below items) - Visible below Large screens */}
      <div className="block lg:hidden">
        <BulkActions 
          onProceed={handleBulkAction} 
          itemsSelected={selectedItems.length > 0}
          primaryColor={primaryColor}
        />
      </div>
    </div>
  );
};
