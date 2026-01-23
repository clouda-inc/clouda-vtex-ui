import React, { useState, useEffect, type ChangeEvent } from 'react';

export interface QuantitySelectorProps {
  /**
   * Current value of the input
   */
  value?: number;
  /**
   * Initial value for uncontrolled mode
   */
  initialValue?: number;
  /**
   * Callback when value changes
   */
  onChange?: (value: number) => void;
  /**
   * Minimum value allowed
   * @default 0
   */
  min?: number;
  /**
   * Maximum value allowed
   */
  max?: number;
  /**
   * Label text displayed to the left of the selector
   */
  label?: string;
  /**
   * Custom class to append to the root container
   */
  blockClass?: string;
  /**
   * Disable the interaction
   */
  disabled?: boolean;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value: controlledValue,
  initialValue = 0,
  onChange,
  min = 0,
  max,
  label = "Lorem ipsum",
  blockClass = "",
  disabled = false,
}) => {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(initialValue);

  // Use a string for the input display to allow intermediate typing (like empty string)
  const [inputValue, setInputValue] = useState<string>(
    isControlled ? String(controlledValue) : String(initialValue)
  );

  useEffect(() => {
    if (isControlled) {
      setInputValue(String(controlledValue));
    }
  }, [controlledValue, isControlled]);

  const triggerChange = (newValue: number) => {
    if (!isControlled) {
      setInternalValue(newValue);
      setInputValue(String(newValue));
    }
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    if (disabled) return;
    const current = isControlled ? controlledValue! : internalValue;
    const next = current - 1;
    if (next >= min) {
      triggerChange(next);
    }
  };

  const handleIncrement = () => {
    if (disabled) return;
    const current = isControlled ? controlledValue! : internalValue;
    const next = current + 1;
    if (max !== undefined && next > max) return;
    triggerChange(next);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const val = e.target.value;

    // Allow digits only (and negative sign if min < 0, but simplicity first)
    // Here we assume positive integers mostly based on design icons +/-, but let's allow basic numeric typing
    if (val === '' || /^-?\d*$/.test(val)) {
      setInputValue(val);
    }
  };

  const handleBlur = () => {
    let parsed = parseInt(inputValue, 10);
    if (isNaN(parsed)) {
      parsed = min;
    }

    // Clamp
    if (parsed < min) parsed = min;
    if (max !== undefined && parsed > max) parsed = max;

    // Reset input to valid number
    if (!isControlled) {
      setInternalValue(parsed);
      setInputValue(String(parsed));
    } else {
      // If controlled, we just notify the parent of the clamped value
      // The parent usually passes it back. If they don't, we might have a mismatch 
      // until the next effect, but effectively we want to force the display to reset if the parent rejects it? 
      // Standard pattern: fire change, let parent drive. 
      // But for blur UX, we usually want to show the clamped value immediately if local.
      onChange?.(parsed);
      // If parent doesn't update, useEffect will revert inputValue to controlledValue
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className={`flex items-center gap-4 ${blockClass}`} data-testid="quantity-selector">
      {label && (
        <span className="text-base text-black font-normal font-['DM_Sans'] leading-normal">
          {label}
        </span>
      )}

      <div className="flex items-center">
        {/* Minus Button */}
        <button
          type="button"
          onClick={handleDecrement}
          disabled={disabled || ((isControlled ? controlledValue! : internalValue) <= min)}
          className={`
            w-[35px] h-[35px] flex items-center justify-center shrink-0
            bg-[#4e46b4] text-white rounded-l-[4px]
            hover:bg-[#3d3790] active:bg-[#2e2970]
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors
          `}
          aria-label="Decrease quantity"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="9.5" width="10" height="1" fill="currentColor" />
          </svg>
        </button>

        {/* Input Area */}
        <div className="relative h-[35px] bg-white border-y border-[#bbbbbb] flex items-center justify-center w-auto">
          <div className="flex items-center justify-center min-w-[24px] px-1.5">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              className="text-center outline-none bg-transparent font-semibold text-base text-black font-['DM_Sans'] p-0 m-0 w-auto"
              size={Math.max(1, String(inputValue || "0").length)}
            />
          </div>
        </div>

        {/* Plus Button */}
        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabled || (max !== undefined && (isControlled ? controlledValue! : internalValue) >= max)}
          className={`
            w-[35px] h-[35px] flex items-center justify-center shrink-0
            bg-[#4e46b4] text-white rounded-r-[4px]
            hover:bg-[#3d3790] active:bg-[#2e2970]
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors
          `}
          aria-label="Increase quantity"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};
