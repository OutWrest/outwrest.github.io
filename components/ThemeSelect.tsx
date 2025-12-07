import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "react-feather";
import { cx } from "@/lib/utils";

export const ThemeSelect = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-8 h-8" /> // Placeholder to prevent layout shift
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cx(
        "p-2 rounded-md transition-all duration-200 ease-in-out",
        "hover:bg-gray-200 dark:hover:bg-gray-800",
        "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
        "focus:outline-none focus:ring-2 focus:ring-pink-500"
      )}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};
