import { ThemeProvider } from "styled-components";
import { ThemeProvider as TailwindThemeProvider } from "../../themeProvider";
import { GlobalStyle } from "../../global-styles";
import { useTheme } from "../../themeProvider";
import Dark from "../../theme/dark";
import { ReactChild, useEffect } from "react";

export const ProvideTheme = ({
  children,
  t,
}: {
  children: ReactChild;
  t?: "dark" | "light";
}) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(t || "light");
  }, [t]);

  return (
    <TailwindThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
      <ThemeProvider theme={theme === "dark" ? Dark : Dark}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </TailwindThemeProvider>
  );
};
