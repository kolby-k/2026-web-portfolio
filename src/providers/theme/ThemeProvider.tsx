import { useState, type ReactNode } from "react";
import { ThemeContext, type ThemeContextValue } from "./ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};

// Set theme on mount based on localStorage and preferences
// - return saved theme, isDark, and toggleTheme
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [savedTheme, setSavedTheme] = useState<"dark" | "light">(
    getInitalTheme,
  );

  // flip theme from current state and update localStorage
  function toggleTheme() {
    const newTheme = savedTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = newTheme;
    window.localStorage.setItem("theme", newTheme);
    setSavedTheme(newTheme);
  }

  const value: ThemeContextValue = {
    theme: savedTheme,
    toggleTheme,
    isDark: savedTheme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function getInitalTheme(): "dark" | "light" {
  // first check local storage
  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "dark" || storedTheme === "light") return storedTheme;

  // fallback to preferences
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
