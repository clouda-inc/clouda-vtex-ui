import React from 'react';
import { QuantitySelector } from '../../QuantitySelector/QuantitySelector';

export interface QuoteItem {
    id: string;
    product_id: string;
    name: string;
    description: string;
    quantity: number;
}

interface QuoteItemsListProps {
    items: QuoteItem[];
    selectedItems: string[];
    onSelectionChange: (id: string) => void;
    onSelectAll: () => void;
    onUpdateQuantity: (id: string, delta: number) => void;
    onRemoveItem: (id: string) => void;
    primaryColor?: string;
}

const TrashIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PlaceholderImage = () => (
    <div className="w-[64px] h-[64px] bg-[#E5E5E5] flex items-center justify-center rounded-sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M4 7L12 11M4 7V17L12 21M12 11V21" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
);

export const QuoteItemsList: React.FC<QuoteItemsListProps> = ({
    items,
    selectedItems,
    onSelectionChange,
    onSelectAll,
    onUpdateQuantity,
    onRemoveItem,
    primaryColor = '#4E46B4',
}) => {
    const allSelected = items.length > 0 && selectedItems.length === items.length;

    return (
        <div className="w-full flex flex-col font-['DM_Sans']">
            {/* Header / Select All */}
            {items.length > 0 && (
                <div className="flex items-center gap-4 mb-6 px-4">
                     <div className="relative flex items-center justify-center w-5 h-5">
                        <input
                            type="checkbox"
                            checked={allSelected}
                            onChange={onSelectAll}
                            className="w-5 h-5 rounded border-gray-300 focus:ring-2 cursor-pointer transition-colors"
                            style={{ color: primaryColor, ['--tw-ring-color' as any]: primaryColor }}
                        />
                     </div>
                     <span className="text-sm font-normal text-[#1A1A1A]">Select All</span>
                </div>
            )}

            {/* List */}
            <div className="flex flex-col gap-4">
                {items.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">
                        No items added yet. Search and add items above.
                    </div>
                ) : (
                    items.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white rounded-lg group">
                            <div className="flex items-start md:items-center gap-4 w-full">
                                {/* Checkbox */}
                                 <div className="relative flex items-center justify-center w-5 h-5 mt-1 md:mt-0">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => onSelectionChange(item.id)}
                                        className="w-5 h-5 rounded border-gray-300 focus:ring-2 cursor-pointer transition-colors"
                                        style={{ color: primaryColor, ['--tw-ring-color' as any]: primaryColor }}
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex items-start gap-4 flex-1">
                                    <PlaceholderImage />
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs text-[#525252]">{item.description}</span>
                                        <span className="text-base font-bold text-[#1A1A1A]">{item.name}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions (Quantity + Delete) */}
                            <div className="flex items-center gap-4 md:gap-8 self-end md:self-auto">
                                {/* Quantity Selector */}
                                <QuantitySelector 
                                    value={item.quantity}
                                    onChange={(val) => {
                                        // Calculate delta or implement setQuantity directly if component supported it
                                        // The current prop is onUpdateQuantity(id, delta), but QuantitySelector gives new value.
                                        // Let's adopt a setState approach if possible, but here we need to adapt.
                                        const delta = val - item.quantity;
                                        if (delta !== 0) {
                                            onUpdateQuantity(item.id, delta);
                                        }
                                    }}
                                    min={1}
                                    label=""
                                    customColor={primaryColor}
                                />

                                {/* Delete */}
                                <button 
                                    onClick={() => onRemoveItem(item.id)}
                                    className="p-2 text-[#1A1A1A] hover:bg-gray-100 rounded-full transition-colors"
                                    aria-label="Delete item"
                                >
                                    <TrashIcon />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
