import React, { ReactChild, useRef, useState, useEffect } from "react";
import { StyledDropdown, StyledSelect, StyledSelectOutline } from "./style";
import { Icon } from "../icons";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  SelectSize?: "sm" | "md" | "lg";
  theme?: "dark" | "light";
  rounded?: boolean;
  isFocused?: boolean;
  addonBefore?: ReactChild;
  addonAfter?: ReactChild;
  error?: boolean;
  helpText?: string;
  options?: { value: string; label: string; disabled?: boolean }[];
  value?: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ addonBefore, options, placeholder, value, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLSelectElement>(null);
    const [open, setOpen] = useState(false);
    // const [selectedValue, setSelectedValue] = useState(null);
    const [selectValue, setSelectValue] = useState<any>(value || "");

    // const handleOptionClick = (value: any) => {
    //   setSelectedValue(value);
    //   setOpen(false);
    // };

    const handleFocus = () => {
      setIsFocused((state) => !state);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
          setIsFocused(false);
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div>
        <StyledSelectOutline
          {...props}
          isFocused={isFocused}
          onBlur={handleBlur}
          onClick={() => {
            handleFocus();
            setOpen(true);
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {addonBefore && addonBefore}
            <StyledSelect ref={inputRef} onBlur={handleBlur}>
              {options &&
                options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </StyledSelect>
            {!selectValue ? placeholder ?? "" : selectValue}
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {selectValue && (
              <Icon
                name="XMarkIcon"
                size="small"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectValue(undefined)}
              />
            )}
            {!open ? (
              <Icon name="ChevronDownIcon" size="small" />
            ) : (
              <Icon name="ChevronUpIcon" size="small" />
            )}
          </div>
        </StyledSelectOutline>

        <StyledDropdown open={open} style={props.style}>
          {options &&
            options.map((option) => (
              <li key={option.value} value={option.value}>
                {option.label}
              </li>
            ))}
        </StyledDropdown>
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
