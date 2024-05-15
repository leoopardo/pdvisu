import styled from "styled-components";
import { TypographyProps } from "./typography";

const getTypographyStyles = (elementType: "h1" | "h2" | "h3" | "h4" | "p") =>
  styled[elementType]<TypographyProps>(({ theme, level, strong, italic }) => ({
    fontSize:
      level === "h1" ? 46 : level === "p" ? 16 : Math.floor(64 / +level[1]),
    fontFamily: ["h1", "h2", "h3", "h4"].includes(level)
      ? "GothamPro"
      : "Inter",
    fontWeight: strong ? 800 : 500,
    fontStyle: italic ? "italic" : "unset",
    color: theme.text.primary,
  }));

// Agora você pode usar a função getTypographyStyles para criar componentes estilizados dinâmicos para diferentes tipos de elementos
export const StyledTypographyHeadingOne = getTypographyStyles("h1");
export const StyledTypographyHeadingTwo = getTypographyStyles("h2");
export const StyledTypographyHeadingThree = getTypographyStyles("h3");
export const StyledTypographyHeadingFour = getTypographyStyles("h4");
export const StyledTypographyParagraph = getTypographyStyles("p");
