"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const isDark = saved ? saved === "dark" : true; // default dark like rigudev
    setTheme(isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="btn-chunky relative flex items-center justify-center size-9 rounded-lg border text-content-muted hover:text-content transition-colors cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="size-4.5 text-amber-400 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="size-4.5 text-neutral-700 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}
