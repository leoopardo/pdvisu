import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Loading } from "../loading";

const buttonVariants = cva(
  "w-12/12 inline-flex items-center justify-center align-middle whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/80 active:bg-primary-active",
        round:
          "bg-primary rounded-3xl text-primary-foreground shadow hover:bg-primary/80 active:bg-primary-active",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-green-500 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      disabled: {
        true: "bg-disabled hover:bg-disabled cursor-no-drop",
      },
      loading: {
        true: "bg-disabled hover:bg-disabled cursor-no-drop",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  theme?: "light" | "dark";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  icon?: React.ReactChild;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      icon,
      iconPosition,
      disabled,
      loading,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        // class=""
        className={cn(
          buttonVariants({ variant, size, className, disabled, loading }),
        )}
        ref={ref}
        {...props}
        data-testid={`button-${children}`}
      >
        <div>{icon && iconPosition === "left" && !loading && icon}</div>

        {icon && iconPosition === "left" && loading && <Loading size="md" />}
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          {children}
        </h4>

        <div className="mt-0.5">
          {icon && iconPosition !== "left" && !loading && icon}
        </div>

        {iconPosition !== "left" && loading && <Loading size="md" />}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;
