import { default as React, ReactChild } from "../../../node_modules/react";

export interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  open?: boolean;
}
declare const Sider: ({
  children,
  open,
  ...props
}: SiderProps) => import("react/jsx-runtime").JSX.Element;
export default Sider;
