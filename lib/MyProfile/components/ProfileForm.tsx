import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const ProfileInput: React.FC<InputProps> = ({ label, className = '', ...props }) => (
    <div className="flex flex-col gap-1.5 w-full">
        <label className="font-['DM_Sans'] text-sm font-normal text-[#6B7280]">
            {label}
        </label>
        <div className="relative">
            <input
                className={`w-full h-[40px] px-3 py-2 bg-white border border-[#E5E7EB] rounded-[4px] text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#4E46B4] focus:border-[#4E46B4] transition-colors ${className}`}
                {...props}
            />
        </div>
    </div>
);

export interface ProfileData {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    department?: string;
    designation?: string;
    company?: string;
    companyPhone?: string;
    industry?: string;
}

interface ProfileFormProps {
    data?: ProfileData;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ data }) => {
    return (
        <div className="w-full bg-white border border-[#E5E7EB] rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <ProfileInput label="First Name" placeholder="Placeholder text" defaultValue={data?.firstName} />
                <ProfileInput label="Last Name" placeholder="Placeholder text" defaultValue={data?.lastName} />
                
                <ProfileInput label="Email" placeholder="Placeholder text" type="email" defaultValue={data?.email} />
                <ProfileInput label="Mobile" placeholder="Placeholder text" type="tel" defaultValue={data?.mobile} />
                
                <ProfileInput label="Department" placeholder="Placeholder text" defaultValue={data?.department} />
                <ProfileInput label="Designation" placeholder="Placeholder text" defaultValue={data?.designation} />
                
                <ProfileInput label="Company" placeholder="Placeholder text" defaultValue={data?.company} />
                <ProfileInput label="Company Phone" placeholder="Placeholder text" type="tel" defaultValue={data?.companyPhone} />
                
                <ProfileInput label="Industry" placeholder="Placeholder text" defaultValue={data?.industry} />
            </div>
        </div>
    );
};
