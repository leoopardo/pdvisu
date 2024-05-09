import styled from "styled-components";
import { Route, SiderProps } from "./sider";

export const StyledSider: any = styled.div<SiderProps>(({ theme, open }) => ({
  width: "255px",
  height: "500px",
  backgroundColor: theme.background.primary,
  animationName: open === true ? "open" : open === false ? "close" : "",
  animationFillMode: "forwards",
  animationDuration: "0.5s",
  borderRight: `2px solid ${theme.outline}`,
  padding: 8,
  paddingTop: 16,
  justifyContent: open ? "flex-start" : "center",

  "@keyframes open": {
    from: {
      width: "80px",
    },
    to: {
      width: "220px",
    },
  },
  "@keyframes close": {
    from: {
      width: "220px",
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
    fontSize: "18px",
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
