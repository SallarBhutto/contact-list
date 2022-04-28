import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import { createTheme, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: green[100],
    },
  },
});

const Providers = (props: any) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>{props.children}</BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default Providers;
