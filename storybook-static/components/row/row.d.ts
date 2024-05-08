import {
  default as React,
  ReactChild,
  ForwardedRef,
} from "../../../node_modules/react";

interface RowContextProps {
  gutter: number | null;
  childCount: number | null;
}
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactChild | string | any;
  gutter?: number;
  gutterX?: number;
  gutterY?: number;
  align?: "top" | "bottom" | "center";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around";
  wrap?: boolean;
}
export interface ForwardedRowProps extends RowProps {
  forwardedRef?: ForwardedRef<HTMLDivElement>;
}
declare const Row: React.ForwardRefExoticComponent<
  ForwardedRowProps & React.RefAttributes<HTMLDivElement>
>;
export declare const useRowContext: () => RowContextProps;
export default Row;
