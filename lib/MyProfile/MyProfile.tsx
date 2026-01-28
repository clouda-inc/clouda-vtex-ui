import React from 'react';
import { ProfileForm, type ProfileData } from './components/ProfileForm';
import { ProfileFeatureCard } from './components/ProfileFeatureCard';

export interface MyProfileProps {
    userData?: ProfileData;
}

export const MyProfile: React.FC<MyProfileProps> = ({ userData }) => {
    return (
        <div className="w-full bg-white font-['DM_Sans'] p-4 md:p-8">
            <h1 className="text-[32px] font-bold text-[#111827] mb-8 leading-[40px] tracking-[-0.5px]">
                My Profile
            </h1>
            
            <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="w-full lg:flex-1">
                    <ProfileForm data={userData} />
                </div>
                
                <div className="w-full lg:w-[350px] shrink-0">
                    <ProfileFeatureCard />
                </div>
            </div>
        </div>
    );
};
