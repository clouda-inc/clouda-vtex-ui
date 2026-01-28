
import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import { ShippingAddressModal, type Address } from './ShippingAddressModal';
import { NewAddressFormModal, type NewAddressForm } from './NewAddressFormModal';

// Types
export interface ProductItem {
    id: string;
    description: string;
    productName: string;
    price: number;
    image: string;
}

export interface UserInfo {
    name: string;
    email: string;
    company: string;
    address: string;
}

export interface CheckoutProps {
    blockClass?: string;
    soldTo?: UserInfo;
    shipTo?: UserInfo;
    products?: ProductItem[];
    onSoldToClick?: () => void;
    onShipToClick?: () => void;
}

// Icons
const ChevronDownIcon = () => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-gray-500">
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const EditIcon = () => (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L14 5L5 14H2V11L11 2Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
// Vector from Figma for Ship To edit
const VectorIcon = () => (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L14 5L5 14H2V11L11 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


// Internal Sub-components
const InfoBox = ({ title, user, onClick, isShipTo, className }: { title: string, user?: UserInfo, onClick?: () => void, isShipTo?: boolean, className?: string }) => (
    <div
        className={`relative shrink-0 h-[150px] bg-white border border-[#bbbbbb] box-border p-[20px] flex flex-col items-start justify-start cursor-pointer hover:border-gray-400 transition-colors ${className || 'w-[310px]'}`}
        onClick={onClick}
    >
        <div className="flex justify-between items-center w-full mb-2">
            <h3 className="text-[16px] font-semibold text-black font-['DM_Sans'] leading-[24px]">{title}</h3>
            {isShipTo && onClick && (
                <div className="cursor-pointer">
                    <VectorIcon />
                </div>
            )}
        </div>

        {user ? (
            <div className="flex flex-col gap-0 w-full">
                <p className="text-[14px] font-normal text-black font-['DM_Sans'] leading-[20px] line-clamp-4">
                    {user.name} <br />
                    {user.email} <br />
                    {user.company} <br />
                    {user.address}
                </p>
            </div>
        ) : (
            <p className="text-[14px] font-normal text-gray-400 italic font-['DM_Sans'] leading-[20px] mt-[41px]">
                Lorem ipsum purus tortor auctor ullamcorper dui diam molestie elementum iaculis cursus.
            </p>
        )}
    </div>
);

const CustomCheckoutDropdown = ({
    label,
    options,
    value,
    onChange,
    className
}: {
    label: string,
    options: string[],
    value: string,
    onChange: (val: string) => void,
    className?: string
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setIsOpen(false);
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    return (
        <div
            className={`relative shrink-0 h-[150px] bg-white border border-[#bbbbbb] box-border px-[10px] py-[10px] flex flex-col gap-[20px] ${className || 'w-[310px]'}`}
            onClick={(e) => e.stopPropagation()}
        >
            <label className="text-[16px] font-semibold text-black font-['DM_Sans'] leading-[24px] w-full pt-[10px] pl-[0.3px]">
                {label}
            </label>

            <div className="relative w-full">
                <div
                    className="flex items-center justify-between w-full h-[40px] px-[12px] py-[8px] bg-white rounded-[4px] border border-[#e2e2e2] cursor-pointer hover:border-gray-300 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`text-[14px] font-normal font-['DM_Sans'] leading-[24px] ${value ? 'text-gray-900' : 'text-[#595d62]'}`}>
                        {value || `Select ${label.includes("Shipping") ? "Shipping Option" : "Payment Method"}`}
                    </span>
                    <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDownIcon />
                    </div>
                </div>

                {isOpen && (
                    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-[4px] shadow-lg max-h-60 overflow-auto">
                        {options.map((opt) => (
                            <div
                                key={opt}
                                className="px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-50 cursor-pointer font-['DM_Sans'] flex items-center justify-between"
                                onClick={() => {
                                    onChange(opt);
                                    setIsOpen(false);
                                }}
                            >
                                {opt}
                                {value === opt && <span className="text-blue-600 font-bold">✓</span>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const BulkActionDropdown = ({
    value,
    onChange
}: {
    value: string,
    onChange: (val: string) => void
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const options = ["Select multiple", "Reorder Selected Items"];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setIsOpen(false);
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative">
            <div
                className="flex items-center justify-between gap-2 px-3 py-2 bg-white border border-gray-200 rounded-[4px] min-w-[140px] md:min-w-[160px] cursor-pointer hover:border-gray-300"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
            >
                <span className="text-[14px] text-gray-500 font-['DM_Sans'] whitespace-nowrap">{value}</span>
                <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                </div>
            </div>

            {isOpen && (
                <div className="absolute z-50 top-full left-0 mt-1 bg-white border border-gray-200 rounded-[4px] shadow-lg min-w-full w-max overflow-hidden">
                    {options.map((opt) => (
                        <div
                            key={opt}
                            className={`px-4 py-2 text-[14px] cursor-pointer font-['DM_Sans'] hover:bg-gray-50 ${opt === value ? 'bg-[#E0E2EF] text-black font-medium' : 'text-gray-700'}`}
                            onClick={() => {
                                onChange(opt);
                                setIsOpen(false);
                            }}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export const Checkout: React.FC<CheckoutProps> = ({
    blockClass = "",
    soldTo,
    shipTo,
    products = [],
    onSoldToClick,
    onShipToClick,
}) => {
    // Dropdown State
    const [shippingOption, setShippingOption] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const [bulkAction, setBulkAction] = useState<string>("Select multiple");

    // Ship To State - prioritize local selection, fallback to prop
    const [selectedShipTo, setSelectedShipTo] = useState<UserInfo | undefined>(shipTo);

    // Product Selection State
    const [selectedProductIds, setSelectedProductIds] = useState<Set<string>>(new Set(products.map(p => p.id)));
    const [quantities, setQuantities] = useState<Record<string, number>>(
        products.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
    );
    const [editingQuantityId, setEditingQuantityId] = useState<string | null>(null);

    // Options
    const shippingOptions = [
        "Standard Freight (5-7 days)",
        "Express Shipping (2-3 days)"
    ];

    const paymentMethods = [
        "Credit Card",
        "Net 30 Terms",
        "Wire Transfer"
    ];

    // Modal State
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [isNewAddressFormOpen, setIsNewAddressFormOpen] = useState(false);

    // Mock Addresses
    const [addresses, setAddresses] = useState<Address[]>([
        {
            id: '1',
            customerNumber: '30789',
            company: 'Fastener Supply Company',
            street: '13410 South Ridge Drive',
            city: 'Charlotte',
            state: 'NC',
            zip: '28273',
            country: 'US'
        },
        {
            id: '2',
            customerNumber: '30789',
            company: 'Fastener Supply Company',
            street: '13410 South Ridge Drive',
            city: 'Charlotte',
            state: 'NC',
            zip: '28273',
            country: 'US'
        }
    ]);

    // Handlers
    const handleShipToClick = () => {
        setIsAddressModalOpen(true);
        if (onShipToClick) onShipToClick();
    };

    const handleSaveAddress = (address: Address) => {
        // Map Address to UserInfo for display
        const newShipTo: UserInfo = {
            name: address.name || "Current Selection",
            email: address.email || "N/A",
            company: address.company,
            address: `${address.street}, ${address.city}, ${address.state} ${address.zip}, ${address.country}`
        };
        setSelectedShipTo(newShipTo);
        setIsAddressModalOpen(false);
    };

    const handleCreateNewAddress = () => {
        setIsAddressModalOpen(false);
        setIsNewAddressFormOpen(true);
    };

    const handleSaveNewAddress = (data: NewAddressForm) => {
        // Create new address object
        const newAddr: Address = {
            id: Date.now().toString(),
            customerNumber: 'NEW-123', // Mock
            company: data.businessName,
            street: data.street1,
            city: data.city,
            state: data.state,
            zip: data.zip,
            country: data.country
        };
        setAddresses([...addresses, newAddr]);
        setIsNewAddressFormOpen(false);
        setIsAddressModalOpen(true); // Go back to selection or just close? 
    };

    const toggleProduct = (id: string) => {
        const newSelected = new Set(selectedProductIds);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedProductIds(newSelected);
    };

    const toggleAll = () => {
        if (selectedProductIds.size === products.length) {
            setSelectedProductIds(new Set());
        } else {
            setSelectedProductIds(new Set(products.map(p => p.id)));
        }
    };


    // Calculations
    const selectedProducts = products.filter(p => selectedProductIds.has(p.id));
    const subtotal = selectedProducts.reduce((sum, p) => sum + (p.price * (quantities[p.id] || 1)), 0);
    const mci = 10.00;
    const freight = 10.00;
    const salesTax = 2.00;
    const total = subtotal + mci + freight + salesTax;

    return (
        <div className={`checkout-container w-full max-w-[1480px] mx-auto py-[32px] px-4 md:px-[80px] flex flex-col gap-[32px] bg-white ${blockClass}`}>

            {/* DESKTOP VIEW */}
            <div className="hidden lg:flex flex-col gap-[32px] w-full">
                {/* Header Area */}
                <div className="flex flex-col gap-0 items-start w-full">
                    <div className="flex gap-[10px] items-center mb-[12px] cursor-pointer hover:opacity-70">
                        <div className="rotate-90">
                            <ChevronDownIcon />
                        </div>
                        <span className="text-[16px] font-normal font-['DM_Sans'] leading-[24px]">Back to Previous Page</span>
                    </div>
                    <h1 className="text-[32px] font-bold font-['DM_Sans'] leading-[40px] tracking-[-0.5px]">Checkout</h1>
                </div>

                {/* Top Row: Sold To, Ship To, Shipping, Payment - FORCED ROW, NO SCROLL */}
                <div className="flex flex-nowrap items-start w-full gap-[20px]">
                    <InfoBox title="Sold To" user={soldTo} onClick={onSoldToClick} />
                    <InfoBox title="Ship To" user={selectedShipTo} onClick={handleShipToClick} isShipTo />
                    <CustomCheckoutDropdown
                        label="Shipping Options"
                        options={shippingOptions}
                        value={shippingOption}
                        onChange={setShippingOption}
                    />
                    <CustomCheckoutDropdown
                        label="Payment Method"
                        options={paymentMethods}
                        value={paymentMethod}
                        onChange={setPaymentMethod}
                    />
                </div>

                {/* Bulk Actions Bar */}
                <div className="flex justify-between items-center w-full mt-2">
                    <div className="flex items-center gap-4">
                        <span className="text-[14px] font-normal text-black font-['DM_Sans']">Bulk Actions</span>

                        {/* Select Multiple Dropdown */}
                        <BulkActionDropdown value={bulkAction} onChange={setBulkAction} />

                        {/* Proceed Button - Light Purple */}
                        <button className="px-6 py-2 bg-[#9FABDD] text-white text-[14px] font-bold font-['DM_Sans'] rounded-[4px] hover:bg-[#8E9BCB] transition-colors">
                            Proceed
                        </button>

                        {/* Order Notes Button - Outline */}
                        <button className="px-6 py-2 bg-white border border-gray-300 text-black text-[14px] font-bold font-['DM_Sans'] rounded-[4px] hover:bg-gray-50 transition-colors">
                            Order Notes
                        </button>
                    </div>

                    {/* Right Side Action */}
                    <button className="px-6 py-2 bg-[#4E46B4] text-white text-[14px] font-bold font-['DM_Sans'] rounded-[4px] hover:bg-[#3E36A4] transition-colors">
                        Get Price & Availability
                    </button>
                </div>


                {/* Bottom Section: Summary & Products Table */}
                <div className="w-full flex flex-col gap-6 mt-4">

                    {/* Product Table Header */}
                    <div className="w-full">
                        {/* Dark Header */}
                        <div className="grid grid-cols-[50px_100px_1fr_120px_150px_100px_100px_100px] gap-4 py-4 px-4 bg-[#555860] text-white text-[12px] font-bold font-['DM_Sans'] items-center rounded-t-sm">
                            <div className="flex items-center justify-center">
                                <div
                                    className={`w-5 h-5 border border-white rounded-[2px] cursor-pointer flex items-center justify-center ${selectedProductIds.size === products.length && products.length > 0 ? 'bg-white border-white' : ''}`}
                                    onClick={toggleAll}
                                >
                                    {selectedProductIds.size === products.length && products.length > 0 && (
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="#555860" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div>Part Number</div>
                            <div>Product Name</div>
                            <div>Order Notes</div>
                            <div>Estimated Due Date</div>
                            <div>QTY</div>
                            <div className="text-right">Unit Price</div>
                            <div className="text-right">Total Price</div>
                        </div>

                        {/* Product Rows */}
                        <div className="flex flex-col">
                            {products.map((product, index) => {
                                const isSelected = selectedProductIds.has(product.id);
                                const qty = quantities[product.id] || 1;
                                // Defined lineTotal here to fix ReferenceError
                                const lineTotal = product.price * qty;
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={product.id}
                                        className={`grid grid-cols-[50px_100px_1fr_120px_150px_100px_100px_100px] gap-4 py-6 px-4 items-center ${isEven ? 'bg-white' : 'bg-[#f4f4f4]'}`}
                                    >
                                        <div className="flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => toggleProduct(product.id)}
                                                className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div className="text-[14px] text-gray-900 font-['DM_Sans']">12345</div>

                                        <div className="text-[14px] text-gray-900 font-['DM_Sans']">
                                            {product.productName}
                                            <div className="text-xs text-gray-500 truncate">{product.description}</div>
                                        </div>

                                        <div>
                                            <button className="px-4 py-1.5 bg-[#4E46B4] text-white text-[12px] font-bold font-['DM_Sans'] rounded-[4px] hover:bg-[#3E36A4]">
                                                Order Notes
                                            </button>
                                        </div>

                                        <div className="text-[14px] text-gray-500 font-['DM_Sans'] tracking-widest">
                                            12/05/2026
                                        </div>

                                        {/* Quantity with Pencil */}
                                        <div className="flex items-center gap-2">
                                            {editingQuantityId === product.id ? (
                                                <QuantitySelector
                                                    label=""
                                                    value={qty}
                                                    onChange={(val) => {
                                                        setQuantities(prev => ({ ...prev, [product.id]: val }));
                                                    }}
                                                    min={1}
                                                    size="small"
                                                />
                                            ) : (
                                                <>
                                                    <span className="text-[14px] text-gray-900 font-['DM_Sans']">{qty}</span>
                                                    <div
                                                        className="cursor-pointer text-gray-400 hover:text-gray-600"
                                                        onClick={() => setEditingQuantityId(product.id)}
                                                    >
                                                        <EditIcon />
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <div className="text-right text-[14px] text-gray-900 font-['DM_Sans']">
                                            ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                        </div>
                                        <div className="text-right text-[14px] text-gray-900 font-['DM_Sans']">
                                            ${lineTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Calculation Rows - Refined to match Design (Full Width Bordered Box) */}
                    <div className="w-full border border-[#E2E2E2] rounded-[4px] p-6 mt-8">
                        <h3 className="text-[20px] font-bold font-['DM_Sans'] text-black mb-6">Order Summary</h3>

                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center text-[14px]">
                                <span className="font-normal text-black font-['DM_Sans']">Subtotal :</span>
                                <span className="font-normal text-black font-['DM_Sans']">${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className="flex justify-between items-center text-[14px]">
                                <span className="font-normal text-black font-['DM_Sans']">MCI :</span>
                                <span className="font-normal text-black font-['DM_Sans']">${mci.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className="flex justify-between items-center text-[14px]">
                                <span className="font-normal text-black font-['DM_Sans']">Freight :</span>
                                <span className="font-normal text-black font-['DM_Sans']">${freight.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className="flex justify-between items-center text-[14px]">
                                <span className="font-normal text-black font-['DM_Sans']">Sales Tax :</span>
                                <span className="font-normal text-black font-['DM_Sans']">${salesTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>

                            <div className="flex justify-between items-center pt-4 mt-2">
                                <span className="text-[16px] font-bold text-black font-['DM_Sans']">Order Total :</span>
                                <span className="text-[16px] font-bold text-black font-['DM_Sans']">${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                        </div>

                        <div className="flex justify-end w-full mt-6">
                            <div className="w-[180px]">
                                <Button variant="primary" size="lg" className="w-full bg-[#4E46B4] hover:bg-[#3E36A4]" disabled={selectedProducts.length === 0}>
                                    Place Order
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Desktop View */}


            {/* TABLET / MOBILE VIEW */}
            <div className="flex lg:hidden flex-col w-full gap-4">
                <div className="flex gap-[10px] items-center mb-[12px] cursor-pointer hover:opacity-70">
                    <div className="rotate-90">
                        <ChevronDownIcon />
                    </div>
                    <span className="text-[16px] font-normal font-['DM_Sans'] leading-[24px]">Back to Previous Page</span>
                </div>
                <h1 className="text-[24px] font-bold font-['DM_Sans'] leading-[32px] tracking-[-0.5px]">Checkout</h1>

                {/* Mobile/Tablet Info Stack - Single Column */}
                <div className="flex flex-col gap-4 w-full">
                    <InfoBox title="Sold To" user={soldTo} onClick={onSoldToClick} className="w-full" />
                    <InfoBox title="Ship To" user={selectedShipTo} onClick={handleShipToClick} isShipTo className="w-full" />
                    <CustomCheckoutDropdown
                        label="Shipping Options"
                        options={shippingOptions}
                        value={shippingOption}
                        onChange={setShippingOption}
                        className="w-full"
                    />
                    <CustomCheckoutDropdown
                        label="Payment Method"
                        options={paymentMethods}
                        value={paymentMethod}
                        onChange={setPaymentMethod}
                        className="w-full"
                    />
                </div>

                {/* Mobile/Tablet Bulk Actions */}
                <div className="flex flex-col gap-3 w-full p-4 bg-[#E5E5E5] rounded-[4px] mt-4">
                    {/* Top Row: Label + Dropdown + Proceed (Tablet) */}
                    <div className="flex flex-col md:flex-row gap-3 w-full md:items-center">
                        <div className="flex justify-between items-center md:gap-4 md:w-auto w-full">
                            <span className="text-[14px] font-bold font-['DM_Sans'] text-black whitespace-nowrap">Bulk Actions</span>
                            <div className="w-auto">
                                <BulkActionDropdown value={bulkAction} onChange={setBulkAction} />
                            </div>
                        </div>
                        {/* Tablet Proceed Button (In Row) */}
                        <button className="hidden md:block flex-1 py-2 bg-[#9FABDD] text-white text-[14px] font-bold font-['DM_Sans'] rounded-[4px]">
                            Proceed
                        </button>
                    </div>

                    {/* Mobile Proceed Button (Separate Row) */}
                    <button className="md:hidden w-full py-3 bg-[#9FABDD] text-white text-[14px] font-bold font-['DM_Sans'] rounded-[4px]">
                        Proceed
                    </button>

                    <button className="w-full py-3 bg-[#E0E0E0] border border-gray-400 text-black text-[14px] font-bold font-['DM_Sans'] rounded-[4px]">
                        Order Notes
                    </button>
                    <button className="w-full py-3 bg-[#4E46B4] text-white text-[14px] font-bold font-['DM_Sans'] rounded-[4px]">
                        Get Price & Availability
                    </button>
                </div>

                {/* Mobile Product List - Cards */}
                <div className="flex flex-col gap-4 w-full mt-2">
                    {products.map((product) => {
                        const isSelected = selectedProductIds.has(product.id);
                        const qty = quantities[product.id] || 1;
                        // Calculate line total for display
                        const lineTotal = product.price * qty;

                        return (
                            <div key={product.id} className="bg-[#F4F4F4] p-4 rounded-[4px] flex flex-col gap-3">
                                {/* Header: Checkbox + ID */}
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => toggleProduct(product.id)}
                                        className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 bg-white"
                                    />
                                    <span className="text-[14px] font-bold text-black font-['DM_Sans']">12345</span>
                                </div>

                                {/* Description */}
                                <p className="text-[14px] font-normal text-black font-['DM_Sans'] leading-[20px]">
                                    {product.productName}
                                </p>

                                {/* Details Grid */}
                                <div className="flex flex-col gap-2 mt-1">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[12px] font-normal text-black font-['DM_Sans']">Estimated Due Date</span>
                                        <span className="text-[12px] font-normal text-black font-['DM_Sans'] tracking-widest">12/05/2026</span>
                                    </div>

                                    <div className="flex justify-between items-center h-[40px]">
                                        <span className="text-[12px] font-normal text-black font-['DM_Sans']">QTY</span>
                                        <div className="flex items-center gap-2">
                                            {editingQuantityId === product.id ? (
                                                <QuantitySelector
                                                    label=""
                                                    value={qty}
                                                    onChange={(val) => {
                                                        setQuantities(prev => ({ ...prev, [product.id]: val }));
                                                    }}
                                                    min={1}
                                                    size="small"
                                                />
                                            ) : (
                                                <>
                                                    <div className="w-[80px] h-[32px] bg-white border border-[#E2E2E2] rounded-[4px] flex items-center justify-center text-[14px]">
                                                        {qty}
                                                    </div>
                                                    <div
                                                        className="cursor-pointer text-gray-400 hover:text-gray-600"
                                                        onClick={() => setEditingQuantityId(product.id)}
                                                    >
                                                        <EditIcon />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-[12px] font-normal text-black font-['DM_Sans']">Unit Price</span>
                                        <span className="text-[12px] font-normal text-black font-['DM_Sans']">${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[12px] font-normal text-black font-['DM_Sans']">Total Price</span>
                                        <span className="text-[12px] font-normal text-black font-['DM_Sans']">${lineTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Order Summary */}
                <div className="w-full border border-[#E2E2E2] rounded-[4px] p-4 mt-4 bg-white">
                    <h3 className="text-[20px] font-bold font-['DM_Sans'] text-black mb-4">Order Summary</h3>

                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center text-[14px]">
                            <span className="font-normal text-black font-['DM_Sans']">Subtotal :</span>
                            <span className="font-normal text-black font-['DM_Sans']">${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between items-center text-[14px]">
                            <span className="font-normal text-black font-['DM_Sans']">MCI :</span>
                            <span className="font-normal text-black font-['DM_Sans']">${mci.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between items-center text-[14px]">
                            <span className="font-normal text-black font-['DM_Sans']">Freight :</span>
                            <span className="font-normal text-black font-['DM_Sans']">${freight.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between items-center text-[14px]">
                            <span className="font-normal text-black font-['DM_Sans']">Sales Tax :</span>
                            <span className="font-normal text-black font-['DM_Sans']">${salesTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>

                        <div className="flex justify-between items-center pt-4 mt-2">
                            <span className="text-[16px] font-bold text-black font-['DM_Sans']">Order Total :</span>
                            <span className="text-[16px] font-bold text-black font-['DM_Sans']">${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                    </div>

                    <div className="w-full mt-6">
                        <Button variant="primary" size="lg" className="w-full bg-[#4E46B4] hover:bg-[#3E36A4]" disabled={selectedProducts.length === 0}>
                            Place Order
                        </Button>
                    </div>
                </div>
            </div>

            {/* Modals placed outside layout divs */}
            <ShippingAddressModal
                isOpen={isAddressModalOpen}
                onClose={() => setIsAddressModalOpen(false)}
                onSave={handleSaveAddress}
                onCreateNew={handleCreateNewAddress}
                addresses={addresses}
                currentAddressId={shipTo?.address ? '2' : undefined}
            />
            <NewAddressFormModal
                isOpen={isNewAddressFormOpen}
                onClose={() => setIsNewAddressFormOpen(false)}
                onSave={handleSaveNewAddress}
            />
        </div>
    );
};

export default Checkout;
