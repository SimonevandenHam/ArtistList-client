import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


import "./styles/generalStyle.css";

import App from "./App";
import store from "./store";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#819ca9",
      main: "#546e7a",
      dark: "#29434e",
      contrastText: "#fff"
    },
    secondary: {
      light: "#e2f1f8",
      main: "#b0bec5",
      dark: "#808e95",
      contrastText: "#000"
    }
  }
});

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
