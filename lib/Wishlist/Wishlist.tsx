import React, { useState, useRef } from 'react';
import { Button } from '../Button/Button';
import { WishlistFilterBar } from './components/WishlistFilterBar';
import { WishlistTable, type WishlistItem } from './components/WishlistTable';

const DownloadIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.577L8.461 12.039L9.169 11.319L11.5 13.65V5H12.5V13.65L14.83 11.32L15.539 12.039L12 15.577ZM6.616 19C6.15533 19 5.771 18.846 5.463 18.538C5.155 18.23 5.00067 17.8453 5 17.384V14.961H6V17.384C6 17.538 6.064 17.6793 6.192 17.808C6.32 17.9367 6.461 18.0007 6.615 18H17.385C17.5383 18 17.6793 17.936 17.808 17.808C17.9367 17.68 18.0007 17.5387 18 17.384V14.961H19V17.384C19 17.8447 18.846 18.229 18.538 18.537C18.23 18.845 17.8453 18.9993 17.384 19H6.616Z" fill="currentColor"/>
    </svg>
)

export interface WishlistProps {
    primaryColor?: string;
}

export const Wishlist: React.FC<WishlistProps> = ({ primaryColor = '#4E46B4' }) => {
    
    // Mock Data
    const [items, setItems] = useState<WishlistItem[]>([
        { id: '1', name: 'Lorem ipsum', sku: 'Lorem ipsum', image: 'https://placehold.co/72x72', dateAdded: 'Lorem ipsum', quantity: 0 },
        { id: '2', name: 'Lorem ipsum', sku: 'Lorem ipsum', image: 'https://placehold.co/72x72', dateAdded: 'Lorem ipsum', quantity: 0 },
        { id: '3', name: 'Lorem ipsum', sku: 'Lorem ipsum', image: 'https://placehold.co/72x72', dateAdded: 'Lorem ipsum', quantity: 0 },
        { id: '4', name: 'Lorem ipsum', sku: 'Lorem ipsum', image: 'https://placehold.co/72x72', dateAdded: 'Lorem ipsum', quantity: 0 },
        { id: '5', name: 'Lorem ipsum', sku: 'Lorem ipsum', image: 'https://placehold.co/72x72', dateAdded: 'Lorem ipsum', quantity: 0 },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<string[]>([]);
    const [selectedWishlist, setSelectedWishlist] = useState('');
    const [dateRange, setDateRange] = useState('');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isBulkOpen, setIsBulkOpen] = useState(false);
    const [selectedBulkAction, setSelectedBulkAction] = useState<string | null>(null);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const sortRef = useRef<HTMLDivElement>(null!);
    const bulkRef = useRef<HTMLDivElement>(null!);

    // Filter Logic
    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.sku.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectAll = () => {
        if (selectedIds.length === filteredItems.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredItems.map(i => i.id));
        }
    };

    const handleSelectOne = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(i => i !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const handleUpdateQuantity = (id: string, newQty: number) => {
        setItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    };

    const handleRemoveItem = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
        setSelectedIds(prev => prev.filter(i => i !== id));
    };

    const handleBulkProceed = () => {
        if (selectedBulkAction === 'Delete') {
            setItems(prev => prev.filter(item => !selectedIds.includes(item.id)));
            setSelectedIds([]);
            setSelectedBulkAction(null);
        }
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto p-4 md:p-8 font-['DM_Sans'] bg-white relative">
            {/* Header */}
             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8 gap-4">
                 <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['DM_Sans'] tracking-tight">Wishlist</h1>
                 <Button variant="outline" className="hidden lg:inline-flex font-bold text-sm text-gray-700 border-gray-400 gap-2">
                    <DownloadIcon />
                    Export
                </Button>
            </div>

            {/* Filter Bar */}
            <div className="mb-8">
                <WishlistFilterBar 
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                    selectedWishlist={selectedWishlist}
                    wishlistOptions={['Default Wishlist', 'Project A', 'Project B']}
                    onWishlistChange={setSelectedWishlist}
                    dateRange={dateRange}
                    onDateRangeChange={setDateRange}
                    isSortOpen={isSortOpen}
                    setIsSortOpen={setIsSortOpen}
                    sortRef={sortRef}
                    onCreateQuote={() => console.log('Create Quote')}
                    selectedBulkAction={selectedBulkAction}
                    onBulkActionChange={setSelectedBulkAction}
                    onBulkActionProceed={handleBulkProceed}
                    isBulkOpen={isBulkOpen}
                    setIsBulkOpen={setIsBulkOpen}
                    bulkRef={bulkRef}
                    primaryColor={primaryColor}
                />
            </div>

            {/* Table */}
            <WishlistTable 
                items={filteredItems}
                selectedIds={selectedIds}
                onSelectOne={handleSelectOne}
                onSelectAll={handleSelectAll}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onViewItem={(id) => console.log('View', id)}
                onAddToQuote={(id) => console.log('Add to quote', id)}
                onAddToCart={(id) => console.log('Add to cart', id)}
                primaryColor={primaryColor}
            />

            {/* Load More */}
             <div className="mt-8">
                <Button variant="outline" className="font-bold text-sm border-gray-800 text-gray-900 px-8">
                    Load More
                </Button>
            </div>
        </div>
    );
};
