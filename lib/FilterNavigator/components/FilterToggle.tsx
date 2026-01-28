import React from "react";

interface FilterToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  color?: string;
}

export const FilterToggle: React.FC<FilterToggleProps> = ({
  label,
  checked,
  onChange,
  color = "#4F36F1",
}) => {
  return (
    <label className="flex items-center justify-between w-full cursor-pointer">
      <span className="text-sm font-normal text-[#341F1A] font-['DM_Sans'] leading-[24px]">
        {label}
      </span>
      <div className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div 
          className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
          style={{ backgroundColor: checked ? color : undefined }}
        ></div>
      </div>
    </label>
  );
};
