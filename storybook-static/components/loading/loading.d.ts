import { FC } from "../../../node_modules/react";
import { CSSProperties } from "styled-components";

export interface LoadingProps {
  size?: "small" | "medium" | "large";
  theme?: "dark" | "light";
  variant?: "primary" | "secondary" | "outline";
  danger?: boolean;
  styles?: CSSProperties;
}
declare const Loading: FC<LoadingProps>;
export default Loading;
