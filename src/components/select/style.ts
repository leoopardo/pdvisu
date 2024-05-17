import styled, { css } from "styled-components";
import { SelectProps } from "./Select";

export const StyledSelect = styled.select<SelectProps>(({ theme }) => ({
  width: "100%",
  height: "26px",
  border: "none",
  outline: "none",
  fontSize: 14,
  color: theme.text.primary,
  backgroundColor: "transparent",
  display: "none",
}));

export const StyledSelectOutline = styled.span<SelectProps>(
  ({ theme, SelectSize, isFocused, rounded, error, value }) => {
    return css`
      border-radius: ${rounded ? "25px" : "4px"};
      padding-top: ${SelectSize === "sm"
        ? "8px"
        : SelectSize === "lg"
          ? "10px"
          : "8px"};
      padding-bottom: ${SelectSize === "sm"
        ? "8px"
        : SelectSize === "lg"
          ? "10px"
          : "8px"};
      padding-left: 8px;
      padding-right: 8px;
      cursor: text;
      font-family: Inter;
      font-size: 14px;
      outline: 2px solid
        ${error ? theme.input.outline.error : theme.input.outline.initial};
      background-color: transparent;
      display: flex;
      justify-content: space-between;
      gap: 8px;
      transition:
        outline 0.3s,
        color 0.3s;
      color: ${error ? theme.input.outline.error : theme.input.primary};
      opacity: ${!value ? 0.7 : 1};
      ${isFocused &&
      css`
        font-size: 14px;
        outline: 2px solid
          ${error ? theme.input.outline.error : theme.input.outline.active};
        color: ${error
          ? theme.input.outline.error
          : theme.input.outline.active};
      `};
    `;
  },
);

export const StyledOption = styled.option(({ theme }) => ({
  color: theme.text.primary,
  fontFamily: "Inter",
  marginTop: "16px",
  fontSize: "14px",
}));

export const StyledDropdown = styled.ul<{ open?: boolean }>(({ open }) => ({
  marginTop: 8,
  width: "100%",
  borderRadius: 8,
  padding: 8,
  backgroundColor: "red",
  position: "absolute",
  animationFillMode: "forwards",
  animationDuration: "0.3s",
  animationName: open ? "openDropdown" : "closeDropdown",

  "@Keyframes openDropdown": {
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
  },
  "@Keyframes closeDropdown": {
    from: { opacity: 1 },
    to: {
      opacity: 0,
    },
  },
}));
