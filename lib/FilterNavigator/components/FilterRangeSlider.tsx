import React, { useState, useEffect, useRef } from "react";

interface FilterRangeSliderProps {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
  formatLabel?: (value: number) => string;
  color?: string;
  value?: [number, number];
}

export const FilterRangeSlider: React.FC<FilterRangeSliderProps> = ({
  min,
  max,
  onChange,
  formatLabel = (val) => `$${val}`,
  color = "#4F36F1",
  value,
}) => {
  const [minVal, setMinVal] = useState(value ? value[0] : min);
  const [maxVal, setMaxVal] = useState(value ? value[1] : max);
  const minValRef = useRef(value ? value[0] : min);
  const maxValRef = useRef(value ? value[1] : max);
  const range = useRef<HTMLDivElement>(null);

  // Sync with value prop if provided
  useEffect(() => {
    if (value) {
      setMinVal(value[0]);
      setMaxVal(value[1]);
      minValRef.current = value[0];
      maxValRef.current = value[1];
    }
  }, [value]);

  // Convert to percentage
  const getPercent = (value: number) =>
    Math.round(((value - min) / (max - min)) * 100);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
      range.current.style.backgroundColor = color;
    }
  }, [minVal, getPercent, color]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className="w-full flex flex-col gap-4 py-2">
      <div className="relative w-full h-1 bg-[#DEDEDE] rounded-full mt-2">
        <div
          ref={range}
          className="absolute h-1 rounded-full z-10"
          style={{ backgroundColor: color }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
            onChange(value, maxVal);
          }}
          className="absolute w-full h-1 -top-0 z-20 opacity-0 cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:cursor-pointer"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
            onChange(minVal, value);
          }}
          className="absolute w-full h-1 -top-0 z-20 opacity-0 cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:cursor-pointer"
        />

        {/* Custom thumbs for visual consistency if needed, but the css input hacks above handle interaction well. 
            We need to add visible handles usually if we hide the input. 
            However, with the pointer-events trick, the inputs are invisible but clickable. 
            Let's add visual thumbs that follow the values.
        */}
        <div
          className="absolute h-4 w-4 bg-white border border-[#DEDEDE] rounded-full z-30 -mt-[6px] -ml-2 shadow-sm pointer-events-none"
          style={{ left: `${getPercent(minVal)}%` }}
        />
        <div
          className="absolute h-4 w-4 bg-white border border-[#DEDEDE] rounded-full z-30 -mt-[6px] -ml-2 shadow-sm pointer-events-none"
          style={{ left: `${getPercent(maxVal)}%` }}
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-[#341F1A] font-['DM_Sans'] font-bold border border-[#DEDEDE] rounded px-3 py-1">
          {formatLabel(minVal)}
        </div>
        <div className="text-[#A8A9B2]">-</div>
        <div className="text-sm text-[#341F1A] font-['DM_Sans'] font-bold border border-[#DEDEDE] rounded px-3 py-1">
          {formatLabel(maxVal)}
        </div>
      </div>
    </div>
  );
};
