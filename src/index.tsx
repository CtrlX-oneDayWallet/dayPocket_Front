import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/main/Main";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
