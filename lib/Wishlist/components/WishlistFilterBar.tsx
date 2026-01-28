import React, { useRef, useEffect } from 'react';
import { Button } from '../../Button/Button';

interface WishlistFilterBarProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    sortBy: string[];
    onSortChange: (sort: string[]) => void;
    selectedWishlist: string;
    wishlistOptions: string[];
    onWishlistChange: (wishlist: string) => void;
    dateRange: string;
    onDateRangeChange: (range: string) => void;
    isSortOpen: boolean;
    setIsSortOpen: (isOpen: boolean) => void;
    sortRef: React.RefObject<HTMLDivElement>;
    onCreateQuote?: () => void;
    
    // Bulk Actions
    selectedBulkAction: string | null;
    onBulkActionChange: (action: string | null) => void;
    onBulkActionProceed: () => void;
    isBulkOpen: boolean;
    setIsBulkOpen: (isOpen: boolean) => void;
    bulkRef: React.RefObject<HTMLDivElement>;
    primaryColor?: string;
}

const ChevronDownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 0.5L5 5L9.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 19L14.65 14.65" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const WishlistFilterBar: React.FC<WishlistFilterBarProps> = ({
    searchQuery,
    onSearchChange,
    sortBy,
    onSortChange,
    selectedWishlist,
    wishlistOptions,
    onWishlistChange,
    dateRange,
    onDateRangeChange,
    isSortOpen,
    setIsSortOpen,
    sortRef,
    onCreateQuote,
    selectedBulkAction,
    onBulkActionChange,
    onBulkActionProceed,
    isBulkOpen,
    setIsBulkOpen,
    bulkRef,
    primaryColor = '#4E46B4'
}) => {
    
    const [isWishlistDropdownOpen, setIsWishlistDropdownOpen] = React.useState(false);
    const [isDateDropdownOpen, setIsDateDropdownOpen] = React.useState(false);
    const wishlistRef = useRef<HTMLDivElement>(null);
    const dateRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
             if (wishlistRef.current && !wishlistRef.current.contains(event.target as Node)) {
                setIsWishlistDropdownOpen(false);
            }
             if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
                setIsDateDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col gap-6 w-full font-['DM_Sans']">
            {/* Top Row: Search, Sort, Create Quote */}
            <div className="flex flex-col lg:flex-row gap-4 items-center">
                
                {/* Search */}
                <div className="flex-1 w-full relative">
                    <input
                        type="text"
                        placeholder="Search by SKU"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full h-10 pl-4 pr-10 border border-gray-300 rounded-[4px] text-sm focus:outline-none focus:border-[#4E46B4]"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <SearchIcon />
                    </div>
                </div>

                {/* Sort */}
                 <div className="flex items-center gap-2 w-full lg:w-auto">
                    <span className="text-sm text-[#111827] whitespace-nowrap">Sort By:</span>
                    <div className="relative w-full lg:min-w-[160px]" ref={sortRef}>
                         <button 
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-[4px] bg-white text-sm text-gray-700"
                        >
                            {sortBy.length > 0 ? sortBy.join(', ') : 'Select multiple'}
                            <div className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`}>
                                <ChevronDownIcon />
                            </div>
                        </button>
                         {isSortOpen && (
                            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-20 py-1">
                                <div className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer" onClick={() => { onSortChange(['Date Added']); setIsSortOpen(false); }}>Date Added</div>
                                <div className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer" onClick={() => { onSortChange(['Name']); setIsSortOpen(false); }}>Name</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Create Quote Button */}
                 <Button 
                    variant="primary" 
                    customColor={primaryColor}
                    onClick={onCreateQuote}
                    className="w-full lg:w-auto justify-center px-6 h-10 font-bold"
                >
                    Create Quote
                </Button>
            </div>

            {/* Second Row: Wishlist Select, Date Range, Bulk Actions */}
             <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                 <div className="flex flex-col md:flex-row gap-4 w-full flex-1">
                     {/* Select Wishlist */}
                    <div className="relative w-full md:max-w-[200px]" ref={wishlistRef}>
                         <button 
                            onClick={() => setIsWishlistDropdownOpen(!isWishlistDropdownOpen)}
                            className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-[4px] bg-white text-sm text-gray-700"
                        >
                            {selectedWishlist || 'Select Wishlist'}
                             <div className={`transition-transform ${isWishlistDropdownOpen ? 'rotate-180' : ''}`}>
                                <ChevronDownIcon />
                            </div>
                        </button>
                        {isWishlistDropdownOpen && (
                             <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 py-1">
                                {wishlistOptions.map(opt => (
                                     <div 
                                        key={opt}
                                        className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer" 
                                        onClick={() => { onWishlistChange(opt); setIsWishlistDropdownOpen(false); }}
                                    >
                                        {opt}
                                    </div>
                                ))}
                             </div>
                        )}
                    </div>

                    {/* Date Range */}
                     <div className="relative w-full md:max-w-[200px]" ref={dateRef}>
                         <button 
                            onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
                            className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-[4px] bg-white text-sm text-gray-700"
                        >
                            {dateRange || 'Date Range'}
                             <div className={`transition-transform ${isDateDropdownOpen ? 'rotate-180' : ''}`}>
                                <ChevronDownIcon />
                            </div>
                        </button>
                         {isDateDropdownOpen && (
                             <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 py-1">
                                <div className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer" onClick={() => { onDateRangeChange('Last 30 Days'); setIsDateDropdownOpen(false); }}>Last 30 Days</div>
                                <div className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer" onClick={() => { onDateRangeChange('Last 90 Days'); setIsDateDropdownOpen(false); }}>Last 90 Days</div>
                             </div>
                        )}
                    </div>
                 </div>

                 {/* Bulk Actions */}
                 <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto items-center">
                    <span className="text-sm text-[#111827] whitespace-nowrap">Bulk Actions</span>
                    <div className="relative w-full lg:min-w-[160px]" ref={bulkRef}>
                        <button 
                            onClick={() => setIsBulkOpen(!isBulkOpen)}
                            className={`w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-[4px] bg-white text-sm ${selectedBulkAction ? 'text-gray-900 font-medium' : 'text-gray-700'}`}
                        >
                            {selectedBulkAction || 'Select multiple'}
                            <div className={`transition-transform ${isBulkOpen ? 'rotate-180' : ''}`}>
                                <ChevronDownIcon />
                            </div>
                        </button>
                        {isBulkOpen && (
                             <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 py-1">
                                <div className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer" onClick={() => { onBulkActionChange('Delete'); setIsBulkOpen(false); }}>Delete</div>
                            </div>
                        )}
                    </div>
                     <Button 
                        variant="primary" 
                        customColor={selectedBulkAction ? primaryColor : "#9CA3AF"} 
                        onClick={onBulkActionProceed}
                        className={`w-full lg:w-auto justify-center px-6 h-10 font-bold ${!selectedBulkAction ? 'bg-[#9CA3AF] cursor-not-allowed disabled:pointer-events-auto' : ''}`}
                        disabled={!selectedBulkAction}
                    >
                        Proceed
                    </Button>
                 </div>
             </div>
        </div>
    );
};
