"use client";

import { createContext, useState, useSyncExternalStore } from "react";

export const ThemeContext = createContext({ mode: "dark", toggle: () => {} });

const STORAGE_KEY = "theme";

// used only when localStorage is blocked (e.g. some private windows)
let memoryMode = null;

// the saved theme lives in localStorage; React is told when it changes
const subscribe = (callback) => {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
};

const getSnapshot = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {}

  return memoryMode ?? "dark";
};

const getServerSnapshot = () => "dark";

export const ThemeProvider = ({ children }) => {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // no fade until the user toggles, so a saved theme does not fade in on load
  const [animated, setAnimated] = useState(false);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";

    memoryMode = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}

    setAnimated(true);
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}${animated ? " animated" : ""}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
