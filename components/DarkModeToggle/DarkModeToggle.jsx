"use client";

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={`${styles.container} ${mode === "light" ? styles.light : ""}`}
      onClick={toggle}
      role="switch"
      aria-checked={mode === "dark"}
      aria-label="Dark mode"
    >
      <span
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { left: "22px" }}
      />
    </button>
  );
};

export default DarkModeToggle;
