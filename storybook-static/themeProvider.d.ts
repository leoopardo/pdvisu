/// <reference types="react" />
type Theme = "dark" | "light";
type ThemeProviderProps = {
  children: React.ReactNode;
};
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
export declare function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeProviderState;
export {};
