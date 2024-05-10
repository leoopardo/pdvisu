import { default as React, ReactChild } from "../../../node_modules/react";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactChild | string | any;
}
declare const Layout: ({
  children,
  ...props
}: LayoutProps) => import("react/jsx-runtime").JSX.Element;
export default Layout;
