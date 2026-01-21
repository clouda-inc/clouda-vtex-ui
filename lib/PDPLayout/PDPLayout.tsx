
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Assets
const imgAccessory = "/assets/product-details/cabinet-thumb-2.png"; // Reusing thumb as placeholder for accessory

export interface PDPLayoutProps extends React.HTMLAttributes<HTMLElement> {}

export const PDPLayout = React.forwardRef<HTMLElement, PDPLayoutProps>(
  ({ className, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState("Optional Accessories");

    const tabs = [
        "Product Overview",
        "Specifications",
        "Included Accessories",
        "Optional Accessories",
        "Downloads"
    ];

    return (
      <div
        ref={ref}
        className={cn("min-h-screen bg-white font-['Proxima_Nova']", className)}
        {...props}
      >
        <Header />
        
        <main>
            <ProductDetails />
            
            {/* Tabs Section */}
            <section className="border-t border-gray-200 mt-8">
                <div className="max-w-[1440px] mx-auto px-[4.3%]">
                    <div className="flex gap-8 border-b border-gray-200">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "py-4 text-sm font-semibold relative",
                                    activeTab === tab ? "text-black" : "text-gray-500 hover:text-gray-800"
                                )}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#ffdb0a]" />
                                )}
                            </button>
                        ))}
                    </div>
                    
                    {/* Tab Content */}
                    <div className="py-8">
                        {activeTab === "Optional Accessories" && (
                            <div className="bg-white">
                                <div className="flex items-center gap-4 mb-4">
                                     <button className="bg-[#ffdb0a] text-black px-6 py-2 rounded-full font-bold text-sm uppercase flex items-center gap-2">
                                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                                         Add to cart
                                     </button>
                                </div>
                                
                                {/* Table Header */}
                                <div className="bg-[#343843] text-white px-4 py-3 grid grid-cols-12 text-xs uppercase font-semibold">
                                    <div className="col-span-1"></div> {/* Checkbox */}
                                    <div className="col-span-1"></div> {/* Image */}
                                    <div className="col-span-2">Part Number</div>
                                    <div className="col-span-6">Description</div>
                                    <div className="col-span-2 text-center">Quantity</div>
                                </div>
                                
                                {/* Rows */}
                                {[1, 2, 3, 4].map((item, i) => (
                                    <div key={i} className={cn("grid grid-cols-12 items-center px-4 py-4 border-b border-gray-100", i % 2 === 0 ? "bg-white" : "bg-gray-50")}>
                                        <div className="col-span-1">
                                            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#ffdb0a] focus:ring-[#ffdb0a]" defaultChecked={i===0} />
                                        </div>
                                        <div className="col-span-1">
                                            <img src={imgAccessory} alt="Accessory" className="w-10 h-10 object-contain" />
                                        </div>
                                        <div className="col-span-2 text-sm font-medium">
                                            123-456789876-543
                                        </div>
                                        <div className="col-span-6 text-sm text-gray-600 pr-8">
                                            {i % 2 === 0 
                                                ? "The AccuDrawer provides positive tool control in industries where accountability over every tool and asset is critical."
                                                : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
                                            }
                                        </div>
                                        <div className="col-span-2 flex justify-center">
                                            <div className="flex items-center">
                                                <button className="w-8 h-8 bg-[#ffdb0a] flex items-center justify-center font-bold"> - </button>
                                                <div className="w-12 h-8 bg-white border-y border-gray-200 flex items-center justify-center text-sm"> {i === 1 ? 2 : 5} </div>
                                                <button className="w-8 h-8 bg-[#ffdb0a] flex items-center justify-center font-bold"> + </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                                <div className="flex items-center justify-end gap-2 mt-4 text-xs text-gray-500">
                                    <span>Show rows</span>
                                    <select className="border border-gray-300 rounded px-2 py-1">
                                        <option>5</option>
                                    </select>
                                    <span className="ml-4">1 - 5 of 7</span>
                                    <div className="flex gap-1">
                                        <button className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded text-gray-400"><ChevronLeft size={14}/></button>
                                        <button className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded text-gray-600"><ChevronRight size={14}/></button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab !== "Optional Accessories" && (
                            <div className="py-12 text-center text-gray-500 bg-gray-50">
                                Content for {activeTab}
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
            {/* Related Products */}
            <section className="py-16 bg-[#eaeff8]">
                <div className="max-w-[1440px] mx-auto px-[4.3%] text-center">
                    <h2 className="text-3xl font-bold mb-2">Related Products</h2>
                    <p className="text-gray-600 mb-12">Please select a valid SKU to view related products</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-full aspect-[4/3] bg-gray-200 mb-4 rounded overflow-hidden">
                                     <img src={imgAccessory} alt="Related Product" className="w-full h-full object-cover opacity-50" />
                                </div>
                                <div className="h-4 bg-gray-200 rounded mb-2 w-3/4 mx-auto"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>

        <Footer />
      </div>
    );
  }
);

PDPLayout.displayName = "PDPLayout";
