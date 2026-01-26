import React from 'react';
import { OrderItem } from './OrderItem';
import type { OrderItemData } from './OrderItem';

interface OrderItemsListProps {
  items: OrderItemData[];
  selectedItems: string[];
  onSelectItem: (id: string, selected: boolean) => void;
  onReorderItem: (id: string) => void;
  onSelectAll: (checked: boolean) => void;
  primaryColor?: string;
}

export const OrderItemsList: React.FC<OrderItemsListProps> = ({
  items,
  selectedItems,
  onSelectItem,
  onReorderItem,
  onSelectAll,
  primaryColor = '#564FCC',
}) => {
  const allSelected = items.length > 0 && selectedItems.length === items.length;

  return (
    <div className="w-full mt-[24px]">
      {/* Table Header - Hidden on Mobile/Tablet */}
      <div className="hidden lg:flex items-center px-[16px] py-[12px] bg-[#5F6066] rounded-t-[4px]">
        <input
          type="checkbox"
          checked={allSelected}
          onChange={(e) => onSelectAll(e.target.checked)}
          className="w-[20px] h-[20px] rounded border-white bg-transparent accent-white cursor-pointer"
          style={{ accentColor: primaryColor }}
        />
        {/* Placeholder for other headers if needed, but design shows only checkbox or empty space */}
      </div>

      {/* List Items */}
      <div className="flex flex-col">
        {items.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            selected={selectedItems.includes(item.id)}
            onSelect={onSelectItem}
            onReorder={onReorderItem}
            primaryColor={primaryColor}
          />
        ))}
      </div>
    </div>
  );
};
