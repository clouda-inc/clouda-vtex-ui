import React, { useState } from 'react';
import { QuantitySelector, type QuantitySelectorProps } from '../QuantitySelector/QuantitySelector';

export interface SpecOption {
    label: string;
    value: string;
    color?: string;
}

export type SpecViewMode = 'pills' | 'dropdown' | 'color-dropdown';

export interface SpecSection {
    id: string;
    title: string;
    mode?: SpecViewMode;
    options: SpecOption[];
}

export interface ProductConfigurationProps {
    specifications?: SpecSection[];
    partNumber?: string;
    quantityProps?: QuantitySelectorProps;
    specsHeight?: string | number;
    blockClass?: string;
    selectedItemColor?: string;
}

const CustomColorDropdown = ({
    label,
    options,
    selectedValue,
    onChange
}: {
    label: string,
    options: SpecOption[],
    selectedValue: string,
    onChange: (val: string) => void
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(o => o.value === selectedValue) || options[0];

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.custom-color-dropdown')) {
                setIsOpen(false);
            }
        };
        // Use mousedown for faster/more reliable interaction than click
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`custom-color-dropdown flex items-center gap-3 relative ${isOpen ? 'z-[9999]' : 'z-10'}`}>
            <span className="text-sm text-gray-500 font-normal font-['DM_Sans'] whitespace-nowrap w-[120px]">
                {label}
            </span>
            <div className="relative">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 rounded-md px-2 py-1 bg-white cursor-pointer border border-gray-300 hover:border-gray-400 transition-colors h-[32px] min-w-[72px]"
                >
                    <div
                        style={{
                            backgroundColor: selectedOption?.color || '#FACC15',
                            width: '28px',
                            height: '28px',
                            maxWidth: '28px',
                            maxHeight: '28px',
                            minWidth: '28px',
                            minHeight: '28px',
                            display: 'block',
                            borderRadius: '2px'
                        }}
                    />
                    <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    >
                        <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-1 w-max min-w-[170px] bg-white border border-gray-200 rounded-md shadow-lg z-[9999] py-1">
                        {options.map(opt => (
                            <div
                                key={opt.value}
                                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer"
                                onClick={() => {
                                    onChange(opt.value);
                                    setIsOpen(false);
                                }}
                            >
                                <div
                                    className="w-4 h-4 rounded border border-gray-100"
                                    style={{ backgroundColor: opt.color || '#eee' }}
                                />
                                <span className="text-sm text-gray-700 font-['DM_Sans']">
                                    {opt.label}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export const ProductConfiguration: React.FC<ProductConfigurationProps> = ({
    specifications = [],
    partNumber = "",
    quantityProps,
    specsHeight,
    blockClass = "",
    selectedItemColor = "#4e46b4",
}) => {
    const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>(() => {
        const defaults: Record<string, string> = {};
        specifications.forEach(s => {
            if (s.options.length > 0) defaults[s.id] = s.options[0].value;
        });
        return defaults;
    });

    const handleSpecSelect = (sectionId: string, value: string) => {
        setSelectedSpecs((prev) => ({ ...prev, [sectionId]: value }));
    };

    const scrollAreaStyle = specsHeight
        ? { height: specsHeight, overflowY: 'auto' as const }
        : { overflowY: 'auto' as const };

    const colorDropdownSections = specifications.filter(
        (section) => (section.mode || 'pills') === 'color-dropdown'
    );
    const otherSections = specifications.filter(
        (section) => (section.mode || 'pills') !== 'color-dropdown'
    );

    return (
        <div className={`product-config relative z-[9999] flex flex-col w-full bg-white ${blockClass}`}>
            {/* Scrollable Specifications Area */}
            <div
                className="product-config__scroll-area relative z-10 pt-2 px-1"
                style={scrollAreaStyle}
            >
                {otherSections.map((section) => {
                    const mode = section.mode || 'pills';
                    const selectedVal = selectedSpecs[section.id] || section.options[0]?.value;
                    const selectedOption = section.options.find(o => o.value === selectedVal);

                    return (
                        <div key={section.id} className="product-config__section mb-6">

                            {/* Render Title for non-color-dropdown modes */}
                            {mode !== 'color-dropdown' && (
                                <p className="text-sm text-gray-500 font-normal font-['DM_Sans'] mb-2.5">
                                    {section.title}
                                </p>
                            )}

                            {mode === 'dropdown' ? (
                                /* Standard Dropdown */
                                <div className="relative inline-block min-w-[200px] max-w-[280px]">
                                    <div
                                        className="flex items-center justify-between gap-3 rounded-md px-4 py-2 bg-white cursor-pointer hover:bg-gray-50 transition-colors h-[42px]"
                                        style={{
                                            border: '1px solid #d1d5db',
                                            boxShadow: '0 0 0 1px #d1d5db'
                                        }}
                                    >
                                        <span className="text-sm font-normal font-['DM_Sans'] text-gray-900 whitespace-nowrap">
                                            {selectedOption?.label}
                                        </span>
                                        <svg
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                            className="text-gray-500 pointer-events-none flex-shrink-0"
                                        >
                                            <path
                                                d="M1 1L5 5L9 1"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <select
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        style={{ opacity: 0 }}
                                        value={selectedVal}
                                        onChange={(e) => handleSpecSelect(section.id, e.target.value)}
                                    >
                                        {section.options.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                            ) : (
                                /* Pills Mode */
                                <div className="flex flex-wrap gap-3">
                                    {section.options.map((opt) => {
                                        const isActive = selectedVal === opt.value;

                                        return (
                                            <button
                                                key={opt.value}
                                                onClick={() => handleSpecSelect(section.id, opt.value)}
                                                style={isActive ? {
                                                    backgroundColor: selectedItemColor,
                                                    color: '#ffffff',
                                                    borderColor: selectedItemColor
                                                } : undefined}
                                                className={`
                                                    border rounded-md py-2 px-4 text-sm font-normal font-['DM_Sans'] transition-all max-w-[200px]
                                                    ${isActive
                                                        ? ''
                                                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                                                    }
                                                `}
                                            >
                                                {opt.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Color dropdown specs in a single horizontal row */}
                {colorDropdownSections.length > 0 && (
                    <div className="product-config__section mb-6 flex flex-nowrap items-center gap-10">
                        {colorDropdownSections.map((section) => {
                            const selectedVal = selectedSpecs[section.id] || section.options[0]?.value;

                            return (
                                <CustomColorDropdown
                                    key={section.id}
                                    label={section.title}
                                    options={section.options}
                                    selectedValue={selectedVal}
                                    onChange={(val) => handleSpecSelect(section.id, val)}
                                />
                            );
                        })}
                    </div>
                )}

                {/* Part Number */}
                {partNumber && (
                    <div className="product-config__part-number mt-8 mb-4">
                        <p className="text-sm text-gray-500 font-normal font-['DM_Sans'] mb-1">
                            Part Number
                        </p>
                        <p className="text-sm text-black font-medium font-['DM_Sans']">
                            {partNumber}
                        </p>
                    </div>
                )}
            </div>

            {/* Quantity Selector Footer */}
            <div className="product-config__footer mt-1 pt-8 border-t border-gray-100">
                <QuantitySelector
                    label="Quantity"
                    buttonBackgroundColor={selectedItemColor}
                    {...quantityProps}
                />
            </div>
        </div>
    );
};
