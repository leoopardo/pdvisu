import { default as React, ReactChild } from "../../../node_modules/react";

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
  options?: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
  value?: string;
  placeholder?: string;
}
declare const Input: React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<HTMLInputElement>
>;
export default Input;
