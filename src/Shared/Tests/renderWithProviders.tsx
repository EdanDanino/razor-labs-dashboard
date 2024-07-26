import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import insightReducer from "../Store/insightsSlice.ts";
import { ReactElement } from "react";
import { theme } from "../Theme";
import { ThemeProvider } from "styled-components";

const store = configureStore({
  reducer: { insights: insightReducer },
});

export const renderWithProviders = (ui: ReactElement) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </Provider>
  );
};
