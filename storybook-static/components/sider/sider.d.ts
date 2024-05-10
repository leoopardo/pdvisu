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
};
export interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactChild | string | any;
  open?: boolean;
  routes?: Array<Route>;
}
declare const Sider: ({
  children,
  open,
  routes,
  ...props
}: SiderProps) => import("react/jsx-runtime").JSX.Element;
export default Sider;
