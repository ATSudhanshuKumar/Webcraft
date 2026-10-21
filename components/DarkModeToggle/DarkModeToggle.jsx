"use client";

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={`${styles.container} ${theme === "light" ? styles.light : ""}`}
      onClick={toggle}
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Dark mode"
    >
      <span
        className={styles.ball}
        style={theme === "light" ? { left: "2px" } : { left: "22px" }}
      />
    </button>
  );
};

export default DarkModeToggle;
