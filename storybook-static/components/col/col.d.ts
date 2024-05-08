import { default as React, ReactChild } from "../../../node_modules/react";

type spanType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;
export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactChild | string | any;
  span?: spanType;
  xs?: spanType;
  sm?: spanType;
  md?: spanType;
  lg?: spanType;
  xl?: spanType;
  xxl?: spanType;
  gutter?: number;
  gutterX?: number;
  childCount?: number;
}
declare const Col: ({
  children,
  ...props
}: ColProps) => import("react/jsx-runtime").JSX.Element;
export default Col;
