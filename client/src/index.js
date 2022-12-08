import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//If you wish to customize the theme, you need to use the ThemeProvider component in order to inject a theme. You need to make sure that ThemeProvider is a parent of the components you are trying to customize
import { ThemeProvider } from "@mui/material/styles";
// The CssBaseline component helps to kickstart an elegant, consistent, and simple baseline to build upon.
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
