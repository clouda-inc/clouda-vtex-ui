
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { Heart, ShoppingCart, Info, Minus, Plus } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Local Assets
const imgMain = "/assets/product-details/cabinet-main.png";
const imgThumb1 = "/assets/product-details/cabinet-thumb-1.png";
const imgThumb2 = "/assets/product-details/cabinet-thumb-2.png";
const imgThumb3 = "/assets/product-details/cabinet-thumb-3.png";
const imgThumb4 = "/assets/product-details/cabinet-thumb-4.png";

export interface ProductDetailsProps extends React.HTMLAttributes<HTMLElement> {}

export const ProductDetails = React.forwardRef<HTMLElement, ProductDetailsProps>(
  ({ className, ...props }, ref) => {
    const [quantity, setQuantity] = useState(2);
    const [selectedDrawerCount, setSelectedDrawerCount] = useState(6);
    const [selectedLock, setSelectedLock] = useState("Includes Lock");
    const [selectedBase, setSelectedBase] = useState("Fork Truck Base");
    const [selectedAccessories, setSelectedAccessories] = useState("Accessories Included");
    const [selectedWidth, setSelectedWidth] = useState("28.25 in | 71.76 cm");
    const [selectedDepth, setSelectedDepth] = useState("22.5 in | 57.15 cm");

    return (
      <section
        ref={ref}
        className={cn("w-full bg-white py-8 font-['Proxima_Nova']", className)}
        {...props}
      >
        <div className="max-w-[1440px] mx-auto px-[4.3%] flex flex-col lg:flex-row gap-12">
          {/* Left Column: Image Gallery */}
          <div className="w-full lg:w-[45%]">
            <div className="w-full aspect-square border border-gray-200 p-8 flex items-center justify-center mb-4 relative">
              <img src={imgMain} alt="Cabinet Main" className="max-w-full max-h-full object-contain" />
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500">
                Roll over image to zoom in
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
               <button className="w-20 h-20 border border-gray-200 p-2 flex-shrink-0 hover:border-blue-500">
                 <img src={imgThumb1} alt="Thumb 1" className="w-full h-full object-contain" />
               </button>
               <button className="w-20 h-20 border border-gray-200 p-2 flex-shrink-0 hover:border-blue-500">
                 <img src={imgThumb2} alt="Thumb 2" className="w-full h-full object-contain" />
               </button>
               <button className="w-20 h-20 border border-gray-200 p-2 flex-shrink-0 hover:border-blue-500">
                 <img src={imgThumb3} alt="Thumb 3" className="w-full h-full object-contain" />
               </button>
               <button className="w-20 h-20 border border-gray-200 p-2 flex-shrink-0 hover:border-blue-500">
                 <img src={imgThumb4} alt="Thumb 4" className="w-full h-full object-contain" />
               </button>
               <button className="w-20 h-20 bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-400">
                 {/* Video Placeholder */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
               </button>
            </div>
          </div>

          {/* Right Column: Product Config */}
          <div className="w-full lg:w-[55%]">
             <h1 className="text-3xl font-bold text-black mb-2">EW1350 Heavy-Duty Drawer Cabinets...</h1>
             <p className="text-gray-600 mb-1 text-sm">
                Customizable, heavy-duty drawers with full-height sidewalls and drawer backs for max cubic storage capacity. <a href="#" className="text-blue-500 hover:underline">Read More</a>
             </p>

             {/* Configuration Options */}
             <div className="space-y-6 mt-8">
                 {/* No. of Drawers */}
                 <div>
                    <label className="block text-sm font-semibold mb-2">No. of Drawers :</label>
                    <div className="flex flex-wrap gap-2">
                        {[6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                            <button 
                                key={num}
                                onClick={() => setSelectedDrawerCount(num)}
                                className={cn(
                                    "px-6 py-2 border rounded hover:border-gray-400 text-sm",
                                    selectedDrawerCount === num ? "border-gray-800 bg-gray-50" : "border-gray-200"
                                )}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                 </div>

                 {/* Lock */}
                 <div>
                    <label className="block text-sm font-semibold mb-2">Lock :</label>
                    <div className="flex flex-wrap gap-2">
                        {["Includes Lock", "No Lock"].map((opt) => (
                            <button 
                                key={opt}
                                onClick={() => setSelectedLock(opt)}
                                className={cn(
                                    "px-6 py-2 border rounded hover:border-gray-400 text-sm",
                                    selectedLock === opt ? "border-gray-800 bg-gray-50" : "border-gray-200"
                                )}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                 </div>

                 {/* Base */}
                 <div>
                    <label className="block text-sm font-semibold mb-2">Base :</label>
                    <div className="flex flex-wrap gap-2">
                         {["Fork Truck Base", "No Base"].map((opt) => (
                            <button 
                                key={opt}
                                onClick={() => setSelectedBase(opt)}
                                className={cn(
                                    "px-6 py-2 border rounded hover:border-gray-400 text-sm",
                                    selectedBase === opt ? "border-gray-800 bg-gray-50" : "border-gray-200"
                                )}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                 </div>

                 {/* Accessories */}
                 <div>
                    <label className="block text-sm font-semibold mb-2">Accessories :</label>
                    <div className="flex flex-wrap gap-2">
                         {["Accessories Included", "No Accessories"].map((opt) => (
                            <button 
                                key={opt}
                                onClick={() => setSelectedAccessories(opt)}
                                className={cn(
                                    "px-6 py-2 border rounded hover:border-gray-400 text-sm",
                                    selectedAccessories === opt ? "border-gray-800 bg-gray-50" : "border-gray-200"
                                )}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                 </div>

                 {/* Width */}
                 <div>
                    <label className="block text-sm font-semibold mb-2">Width :</label>
                    <div className="flex flex-wrap gap-2">
                         {["28.25 in | 71.76 cm", "40.25 in | 102.24 cm", "40.25 in | 102.24 cm "].map((opt, i) => ( // Duplicate in design, kept for fidelity
                            <button 
                                key={i}
                                onClick={() => setSelectedWidth(opt)}
                                className={cn(
                                    "px-4 py-2 border rounded hover:border-gray-400 text-sm",
                                    selectedWidth === opt ? "border-gray-800 bg-gray-50" : "border-gray-200"
                                )}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                 </div>

                 {/* Depth */}
                 <div>
                    <label className="block text-sm font-semibold mb-2">Depth :</label>
                    <div className="flex flex-wrap gap-2">
                         {["22.5 in | 57.15 cm", "28.5 in | 72.39 cm"].map((opt) => (
                            <button 
                                key={opt}
                                onClick={() => setSelectedDepth(opt)}
                                className={cn(
                                    "px-4 py-2 border rounded hover:border-gray-400 text-sm",
                                    selectedDepth === opt ? "border-gray-800 bg-gray-50" : "border-gray-200"
                                )}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                 </div>

                 {/* Colors */}
                 <div className="flex gap-12">
                     <div className="flex items-center gap-4">
                         <label className="text-sm font-semibold">Color :</label>
                         <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Housing Color :</span>
                            <div className="w-8 h-8 bg-[#2d5f9a] border border-gray-300 rounded cursor-pointer relative">
                                <span className="absolute -bottom-1 -right-1">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="black"><path d="M1 1L5 5L9 1" strokeWidth="1.5"/></svg>
                                </span>
                            </div>
                         </div>
                     </div>
                     
                      <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Drawer Color :</span>
                             <div className="w-8 h-8 bg-[#2d5f9a] border border-gray-300 rounded cursor-pointer relative">
                                <span className="absolute -bottom-1 -right-1">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="black"><path d="M1 1L5 5L9 1" strokeWidth="1.5"/></svg>
                                </span>
                            </div>
                     </div>
                 </div>

                 {/* Part Number */}
                 <div>
                     <p className="text-sm"><span className="font-semibold">Part Number :</span> <span className="text-gray-600 font-mono">--</span></p>
                 </div>

                 {/* Quantity & Actions */}
                 <div className="flex flex-wrap items-center gap-4 pt-4">
                     <div className="flex items-center gap-4">
                        <label className="text-sm font-semibold">Quantity</label>
                        <div className="flex items-center">
                            <button 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-8 h-8 bg-[#ffdb0a] flex items-center justify-center font-bold"
                            >
                                <Minus size={16} />
                            </button>
                            <div className="w-12 h-8 border-y border-gray-300 flex items-center justify-center text-sm">
                                {quantity}
                            </div>
                            <button 
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-8 h-8 bg-[#ffdb0a] flex items-center justify-center font-bold"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                     </div>
                 </div>
                 
                 <div className="flex flex-wrap gap-4 mt-4">
                     <button className="px-6 py-3 border border-black rounded-full text-sm font-semibold hover:bg-gray-50 uppercase">
                         Get Price & Availability
                     </button>
                     <button className="px-6 py-3 bg-[#ffdb0a] border border-[#ffdb0a] rounded-full text-sm font-semibold hover:bg-[#e6c609] flex items-center gap-2 uppercase">
                         <ShoppingCart size={18} /> Add to cart
                     </button>
                     <button className="px-6 py-3 border border-black rounded-full text-sm font-semibold hover:bg-gray-50 flex items-center gap-2 uppercase">
                         <Heart size={18} /> Wishlist
                     </button>
                 </div>
                 
                 <div className="flex items-center gap-2 mt-4">
                     <span className="text-sm">Looking for customized products? Get a quote from our experts.</span>
                     <button className="bg-[#ffdb0a] px-4 py-2 rounded-full text-xs font-bold uppercase">
                         Get a Quote
                     </button>
                 </div>

             </div>
          </div>
        </div>
      </section>
    );
  }
);

ProductDetails.displayName = "ProductDetails";
