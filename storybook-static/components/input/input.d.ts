import { default as React, ReactChild } from "../../../node_modules/react";

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
  disabled?: boolean;
  loading?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>;
export default Input;
