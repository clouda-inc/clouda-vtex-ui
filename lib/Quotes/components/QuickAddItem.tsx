import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../../Button/Button';

// Types
export interface ProductResult {
    id: string;
    name: string;
    description: string;
    sku: string;
    image?: string;
}

interface QuickAddItemProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    onAddItem: (item: ProductResult) => void;
    primaryColor?: string;
}

const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PlaceholderImage = () => (
    <div className="w-[100px] h-[100px] bg-[#EFEFEF] flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M21 8V16C21 16.5523 20.5523 17 20 17H4C3.44772 17 3 16.5523 3 16V8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
);

// Mock Data for Search Results
const MOCK_RESULTS: ProductResult[] = [
    { id: 'p1', name: 'Lorem ipsum Lorem ipsum', description: 'Lorem ipsum ut molestie', sku: 'Item 01' },
    { id: 'p2', name: 'Lorem ipsum Lorem ipsum', description: 'Lorem ipsum ut molestie', sku: 'Item 02' },
];

export const QuickAddItem: React.FC<QuickAddItemProps> = ({
    searchQuery,
    onSearchChange,
    onAddItem,
    primaryColor = '#4E46B4',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsOpen(searchQuery.length > 0);
    }, [searchQuery]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClear = () => {
        onSearchChange('');
        setIsOpen(false);
    };

    return (
        <div className="relative w-full" ref={containerRef}>
            <div className="relative flex items-center">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Item 01" // Matches Figma placeholder
                    className="w-full h-[56px] pl-4 pr-[100px] border border-gray-300 rounded-none bg-white font-['DM_Sans'] text-base outline-none focus:border-black transition-colors"
                />
                
                {searchQuery && (
                    <button 
                        onClick={handleClear}
                        className="absolute right-[60px] p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900"
                    >
                        <CloseIcon />
                    </button>
                )}

                <div className="absolute right-0 top-0 h-full aspect-square bg-black flex items-center justify-center cursor-pointer">
                    <SearchIcon />
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#F5F5F5] border-x border-b border-gray-200 z-10 max-h-[400px] overflow-y-auto shadow-lg">
                    {MOCK_RESULTS.length > 0 ? (
                        <div className="flex flex-col">
                            {MOCK_RESULTS.map((product) => (
                                <div key={product.id} className="p-4 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-200 last:border-0 hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center gap-4 w-full md:w-auto">
                                        <PlaceholderImage />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-['DM_Sans'] text-[#3E3E3E] mb-1">{product.description}</span>
                                            <span className="text-base font-bold font-['DM_Sans'] text-[#1A1A1A]">{product.name}</span>
                                        </div>
                                    </div>
                                    <Button 
                                        variant="primary" 
                                        customColor={primaryColor}
                                        className="h-10 px-6 font-bold text-sm whitespace-nowrap w-full md:w-auto justify-center"
                                        onClick={() => {
                                            onAddItem(product);
                                            onSearchChange('');
                                        }}
                                    >
                                        Add to List
                                    </Button>
                                    
                                </div>
                            ))}
                        </div>
                    ) : (
                         <div className="p-8 text-center text-gray-500 font-['DM_Sans']">No results found</div>
                    )}
                </div>
            )}
        </div>
    );
};
