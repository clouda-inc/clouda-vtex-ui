import React, { useState } from 'react';
import { Button } from '../Button/Button';

export interface Address {
    id: string;
    customerNumber: string;
    company: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    // Optional fields for compatibility with UserInfo display
    name?: string;
    email?: string;
}

interface ShippingAddressModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (selectedAddress: Address) => void;
    onCreateNew: () => void;
    addresses: Address[];
    currentAddressId?: string;
}

const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ShippingAddressModal: React.FC<ShippingAddressModalProps> = ({
    isOpen,
    onClose,
    onSave,
    onCreateNew,
    addresses,
    currentAddressId
}) => {
    const [selectedId, setSelectedId] = useState<string | undefined>(currentAddressId);

    if (!isOpen) return null;

    const handleSave = () => {
        const addr = addresses.find(a => a.id === selectedId);
        if (addr) {
            onSave(addr);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-[4px] w-full md:w-[800px] max-h-[90vh] flex flex-col relative overflow-hidden">

                {/* Header */}
                <div className="flex justify-between items-center p-6 md:p-8 pb-4">
                    <h2 className="text-[20px] md:text-[24px] font-bold font-['DM_Sans'] text-black text-left">
                        Choose Shipping Address
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <XIcon />
                    </button>
                </div>

                {/* Body - Address List */}
                <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 flex flex-col gap-0 border-t border-gray-100">
                    {addresses.map((addr) => (
                        <div
                            key={addr.id}
                            className="flex items-start gap-4 py-6 border-b border-gray-200 last:border-0 cursor-pointer"
                            onClick={() => setSelectedId(addr.id)}
                        >
                            <div className="pt-1">
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${selectedId === addr.id ? 'border-[#4E46B4]' : 'border-gray-300'}`}>
                                    {selectedId === addr.id && (
                                        <div className="w-3 h-3 rounded-full bg-[#4E46B4]" />
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[14px] md:text-[16px] font-normal text-black font-['DM_Sans']">
                                    Customer Number: {addr.customerNumber}
                                </span>
                                <span className="text-[14px] md:text-[16px] font-normal text-black font-['DM_Sans']">
                                    {addr.company}, {addr.street}, {addr.city}, {addr.state}, {addr.zip}, {addr.country}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 md:p-8 pt-4 flex flex-col gap-4 bg-white border-t border-gray-100">
                    <Button
                        onClick={onCreateNew}
                        className="bg-[#4E46B4] text-white hover:bg-[#3E36A4] h-[48px] w-full text-[14px] font-bold font-['DM_Sans'] rounded-[4px]"
                    >
                        Create a New Address
                    </Button>

                    <div className="flex gap-4 w-full">
                        <Button
                            onClick={handleSave}
                            className="bg-[#4E46B4] text-white hover:bg-[#3E36A4] h-[48px] flex-1 text-[14px] font-bold font-['DM_Sans'] rounded-[4px]"
                        >
                            Save
                        </Button>
                        <button
                            onClick={onClose}
                            className="h-[48px] border border-gray-300 rounded-[4px] text-black font-bold font-['DM_Sans'] text-[14px] hover:bg-gray-50 flex-1 bg-white"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
