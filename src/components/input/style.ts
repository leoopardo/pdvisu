import { InputMask } from "@react-input/mask";
import styled, { css } from "styled-components";
import { InputProps } from "./input";

export const StyledInputMask = styled(InputMask)<any>(
  ({ theme, disabled }) => ({
    width: "100%",
    height: "26px",
    border: "none",
    outline: "none",
    fontSize: 14,
    color: theme.text.primary,
    backgroundColor: "transparent",
    cursor: disabled ? "no-drop" : "text",
  }),
);

export const StyledInput = styled.input<InputProps>(({ theme, disabled }) => ({
  width: "100%",
  height: "26px",
  border: "none",
  outline: "none",
  fontSize: 14,
  color: theme.text.primary,
  backgroundColor: "transparent",
  cursor: disabled ? "no-drop" : "text",
}));

export const StyledTextArea = styled.textarea<InputProps>(
  ({ theme, disabled }) => ({
    width: "100%",
    height: "26px",
    border: "none",
    outline: "none",
    fontSize: 14,
    color: theme.text.primary,
    backgroundColor: "transparent",
    cursor: disabled ? "no-drop" : "text",
  }),
);

export const StyledInputOutline = styled.span<InputProps>(
  ({ theme, inputSize, isFocused, rounded, error, disabled }) => {
    return css`
      border-radius: ${rounded ? "25px" : "4px"};
      padding-top: ${inputSize === "sm"
        ? "6px"
        : inputSize === "lg"
          ? "8px"
          : "6px"};
      padding-bottom: ${inputSize === "sm"
        ? "6px"
        : inputSize === "lg"
          ? "8px"
          : "6px"};
      padding-left: 8px;
      padding-right: 8px;
      cursor: text;
      font-family: Inter;
      font-size: 14px;
      outline: 2px solid
        ${error ? theme.input.outline.error : theme.input.outline.initial};
      background-color: ${disabled
        ? theme.input.background.disabled
        : theme.input.background.initial};
      display: flex;
      gap: 8px;
      transition:
        outline 0.3s,
        color 0.3s;
      cursor: ${disabled ? "no-drop" : "text"};
      color: ${error ? theme.input.outline.error : theme.text.primary}
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
