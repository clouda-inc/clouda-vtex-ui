import React, { useState } from "react";
import { FilterCategory } from "./components/FilterCategory";
import { FilterCheckbox } from "./components/FilterCheckbox";
import { FilterMobileTrigger } from "./components/FilterMobileTrigger";
import { FilterRangeSlider } from "./components/FilterRangeSlider";
import { FilterToggle } from "./components/FilterToggle";

export type FilterType = "checkbox" | "range" | "toggle";

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
  checked?: boolean;
}

export interface FilterSection {
  id: string;
  title: string;
  type: FilterType;
  options?: FilterOption[];
  min?: number;
  max?: number;
  rangeValue?: [number, number]; // [min, max]
}

interface FilterNavigatorProps {
  title?: string;
  sections: FilterSection[];
  onFilterChange: (sectionId: string, value: any) => void;
  onClearAll: () => void;
  className?: string; // Allow external layout control
  accentColor?: string;
  backgroundColor?: string;
}

export const FilterNavigator: React.FC<FilterNavigatorProps> = ({
  title = "Filters",
  sections,
  onFilterChange,
  onClearAll,
  className = "",
  accentColor = "#4F36F1",
  backgroundColor = "white",
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Helper to render filter content
  const renderFilterContent = (section: FilterSection) => {
    switch (section.type) {
      case "checkbox":
        return (
          <div className="flex flex-col gap-3">
            {section.options?.map((opt) => (
              <FilterCheckbox
                key={opt.value}
                label={opt.label}
                checked={!!opt.checked}
                count={opt.count}
                color={accentColor}
                onChange={(checked) =>
                  onFilterChange(section.id, { value: opt.value, checked })
                }
              />
            ))}
          </div>
        );
      case "range":
        return (
          <FilterRangeSlider
            min={section.min || 0}
            max={section.max || 1000}
            color={accentColor}
            value={section.rangeValue}
            onChange={(min, max) => onFilterChange(section.id, [min, max])}
          />
        );
      case "toggle":
        return (
          <div className="flex flex-col gap-3">
            {section.options?.map((opt) => (
              <FilterToggle
                key={opt.value}
                label={opt.label}
                checked={!!opt.checked}
                color={accentColor}
                onChange={(checked) =>
                  onFilterChange(section.id, { value: opt.value, checked })
                }
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const Content = (
    <div 
      className="w-full lg:max-w-[297px] rounded-[2px] p-4"
      style={{ backgroundColor }}
    >
      <div className="flex items-center justify-center lg:justify-between mb-8 relative">
        <h2 className="text-xl font-bold font-['DM_Sans'] text-[#341F1A]">
          {title}
        </h2>
        
        {/* Close Button - Mobile Only */}
         <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 lg:hidden p-2"
          >
             <svg
            className="w-5 h-5 text-[#341F1A]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={onClearAll}
          className="text-sm text-[#341F1A] hover:underline font-['DM_Sans'] hidden lg:block"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col">
        {sections.map((section) => (
          <FilterCategory key={section.id} title={section.title}>
            {renderFilterContent(section)}
          </FilterCategory>
        ))}
      </div>
    </div>
  );

  return (
    <div className={className}>
      {/* Mobile Trigger */}
      <div className="lg:hidden mb-4">
        <FilterMobileTrigger
          isOpen={isMobileOpen}
          onClick={() => setIsMobileOpen(true)}
          backgroundColor={backgroundColor}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">{Content}</div>

      {/* Mobile Drawer/Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto w-full h-full lg:hidden">
          {Content}
          <div className="mt-8 flex justify-center pb-8">
             <button
              onClick={onClearAll}
              className="text-sm text-[#341F1A] hover:underline font-['DM_Sans']"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
