import { useEffect, useState } from "react";

// Define the possible theme values
type Theme = "light" | "dark";

export function useTheme() {
  // Try to get the theme from localStorage or default to 'light'
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      // If no theme is stored, use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  // Update the HTML class and localStorage when theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Setter that also updates state
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return { theme, setTheme };
}
