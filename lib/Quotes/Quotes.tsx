import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { QuotesFilterBar } from './components/QuotesFilterBar';
import { QuotesTable } from './components/QuotesTable';
import type { Quote } from './components/QuotesTable';
import { AddNewQuote } from './components/AddNewQuote';
import { ViewQuote } from './components/ViewQuote';

const DownloadIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.577L8.461 12.039L9.169 11.319L11.5 13.65V5H12.5V13.65L14.83 11.32L15.539 12.039L12 15.577ZM6.616 19C6.15533 19 5.771 18.846 5.463 18.538C5.155 18.23 5.00067 17.8453 5 17.384V14.961H6V17.384C6 17.538 6.064 17.6793 6.192 17.808C6.32 17.9367 6.461 18.0007 6.615 18H17.385C17.5383 18 17.6793 17.936 17.808 17.808C17.9367 17.68 18.0007 17.5387 18 17.384V14.961H19V17.384C19 17.8447 18.846 18.229 18.538 18.537C18.23 18.845 17.8453 18.9993 17.384 19H6.616Z" fill="currentColor"/>
    </svg>
)

const ChevronDownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 0.5L5 5L9.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


interface QuotesProps {
    primaryColor?: string;
    secondaryColor?: string;
}

export const Quotes: React.FC<QuotesProps> = ({
    primaryColor = '#4E46B4',
    secondaryColor = '#D92D20',
}) => {
    // Mock Data
    const mockQuotes: Quote[] = [
        { id: '1', quotationNumber: '12345', date: '01/01/2026', status: 'Approved' },
        { id: '2', quotationNumber: '12345', date: '01/01/2026', status: 'Rejected' },
        { id: '3', quotationNumber: '12345', date: '01/01/2026', status: 'Approved' },
        { id: '4', quotationNumber: '12345', date: '01/01/2026', status: 'Rejected' },
        { id: '5', quotationNumber: '12345', date: '01/01/2026', status: 'Approved' },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState<('Active' | 'Approved' | 'Declined')[]>([]); // Empty = All
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isBulkOpen, setIsBulkOpen] = useState(false);
    const [isAddNewQuoteOpen, setIsAddNewQuoteOpen] = useState(false);

    const filteredQuotes = mockQuotes.filter(q => {
        if (activeFilters.length === 0) return true;
        // Logic: activeFilters contains the statuses we want to show.
        // 'Declined' filter maps to 'Rejected' status in data for this demo.
        const currentStatus = q.status === 'Rejected' ? 'Declined' : q.status;
        // @ts-ignore - we know this is safe for this demo logic
        return activeFilters.includes(currentStatus);
    }).filter(q => q.quotationNumber.includes(searchQuery));

    const handleFilterToggle = (filter: 'Active' | 'Approved' | 'Declined') => {
        if (activeFilters.includes(filter)) {
            setActiveFilters(prev => prev.filter(f => f !== filter));
        } else {
            setActiveFilters(prev => [...prev, filter]);
        }
    };

    const handleAllFilter = () => {
        setActiveFilters([]);
    };

    // If all specific filters are selected, it's effectively "All" visually, but we can keep them selected or clear them. 
    // User requirement: "when filter by is set to All or all the filters are selected viceversa, all the items should be active."
    // My logic: If activeFilters has all 3, it shows all 3 types. If activeFilters is empty, it shows all types. So it works.
    
    // Check if "All" state is active (either empty list or all specific filters selected)


    const handleSelectAll = () => {
        if (selectedIds.length === filteredQuotes.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredQuotes.map(q => q.id));
        }
    };

    const handleSelectOne = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(sId => sId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const sortRef = React.useRef<HTMLDivElement>(null);
    const bulkRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
            if (bulkRef.current && !bulkRef.current.contains(event.target as Node)) {
                setIsBulkOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sortRef, bulkRef]);

    const [selectedBulkAction, setSelectedBulkAction] = useState<string | null>(null);
    const [viewingQuoteId, setViewingQuoteId] = useState<string | null>(null);

    // Mock Detail Data Helper
    const getQuoteDetail = (id: string) => {
        // Return mock details based on ID or just a generic one for demo
        const baseQuote = mockQuotes.find(q => q.id === id);
        return {
            id: id,
            quotationNumber: baseQuote?.quotationNumber || 'QN00045',
            items: [
                {
                    id: 'p1',
                    name: 'Lorem ipsum Lorem ipsum',
                    sku: 'Lorem ipsum ut molestie',
                    image: "https://placehold.co/72x72/E6E6E6/CCCCCC?text=Img",
                    price: 100,
                    quantity: 2,
                    total: 200,
                },
                {
                    id: 'p2',
                    name: 'Lorem ipsum Lorem ipsum',
                    sku: 'Lorem ipsum ut molestie',
                    image: "https://placehold.co/72x72/E6E6E6/CCCCCC?text=Img",
                    price: 100,
                    quantity: 2,
                    total: 200,
                }
            ],
            salesRep: 'Lorem ipsum orci',
            issuedDate: baseQuote?.date || '01/01/2026',
            expiredDate: '01/02/2026',
            subTotal: 40000,
            shippingCost: 150,
            tax: 100,
            grandTotal: 40300,
        };
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto p-4 md:p-8 font-['DM_Sans'] bg-white relative">
            {isAddNewQuoteOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="w-full max-w-[1440px] h-[90vh] bg-[#FAFAFA] rounded-xl shadow-2xl overflow-hidden relative">
                         <AddNewQuote 
                            onClose={() => setIsAddNewQuoteOpen(false)}
                            onSubmit={(items) => {
                                console.log("Submitted items:", items);
                                setIsAddNewQuoteOpen(false);
                            }}
                            primaryColor={primaryColor}
                        />
                    </div>
                </div>
            )}

            {viewingQuoteId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="w-full max-w-[1440px] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative">
                        <ViewQuote 
                            data={getQuoteDetail(viewingQuoteId)}
                            onClose={() => setViewingQuoteId(null)}
                            primaryColor={primaryColor}
                        />
                    </div>
                </div>
            )}
            
            {/* Mobile Profile Link */}
            <div className="flex items-center gap-2 mb-4 md:hidden text-gray-900">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M11.25 6H0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M6 11.25L0.75 6L6 0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-base font-normal">Profile</span>
            </div>

            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8 gap-4">
                <div className="flex justify-between w-full lg:w-auto items-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['DM_Sans'] tracking-tight">Quotes</h1>
                    <div className="lg:hidden border border-gray-300 rounded p-2">
                         <DownloadIcon />
                    </div>
                </div>
                
                <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 w-full lg:w-auto">
                    <Button 
                        variant="primary" 
                        customColor={primaryColor} 
                        className="font-bold text-sm w-full lg:w-auto justify-center"
                        onClick={() => setIsAddNewQuoteOpen(true)}
                    >
                        Add New Quote
                    </Button>
                    <Button variant="outline" className="font-bold text-sm text-gray-900 border-gray-300 w-full lg:w-auto justify-center">Upload BOM</Button>
                    <Button variant="outline" className="hidden lg:inline-flex font-bold text-sm text-gray-700 border-gray-400 gap-2">
                        <DownloadIcon />
                        Export
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <div className="mb-8">
                <QuotesFilterBar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    sortBy={[]}
                    onSortChange={() => {}}
                    dateRange=""
                    onDateRangeChange={() => {}}
                    isSortOpen={isSortOpen}
                    setIsSortOpen={setIsSortOpen}
                    sortRef={sortRef}
                />
            </div>

            {/* Tabs & Bulk Actions */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full lg:w-auto">
                     <span className="text-sm text-[#1A1A1A] mb-1 md:mb-0 hidden lg:inline">Filter By:</span>
                     <div className="flex gap-2 w-full lg:w-auto">
                            <button
                                onClick={handleAllFilter}
                                className={`px-4 py-2 rounded text-sm font-bold transition-colors whitespace-nowrap flex-1 justify-center lg:flex-none lg:w-auto ${
                                    activeFilters.length === 0
                                    ? 'text-white'
                                    : 'bg-transparent hover:bg-[#F0EFFB]'
                                }`}
                                style={{
                                    backgroundColor: activeFilters.length === 0 ? primaryColor : 'transparent',
                                    color: activeFilters.length === 0 ? 'white' : primaryColor,
                                }}
                            >
                                All
                            </button>
                        {(['Active', 'Approved', 'Declined'] as const).map(tab => (
                            <button
                                key={tab}
                                onClick={() => handleFilterToggle(tab)}
                                className={`px-4 py-2 rounded text-sm font-bold transition-colors whitespace-nowrap flex-1 justify-center lg:flex-none lg:w-auto ${
                                    activeFilters.includes(tab)
                                    ? 'text-white'
                                    : 'bg-transparent hover:bg-[#F0EFFB]'
                                }`}
                                style={{
                                    backgroundColor: activeFilters.includes(tab) ? primaryColor : 'transparent',
                                    color: activeFilters.includes(tab) ? 'white' : primaryColor,
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                     </div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full lg:w-auto">
                     <div className="flex flex-row items-center gap-2 w-full md:flex-1 md:w-auto">
                        <span className="text-sm text-[#1A1A1A] whitespace-nowrap">Bulk Actions:</span>
                        <div className="relative w-full lg:min-w-[160px]" ref={bulkRef}>
                            <button 
                                onClick={() => setIsBulkOpen(!isBulkOpen)}
                                className={`w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm font-['DM_Sans'] ${selectedBulkAction ? 'text-gray-900 font-medium' : 'text-gray-700'}`}
                            >
                                {selectedBulkAction || 'Select multiple'}
                                <div className={`transition-transform ${isBulkOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDownIcon />
                                </div>
                            </button>
                            {isBulkOpen && (
                                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1">
                                    <div 
                                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                                        onClick={() => { setSelectedBulkAction('Delete'); setIsBulkOpen(false); }}
                                    >
                                        Delete
                                    </div>
                                    <div 
                                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                                        onClick={() => { setSelectedBulkAction('Archive'); setIsBulkOpen(false); }}
                                    >
                                        Archive
                                    </div>
                                </div>
                            )}
                        </div>
                     </div>
                     <Button 
                        variant="primary" 
                        customColor={selectedBulkAction ? primaryColor : "#9CA3AF"} 
                        className={`font-bold text-sm justify-center md:w-1/2 lg:w-auto ${!selectedBulkAction ? 'bg-[#9CA3AF] cursor-not-allowed disabled:pointer-events-auto' : ''}`}
                        disabled={!selectedBulkAction}
                     >
                         Proceed
                     </Button>
                </div>
            </div>

            {/* Table */}
            <QuotesTable
                quotes={filteredQuotes}
                selectedIds={selectedIds}
                onSelectOne={handleSelectOne}
                onSelectAll={handleSelectAll}
                onViewQuote={setViewingQuoteId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
            />
            
            <div className="mt-8">
                <Button variant="outline" className="font-bold text-sm border-gray-800 text-gray-900 px-8">
                    Load More
                </Button>
            </div>
        </div>
    );
};
