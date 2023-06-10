import { usePageColorMode } from "@hooks/usePageColorMode";
import { GlobalStyle } from "@styles/globals";
import { myTheme } from "@styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export default function StyledThemeWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { darkMode } = usePageColorMode();

  return (
    <ThemeProvider theme={myTheme({ darkMode: darkMode })}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
