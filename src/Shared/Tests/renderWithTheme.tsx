import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../Theme";

export const renderWithTheme = (ui: ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};
