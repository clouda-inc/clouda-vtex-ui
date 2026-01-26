import React from "react";

interface FilterMobileTriggerProps {
  label?: string;
  isOpen: boolean;
  onClick: () => void;
  backgroundColor?: string;
}

export const FilterMobileTrigger: React.FC<FilterMobileTriggerProps> = ({
  label = "Filters",
  isOpen,
  onClick,
  backgroundColor = "#F5F5F5",
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-3 rounded lg:hidden border border-[#DEDEDE]"
      style={{ backgroundColor }}
    >
      <span className="text-sm font-semibold text-[#341F1A] font-['DM_Sans']">
        {label}
      </span>
      <svg
        className={`w-4 h-4 text-[#341F1A] transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
