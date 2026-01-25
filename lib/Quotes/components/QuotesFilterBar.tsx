import React from 'react';

interface QuotesFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string[];
  onSortChange: (value: string[]) => void;
  dateRange: string;
  onDateRangeChange: (value: string) => void;
  isSortOpen?: boolean;
  setIsSortOpen?: (isOpen: boolean) => void;
  sortRef?: React.RefObject<HTMLDivElement | null>;
}

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 17L12.9501 12.9501M12.9501 12.9501C13.6001 12.3001 14.1158 11.5284 14.4675 10.6791C14.8193 9.82976 15.0004 8.91948 15.0004 8.0002C15.0004 7.08092 14.8193 6.17064 14.4675 5.32134C14.1158 4.47204 13.6001 3.70034 12.9501 3.05031C12.3001 2.40028 11.5284 1.88465 10.6791 1.53286C9.82976 1.18107 8.91948 1 8.0002 1C7.08092 1 6.17064 1.18107 5.32134 1.53286C4.47204 1.88465 3.70034 2.40028 3.05031 3.05031C1.73752 4.3631 1 6.14363 1 8.0002C1 9.85677 1.73752 11.6373 3.05031 12.9501C4.3631 14.2629 6.14363 15.0004 8.0002 15.0004C9.85677 15.0004 11.6373 14.2629 12.9501 12.9501Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 0.5L5 5L9.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const QuotesFilterBar: React.FC<QuotesFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  isSortOpen,
  setIsSortOpen,
  sortRef,
  // sortBy,
  // onSortChange,
  // dateRange,
  // onDateRangeChange,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between w-full">
      {/* Search Input */}
      <div className="relative w-full lg:max-w-[320px]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by Quotation Number"
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 font-['DM_Sans'] text-sm"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
           <SearchIcon />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:items-center w-full lg:w-auto">
        {/* Sort By */}
        <div className="flex flex-row items-center gap-2 w-full md:w-auto">
            <span className="text-sm font-['DM_Sans'] font-medium text-gray-700 whitespace-nowrap shrink-0">Sort By:</span>
            <div className="relative w-full md:min-w-[160px]" ref={sortRef}>
                <button 
                  onClick={() => setIsSortOpen && setIsSortOpen(!isSortOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 font-['DM_Sans']"
                >
                    Select multiple
                    <div className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`}>
                      <ChevronDownIcon />
                    </div>
                </button>
                {isSortOpen && (
                   <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1">
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Date</div>
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Status</div>
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Amount</div>
                   </div>
                )}
            </div>
        </div>

        {/* Date Range */}
        <div className="relative w-full md:min-w-[160px]">
             <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 font-['DM_Sans']">
                Date Range
                <ChevronDownIcon />
            </button>
        </div>
      </div>
    </div>
  );
};
