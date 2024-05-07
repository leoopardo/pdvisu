import React, { MouseEventHandler, ReactChild } from "react";
import { Loading } from "../loading";
import { CustomButtom } from "./style";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactChild;
  variant?: "primary" | "secondary" | "outline" | "Link";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  theme?: "dark" | "light";
  icon?: ReactChild;
  iconPosition?: "left" | "right";
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      icon,
      iconPosition,
      disabled,
      loading,
      ...props
    },
    ref,
  ) => {
    return (
      <CustomButtom
        data-testid={`button-${children}`}
        variant={variant}
        type="button"
        disabled={disabled}
        size={size}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && !loading ? icon : <></>}
        {icon && iconPosition === "left" && loading ? (
          <Loading size="medium" />
        ) : (
          <></>
        )}
        {children}
        {icon && iconPosition !== "left" && loading ? (
          <Loading size="medium" />
        ) : (
          <></>
        )}
        {icon && iconPosition !== "left" && !loading ? icon : <></>}
      </CustomButtom>
    );
  },
);
Button.displayName = "Button";

export default Button;
