import { InputProps } from "./input";
import { IStyledComponentBase, Substitute } from "styled-components/dist/types";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  HTMLAttributes,
} from "react";
import { InputComponent } from "@react-input/core";
import { MaskProps } from "@react-input/mask";

export declare const StyledInputMask: IStyledComponentBase<"web", any> &
  string &
  Omit<
    InputComponent<MaskProps>,
    keyof React.Component<any, object, any> // Changed {} to object here
  >;

export declare const StyledInput: IStyledComponentBase<
  "web",
  Substitute<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    InputProps
  >
> &
  string;

export declare const StyledTextArea: IStyledComponentBase<
  "web",
  Substitute<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    InputProps
  >
> &
  string;

export declare const StyledInputOutline: IStyledComponentBase<
  "web",
  Substitute<
    DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    InputProps
  >
> &
  string;
