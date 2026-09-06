import { createContext } from "react";

export type ThemeContextValue = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  isDark: boolean;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
