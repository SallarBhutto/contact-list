import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import Routes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material";
import { green, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[500],
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
