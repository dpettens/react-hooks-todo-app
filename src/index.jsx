import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";

import App from "./components/App";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

function Index() {
  const [theme, switchTheme] = useThemeSwitcher();

  return (
    <ThemeProvider theme={theme}>
      <App switchTheme={switchTheme} />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
