import React from 'react';

// Mock data type
export interface Order {
  id: string;
  poNumber: string;
  date: string;
  billTo: string;
  shipTo: string;
  total: string;
  status: string;
}

interface OrdersTableProps {
  orders: Order[];
  onViewOrder: (id: string) => void;
  primaryColor: string;
}

const MobileCard = ({ 
    order, 
    index, 
    onViewOrder,
    primaryColor
}: { 
    order: Order; 
    index: number; 
    onViewOrder: (id: string) => void;
    primaryColor: string;
}) => (
    <div 
        key={order.id} 
        className={`p-4 border-b border-gray-200 last:border-0 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}`}
    >
        <div className="flex justify-between items-center mb-4">
            <span className="font-['DM_Sans'] text-sm text-[#1A1A1A]">Order Number</span>
            <span 
                className="font-['DM_Sans'] text-sm text-white px-3 py-1.5 rounded"
                style={{ backgroundColor: primaryColor }}
            >
                12345
            </span>
        </div>
        
        <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-6">
            <span className="text-sm text-[#1A1A1A] font-['DM_Sans']">Date</span>
            <span className="text-sm text-[#1A1A1A] font-['DM_Sans'] font-medium">{order.date}</span>
            
            <span className="text-sm text-[#1A1A1A] font-['DM_Sans']">Bill to</span>
            <span className="text-sm text-[#1A1A1A] font-['DM_Sans'] font-medium">{order.billTo}</span>
            
            <span className="text-sm text-[#1A1A1A] font-['DM_Sans']">Ship to</span>
            <span className="text-sm text-[#1A1A1A] font-['DM_Sans'] font-medium">{order.shipTo}</span>
            
            <span className="text-sm text-[#1A1A1A] font-['DM_Sans']">Total</span>
            <span className="text-sm text-[#1A1A1A] font-['DM_Sans'] font-medium">{order.total}</span>
            
            <span className="text-sm text-[#1A1A1A] font-['DM_Sans']">Status</span>
            <span className="text-sm text-[#1A1A1A] font-['DM_Sans'] font-medium">{order.status}</span>
        </div>

        <button 
            onClick={() => onViewOrder(order.id)}
            className="w-full text-white font-['DM_Sans'] font-bold text-sm py-3 rounded hover:brightness-90 transition-all"
            style={{ backgroundColor: primaryColor }}
        >
            View Order Details
        </button>
    </div>
);

export const OrdersTable: React.FC<OrdersTableProps> = ({
  orders,
  onViewOrder,
  primaryColor
}) => {

  return (
    <div className="w-full bg-[#F9F9F9]">
        {/* Desktop Table View - Visible on LG and up */}
        <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
                <thead className="bg-[#595D62] text-white">
                <tr className="text-left">
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm pl-8">PO</th>
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm">Date</th>
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm">Bill to</th>
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm">Ship to</th>
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm">Total</th>
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm">Status</th>
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm text-right pr-8">Order Details</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order, index) => (
                    <tr 
                        key={order.id} 
                        className={`border-b border-gray-200 last:border-0 hover:bg-gray-100 cursor-pointer ${index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}`}
                        onClick={() => onViewOrder(order.id)}
                    >
                    <td className="p-4 font-['DM_Sans'] text-sm text-[#1A1A1A] break-words pl-8">{order.poNumber}</td>
                    <td className="p-4 font-['DM_Sans'] text-sm text-[#1A1A1A]">{order.date}</td>
                    <td className="p-4 font-['DM_Sans'] text-sm text-[#1A1A1A] break-words">{order.billTo}</td>
                    <td className="p-4 font-['DM_Sans'] text-sm text-[#1A1A1A] break-words">{order.shipTo}</td>
                    <td className="p-4 font-['DM_Sans'] text-sm text-[#1A1A1A]">{order.total}</td>
                    <td className="p-4 font-['DM_Sans'] text-sm text-[#1A1A1A]">{order.status}</td>
                    <td className="p-4 text-right pr-8">
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                onViewOrder(order.id);
                            }}
                            className="text-sm text-[#1A1A1A] underline font-['DM_Sans'] hover:text-blue-600"
                        >
                            View
                        </button>
                    </td>
                    </tr>
                ))}
                {orders.length === 0 && (
                    <tr>
                        <td colSpan={7} className="p-8 text-center text-gray-500 font-['DM_Sans']">No orders found.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

        {/* Mobile/Tablet Card View - Visible below LG */}
        <div className="block lg:hidden">
             {orders.map((order, index) => (
                 <MobileCard 
                    key={order.id} 
                    order={order} 
                    index={index} 
                    onViewOrder={onViewOrder}
                    primaryColor={primaryColor}
                />
             ))}
             {orders.length === 0 && (
                 <div className="p-8 text-center text-gray-500 font-['DM_Sans']">No orders found.</div>
             )}
        </div>
    </div>
  );
};
