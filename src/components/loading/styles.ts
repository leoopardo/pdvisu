import styled from "styled-components";
import { BaseObject } from "styled-components/dist/types";

export const SpinnerComponent: any = styled.div<{
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "outline";
  danger?: boolean;
}>(({ theme, size, variant, danger }) => {
  const constant: BaseObject = {
    borderRadius: `50%`,
    width: size === "small" ? "12px" : size === "medium" ? "14px" : "18px",
    height: size === "small" ? "12px" : size === "medium" ? "14px" : "18px",
    animationName: `rotateAnimation`,
    animationDuration: `1.2s`,
    animationTimingFunction: "linear",
    animationIterationCount: `infinite`,

    "@keyframes rotateAnimation": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  };
  if (!variant || variant === "primary") {
    return {
      ...constant,
      border: `2.5px solid ${theme.loading.primary.fixed}`,
      borderTop: `2.5px solid ${theme.loading.primary.spin}`,
    };
  }
  if (variant === "secondary") {
    return {
      ...constant,
      border: `2.5px solid ${theme.loading.secondary.fixed}`,
      borderTop: `2.5px solid ${theme.loading.secondary.spin}`,
    };
  }
  if (variant === "outline") {
    return {
      ...constant,
      border: `2.5px solid ${theme.loading.outline.fixed}`,
      borderTop: `2.5px solid ${theme.loading.outline[`spin${danger ? "-danger" : ""}`]}`,
    };
  }
});
