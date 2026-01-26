type SidebarItemProps = {
  label: string;
  onClick?: () => void;
  active?: boolean;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  hoverBackgroundColor?: string;
};

export const SidebarItem = ({ 
  label, 
  onClick, 
  active = false, 
  backgroundColor = '#C4C4C4',
  activeBackgroundColor = '#554BBB',
  textColor = 'black',
  activeTextColor = 'white',
  hoverBackgroundColor = '#d1d1d1'
}: SidebarItemProps) => {

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: active ? activeBackgroundColor : backgroundColor,
        color: active ? activeTextColor : textColor,
      }}
      className={`
        w-full p-3 flex items-center justify-center
        text-[24px] leading-[32px] font-normal font-['DM_Sans']
        transition-colors duration-200
        ${!active && 'hover:brightness-90'}
      `}
      onMouseEnter={(e) => {
        if (!active && hoverBackgroundColor) {
           e.currentTarget.style.backgroundColor = hoverBackgroundColor;
        }
      }}
      onMouseLeave={(e) => {
         if (!active) {
            e.currentTarget.style.backgroundColor = backgroundColor;
         }
      }}
    >
      {label}
    </button>
  );
};
