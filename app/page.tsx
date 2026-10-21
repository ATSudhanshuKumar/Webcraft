import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Hero from "@/public/hero.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          We design and build fast, accessible websites and apps that help your
          business stand out, from the first sketch to launch day.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
