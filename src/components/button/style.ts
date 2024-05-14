import { MouseEventHandler } from "react";
import styled from "styled-components";
import { BaseObject } from "styled-components/dist/types";

export const CustomButtom: any = styled.button<{
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline" | "link";
  shape?: "round" | "default";
  size?: "small" | "medium" | "large";
  danger?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}>(({ theme, disabled, size, variant, danger, shape, loading }) => {
  const constant: BaseObject = {
    border: 0,
    lineHeight: 1,
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
    borderRadius: shape === "round" ? "50px" : "10px",
    width: "fit-content",
    height: "fit-content",
    animationName: disabled ? `disable-${variant}` : "able",
    animationFillMode: "forwards",
    animationDuration: "0.5s",
    padding:
      size === "large"
        ? "14.51px 8px"
        : size === "medium"
          ? "12px 8px"
          : "10px 8px",
    transition:
      "background-color 0.3s, color 0.3s, border-radius 0.3s, outline 0.3s, boxShadow 0.3s",
    gap: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "transparent",
    opacity: loading ? 0.6 : 1,
  };

  if (!variant || variant === "primary") {
    return {
      ...constant,
      color: theme?.text?.button,
      backgroundColor:
        theme?.button["primary"]?.background[
          `initial${danger ? "-danger" : ""}`
        ],
      "&:hover": {
        backgroundColor:
          theme?.button["primary"]?.background[
            `hover${danger ? "-danger" : ""}`
          ],
      },
      "&:active": {
        backgroundColor:
          theme?.button["primary"]?.background[
            `active${danger ? "-danger" : ""}`
          ],
      },
      "&:focus": {
        outline: `6px solid ${theme.button.primary[`stroke${danger ? "-danger" : ""}`]}`,
      },

      "@keyframes disable-primary": {
        from: {
          backgroundColor:
            theme?.button["primary"]?.background[
              `initial${danger ? "-danger" : ""}`
            ],
        },
        to: {
          backgroundColor: theme?.button["primary"]?.background?.disabled,
          cursor: "no-drop",
        },
      },
    };
  }
  if (variant === "secondary") {
    return {
      ...constant,
      color: theme?.text?.secondary,
      backgroundColor:
        theme?.button?.secondary?.background[
          `initial${danger ? "-danger" : ""}`
        ],
      "&:hover": {
        backgroundColor:
          theme?.button?.secondary?.background[
            `hover${danger ? "-danger" : ""}`
          ],
      },
      "&:active": {
        backgroundColor:
          theme?.button?.secondary?.background[
            `active${danger ? "-danger" : ""}`
          ],
      },
      "&:focus": {
        outline: `6px solid ${theme.button.secondary[`stroke${danger ? "-danger" : ""}`]}`,
      },
      "@keyframes disable-secondary": {
        from: {
          backgroundColor:
            theme?.button?.secondary?.background[
              `initial${danger ? "-danger" : ""}`
            ],
        },
        to: {
          backgroundColor: theme?.button?.secondary?.background?.disabled,
          cursor: "no-drop",
        },
      },
    };
  }
  if (variant === "outline") {
    return {
      ...constant,
      color: theme?.button?.outline[`text${danger ? "-danger" : ""}`],
      backgroundColor: theme?.button?.outline?.background?.initial,
      outline: `2px solid ${theme?.button?.outline[`text${danger ? "-danger" : ""}`]}`,
      "&:hover": {
        backgroundColor:
          !disabled &&
          theme?.button?.outline?.background[`hover${danger ? "-danger" : ""}`],
      },
      "&:active": {
        backgroundColor:
          theme?.button?.outline?.background[
            `active${danger ? "-danger" : ""}`
          ],
      },
      "&:focus": {
        boxShadow: `0px 0px 0px 8px ${theme?.button?.outline?.background[`hover${danger ? "-danger" : ""}`]};`,
      },
      "@keyframes disable-outline": {
        from: {
          color: theme?.button?.outline?.text,
          outline: `2px solid ${theme?.button?.outline?.text}`,
        },
        to: {
          color: theme?.button?.outline?.background?.disabled,
          outline: `2px solid ${theme?.button?.outline?.background?.disabled}`,
          cursor: "no-drop",
        },
      },
    };
  }
});
