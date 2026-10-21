import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio",
  description: "Browse our illustrations, websites and applications.",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <p className={styles.intro}>
        A selection of recent illustrations, websites and applications. Pick a
        gallery to see the ideas behind each project.
      </p>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;