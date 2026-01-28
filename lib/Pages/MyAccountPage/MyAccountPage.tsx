import React, { useState } from 'react';
import { Quotes } from '../../Quotes/Quotes';
import { OrderHistory } from '../../OrderHistory/OrderHistory';
import { ProfileSidebar } from '../../ProfileSidebar/ProfileSidebar';
import { MyProfile, type MyProfileProps } from '../../MyProfile/MyProfile';
import { Wishlist, type WishlistProps } from '../../Wishlist/Wishlist';

export type MyAccountViewType = 'profile' | 'orders' | 'quotes' | 'wishlist';

export interface MyAccountPageProps {
  /**
   * User information for the sidebar
   */
  user: {
      firstName?: string;
      lastName?: string;
      initials?: string;
  };
   /**
   * Props for the Quotes component
   */
  quotesProps?: {
      primaryColor?: string;
      secondaryColor?: string;
  };
  /**
   * Props for the OrderHistory component
   */
  orderHistoryProps?: any;
  /**
   * Props for the Profile component
   */
  profileProps?: MyProfileProps;
  /**
   * Props for the Wishlist component
   */
  wishlistProps?: WishlistProps;
  /**
   * Initial active view
   */
  initialView?: MyAccountViewType;
  /**
   * Callback on logout
   */
  onLogout?: () => void;
}

export const MyAccountPage: React.FC<MyAccountPageProps> = ({
  user,
  quotesProps,
  orderHistoryProps,
  profileProps,
  wishlistProps,
  initialView = 'profile',
  onLogout
}) => {
  const [activeView, setActiveView] = useState<MyAccountViewType>(initialView);

  const sidebarItems = [
      { 
          label: 'Profile', 
          active: activeView === 'profile',
          onClick: () => setActiveView('profile') 
      },
      { 
          label: 'Order History', 
          active: activeView === 'orders',
          onClick: () => setActiveView('orders') 
      },
      { 
          label: 'Quotes', 
          active: activeView === 'quotes',
          onClick: () => setActiveView('quotes') 
      },
      { 
          label: 'Wishlist', 
          active: activeView === 'wishlist',
          onClick: () => setActiveView('wishlist') 
      },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white">
      {/* Sidebar - Side-by-side on desktop */}
      <div className="hidden lg:block w-[340px] shrink-0 border-r border-gray-200">
        <ProfileSidebar 
            user={user}
            items={sidebarItems}
            onLogout={onLogout}
            width="100%" 
            backgroundColor="#F4F4F5" 
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full bg-white">
         {activeView === 'quotes' && <Quotes {...quotesProps} />}
         {activeView === 'orders' && <OrderHistory {...orderHistoryProps} />}
         {activeView === 'profile' && <MyProfile {...profileProps} />}
         {activeView === 'wishlist' && <Wishlist {...wishlistProps} />}
      </div>
    </div>
  );
};
