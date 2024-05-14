interface BreakpointsI {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const Breakpoints: BreakpointsI = {
  xs: 576,
  sm: 767,
  md: 991,
  lg: 1199,
  xl: 1600,
};

export const dynamicBreakpoint = (size: "xs" | "sm" | "md" | "lg" | "xl") =>
  `@media screen and (max-width: ${Breakpoints[size]}px)`;

export default Breakpoints;
