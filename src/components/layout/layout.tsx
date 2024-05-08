import React, { ReactChild } from "react";
import { StyledLayout } from "./style";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return <StyledLayout {...props}>{children}</StyledLayout>;
};

export default Layout;
