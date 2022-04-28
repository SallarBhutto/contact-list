import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import Routes from "./routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./App";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

  expect(getByText(/Home/i)).toBeInTheDocument();
});
