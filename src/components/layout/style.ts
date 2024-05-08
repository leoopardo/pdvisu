import styled from "styled-components";
import { LayoutProps } from "./layout";

export const StyledLayout: any = styled.div<LayoutProps>(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.background.primary,
}));
