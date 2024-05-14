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

export const StyledSider: any = styled.div<SiderProps>(({ theme, open }) => ({
  width: "255px",
  height: "500px",
  backgroundColor: theme.background.elevated,
  animationName: open === true ? "open" : open === false ? "close" : "",
  animationFillMode: "forwards",
  animationDuration: "0.5s",
  padding: 8,
  paddingTop: 16,
  justifyContent: open ? "flex-start" : "center",
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

export const StyledSiderLink: any = styled.a<Route>(
  ({ theme, open, disabled }) => ({
    color: disabled ? theme.text.grey : theme.text.primary,
    backgroundColor: "transparent",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "flex",
    fontSize: "16px",
    whiteSpace: "nowrap",
    gap: 8,
    animationFillMode: "forwards",
    animationDuration: "0.5s",
    padding: 12,
    borderRadius: 10,
    transition: "background-color 0.3s",
    cursor: disabled ? "no-drop" : "pointer",
    justifyContent: open ? "flex-start" : "center",

    "&:hover": {
      backgroundColor: theme.button.outline.background.hover,
    },
  }),
);

export const StyledLabel: any = styled.p<{
  open?: boolean;
  disabled?: boolean;
}>(({ theme, open, disabled }) => ({
  display: open === false ? "none" : "flex",
  color: disabled ? theme.text.grey : theme.text.primary,
  animationName: open !== false ? "unFadeLink" : "",
  animationFillMode: "forwards",
  animationDuration: "1s",

  "@Keyframes unFadeLink": {
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
  },
}));
