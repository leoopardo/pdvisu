import React, { ReactChild } from "react";
import { StyledCol } from "./style";
import { useRowContext } from "../row/row";

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

const Col = ({ children, ...props }: ColProps) => {
  const { childCount, gutter } = useRowContext();

  console.log(childCount);
  return (
    <StyledCol gutter={gutter} childCount={childCount} {...props}>
      {children}
    </StyledCol>
  );
};

export default Col;
