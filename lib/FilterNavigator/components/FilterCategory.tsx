import React, { useState } from "react";

interface FilterCategoryProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export const FilterCategory: React.FC<FilterCategoryProps> = ({
  title,
  defaultOpen = true,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full border-b border-[#F0F0F0] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 group"
      >
        <h3 className="text-lg font-bold text-[#341F1A] font-['DM_Sans']">
          {title}
        </h3>
        <svg
          className={`w-5 h-5 text-[#341F1A] transition-transform duration-200 ${
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
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3">{children}</div>
      </div>
    </div>
  );
};
