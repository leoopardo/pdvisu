import styled from "styled-components";
import { RowProps } from "./row";

export const StyledRow: any = styled.div<RowProps>(
  ({ gutter, gutterX, gutterY, justify, align, wrap }) => ({
    gap: `${gutterY || gutter || 8}px ${gutterX || gutter || 8}px`,
    justifyContent: justify || "flex-start",
    display: "flex",
    alignItems:
      align === "bottom"
        ? "flex-end"
        : align === "center"
          ? "center"
          : "flex-start",
    height: "fit-content",
    width: "100%",
    flexWrap: wrap === false ? "nowrap" : "wrap",
    maxWidth: "100%",
    flexGrow: "",
  }),
);
