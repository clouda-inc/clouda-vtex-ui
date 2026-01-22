import React from 'react';
import SelectorItem from './components/SelectorItem';
import TextSelector from './components/TextSelector';
import ColorSelector from './components/ColorSelector';
import QuantitySelector from './components/QuantitySelector';

export interface VariationOption {
  value: string;
  label: string;
  disabled?: boolean;
  meta?: any; // For extra data like color codes
}

export interface Variation {
  name: string;
  type: 'text' | 'color'; // Can be extended
  options: VariationOption[];
}

export interface SkuSelectorProps {
  variations: Variation[];
  selections: Record<string, string>; // name -> selectedValue
  onSelectionChange: (name: string, value: string) => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  loading?: boolean;
  className?: string;
  partNumber?: string;
}

const SkuSelector: React.FC<SkuSelectorProps> = ({
  variations,
  selections,
  onSelectionChange,
  quantity,
  onQuantityChange,
  loading = false,
  className = '',
  partNumber = ''
}) => {
  if (loading) {
    return (
      <div className={`space-y-6 ${className} animate-pulse`}>
         {[1, 2, 3].map((i) => (
           <div key={i} className="h-20 bg-gray-100 rounded"></div>
         ))}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className} font-['Proxima_Nova',_sans-serif]`}>
      {variations.map((variation) => (
        <SelectorItem key={variation.name} title={variation.name + " :"}>
          {variation.type === 'text' && (
            <TextSelector
              options={variation.options}
              selectedValue={selections[variation.name]}
              onChange={(value) => onSelectionChange(variation.name, value)}
            />
          )}
          {variation.type === 'color' && (
            <div className="flex items-center gap-4">
               {/* Special case: Color selectors often have multiple rows in the design.
                   For now, we render a ColorSelector.
                   The design usually splits this into "Housing Color" and "Drawer Color" if applicable.
                   Since we are data-driven, we just render what we are given.
               */}
               <ColorSelector
                 options={variation.options.map(opt => ({
                    ...opt, 
                    colorCode: opt.meta // Assuming meta is the color code for now
                 }))}
                 selectedValue={selections[variation.name]}
                 onChange={(value) => onSelectionChange(variation.name, value)}
               />
            </div>
          )}
        </SelectorItem>
      ))}

      {partNumber && (
        <SelectorItem title="Part Number :">
          <p className="font-semibold text-lg">{partNumber}</p>
        </SelectorItem>
      )}

      <div className="flex items-center gap-4">
        <span className="text-gray-900 font-normal">Quantity</span>
        <QuantitySelector quantity={quantity} onChange={onQuantityChange} />
      </div>
    </div>
  );
};

export default SkuSelector;
