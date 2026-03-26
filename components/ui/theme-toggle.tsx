"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group border border-gray-200 dark:border-gray-700"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 h-5 w-5 text-yellow-500 transition-all duration-300 ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
            }`}
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 text-blue-400 transition-all duration-300 ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
            }`}
        />
      </div>
      <span className="sr-only">
        {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      </span>
    </button>
  );
}
