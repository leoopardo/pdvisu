import React, {
  Dispatch,
  ReactChild,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Logo from "../logo/logo";
import { StyledLabel, StyledSider, StyledSiderLink } from "./style";

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

const Sider = ({ children, open, routes, ...props }: SiderProps) => {
  const [openByClick] = useState<boolean | undefined>(undefined);
  const [showLabel, setShowLabel] = useState<boolean>(true);

  useEffect(() => {
    if (open === false) {
      setShowLabel(false);
      return;
    }
    setTimeout(() => setShowLabel(true), 150);
  }, [open]);

  const [submenuOpenStates, setSubmenuOpenStates] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSubmenu = (key: string) => {
    setSubmenuOpenStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const renderMenuItems = (
    routes: Route[] | undefined,
    level: number = 1,
    submenu: boolean,
  ) => {
    return routes?.map((route) => {
      if (route.permission === false) {
        return null;
      }
      console.log(submenu);

      const menuItem = (
        <StyledSiderLink
          key={route.key}
          href={route.disabled ? undefined : route.path}
          open={showLabel}
          disabled={route.disabled}
          onClick={() => route.childrens && toggleSubmenu(route.key)}
          style={{ paddingLeft: `${level * 16}px` }}
        >
          {route.icon && route.icon}
          <StyledLabel open={showLabel} disabled={route.disabled}>
            {route.label}
          </StyledLabel>
        </StyledSiderLink>
      );

      const submenuItems: any =
        route.childrens && renderMenuItems(route.childrens, level + 2, true);

      return (
        <>
          {menuItem}
          {route.childrens && submenuOpenStates[route.key] && submenuItems}
        </>
      );
    });
  };

  return (
    <StyledSider {...props} open={openByClick || open}>
      <Logo variant="dark" style={{ paddingLeft: !open ? undefined : 15 }} />
      <div style={{ marginTop: 24 }}>
        {routes && renderMenuItems(routes, 1, false)}
        {children}
      </div>
    </StyledSider>
  );
};

export default Sider;
