import React from 'react';
import { Button } from '../Button/Button';

export interface NewAddressForm {
    name: string;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    email: string;
    businessName: string;
}

interface NewAddressFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: NewAddressForm) => void;
}

const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const InputField = ({ label, required = false, placeholder, value, onChange }: {
    label: string, required?: boolean, placeholder?: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
    <div className="flex flex-col gap-2 w-full">
        <label className="text-[16px] font-normal text-black font-['DM_Sans']">
            {label}{required && <span className="text-red-500">*</span>}
        </label>
        <input
            type="text"
            className="w-full h-[48px] border border-[#E2E2E2] rounded-[4px] px-4 font-['DM_Sans'] text-[16px] placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
            placeholder={placeholder || label}
            value={value}
            onChange={onChange}
        />
    </div>
);

export const NewAddressFormModal: React.FC<NewAddressFormModalProps> = ({
    isOpen,
    onClose,
    onSave
}) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, gather form data here
        onSave({
            name: "New User",
            street1: "123 New St",
            street2: "",
            city: "New City",
            state: "NS",
            zip: "12345",
            country: "USA",
            phone: "555-0123",
            email: "new@example.com",
            businessName: "New Business"
        });
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 overflow-y-auto py-10 px-4">
            <div className="bg-white rounded-[4px] w-full md:w-[800px] flex flex-col relative my-auto">

                {/* Header */}
                <div className="flex justify-between items-center p-6 md:p-8 pb-4">
                    <h2 className="text-[20px] md:text-[24px] font-bold font-['DM_Sans'] text-black text-left">
                        Choose Shipping Address
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <XIcon />
                    </button>
                </div>

                {/* Body - Form */}
                <div className="px-6 md:px-8 py-4 flex flex-col gap-6 max-h-[70vh] overflow-y-auto">
                    <InputField label="Name" required />
                    <InputField label="Street Address 01" required />
                    <InputField label="Street Address 02" required />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="City" required />
                        <InputField label="State" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Zip" required />
                        <InputField label="Country" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Phone Number" required />
                        <InputField label="Email" required />
                    </div>

                    <InputField label="Business Name" required />
                </div>

                {/* Footer */}
                <div className="p-6 md:p-8 pt-6 flex flex-col gap-4 border-t border-gray-100 mt-2">
                    <Button
                        onClick={handleSubmit}
                        className="bg-[#4E46B4] text-white hover:bg-[#3E36A4] w-full h-[48px] text-[16px] font-bold font-['DM_Sans'] rounded-[4px]"
                    >
                        Save
                    </Button>
                    <button
                        onClick={onClose}
                        className="w-full h-[48px] border border-gray-300 rounded-[4px] text-black font-bold font-['DM_Sans'] text-[16px] hover:bg-gray-50 bg-white"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
