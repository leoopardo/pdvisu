import {
  default as React,
  Dispatch,
  ReactChild,
  SetStateAction,
} from "../../../node_modules/react";

export type Route = {
  key: string;
  label?: string;
  path?: string;
  icon?: ReactChild;
  permission?: boolean;
  active?: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
  open?: boolean;
  disabled?: boolean;
  childrens?: Route[];
  level?: number;
};
export interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactChild | string | any;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  routes?: Array<Route>;
  footer?: ReactChild | any;
  theme?: "dark" | "light";
}
declare const Sider: ({
  children,
  open,
  routes,
  footer,
  ...props
}: SiderProps) => import("react/jsx-runtime").JSX.Element;
export default Sider;
