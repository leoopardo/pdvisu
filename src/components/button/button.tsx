// components/button/button.tsx
import React, { MouseEventHandler, ReactChild } from "react";
import { ProvideTheme } from "../ProvideTheme/provideTheme";
import { CustomButtom } from "./style";

export type ButtonProps = {
  children?: ReactChild;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  theme?: "dark" | "light";
  icon?: ReactChild;
  iconPosition?: "left" | "right";
};

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  primary,
  disabled,
  onClick,
  icon,
  iconPosition,
  ...props
}) => {
  return (
    <ProvideTheme>
      <CustomButtom
        data-testid={`button-${children}`}
        type="button"
        onClick={onClick}
        primary={primary}
        disabled={disabled}
        size={size}
        {...props}
      >
        {icon && iconPosition === "left" ? icon : <></>}
        {children}
        {icon && iconPosition !== "left" ? icon : <></>}
      </CustomButtom>
    </ProvideTheme>
  );
};

export default Button;
