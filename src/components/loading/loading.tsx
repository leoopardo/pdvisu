import { FC } from "react";
import { SpinnerComponent } from "./styles";
import { CSSProperties } from "styled-components";

export interface LoadingProps {
  size?: "small" | "medium" | "large";
  theme?: "dark" | "light";
  variant?: "primary" | "secondary" | "outline";
  danger?: boolean;
  styles?: CSSProperties;
}

const Loading: FC<LoadingProps> = ({ size, ...props }) => {
  return <SpinnerComponent size={size} {...props} data-testid="loading" />;
};

export default Loading;
