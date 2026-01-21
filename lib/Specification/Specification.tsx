import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../Tabs';

export interface SpecificationData {
  overview: string; // HTML content
  
  // Specifications Tab
  productPartNumber: string;
  specifications: { name: string; value: string }[];
  
  // Downloads Tab
  downloads: { name: string; image: string; url: string }[];
}

export interface SpecificationProps {
  data?: SpecificationData;
}

const Specification = ({ data }: SpecificationProps) => {
  const [openSection, setOpenSection] = useState<string | null>('overview');

  if (!data) {
    return null;
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderOverviewContent = () => (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 hidden md:block">Overview</h2>
      <div 
        className="text-base leading-relaxed mb-8 [&_ul]:list-disc [&_ul]:ml-5 [&_ol]:list-decimal [&_ol]:ml-5 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: data.overview }}
      />
    </div>
  );

  const renderSpecificationsContent = () => (
    <div className="w-full">
      <div className="bg-[#343843] text-white py-3 px-6 font-semibold text-lg text-center uppercase tracking-wide">
        {data.productPartNumber}
      </div>
      <div className="flex flex-col">
        {data.specifications.map((spec, idx) => (
          <div 
            key={idx} 
            className={`flex px-6 py-4 text-[#343843] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#EAEFF8]'}`}
          >
            <div className="w-1/2 md:w-5/12 text-base">{spec.name}</div>
            <div className="w-1/2 md:w-7/12 text-base">{spec.value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDownloadsContent = () => (
    <div className="p-4 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {data.downloads.map((item, idx) => (
        <a key={idx} href={item.url} className="group block text-center">
          <div className="bg-gray-50 border border-gray-200 mb-3 flex items-center justify-center p-4 aspect-[3/4] group-hover:shadow-md transition-shadow">
            <img src={item.image} alt="" className="max-h-full shadow-sm" />
          </div>
          <span className="text-sm font-semibold text-[#343843] group-hover:text-blue-600">
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );

  const AccordionItem = ({ title, isOpen, onToggle, children }: { title: string, isOpen: boolean, onToggle: () => void, children: React.ReactNode }) => (
    <div className="border-b border-gray-200">
      <button 
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-4 bg-[#EAEFF8] text-[#343843] font-semibold text-lg transition-colors ${isOpen ? 'text-black' : ''}`}
      >
        <span>{title}</span>
        <svg 
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-['Proxima_Nova',sans-serif] text-black w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Desktop Tabs View */}
      <div className="hidden md:block">
        <Tabs defaultIndex={0}>
          <div className="border-b-[2px] border-[#FFDB0A]">
            <TabList className="flex items-end overflow-x-auto">
              <Tab index={0} className={({ selected }) => `
                px-6 py-4 text-base whitespace-nowrap transition-colors duration-200
                ${selected ? 'bg-[#FFDB0A] font-semibold' : 'bg-white font-normal hover:bg-gray-50'}
              `}>
                Product Overview
              </Tab>
              <Tab index={1} className={({ selected }) => `
                 px-6 py-4 text-base whitespace-nowrap transition-colors duration-200
                ${selected ? 'bg-[#FFDB0A] font-semibold' : 'bg-white font-normal hover:bg-gray-50'}
              `}>
                Specifications
              </Tab>
              <Tab index={2} className={({ selected }) => `
                 px-6 py-4 text-base whitespace-nowrap transition-colors duration-200
                ${selected ? 'bg-[#FFDB0A] font-semibold' : 'bg-white font-normal hover:bg-gray-50'}
              `}>
                Downloads
              </Tab>
            </TabList>
          </div>
          
          <div className="h-[2px] w-full bg-[#FFDB0A] mt-[-2px] relative z-[-1]" />

          <TabPanels className="py-8">
            <TabPanel index={0}>
              {renderOverviewContent()}
            </TabPanel>
            <TabPanel index={1}>
              {renderSpecificationsContent()}
            </TabPanel>
            <TabPanel index={2}>
              {renderDownloadsContent()}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      {/* Mobile Accordion View */}
      <div className="md:hidden flex flex-col border-t border-gray-200">
        <AccordionItem 
          title="Product Overview" 
          isOpen={openSection === 'overview'} 
          onToggle={() => toggleSection('overview')}
        >
          {renderOverviewContent()}
        </AccordionItem>
        <AccordionItem 
          title="Specifications" 
          isOpen={openSection === 'specifications'} 
          onToggle={() => toggleSection('specifications')}
        >
          {renderSpecificationsContent()}
        </AccordionItem>
        <AccordionItem 
          title="Downloads" 
          isOpen={openSection === 'downloads'} 
          onToggle={() => toggleSection('downloads')}
        >
          {renderDownloadsContent()}
        </AccordionItem>
      </div>
    </div>
  );
};

export default Specification;
