import styled from "styled-components";

export const SpinnerComponent: any = styled.div<{
  size?: "small" | "medium" | "large";
}>(({ theme, size }) => ({
  border: `2.5px solid ${theme.loading.primary.initial}`,
  borderTop: `2.5px solid ${theme.loading.primary.disabled}`,
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
}));
