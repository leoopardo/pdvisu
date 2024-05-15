import { default as React, ReactChild } from "../../../node_modules/react";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: ReactChild | string | any;
  level: "h1" | "h2" | "h3" | "h3" | "h4" | "p";
  strong?: boolean;
  italic?: boolean;
  theme?: "dark" | "light";
}
declare const Typography: React.ForwardRefExoticComponent<
  TypographyProps & React.RefAttributes<HTMLHeadingElement>
>;
export default Typography;
