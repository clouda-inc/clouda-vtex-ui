import React, { useState, useRef } from 'react';
import { Button } from '../../Button/Button';

export interface UpdateBomProps {
    onClose: () => void;
    onUpload: (file: File) => void;
    primaryColor?: string;
    isOpen?: boolean;
}

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const UploadIcon = ({ color = '#1A1A1A' }: { color?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16.2422C2.79377 15.6833 2.01562 14.4173 2.01562 13C2.01562 10.7417 3.79166 8.86835 6.05051 8.86835C6.26257 8.86835 6.46743 8.88939 6.66318 8.92873C7.36645 5.56456 10.3204 3 13.8894 3C18.2393 3 21.7656 6.52629 21.7656 10.8762C21.7656 10.9664 21.7644 11.056 21.762 11.1451C21.9056 11.1392 22.0503 11.1362 22.196 11.1362C23.195 11.1362 24 11.9412 24 12.9402C24 13.9392 23.195 14.7442 22.196 14.7442H13.8894" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21V11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 14L12 11L15 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const CloudUploadIcon = ({ color }: { color?: string }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.244 17.819 10.022C17.348 6.504 14.35 4 11.5 4C8.65 4 5.652 6.504 5.181 10.022C2.823 10.244 1 12.132 1 14.5C1 16.9853 3.01472 19 5.5 19H8" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M12 11L12 21" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M9 14L12 11L15 14" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)


// Helper to convert hex to rgba with opacity
const hexToRgba = (hex: string, opacity: number) => {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
    }
    return hex; // fallback
};

export const UpdateBom: React.FC<UpdateBomProps> = ({
    onClose,
    onUpload,
    primaryColor = '#4E46B4',
    isOpen = true,
}) => {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setSelectedFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const onButtonClick = () => {
        inputRef.current?.click();
    };

    const handleImport = () => {
        if (selectedFile) {
            onUpload(selectedFile);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="bg-white w-full max-w-[800px] relative font-['DM_Sans'] rounded-lg shadow-xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between p-8 pb-4 shrink-0">
                <div>
                     <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2 leading-8">Upload Bill of Materials</h1>
                     <p className="text-sm font-normal text-[#1A1A1A]">Upload your CSV or Excel file.</p>
                </div>
                <div 
                    className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors self-start -mt-2 -mr-2" 
                    onClick={onClose}
                >
                    <CloseIcon />
                </div>
            </div>

            {/* Body */}
            <div className="p-8 pt-4 overflow-y-auto flex-1">
                 {/* Drag & Drop Area */}
                <div 
                    className={`border border-gray-200 rounded-lg p-10 flex flex-col items-center justify-center mb-6 transition-colors ${dragActive ? 'bg-blue-50 border-blue-400' : 'bg-white'}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                >
                    <div 
                        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                        style={{ backgroundColor: hexToRgba(primaryColor, 0.1) }}
                    >
                        <CloudUploadIcon color={primaryColor} />
                    </div>
                    
                    {selectedFile ? (
                        <div className="text-center">
                            <p className="text-lg font-bold text-[#1A1A1A] mb-2">Selected File:</p>
                             <p className="text-base text-gray-600 mb-6">{selectedFile.name}</p>
                             <Button 
                                variant="outline" 
                                className="px-6 min-w-[140px] justify-center text-[#727272] border-gray-300 font-bold"
                                onClick={() => setSelectedFile(null)}
                            >
                                Change File
                            </Button>
                        </div>
                    ) : (
                        <>
                            <p className="text-lg font-bold text-[#1A1A1A] mb-4">Drag and drop your file here</p>
                            <p className="text-sm text-[#1A1A1A] mb-4">or</p>
                            <input
                                ref={inputRef}
                                type="file"
                                className="hidden"
                                multiple={false}
                                onChange={handleChange}
                                accept=".csv,.xlsx,.xls"
                            />
                            <Button 
                                variant="primary" 
                                className="px-6 min-w-[140px] justify-center font-bold hover:brightness-95" 
                                onClick={onButtonClick}
                                style={{ 
                                    backgroundColor: hexToRgba(primaryColor, 0.1), 
                                    color: primaryColor 
                                }}
                            >
                                Browse Files
                            </Button>
                             <p className="text-xs text-[#1A1A1A] mt-4">Supported formats : CSV, XLSX, XLS(Max 10mb)</p>
                        </>
                    )}
                </div>

                {/* Requirements Box */}
                <div 
                    className="rounded-lg p-6"
                    style={{ backgroundColor: hexToRgba(primaryColor, 0.05) }}
                >
                    <h3 className="text-sm font-normal text-[#1A1A1A] mb-2">File Format Requirements</h3>
                    <ul className="list-none space-y-1">
                        <li className="text-sm font-normal text-[#1A1A1A] flex items-center gap-2">
                             <div className="w-1 h-1 rounded-full bg-black shrink-0" /> Column 1: Item Code
                        </li>
                        <li className="text-sm font-normal text-[#1A1A1A] flex items-center gap-2">
                             <div className="w-1 h-1 rounded-full bg-black shrink-0" /> Column 2: Description
                        </li>
                        <li className="text-sm font-normal text-[#1A1A1A] flex items-center gap-2">
                             <div className="w-1 h-1 rounded-full bg-black shrink-0" /> Column 3: Quantity
                        </li>
                        <li className="text-sm font-normal text-[#1A1A1A] flex items-center gap-2">
                             <div className="w-1 h-1 rounded-full bg-black shrink-0" /> Column 4: Unit Price (optional)
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <div className="p-8 pt-0 flex justify-end gap-4 shrink-0">
                <div className='flex gap-4 items-center'>
                     <button onClick={onClose} className="font-bold text-sm text-[#1A1A1A] hover:underline">
                        Cancel
                    </button>
                    <Button 
                        variant="primary" 
                        customColor={primaryColor} 
                        className="px-8 font-bold text-sm justify-center min-w-[120px]"
                        onClick={handleImport}
                        disabled={!selectedFile}
                    >
                        Import
                    </Button>
                </div>
            </div>
        </div>
    );
};
