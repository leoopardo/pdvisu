import styled from "styled-components";
import { Route, SiderProps } from "./sider";
import { dynamicBreakpoint } from "@/utils/breakpoints";

export const StyledOpenMenuButton: any = styled.button<any>(
  ({ theme, open }) => ({
    margin: 8,
    marginTop: 16,
    color: theme.text.primary,
    backgroundColor: "transparent",
    [dynamicBreakpoint("md")]: {
      marginTop: open ? 24 : 16,
    },
  }),
);
export const StyledOpenMenuIcon: any = styled.div<any>(({ theme, open }) => ({
  color: theme.text.primary,
  backgroundColor: "transparent",
  animationFillMode: "forwards",
  animationDuration: "0.3s",
  animationName: open === true ? "menuArrowClose" : "menuArrowOpen",

  "@Keyframes menuArrowOpen": {
    from: { rotate: "0deg" },
    to: { rotate: "180deg" },
  },
  "@Keyframes menuArrowClose": {
    from: { rotate: "180deg" },
    to: { rotate: "0deg" },
  },
}));

export const StyledOpenSubmenuIcon: any = styled.div<any>(
  ({ theme, open }) => ({
    color: theme.text.primary,
    backgroundColor: "transparent",
    animationFillMode: "forwards",
    animationDuration: "0.3s",
    animationName: open === true ? "menuArrowOpen" : "menuArrowClose",

    "@Keyframes subMenuArrowOpen": {
      from: { rotate: "0deg" },
      to: { rotate: "180deg" },
    },
    "@Keyframes subMenuArrowClose": {
      from: { rotate: "180deg" },
      to: { rotate: "0deg" },
    },
  }),
);

export const StyledSider: any = styled.div<SiderProps>(({ theme, open }) => ({
  width: "255px",
  height: "500px",
  backgroundColor: theme.background.elevated,
  animationName: open === true ? "open" : open === false ? "close" : "",
  animationFillMode: "forwards",
  animationDuration: "0.5s",
  padding: 8,
  paddingTop: 16,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [dynamicBreakpoint("md")]: {
    display: !open ? "none" : undefined,
    flexDirection: "row",
    position: "absolute",
    paddingLeft: 24,
  },

  "@keyframes open": {
    from: {
      width: "80px",
    },
    to: {
      width: "255px",
    },
  },
  "@keyframes close": {
    from: {
      width: "255px",
    },
    to: {
      width: "80px",
    },
  },
}));

export const StyledFooter: any = styled.div<any>(() => ({
  width: "100%",

  [dynamicBreakpoint("md")]: {
    position: "absolute",
    bottom: 8,
    left: 8,
    width: "95%",
  },
}));

export const StyledSiderLink: any = styled.a<Route>(
  ({ theme, open, disabled, level, active }) => ({
    color: active
      ? theme.primary["500"]
      : disabled
        ? theme.text.grey
        : theme.text.primary,
    backgroundColor: theme.sider.background[level ? level : 0],
    maxWidth: "105%",
    width:
      level && level > 1
        ? `calc(103% - (${level * 12}px))`
        : "calc(100% + 6px)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "flex",
    fontSize: "16px",
    whiteSpace: "nowrap",
    gap: 8,
    animationFillMode: "forwards",
    animationDuration: "0.5s",
    padding: 12,
    borderRadius: level && level > 1 ? 0 : 10,
    marginLeft: level && level > 1 ? 12 * level : undefined,
    borderLeft:
      level && level > 1 ? `3px solid ${theme.primary[600]}` : undefined,
    transition: "background-color 0.3s, color 0.3s",
    cursor: disabled ? "no-drop" : "pointer",
    justifyContent: open ? "space-between" : "center",

    "&:hover": {
      backgroundColor: theme.primary[50],
    },
  }),
);

export const StyledLabel: any = styled.p<{
  open?: boolean;
  disabled?: boolean;
  active?: boolean;
}>(({ theme, open, disabled, active }) => ({
  display: open === false ? "none" : "flex",
  color: active
    ? theme.primary["500"]
    : disabled
      ? theme.text.grey
      : theme.text.primary,
  animationName: open !== false ? "unFadeLink" : "",
  animationFillMode: "forwards",
  animationDuration: "1s",
  transition: "color 0.3s",
  gap: 6,

  "@Keyframes unFadeLink": {
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
  },
}));
