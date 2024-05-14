import React, {
  Dispatch,
  ReactChild,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Logo from "../logo/logo";
import {
  StyledLabel,
  StyledOpenMenuButton,
  StyledOpenMenuIcon,
  StyledSider,
  StyledSiderLink,
} from "./style";
import { Icon } from "../icons";

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
  const [openByClick, setOpenByClick] = useState<boolean | undefined>(
    open === true || open === false ? open : true,
  );
  const [showLabel, setShowLabel] = useState<boolean>(true);

  useEffect(() => {
    if (openByClick === false) {
      setShowLabel(false);
      return;
    }
    setTimeout(() => setShowLabel(true), 150);
  }, [openByClick, open]);

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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <StyledSider {...props} open={openByClick || false}>
        <Logo
          variant="dark"
          style={{ paddingLeft: !openByClick ? undefined : 15 }}
        />
        <div style={{ marginTop: 24 }}>
          {routes && renderMenuItems(routes, 1, false)}
          {children}
        </div>
      </StyledSider>
      <StyledOpenMenuButton
        open={openByClick || false}
        onClick={() => setOpenByClick((state) => !state)}
      >
        <StyledOpenMenuIcon open={openByClick || false}>
          <Icon name="ChevronDoubleLeftIcon" />
        </StyledOpenMenuIcon>
      </StyledOpenMenuButton>
    </div>
  );
};

export default Sider;
