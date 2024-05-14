interface BreakpointsI {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
declare const Breakpoints: BreakpointsI;
export declare const dynamicBreakpoint: (
  size: "xs" | "sm" | "md" | "lg" | "xl",
) => string;
export default Breakpoints;
