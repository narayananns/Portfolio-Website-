import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function apply(theme) {
  const isDark =
    theme === "dark" || (theme === "system" && darkQuery.matches);
  document.documentElement.classList.toggle("dark", isDark);
}

export function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(STORAGE_KEY) || "system"
  );

  useEffect(() => {
    apply(theme);
    if (theme === "system") {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  // Follow the OS only while the visitor has not picked a theme themselves.
  useEffect(() => {
    const onChange = () => {
      if (!localStorage.getItem(STORAGE_KEY)) apply("system");
    };
    darkQuery.addEventListener("change", onChange);
    return () => darkQuery.removeEventListener("change", onChange);
  }, []);

  const isDark =
    theme === "dark" || (theme === "system" && darkQuery.matches);

  const toggle = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark]);

  return { theme, setTheme, isDark, toggle };
}
