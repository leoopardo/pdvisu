import { CSSProperties, FC } from "../../../node_modules/react";

export interface LogoProps {
  variant?: "light" | "dark";
  theme?: "light" | "dark";
  style?: CSSProperties;
}
declare const Logo: FC<LogoProps>;
export default Logo;
