import {
  default as React,
  MouseEventHandler,
  ReactChild,
} from "../../../node_modules/react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactChild;
  variant?: "primary" | "secondary" | "outline";
  shape?: "default" | "round";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  theme?: "dark" | "light";
  icon?: ReactChild;
  iconPosition?: "left" | "right";
  loading?: boolean;
  danger?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>;
export default Button;
