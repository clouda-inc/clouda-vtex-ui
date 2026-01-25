import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../../Button/Button';
import { QuickAddItem, type ProductResult } from './QuickAddItem';
import { QuoteItemsList, type QuoteItem } from './QuoteItemsList';

interface AddNewQuoteProps {
    onClose?: () => void;
    onSubmit?: (items: QuoteItem[]) => void;
    primaryColor?: string;
    secondaryColor?: string;
}

const ChevronDownIcon = () => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0.5L5 5L9.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CloseIcon = () => (
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export const AddNewQuote: React.FC<AddNewQuoteProps> = ({
    onClose,
    onSubmit,
    primaryColor = '#4E46B4',
    // secondaryColor = '#D92D20', // Unused for now
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState<QuoteItem[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isBulkOpen, setIsBulkOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState<'delete' | null>(null);
    const bulkRef = useRef<HTMLDivElement>(null);

    // Close bulk actions when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (bulkRef.current && !bulkRef.current.contains(event.target as Node)) {
                setIsBulkOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleAddItem = (product: ProductResult) => {
        // Check if item already exists
        const existingItem = items.find(i => i.product_id === product.id);
        if (existingItem) {
            // Increment quantity if exists
            handleUpdateQuantity(existingItem.id, 1);
        } else {
            // Add new item
            const newItem: QuoteItem = {
                id: Math.random().toString(36).substr(2, 9),
                product_id: product.id,
                name: product.name,
                description: product.description,
                quantity: 1
            };
            setItems(prev => [...prev, newItem]);
        }
    };

    const handleUpdateQuantity = (id: string, delta: number) => {
        setItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const handleRemoveItem = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
        setSelectedItems(prev => prev.filter(itemId => itemId !== id));
    };

    const handleSelectionChange = (id: string) => {
        setSelectedItems(prev => {
            if (prev.includes(id)) {
                return prev.filter(i => i !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleSelectAll = () => {
        if (selectedItems.length === items.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(items.map(i => i.id));
        }
    };

    const handleProceed = () => {
        if (items.length > 0 && onSubmit) {
            onSubmit(items);
        }
    };

    const handleBulkAction = () => {
        if (selectedAction === 'delete') {
            setItems(prev => prev.filter(i => !selectedItems.includes(i.id)));
            setSelectedItems([]);
            setSelectedAction(null);
        }
    };

    return (
        <div className="w-full h-full relative font-['DM_Sans'] flex flex-col">
            {/* Close Button (Top Right) */}
            <div className="absolute top-6 right-6 z-10 cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={onClose}>
                <CloseIcon />
            </div>

            <div className="w-full flex-1 overflow-y-auto px-4 md:px-8 pt-8 pb-32">
                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-2xl font-bold text-[#1A1A1A] mb-8">Quick Add Item by SKU</h1>
                    
                    {/* Search Bar */}
                    <div className="w-full max-w-[800px] mb-12">
                        <QuickAddItem
                            searchQuery={searchQuery}
                            onSearchChange={setSearchQuery}
                            onAddItem={handleAddItem}
                            primaryColor={primaryColor}
                        />
                    </div>
                </div>

                {/* Items List */}
                <div className="w-full max-w-[1000px] mx-auto">
                    <QuoteItemsList
                        items={items}
                        selectedItems={selectedItems}
                        onSelectionChange={handleSelectionChange}
                        onSelectAll={handleSelectAll}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemoveItem={handleRemoveItem}
                        primaryColor={primaryColor}
                    />
                </div>
            </div>

            {/* Footer / Bulk Actions */}
            <div className="w-full bg-white border-t border-gray-200 py-6 px-8 flex flex-col md:flex-row items-center justify-end gap-6 shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] shrink-0">
                 <div className="flex items-center gap-4 w-full md:w-auto">
                    <span className="text-sm text-[#1A1A1A] whitespace-nowrap">Bulk Actions</span>
                     <div className="relative w-full md:min-w-[200px]" ref={bulkRef}>
                         <button 
                             onClick={() => setIsBulkOpen(!isBulkOpen)}
                             className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded bg-white text-sm text-[#3E3E3E]"
                             disabled={selectedItems.length === 0}
                         >
                             <span className={selectedItems.length === 0 ? "text-gray-400" : ""}>
                                {selectedAction === 'delete' ? 'Delete Selected' : 'Select multiple'}
                             </span>
                             <div className={`transition-transform ${isBulkOpen ? 'rotate-180' : ''}`}>
                                 <ChevronDownIcon />
                             </div>
                         </button>
                         {isBulkOpen && selectedItems.length > 0 && (
                             <div className="absolute bottom-full left-0 w-full mb-1 bg-white border border-gray-200 rounded shadow-lg z-20 py-1">
                                 <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer" onClick={() => {
                                     setSelectedAction('delete');
                                     setIsBulkOpen(false);
                                 }}>Delete Selected</div>
                             </div>
                         )}
                     </div>
                 </div>

                 <div className="flex items-center gap-4 w-full md:w-auto">
                     <Button 
                         variant="primary" 
                         className={`px-8 font-bold text-sm bg-[#9CA3AF] hover:bg-gray-500 w-full md:w-auto justify-center text-white ${
                            !selectedAction ? 'opacity-50 cursor-not-allowed !pointer-events-auto' : ''
                         }`}
                         onClick={handleBulkAction}
                         disabled={!selectedAction}
                         customColor={selectedAction ? primaryColor : '#9CA3AF'}
                     >
                         Proceed
                     </Button>
                     <Button 
                         variant="primary" 
                         customColor={primaryColor} 
                         className="px-8 font-bold text-sm w-full md:w-auto justify-center"
                         onClick={handleProceed}
                         disabled={items.length === 0}
                     >
                         Submit
                     </Button>
                 </div>
            </div>
        </div>
    );
};
