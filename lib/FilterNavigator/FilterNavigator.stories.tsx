import type { Meta, StoryObj } from "@storybook/react";
import { FilterNavigator } from "./FilterNavigator";
import type { FilterSection } from "./FilterNavigator";
import { useState } from "react";

const meta: Meta<typeof FilterNavigator> = {
  title: "Components/FilterNavigator",
  component: FilterNavigator,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FilterNavigator>;

const mockSections: FilterSection[] = [
  {
    id: "category-01",
    title: "Category 01",
    type: "checkbox",
    options: [
      { label: "Lorem ipsum cursus", value: "opt1", checked: true },
      { label: "Lorem ipsum dignissim", value: "opt2", checked: false },
      { label: "Lorem ipsum vel", value: "opt3", checked: false },
      { label: "Lorem ipsum malesuada", value: "opt4", checked: false },
      { label: "Lorem ipsum", value: "opt5", checked: false },
    ],
  },
  {
    id: "price-range",
    title: "Price Range",
    type: "range",
    min: 0,
    max: 1000,
    rangeValue: [100, 500],
  },
  {
    id: "availability",
    title: "Availability",
    type: "toggle",
    options: [
      { label: "In Stock", value: "in-stock", checked: true },
      { label: "Pre-order", value: "pre-order", checked: false },
    ],
  },
];

export const Default: Story = {
  render: (args) => {
    const [sections, setSections] = useState(mockSections);

    const handleFilterChange = (sectionId: string, value: any) => {
      setSections((prev) =>
        prev.map((section) => {
          if (section.id !== sectionId) return section;

          if (section.type === "checkbox" || section.type === "toggle") {
            return {
              ...section,
              options: section.options?.map((opt) =>
                opt.value === value.value
                  ? { ...opt, checked: value.checked }
                  : opt
              ),
            };
          } else if (section.type === "range") {
            return { ...section, rangeValue: value };
          }
          return section;
        })
      );
    };

    const handleClearAll = () => {
      setSections((prev) =>
        prev.map((section) => ({
          ...section,
          options: section.options?.map((opt) => ({ ...opt, checked: false })),
          rangeValue:
            section.type === "range" ? [section.min || 0, section.max || 1000] : undefined,
        }))
      );
    };

    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <FilterNavigator
          {...args}
          sections={sections}
          onFilterChange={handleFilterChange}
          onClearAll={handleClearAll}
          className={`w-full lg:w-[297px] ${args.className || ""}`}
        />
      </div>
    );
  },
  args: {
    backgroundColor: "white",
  }
};

export const MobileView: Story = {
  render: (args) => {
      const [sections] = useState(mockSections);
      
      return (
         <div className="w-full min-h-[800px] border border-gray-300 relative bg-white">
            <FilterNavigator
                {...args}
                sections={sections}
                onFilterChange={() => {}}
                onClearAll={() => {}}
            />
            <div className="p-4 text-center text-gray-400">
                Page Content...
            </div>
         </div>
      )
  },
  parameters: {
      viewport: {
          defaultViewport: 'responsive'
      }
  },
  args: {
    backgroundColor: "white",
  }
}

export const CustomColor: Story = {
  render: (args) => {
    const [sections, setSections] = useState(mockSections);

    const handleFilterChange = (sectionId: string, value: any) => {
      setSections((prev) =>
        prev.map((section) => {
          if (section.id !== sectionId) return section;

          if (section.type === "checkbox" || section.type === "toggle") {
            return {
              ...section,
              options: section.options?.map((opt) =>
                opt.value === value.value
                  ? { ...opt, checked: value.checked }
                  : opt
              ),
            };
          } else if (section.type === "range") {
            return { ...section, rangeValue: value };
          }
          return section;
        })
      );
    };

    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <FilterNavigator
          {...args}
          sections={sections}
          onFilterChange={handleFilterChange}
          onClearAll={() => {}}
          className={`w-[297px] ${args.className || ""}`}
        />
      </div>
    );
  },
  args: {
    accentColor: "#FF0000",
    backgroundColor: "white",
  }
}
