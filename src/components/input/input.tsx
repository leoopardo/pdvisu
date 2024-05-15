import React, { ReactChild, useEffect, useRef, useState } from "react";
import { Icon } from "../icons";
import {
  StyledInput,
  StyledInputMask,
  StyledInputOutline,
  StyledTextArea,
} from "./style";
import MaskPreset, { masklist } from "./utils/maskPreSet";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "sm" | "md" | "lg";
  theme?: "dark" | "light";
  rounded?: boolean;
  isFocused?: boolean;
  addonBefore?: ReactChild;
  addonAfter?: ReactChild;
  password?: boolean;
  error?: boolean;
  helpText?: string;
  textArea?: boolean;
  mask?: string;
  replacement?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ addonBefore, addonAfter, password, type, textArea, mask, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputType, setInputType] = useState<"password" | "text">(
      password ? "password" : "text",
    );
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string>("");

    const handleFocus = () => {
      setIsFocused(true);
      if (inputRef.current) {
        inputRef.current.selectionStart = inputRef.current.value.length;
        inputRef.current.selectionEnd = inputRef.current.value.length;
      }
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const togglePasswordVisibility = () => {
      setInputType((prevType) =>
        prevType === "password" ? "text" : "password",
      );
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.value = inputValue;
          inputRef.current.selectionStart = inputRef.current.value.length;
          inputRef.current.selectionEnd = inputRef.current.value.length;
        }
      }, 0);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    const handleInputClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    useEffect(() => {
      if (!password) setInputType("text");
      if (password) {
        setInputType("password");
      }
    }, [password]);

    return (
      <span>
        <StyledInputOutline
          {...props}
          isFocused={isFocused}
          onClick={handleInputClick}
        >
          {addonBefore && addonBefore}
          {textArea ? (
            <StyledTextArea
              {...props}
              onFocus={handleFocus}
              onBlur={handleBlur}
              type={type || inputType}
              onChange={handleChange}
            />
          ) : mask ? (
            <StyledInputMask
              {...props}
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              type={type || inputType}
              onChange={handleChange}
              mask={mask && masklist.includes(mask) ? MaskPreset[mask] : mask}
              replacement={{ _: /\d/ }}
            />
          ) : (
            <StyledInput
              {...props}
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              type={type || inputType}
              onChange={handleChange}
            />
          )}
          {password && (
            <Icon
              style={{ cursor: "pointer", zIndex: 999 }}
              name={inputType === "password" ? "EyeIcon" : "EyeSlashIcon"}
              onClick={togglePasswordVisibility}
            />
          )}
          {addonAfter && addonAfter}
        </StyledInputOutline>
      </span>
    );
  },
);
Input.displayName = "Input";

export default Input;
