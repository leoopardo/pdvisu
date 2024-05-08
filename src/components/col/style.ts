import styled, { css } from "styled-components";
import { ColProps } from "./col";
import Breakpoints from "@/utils/breakpoints";

export const StyledCol: any = styled.div<ColProps>`
  height: fit-content;
  width: ${({ xs, sm, md, lg, xl, span, gutter, childCount }) =>
    `calc((100% / 24 * (${span || xl || lg || md || sm || xs})) - (${((gutter || 0) * ((childCount || 0) - 1)) / (childCount || 0)}px))
  `};
  background-color: red;

  /* Adicionando uma media query */
  ${({ xs, span, gutter, childCount }) =>
    xs &&
    css`
      @media screen and (max-width: ${Breakpoints.xs}px) {
        width: calc(
          (100% / 24 * ${xs || span}) -
            (${((gutter || 0) * ((childCount || 0) - 1)) / (childCount || 0)}px)
        );
      }
    `}

  ${({ xs, sm, span, gutter, childCount }) =>
    sm &&
    css`
      @media screen and (min-width: ${Breakpoints.sm}px) {
        width: calc(
          (100% / 24 * ${sm || xs || span}) -
            (${((gutter || 0) * ((childCount || 0) - 1)) / (childCount || 0)}px)
        );
      }
    `}

  ${({ xs, sm, md, span, gutter, childCount }) =>
    md &&
    css`
      @media screen and (min-width: ${Breakpoints.md}px) {
        width: calc(
          (100% / 24 * ${md || sm || xs || span}) -
            (${((gutter || 0) * ((childCount || 0) - 1)) / (childCount || 0)}px)
        );
      }
    `}

  ${({ xs, sm, md, lg, span, gutter, childCount }) =>
    lg &&
    css`
      @media screen and (min-width: ${Breakpoints.lg}px) {
        width: calc(
          (100% / 24 * ${lg || md || sm || xs || span}) -
            (${((gutter || 0) * ((childCount || 0) - 1)) / (childCount || 0)}px)
        );
      }
    `}

  ${({ xs, sm, md, lg, xl, span, gutter, childCount }) =>
    xl &&
    css`
      @media screen and (min-width: ${Breakpoints.xl}px) {
        width: calc(
          (100% / 24 * ${xl || lg || md || sm || xs || span}) -
            (${((gutter || 0) * ((childCount || 0) - 1)) / (childCount || 0)}px)
        );
      }
    `} 
    
    ${({ xs, sm, md, lg, xl, xxl, span, gutter, childCount }) =>
    xxl &&
    css`
      @media screen and (min-width: ${Breakpoints.xl}px) {
        width: calc(
          (100% / 24 * ${xxl || xl || lg || md || sm || xs || span}) -
            (${((gutter || 0) * ((childCount || 0) - 1)) / (childCount || 0)}px)
        );
      }
    `}
`;
