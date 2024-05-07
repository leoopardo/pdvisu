import { FC } from "react";
import { SpinnerComponent } from "./styles";

export interface LoadingProps {
  size?: "small" | "medium" | "large";
  theme?: "dark" | "light";
}

const Loading: FC<LoadingProps> = ({ size }) => {
  return <SpinnerComponent size={size} />;
};

export default Loading;
