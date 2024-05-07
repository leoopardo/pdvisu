import { ThemeProvider } from "styled-components";
import { ThemeProvider as TailwindThemeProvider } from "../../themeProvider";
import { GlobalStyle } from "../../global-styles";
import { useTheme } from "../../themeProvider";
import Dark from "../../theme/dark";
import { ReactChild, useEffect, useState } from "react";

export const ProvideTheme = ({
  children,
  t,
}: {
  children: ReactChild;
  t?: "dark" | "light";
}) => {
  const { theme, setTheme } = useTheme();
  const [styledTheme] = useState(Dark);

  useEffect(() => {
    setTheme(t || "light");
  }, [t]);

  return (
    <TailwindThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </TailwindThemeProvider>
  );
};
