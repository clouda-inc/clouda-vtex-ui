import React from 'react';

const BuildingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 21V7L13 3V21" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 21V10L13 7" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 10H9.01" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 14H9.01" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 18H9.01" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ProfileFeatureCard: React.FC = () => {
    return (
        <div className="bg-[#F9FAFB] p-6 rounded-lg flex flex-col items-start gap-4 h-full">
            <div className="w-10 h-10 bg-[#CCFBF1] rounded flex items-center justify-center">
                <BuildingIcon />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-['DM_Sans'] font-bold text-base text-[#111827]">
                    Home Offices
                </h3>
                <p className="font-['DM_Sans'] font-normal text-sm text-[#4B5563] leading-5">
                    Perfect for remote workers and home-Perfect for remote workers and home-based professionals
                </p>
            </div>
        </div>
    );
};
