import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "About",
  description:
    "Webcraft is a small web design and development studio building fast, accessible websites and apps.",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Webcraft is a small web design and development studio. We help
            founders, creators and local businesses turn a rough idea into a
            website or app that looks great and is easy to use.
            <br />
            <br />
            We work closely with every client, from the first sketch to launch
            day and beyond. Clear communication, honest timelines and careful
            attention to detail are how we earn long-term relationships, not
            just one-off projects.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We cover the whole journey from idea to launch:
            <br />
            <br /> - Creative illustrations and brand visuals
            <br />
            <br /> - Dynamic, fast and accessible websites
            <br />
            <br /> - Mobile-friendly web apps
            <br />
            <br /> - Ongoing care, updates and support
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
