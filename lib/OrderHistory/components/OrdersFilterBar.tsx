import React from 'react';

interface OrdersFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string[];
  onSortChange: (value: string[]) => void;
  isSortOpen?: boolean;
  setIsSortOpen?: (isOpen: boolean) => void;
  sortRef?: React.RefObject<HTMLDivElement | null>;
  billToOptions: string[];
  shipToOptions: string[];
  // Filters
  selectedDateRange: { from: string, to: string };
  onDateRangeChange: (range: { from: string, to: string }) => void;
  selectedStatus: string[];
  onStatusChange: (status: string[]) => void;
  selectedBillTo: string[];
  onBillToChange: (billTo: string[]) => void;
  selectedShipTo: string[];
  onShipToChange: (shipTo: string[]) => void;
}

const SearchIconSvg = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 17L12.9501 12.9501M12.9501 12.9501C13.6001 12.3001 14.1158 11.5284 14.4675 10.6791C14.8193 9.82976 15.0004 8.91948 15.0004 8.0002C15.0004 7.08092 14.8193 6.17064 14.4675 5.32134C14.1158 4.47204 13.6001 3.70034 12.9501 3.05031C12.3001 2.40028 11.5284 1.88465 10.6791 1.53286C9.82976 1.18107 8.91948 1 8.0002 1C7.08092 1 6.17064 1.18107 5.32134 1.53286C4.47204 1.88465 3.70034 2.40028 3.05031 3.05031C1.73752 4.3631 1 6.14363 1 8.0002C1 9.85677 1.73752 11.6373 3.05031 12.9501C4.3631 14.2629 6.14363 15.0004 8.0002 15.0004C9.85677 15.0004 11.6373 14.2629 12.9501 12.9501Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIconSvg = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 0.5L5 5L9.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const OrdersFilterBar: React.FC<OrdersFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  billToOptions,
  shipToOptions,
  selectedDateRange,
  onDateRangeChange,
  selectedStatus,
  onStatusChange,
  selectedBillTo,
  onBillToChange,
  selectedShipTo,
  onShipToChange
}) => {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setActiveDropdown(null);
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleMultiSelect = (currentSelected: string[], value: string, onChange: (val: string[]) => void) => {
      if (currentSelected.includes(value)) {
          onChange(currentSelected.filter(item => item !== value));
      } else {
          onChange([...currentSelected, value]);
      }
  };

  const CalendarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 2V6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 2V6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 10H21" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="flex flex-col gap-4 w-full" ref={dropdownRef}>
      {/* Top Row: Search and Sort By */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between w-full">
        {/* Search Input */}
        <div className="relative w-full lg:max-w-[420px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by Order Number"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 font-['DM_Sans'] text-sm h-10"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
             <SearchIconSvg />
          </div>
        </div>

        {/* Sort By */}
        <div className="flex flex-row items-center gap-2 w-full lg:w-auto">
            <span className="text-sm font-['DM_Sans'] font-medium text-gray-700 whitespace-nowrap shrink-0">Sort By:</span>
            <div className="relative w-full lg:min-w-[170px]">
                <button 
                  onClick={() => toggleDropdown('sort')}
                  className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 font-['DM_Sans'] h-10"
                >
                    Select multiple
                    <div className={`transition-transform ${activeDropdown === 'sort' ? 'rotate-180' : ''}`}>
                      <ChevronDownIconSvg />
                    </div>
                </button>
                {activeDropdown === 'sort' && (
                   <div className="absolute top-full right-0 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1">
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Date</div>
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Status</div>
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">Total</div>
                   </div>
                )}
            </div>
        </div>
      </div>

      {/* Bottom Row: Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
          {/* Date Range */}
          <div className="relative w-full">
             <button 
                onClick={() => toggleDropdown('dateRange')}
                className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 font-['DM_Sans'] h-10"
             >
                {(selectedDateRange.from || selectedDateRange.to) ? `${selectedDateRange.from} - ${selectedDateRange.to}` : 'Date Range'}
                <div className={`transition-transform ${activeDropdown === 'dateRange' ? 'rotate-180' : ''}`}>
                    <ChevronDownIconSvg />
                </div>
            </button>
            {activeDropdown === 'dateRange' && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-3 flex flex-col gap-3">
                    <div>
                        <label className="block text-sm font-['DM_Sans'] text-gray-700 mb-1">From</label>
                        <div className="relative">
                            <input 
                                type="date" 
                                value={selectedDateRange.from}
                                onChange={(e) => onDateRangeChange({ ...selectedDateRange, from: e.target.value })}
                                className="w-full pl-3 pr-10 py-1.5 border border-gray-300 rounded text-sm font-['DM_Sans'] outline-none focus:border-blue-500 [&::-webkit-calendar-picker-indicator]:hidden" 
                                onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <CalendarIcon />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-['DM_Sans'] text-gray-700 mb-1">To</label>
                        <div className="relative">
                            <input 
                                type="date" 
                                value={selectedDateRange.to}
                                onChange={(e) => onDateRangeChange({ ...selectedDateRange, to: e.target.value })}
                                className="w-full pl-3 pr-10 py-1.5 border border-gray-300 rounded text-sm font-['DM_Sans'] outline-none focus:border-blue-500 [&::-webkit-calendar-picker-indicator]:hidden"
                                onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <CalendarIcon />
                            </div>
                        </div>
                    </div>
                </div>
            )}
          </div>

          {/* Order Status */}
          <div className="relative w-full">
             <button 
                onClick={() => toggleDropdown('status')}
                className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 font-['DM_Sans'] h-10"
             >
                {selectedStatus.length > 0 ? `${selectedStatus.length} selected` : 'Order Status'}
                <div className={`transition-transform ${activeDropdown === 'status' ? 'rotate-180' : ''}`}>
                    <ChevronDownIconSvg />
                </div>
            </button>
            {activeDropdown === 'status' && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-2">
                    <div className="px-3 py-1 text-sm font-medium text-gray-500 font-['DM_Sans']">Order Status</div>
                    {['Completed', 'Processing', 'In Transit'].map((status) => (
                        <div 
                            key={status} 
                            onClick={() => handleMultiSelect(selectedStatus, status, onStatusChange)}
                            className="px-3 py-2 text-sm text-gray-900 hover:bg-gray-50 cursor-pointer font-['DM_Sans'] flex items-center gap-2"
                        >
                            <input type="checkbox" checked={selectedStatus.includes(status)} readOnly className="pointer-events-none" />
                            {status}
                        </div>
                    ))}
                </div>
            )}
          </div>

          {/* Bill to */}
          <div className="relative w-full">
             <button 
                onClick={() => toggleDropdown('billTo')}
                className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 font-['DM_Sans'] h-10"
             >
                {selectedBillTo.length > 0 ? `${selectedBillTo.length} selected` : 'Bill to'}
                <div className={`transition-transform ${activeDropdown === 'billTo' ? 'rotate-180' : ''}`}>
                    <ChevronDownIconSvg />
                </div>
            </button>
            {activeDropdown === 'billTo' && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-2">
                     <div className="px-3 py-1 text-sm font-medium text-gray-500 font-['DM_Sans']">Bill to</div>
                    {billToOptions.map((item) => (
                        <div 
                            key={item} 
                            onClick={() => handleMultiSelect(selectedBillTo, item, onBillToChange)}
                            className="px-3 py-2 text-sm text-gray-900 hover:bg-gray-50 cursor-pointer font-['DM_Sans'] flex items-center gap-2"
                        >
                            <input type="checkbox" checked={selectedBillTo.includes(item)} readOnly className="pointer-events-none" />
                            {item}
                        </div>
                    ))}
                </div>
            )}
          </div>

          {/* Ship to */}
          <div className="relative w-full">
             <button 
                onClick={() => toggleDropdown('shipTo')}
                className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 font-['DM_Sans'] h-10"
             >
                {selectedShipTo.length > 0 ? `${selectedShipTo.length} selected` : 'Ship to'}
                <div className={`transition-transform ${activeDropdown === 'shipTo' ? 'rotate-180' : ''}`}>
                    <ChevronDownIconSvg />
                </div>
            </button>
             {activeDropdown === 'shipTo' && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-2">
                    <div className="px-3 py-1 text-sm font-medium text-gray-500 font-['DM_Sans']">Ship to</div>
                    {shipToOptions.map((item) => (
                        <div 
                            key={item} 
                            onClick={() => handleMultiSelect(selectedShipTo, item, onShipToChange)}
                            className="px-3 py-2 text-sm text-gray-900 hover:bg-gray-50 cursor-pointer font-['DM_Sans'] leading-tight flex items-center gap-2"
                        >
                            <input type="checkbox" checked={selectedShipTo.includes(item)} readOnly className="pointer-events-none" />
                            {item}
                        </div>
                    ))}
                </div>
            )}
          </div>
      </div>
    </div>
  );
};
