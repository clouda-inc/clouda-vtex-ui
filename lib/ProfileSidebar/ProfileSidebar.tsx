
import { SidebarItem } from './components/SidebarItem';

export type ProfileSidebarProps = {
  user: {
    firstName?: string;
    lastName?: string;
    initials?: string;
  };
  items: {
    label: string;
    href?: string;
    onClick?: () => void;
    active?: boolean;
  }[];
  onLogout?: () => void;
  width?: string;
  backgroundColor?: string;
  itemBackgroundColor?: string;
  itemActiveBackgroundColor?: string;
  itemTextColor?: string;
  itemActiveTextColor?: string;
  itemHoverBackgroundColor?: string;
};

export const ProfileSidebar = ({ 
  user, 
  items, 
  onLogout, 
  width = "340px", 
  backgroundColor = '#EAEAEA',
  itemBackgroundColor,
  itemActiveBackgroundColor,
  itemTextColor,
  itemActiveTextColor,
  itemHoverBackgroundColor
}: ProfileSidebarProps) => {
  const getInitials = () => {
    if (user.initials) return user.initials;
    const first = user.firstName ? user.firstName[0] : '';
    const last = user.lastName ? user.lastName[0] : '';
    return (first + last).toUpperCase() || 'U';
  };

  const getName = () => { 
      if (user.firstName && user.lastName) return `${user.firstName} ${user.lastName}`;
      if (user.firstName) return user.firstName;
      return 'Profile';
  }

  return (
    <div 
      className="flex flex-col items-center py-8 px-4 gap-4"
      style={{ width: width, backgroundColor: backgroundColor }}
    >
      {/* Avatar Section */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
          <span className="font-['DM_Sans'] text-[24px] font-bold text-black">
            {getInitials()}
          </span>
        </div>
        <span className="font-['DM_Sans'] text-[24px] font-normal text-black">
          {getName()}
        </span>
      </div>

      {/* Navigation Items */}
      <div className="w-full flex flex-col gap-4">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            active={item.active}
            onClick={item.onClick}
            backgroundColor={itemBackgroundColor}
            activeBackgroundColor={itemActiveBackgroundColor}
            textColor={itemTextColor}
            activeTextColor={itemActiveTextColor}
            hoverBackgroundColor={itemHoverBackgroundColor}
          />
        ))}
        
        {/* Logout Button */}
        <SidebarItem
          label="Logout"
          onClick={onLogout}
          backgroundColor={itemBackgroundColor}
          activeBackgroundColor={itemActiveBackgroundColor}
          textColor={itemTextColor}
          activeTextColor={itemActiveTextColor}
          hoverBackgroundColor={itemHoverBackgroundColor}
        />
      </div>
    </div>
  );
};
