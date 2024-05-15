import React, { ReactChild, forwardRef } from "react";
import {
  StyledTypographyHeadingFour,
  StyledTypographyHeadingOne,
  StyledTypographyHeadingThree,
  StyledTypographyHeadingTwo,
  StyledTypographyParagraph,
} from "./style";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: ReactChild | string | any;
  level: "h1" | "h2" | "h3" | "h3" | "h4" | "p";
  strong?: boolean;
  italic?: boolean;
  theme?: "dark" | "light";
}

const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, level, ...props }: TypographyProps, ref) => {
    const levels: {
      h1: ReactChild;
      h2: ReactChild;
      h3: ReactChild;
      h4: ReactChild;
      p: ReactChild;
    } = {
      h1: (
        <StyledTypographyHeadingOne level={level} ref={ref} {...props}>
          {children}
        </StyledTypographyHeadingOne>
      ),
      h2: (
        <StyledTypographyHeadingTwo level={level} ref={ref} {...props}>
          {children}
        </StyledTypographyHeadingTwo>
      ),
      h3: (
        <StyledTypographyHeadingThree level={level} ref={ref} {...props}>
          {children}
        </StyledTypographyHeadingThree>
      ),
      h4: (
        <StyledTypographyHeadingFour level={level} ref={ref} {...props}>
          {children}
        </StyledTypographyHeadingFour>
      ),
      p: (
        <StyledTypographyParagraph level={level} ref={ref} {...props}>
          {children}
        </StyledTypographyParagraph>
      ),
    };
    return levels[level];
  },
);

Typography.displayName = "Typography";

export default Typography;
