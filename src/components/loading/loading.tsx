import { CSSProperties, FC, HTMLAttributes } from "react";
import { ProvideTheme } from "../ProvideTheme/provideTheme";
import { SpinnerComponent } from "./styles";

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark";
}

const Loading: FC<LoadingProps> = ({ style, size }) => {
  return (
    <ProvideTheme>
      <SpinnerComponent style={style} size={size} />
    </ProvideTheme>
  );
};

export default Loading;
