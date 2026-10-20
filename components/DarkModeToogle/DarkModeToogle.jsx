"use client";
import { useTheme } from "@/context/ThemeContext";
import styles from "./darkModeToogle.module.css";

const DarkModeToggle = () => {
  const { toggle } = useTheme();

  return (
    <button
      type="button"
      className={styles.container}
      onClick={toggle}
      aria-label="Toggle dark mode"
    >
      <span className={styles.ball}>
        <svg className={styles.moon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        <svg
          className={styles.sun}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </span>
    </button>
  );
};

export default DarkModeToggle;
