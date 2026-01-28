import React from "react";

interface FilterCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  count?: number; // Optional count shown in Figma designs often
  color?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  label,
  checked,
  onChange,
  color = "#4F36F1",
}) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative w-[18px] h-[18px]">
        <input
          type="checkbox"
          className="peer appearance-none w-[18px] h-[18px] border border-[#DEDEDE] rounded-[2px] bg-white transition-colors"
          style={{
            backgroundColor: checked ? color : "white",
            borderColor: checked ? color : "#DEDEDE",
          }}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {/* Checkmark icon */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3L4.5 8.5L2 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-sm font-normal text-[#341F1A] select-none font-['DM_Sans'] leading-[24px]">
        {label}
      </span>
    </label>
  );
};
