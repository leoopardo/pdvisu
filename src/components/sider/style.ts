import styled from "styled-components";
import { SiderProps } from "./sider";

export const StyledSider: any = styled.div<SiderProps>(({ theme, open }) => ({
  width: "255px",
  height: "300px",
  backgroundColor: theme.background.primary,
  animationName: open === true ? "open" : open === false ? "close" : "",
  animationFillMode: "forwards",
  animationDuration: "0.5s",
  borderRight: `2px solid ${theme.outline}`,
  padding: 16,

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
