
import { useState } from 'react';

export interface AccessoryItem {
  id: string;
  partNumber: string;
  description: string;
  image: string;
  initialQuantity?: number;
}

interface AccessoriesTableProps {
  items: AccessoryItem[];
}

const AccessoriesTable = ({ items }: AccessoriesTableProps) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [quantities, setQuantities] = useState<Record<string, number>>(
    items.reduce((acc, item) => ({ ...acc, [item.id]: item.initialQuantity || 1 }), {})
  );

  const toggleSelection = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const handleAddToCart = () => {
    const itemsToAdd = items
      .filter(item => selectedItems.has(item.id))
      .map(item => ({
        ...item,
        quantity: quantities[item.id]
      }));
    console.log('Adding to cart:', itemsToAdd);
    alert(`Added ${itemsToAdd.length} items to cart!`);
  };

  if (items.length === 0) {
    return <div className="p-4 text-gray-500 text-center">No accessories available.</div>;
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <button
          onClick={handleAddToCart}
          disabled={selectedItems.size === 0}
          className={`
            flex items-center gap-2 px-6 py-3 rounded
            font-['Proxima_Nova',sans-serif] font-bold text-sm uppercase tracking-wide transition-colors
            ${selectedItems.size > 0 
              ? 'bg-[#FFDB0A] text-black hover:bg-[#ebd95a] cursor-pointer' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
          `}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20ZM17 20C17 21.1 16.1 22 15 22C13.9 22 13 21.1 13 20C13 18.9 13.9 18 15 18C16.1 18 17 18.9 17 20ZM7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 4.96L19.42 4H19.41L18.31 6L15.55 11H8.53L8.4 10.73L6.16 6L5.21 4L4.27 2H1V4H3L6.6 11.59L5.25 14.03C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.29 15 7.17 14.89 7.17 14.75Z" fill="currentColor"/>
          </svg>
          Add to Cart
        </button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="bg-[#343843] text-white">
              <th className="p-4 w-12 text-center">
                 {/* Select All could go here */}
              </th>
              <th className="p-4 text-left font-semibold uppercase tracking-wide text-sm">Image</th>
              <th className="p-4 text-left font-semibold uppercase tracking-wide text-sm">Part Number</th>
              <th className="p-4 text-left font-semibold uppercase tracking-wide text-sm">Description</th>
              <th className="p-4 text-center font-semibold uppercase tracking-wide text-sm">Qty</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr 
                key={item.id} 
                className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#EAEFF8]'}`}
              >
                <td className="p-4 text-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.has(item.id)}
                    onChange={() => toggleSelection(item.id)}
                    className="w-5 h-5 accent-[#FFDB0A] cursor-pointer"
                  />
                </td>
                <td className="p-4">
                  <div className="w-16 h-16 bg-white border border-gray-200 flex items-center justify-center p-1">
                    <img src={item.image} alt={item.partNumber} className="max-h-full max-w-full" />
                  </div>
                </td>
                <td className="p-4 font-semibold text-[#343843]">{item.partNumber}</td>
                <td className="p-4 text-gray-600 font-medium">{item.description}</td>
                <td className="p-4">
                   <div className="flex items-center justify-center border border-gray-300 bg-white w-24 mx-auto">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
                        disabled={!selectedItems.has(item.id)}
                      >
                        -
                      </button>
                      <input 
                        type="text" 
                        value={quantities[item.id]} 
                        readOnly 
                        className="w-full text-center text-[#343843] font-semibold focus:outline-none" 
                      />
                      <button 
                         onClick={() => updateQuantity(item.id, 1)}
                         className="px-3 py-1 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
                         disabled={!selectedItems.has(item.id)}
                      >
                        +
                      </button>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessoriesTable;
