import React, {
  Dispatch,
  ReactChild,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Icon } from "../icons";
import Logo from "../logo/logo";
import {
  StyledLabel,
  StyledOpenMenuButton,
  StyledOpenMenuIcon,
  StyledOpenSubmenuIcon,
  StyledSider,
  StyledSiderLink,
} from "./style";
import { useTheme } from "@/themeProvider";

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
  routes?: Array<Route>;
  footer?: ReactChild | any;
}

const Sider = ({ children, open, routes, footer, ...props }: SiderProps) => {
  const [openByClick, setOpenByClick] = useState<boolean | undefined>(
    open === true || open === false ? open : true,
  );
  const [showLabel, setShowLabel] = useState<boolean>(true);
  const [activeMenus, setActiveMenus] = useState<string[]>([]);
  const { theme } = useTheme();
  console.log(theme);

  useEffect(() => {
    if (openByClick === false) {
      setShowLabel(false);
      setSubmenuOpenStates({});
      return;
    }
    setTimeout(() => setShowLabel(true), 150);
  }, [openByClick]);

  useEffect(() => {
    setOpenByClick(open);
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
    dad: string,
  ) => {
    return routes?.map((route) => {
      if (route.permission === false) {
        return null;
      }
      const menuItem = (
        <StyledSiderLink
          key={route.key}
          href={route.disabled ? undefined : route.path}
          open={showLabel}
          disabled={route.disabled}
          active={activeMenus.includes(route.key)}
          onClick={
            !route.disabled
              ? () => {
                  route.childrens && toggleSubmenu(route.key);
                  route.childrens && setOpenByClick(true);
                  const actives: string[] | undefined = [];
                  console.log();
                  if (submenu) {
                    actives.push(dad);
                  }
                  if (!route.childrens) {
                    actives.push(route.key);
                    setActiveMenus(actives);
                  }

                  if (route.path) {
                    setOpenByClick(false);
                  }
                }
              : () => {}
          }
          style={{ paddingLeft: `${level * 16}px` }}
          level={level}
          childrens={route.childrens}
        >
          <div style={{ display: "flex", gap: 6 }}>
            {route.icon && route.icon}
            <StyledLabel
              active={activeMenus.includes(route.key)}
              open={showLabel}
              disabled={route.disabled}
            >
              {route.label}{" "}
            </StyledLabel>
          </div>

          {route.childrens && showLabel && (
            <StyledOpenSubmenuIcon open={submenuOpenStates[route.key]}>
              <Icon name="ChevronDownIcon" size="small" />
            </StyledOpenSubmenuIcon>
          )}
        </StyledSiderLink>
      );

      const submenuItems: any =
        route.childrens &&
        renderMenuItems(route.childrens, level + 1, true, route.key);

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
        <div>
          <Logo
            variant={theme === "light" ? "light" : "dark"}
            style={{ paddingLeft: !openByClick ? undefined : 15 }}
          />
          <div style={{ marginTop: 24 }}>
            {routes && renderMenuItems(routes, 1, false, "")}
            {children}
          </div>
        </div>

        {footer && <div style={{ width: "100%" }}>{footer}</div>}
      </StyledSider>
      <StyledOpenMenuButton
        open={openByClick || false}
        onClick={() => {
          setOpenByClick((state) => !state);
          setSubmenuOpenStates({});
        }}
      >
        <StyledOpenMenuIcon open={openByClick || false}>
          <Icon name="ChevronDoubleLeftIcon" />
        </StyledOpenMenuIcon>
      </StyledOpenMenuButton>
    </div>
  );
};

export default Sider;
