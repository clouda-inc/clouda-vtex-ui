import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../Button/Button';
import { OrdersFilterBar } from './components/OrdersFilterBar';
import { OrdersTable, type Order } from './components/OrdersTable';

import { OrderDetails, type OrderData } from '../OrderDetails/OrderDetails';

const DownloadIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.577L8.461 12.039L9.169 11.319L11.5 13.65V5H12.5V13.65L14.83 11.32L15.539 12.039L12 15.577ZM6.616 19C6.15533 19 5.771 18.846 5.463 18.538C5.155 18.23 5.00067 17.8453 5 17.384V14.961H6V17.384C6 17.538 6.064 17.6793 6.192 17.808C6.32 17.9367 6.461 18.0007 6.615 18H17.385C17.5383 18 17.6793 17.936 17.808 17.808C17.9367 17.68 18.0007 17.5387 18 17.384V14.961H19V17.384C19 17.8447 18.846 18.229 18.538 18.537C18.23 18.845 17.8453 18.9993 17.384 19H6.616Z" fill="currentColor"/>
    </svg>
)

interface OrderHistoryProps {
    primaryColor?: string;
    orders?: Order[];
    getOrderDetails?: (id: string) => OrderData;
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({
    primaryColor = '#4E46B4',
    orders,
    getOrderDetails
}) => {
    const displayOrders = orders || [];

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDateRange, setSelectedDateRange] = useState({ from: '', to: '' });
    const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
    const [selectedBillTo, setSelectedBillTo] = useState<string[]>([]);
    const [selectedShipTo, setSelectedShipTo] = useState<string[]>([]);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
    const sortRef = useRef<HTMLDivElement>(null);

    // Close sort dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sortRef]);

    const filteredOrders = displayOrders.filter(o => {
        const matchesSearch = o.poNumber.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(o.status);
        const matchesBillTo = selectedBillTo.length === 0 || selectedBillTo.includes(o.billTo);
        const matchesShipTo = selectedShipTo.length === 0 || selectedShipTo.includes(o.shipTo);
        
        let matchesDate = true;
        if (selectedDateRange.from && selectedDateRange.to) {
            const orderDate = new Date(o.date);
            const fromDate = new Date(selectedDateRange.from);
            const toDate = new Date(selectedDateRange.to);
            matchesDate = orderDate >= fromDate && orderDate <= toDate;
        }

        return matchesSearch && matchesStatus && matchesBillTo && matchesShipTo && matchesDate;
    });

    const handleViewOrder = (id: string) => {
        setSelectedOrderId(id);
    };

    const handleBackToHistory = () => {
        setSelectedOrderId(null);
    };

    if (selectedOrderId && getOrderDetails) {
        const orderDetailsData = getOrderDetails(selectedOrderId);

        return (
            <div className="w-full max-w-[1440px] mx-auto p-4 md:p-8 font-['DM_Sans'] bg-white relative">
                <OrderDetails 
                    order={orderDetailsData} 
                    onBack={handleBackToHistory}
                    primaryColor={primaryColor}
                />
            </div>
        );
    }

    return (
        <div className="w-full max-w-[1440px] mx-auto p-4 md:p-8 font-['DM_Sans'] bg-white relative">
            {/* Header */}
            <div className="flex flex-row justify-between items-center mb-6 lg:mb-8 gap-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['DM_Sans'] tracking-tight">Your Orders</h1>
                
                <Button 
                    variant="outline" 
                    className="hidden lg:inline-flex font-bold text-sm text-gray-700 border-gray-300 gap-2 h-10 px-4"
                >
                    <DownloadIcon />
                    Export
                </Button>
                 {/* Mobile Export Icon */}
                 <div className="lg:hidden p-2 border border-gray-300 rounded">
                    <DownloadIcon />
                 </div>
            </div>

            {/* Filters */}
            <div className="mb-8">
                <OrdersFilterBar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    sortBy={[]}
                    onSortChange={() => {}}
                    isSortOpen={isSortOpen}
                    setIsSortOpen={setIsSortOpen}
                    sortRef={sortRef}
                    billToOptions={['Nexra Warehouse - New York', 'Nexra Distribution Center - Chicago']}
                    shipToOptions={[
                        'Main Warehouse - 123 Industrial Blvd, New York, NY',
                        'Distribution Center - 456 Commerce St, Chicago, IL'
                    ]}
                    selectedDateRange={selectedDateRange}
                    onDateRangeChange={setSelectedDateRange}
                    selectedStatus={selectedStatus}
                    onStatusChange={setSelectedStatus}
                    selectedBillTo={selectedBillTo}
                    onBillToChange={setSelectedBillTo}
                    selectedShipTo={selectedShipTo}
                    onShipToChange={setSelectedShipTo}
                />
            </div>

            {/* Table */}
            <OrdersTable
                orders={filteredOrders}
                onViewOrder={handleViewOrder}
                primaryColor={primaryColor}
            />
            
            <div className="mt-8">
                <Button variant="outline" className="font-bold text-sm border-gray-800 text-gray-900 px-8 h-12 w-full lg:w-auto">
                    Load More
                </Button>
            </div>
        </div>
    );
};
