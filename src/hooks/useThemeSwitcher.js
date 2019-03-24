import { useState, useEffect } from "react";

import lightTheme from "../jss/themes/lightTheme";
import darkTheme from "../jss/themes/darkTheme";

const defaultThemeName = window.localStorage.getItem("theme") || "light";
const themes = {
  light: lightTheme,
  dark: darkTheme
};

export default function useThemeSwitcher() {
  const [themeName, setThemeName] = useState(defaultThemeName);

  useEffect(() => window.localStorage.setItem("theme", themeName));

  function switchTheme() {
    themeName === "light" ? setThemeName("dark") : setThemeName("light");
  }

  return [themes[themeName], switchTheme];
}
