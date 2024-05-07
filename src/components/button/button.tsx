import React, { MouseEventHandler, ReactChild } from "react";
import { Loading } from "../loading";
import { CustomButtom } from "./style";

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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      icon,
      iconPosition,
      loading,

      ...props
    },
    ref,
  ) => {
    return (
      <CustomButtom
        data-testid={`button-${children}`}
        type="button"
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && !loading ? icon : <></>}
        {icon && iconPosition === "left" && loading ? (
          <Loading
            size="medium"
            variant={props.variant}
            danger={props.danger}
          />
        ) : (
          <></>
        )}
        {children}
        {icon && iconPosition !== "left" && loading ? (
          <Loading
            size="medium"
            variant={props.variant}
            danger={props.danger}
          />
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
