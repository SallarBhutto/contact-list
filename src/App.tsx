import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
