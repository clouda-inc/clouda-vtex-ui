import React from 'react';
import { Button } from '../../Button/Button';
import { QuantitySelector } from '../../QuantitySelector/QuantitySelector';

export interface WishlistItem {
    id: string;
    name: string;
    sku: string;
    image: string;
    dateAdded: string;
    quantity: number;
}

interface WishlistTableProps {
    items: WishlistItem[];
    selectedIds: string[];
    onSelectOne: (id: string) => void;
    onSelectAll: () => void;
    onUpdateQuantity: (id: string, newQty: number) => void;
    onRemoveItem: (id: string) => void;
    onViewItem: (id: string) => void;
    onAddToQuote: (id: string) => void;
    onAddToCart: (id: string) => void;
    primaryColor?: string;
}

const TrashIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M2.5 5H4.16667H17.5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M6.66699 5.00008V3.33342C6.66699 2.89139 6.84259 2.46746 7.15515 2.1549C7.46771 1.84235 7.89163 1.66675 8.33366 1.66675H11.667C12.109 1.66675 12.5329 1.84235 12.8455 2.1549C13.1581 2.46746 13.3337 2.89139 13.3337 3.33342V5.00008M15.8337 5.00008V16.6667C15.8337 17.1088 15.6581 17.5327 15.3455 17.8453C15.0329 18.1578 14.609 18.3334 14.167 18.3334H5.83366C5.39163 18.3334 4.96771 18.1578 4.65515 17.8453C4.34259 17.5327 4.16699 17.1088 4.16699 16.6667V5.00008H15.8337Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export const WishlistTable: React.FC<WishlistTableProps> = ({
    items,
    selectedIds,
    onSelectOne,
    onSelectAll,
    onUpdateQuantity,
    onRemoveItem,
    onViewItem,
    onAddToQuote,
    onAddToCart,
    primaryColor = '#4E46B4'
}) => {
    const isAllSelected = items.length > 0 && selectedIds.length === items.length;

    if (items.length === 0) {
        return <div className="py-12 text-center text-gray-500">No items in wishlist.</div>;
    }

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse bg-white table-auto">
                <thead className="bg-[#545F71] text-white">
                    <tr>
                        <th className="p-4 w-[40px] text-left">
                            <input 
                                type="checkbox"
                                className="w-5 h-5 rounded border-gray-300 bg-transparent"
                                checked={isAllSelected}
                                onChange={onSelectAll}
                                style={{ accentColor: primaryColor }}
                            />
                        </th>
                        <th className="p-4 text-left font-normal text-base w-[250px]">Part Number</th>
                        <th className="p-4 text-left font-normal text-base w-[40px]">Compare</th>
                        <th className="p-4 text-left font-normal text-base w-[140px]">Qty</th>
                        <th className="p-4 text-left font-normal text-base w-[140px]">Date Added</th>
                        <th className="p-4 text-left font-normal text-base w-[320px]">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                             <td className="p-4">
                                <input 
                                    type="checkbox"
                                    className="w-5 h-5 rounded border-gray-300"
                                    checked={selectedIds.includes(item.id)}
                                    onChange={() => onSelectOne(item.id)}
                                    style={{ accentColor: primaryColor }}
                                />
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-[72px] h-[72px] bg-[#E6E6E6] shrink-0 border border-[#E5E7EB] flex items-center justify-center">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-['DM_Sans'] font-bold text-base text-[#111827]">{item.name}</span>
                                        <span className="font-['DM_Sans'] text-sm text-[#4B5563]">{item.sku}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 text-center">
                                <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
                            </td>
                            <td className="p-4">
                                <div className="w-[120px]">
                                    <QuantitySelector 
                                        value={item.quantity}
                                        onChange={(qty) => onUpdateQuantity(item.id, qty)}
                                        customColor={primaryColor}
                                        label=""
                                    />
                                </div>
                            </td>
                            <td className="p-4 text-[#111827] font-['DM_Sans']">
                                {item.dateAdded}
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-2">
                                    <Button 
                                        variant="primary" 
                                        customColor={primaryColor} 
                                        className="py-1 px-3 text-sm font-bold h-auto min-h-[32px] min-w-[60px] justify-center"
                                        onClick={() => onViewItem(item.id)}
                                    >
                                        View
                                    </Button>
                                    <Button 
                                        variant="primary" 
                                        customColor={primaryColor} 
                                        className="py-1 px-3 text-sm font-bold h-auto min-h-[32px] min-w-[110px] justify-center leading-tight"
                                        onClick={() => onAddToQuote(item.id)}
                                    >
                                        Add to Quote
                                    </Button>
                                    <Button 
                                        variant="primary" 
                                        customColor={primaryColor} 
                                        className="py-1 px-3 text-sm font-bold h-auto min-h-[32px] min-w-[100px] justify-center leading-tight"
                                        onClick={() => onAddToCart(item.id)}
                                    >
                                        Add to Cart
                                    </Button>
                                    <button 
                                        onClick={() => onRemoveItem(item.id)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-2"
                                    >
                                        <TrashIcon />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
