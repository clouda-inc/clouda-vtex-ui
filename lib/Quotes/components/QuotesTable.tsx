import React from 'react';
import { Button } from '../../Button/Button';

// Mock data type - in real app this would come from props/api
export interface Quote {
  id: string;
  quotationNumber: string;
  date: string;
  status: 'Approved' | 'Active' | 'Declined' | 'Rejected';
}

interface QuotesTableProps {
  quotes: Quote[];
  selectedIds: string[];
  onSelectOne: (id: string) => void;
  onSelectAll: () => void;
  primaryColor: string;
  secondaryColor: string;
}

const MobileCard = ({ 
    quote, 
    index, 
    selectedIds, 
    onSelectOne,
    primaryColor,
    secondaryColor
}: { 
    quote: Quote; 
    index: number; 
    selectedIds: string[]; 
    onSelectOne: (id: string) => void; 
    primaryColor: string;
    secondaryColor: string;
}) => (
    <div 
        key={quote.id} 
        className={`p-4 border-b border-gray-200 last:border-0 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}`}
        onClick={() => onSelectOne(quote.id)}
    >
        <div className="flex items-center gap-3 mb-4">
            <input
                type="checkbox"
                checked={selectedIds.includes(quote.id)}
                onChange={(e) => {
                    e.stopPropagation();
                    onSelectOne(quote.id);
                }}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <span className="font-['DM_Sans'] font-bold text-sm text-[#1A1A1A]">{quote.quotationNumber}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-y-2 mb-4">
            <div className="text-xs text-gray-500 font-['DM_Sans']">Unit Price</div>
            <div className="text-sm text-[#1A1A1A] font-['DM_Sans'] text-right">{quote.date}</div>
            
            <div className="text-xs text-gray-500 font-['DM_Sans']">Unit Price</div>
            <div className="text-sm text-[#1A1A1A] font-['DM_Sans'] text-right">{quote.status}</div>
        </div>

        <div className="flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
            <div className={quote.status === 'Approved' ? "grid grid-cols-2 gap-2" : "w-full"}>
                 <Button variant="primary" customColor={primaryColor} size="sm" className="font-['DM_Sans'] font-bold text-xs h-9 w-full justify-center whitespace-nowrap">
                    View Quote
                  </Button>
                  {quote.status === 'Approved' && (
                       <Button 
                            variant="primary" 
                            customColor={secondaryColor} 
                            size="sm" 
                            className="font-['DM_Sans'] font-bold text-xs h-9 w-full justify-center whitespace-nowrap hover:brightness-90"
                            style={{ backgroundColor: secondaryColor }}
                        >
                            Reject
                        </Button>
                  )}
            </div>
            {quote.status === 'Approved' && (
                <Button variant="primary" customColor={primaryColor} size="sm" className="font-['DM_Sans'] font-bold text-xs h-9 w-full justify-center whitespace-nowrap">
                    Accept & Checkout
                </Button>
            )}
        </div>
    </div>
);

export const QuotesTable: React.FC<QuotesTableProps> = ({
  quotes,
  selectedIds,
  onSelectOne,
  onSelectAll,
  primaryColor,
  secondaryColor,
}) => {
  const allSelected = quotes.length > 0 && selectedIds.length === quotes.length;

  return (
    <div className="w-full bg-[#F9F9F9]">
        {/* Desktop Table View - Visible on LG and up */}
        <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
                <thead className="bg-[#595D62] text-white">
                <tr className="text-left">
                    <th className="p-4 w-16">
                    <input
                        type="checkbox"
                        checked={allSelected}
                        onChange={onSelectAll}
                        className="w-5 h-5 rounded border-gray-300 bg-transparent text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    </th>
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm">Quotation #</th>
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm">Date</th>
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm">Status</th>
                    <th className="p-4 font-['DM_Sans'] font-bold text-sm w-[300px]">Action</th>
                </tr>
                </thead>
                <tbody>
                {quotes.map((quote, index) => (
                    <tr 
                        key={quote.id} 
                        className={`border-b border-gray-200 last:border-0 hover:bg-gray-100 cursor-pointer ${index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}`}
                        onClick={() => onSelectOne(quote.id)}
                    >
                    <td className="p-4">
                        <input
                        type="checkbox"
                        checked={selectedIds.includes(quote.id)}
                        onChange={(e) => {
                            e.stopPropagation(); // Prevent double toggle due to row click
                            onSelectOne(quote.id);
                        }}
                        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                    </td>
                    <td className="p-4 font-['DM_Sans'] text-sm text-[#1A1A1A]">{quote.quotationNumber}</td>
                    <td className="p-4 font-['DM_Sans'] text-sm text-[#1A1A1A]">{quote.date}</td>
                    <td className="p-4 font-['DM_Sans'] text-sm text-[#1A1A1A]">{quote.status}</td>
                    <td className="p-4">
                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        <Button variant="primary" customColor={primaryColor} size="sm" className="font-['DM_Sans'] font-bold text-xs h-8 whitespace-nowrap">
                            View Quote
                        </Button>
                        {quote.status === 'Approved' && (
                            <>
                                <Button variant="primary" customColor={primaryColor} size="sm" className="font-['DM_Sans'] font-bold text-xs h-8 whitespace-nowrap">
                                    Accept & Checkout
                                </Button>
                                <Button 
                                    variant="primary" 
                                    customColor={secondaryColor} 
                                    size="sm" 
                                    className="font-['DM_Sans'] font-bold text-xs h-8 whitespace-nowrap hover:brightness-90"
                                    style={{ backgroundColor: secondaryColor }}
                                >
                                    Reject
                                </Button>
                            </>
                        )}
                        </div>
                    </td>
                    </tr>
                ))}
                {quotes.length === 0 && (
                    <tr>
                        <td colSpan={5} className="p-8 text-center text-gray-500 font-['DM_Sans']">No quotes found.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

        {/* Mobile/Tablet Card View - Visible below LG */}
        <div className="block lg:hidden">
             {quotes.map((quote, index) => (
                 <MobileCard 
                    key={quote.id} 
                    quote={quote} 
                    index={index} 
                    selectedIds={selectedIds}
                    onSelectOne={onSelectOne}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                />
             ))}
             {quotes.length === 0 && (
                 <div className="p-8 text-center text-gray-500 font-['DM_Sans']">No quotes found.</div>
             )}
        </div>
    </div>
  );
};
