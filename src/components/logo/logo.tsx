import { CSSProperties, FC } from "react";

export interface LogoProps {
  variant?: "light" | "dark";
  theme?: "light" | "dark";
  style?: CSSProperties;
}

const Logo: FC<LogoProps> = ({ variant, theme, ...props }) => {
  return variant === "dark" ? (
    <img src="logoDark.svg" alt="pdv365-logo" {...props} />
  ) : theme === "dark" ? (
    <img src="logoDark.svg" alt="pdv365-logo" {...props} />
  ) : (
    <img src="logo.svg" alt="pdv365-logo" {...props} />
  );
};

export default Logo;
