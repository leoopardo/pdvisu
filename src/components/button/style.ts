import { MouseEventHandler } from "react";
import styled from "styled-components";

export const CustomButtom: any = styled.button<{
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>(({ theme, disabled, size }) => ({
  border: 0,
  lineHeight: 1,
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "700",
  borderRadius: "10px",
  width: "fit-content",
  height: "fit-content",
  color: theme?.text?.button,
  backgroundColor: theme?.button["primary"]?.background?.initial,
  animationName: disabled ? "disable" : "able",
  animationFillMode: "forwards",
  animationDuration: "0.8s",
  padding:
    size === "large"
      ? "14.51px 8px"
      : size === "medium"
        ? "12px 8px"
        : "10px 8px",
  transition: "background-color, color 0.3s",
  gap: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    backgroundColor: theme?.button["primary"]?.background?.hover,
  },
  "&:active": {
    backgroundColor: theme?.button["primary"]?.background?.active,
  },

  "@keyframes disable": {
    from: {
      backgroundColor: theme?.button["primary"]?.background?.initial,
    },
    to: {
      backgroundColor: theme?.button["primary"]?.background?.disabled,
      cursor: "no-drop",
    },
  },
  "@keyframes able": {
    from: {
      backgroundColor: theme?.button["disabled"]?.background,
    },
    to: {
      backgroundColor: theme?.button["primary"]?.background,
    },
  },
}));
