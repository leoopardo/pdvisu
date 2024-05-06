import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../global-styles";
import { useTheme } from "../../themeProvider";
import dark from "../../dark.json";

export const ProvideTheme = ({ children }: any) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === "dark" ? dark : dark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
