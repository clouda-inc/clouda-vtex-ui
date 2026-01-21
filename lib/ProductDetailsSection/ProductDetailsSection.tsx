import { useState } from 'react';

export interface ProductDetailsSectionProps {
  overviewHtml: string;
  specifications: { name: string; value: string }[];
  partNumber: string;
  downloads: { name: string; image: string; url: string }[];
  /**
   * Primary color for the active tab and border.
   * @default '#4e46b4'
   */
  primaryColor?: string;
}

export default function ProductDetailsSection({
  overviewHtml,
  specifications,
  partNumber,
  downloads,
  primaryColor = '#4e46b4',
}: ProductDetailsSectionProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'specifications' | 'downloads'>('specifications');

  const ChevronDown = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const MobileHeader = ({ title, id, isActive }: { title: string, id: typeof activeTab, isActive: boolean }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center justify-between px-6 py-4 bg-[#595c65] text-white font-bold text-lg md:hidden mb-[1px]`}
    >
      <span className="text-left font-['DM_Sans'] text-xl font-bold leading-8">{title}</span>
      <div className={`transition-transform duration-200 ${isActive ? '' : '-rotate-90'}`}>
        <ChevronDown />
      </div>
    </button>
  );

  return (
    <div className="w-full font-['DM_Sans',sans-serif]">
      {/* Tabs (Desktop) */}
      <div className="hidden md:block w-full border-b-[2px]" style={{ borderColor: primaryColor }}>
        <div className="flex w-full max-w-[1440px] mx-auto">
          <button
            onClick={() => setActiveTab('overview')}
            style={activeTab === 'overview' ? { backgroundColor: primaryColor } : {}}
            className={`px-8 py-4 text-xl font-normal transition-colors ${activeTab === 'overview'
              ? 'text-white'
              : 'text-black hover:bg-gray-50 bg-white'
              }`}
          >
            Product Overview
          </button>
          <button
            onClick={() => setActiveTab('specifications')}
            style={activeTab === 'specifications' ? { backgroundColor: primaryColor } : {}}
            className={`px-8 py-4 text-xl font-normal transition-colors ${activeTab === 'specifications'
              ? 'text-white'
              : 'text-black hover:bg-gray-50 bg-white'
              }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            style={activeTab === 'downloads' ? { backgroundColor: primaryColor } : {}}
            className={`px-8 py-4 text-xl font-normal transition-colors ${activeTab === 'downloads'
              ? 'text-white'
              : 'text-black hover:bg-gray-50 bg-white'
              }`}
          >
            Downloads
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1440px] mx-auto md:py-12 md:px-0">

        {/* Overview Section */}
        <MobileHeader title="Product Overview" id="overview" isActive={activeTab === 'overview'} />
        {activeTab === 'overview' && (
          <div
            className="prose max-w-none text-black p-6 md:p-0"
            dangerouslySetInnerHTML={{ __html: overviewHtml }}
          />
        )}

        {/* Specifications Section */}
        <MobileHeader title="Specifications" id="specifications" isActive={activeTab === 'specifications'} />
        {activeTab === 'specifications' && (
          <div className="w-full">
            {/* Header (Desktop only - implied by styling) */}
            <div className="hidden md:block bg-[#595c65] text-white px-6 py-4 text-2xl font-bold text-center">
              {partNumber}
            </div>
            {/* Table */}
            <div className="w-full">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`flex px-6 py-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <div className="w-1/2 text-sm text-black">{spec.name}</div>
                  <div className="w-1/2 text-sm text-black">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Downloads Section */}
        <MobileHeader title="Downloads" id="downloads" isActive={activeTab === 'downloads'} />
        {activeTab === 'downloads' && (
          <div className="grid grid-cols-2 gap-4 p-6 md:flex md:flex-wrap md:gap-6 md:p-0 md:items-start">
            {downloads.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-5 w-full md:w-[209px] group no-underline"
              >
                <div className="aspect-[210/297] w-full relative shrink-0">
                  <img src={item.image} alt="" className="w-full h-full object-contain" />
                </div>
                {/* Specific styling matching Figma for Assets component text */}
                <p className="text-[14px] leading-[20px] font-normal text-black font-['DM_Sans',sans-serif] w-full margin-0">
                  {item.name}
                </p>
              </a>
            ))}
            {downloads.length === 0 && (
              <div className="text-gray-500 italic">No downloads available.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
