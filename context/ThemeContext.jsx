"use client";
import { createContext, useContext, useSyncExternalStore } from "react";

const ThemeContext = createContext({ mode: "dark", toggle: () => {} });

// <html class="theme light|dark"> is the source of truth; the inline script in layout.tsx sets it before paint
const subscribe = (callback) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const getSnapshot = () =>
  document.documentElement.classList.contains("light") ? "light" : "dark";

const getServerSnapshot = () => "dark";

export const ThemeProvider = ({ children }) => {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    document.documentElement.className = `theme ${next}`;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
