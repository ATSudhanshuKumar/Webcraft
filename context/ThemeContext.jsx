"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, initialMode = "dark" }) => {
  const [mode, setMode] = useState(initialMode);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    // saved in a cookie so the server renders the same theme after a refresh
    document.cookie = `theme=${next}; path=/; max-age=31536000`;
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
