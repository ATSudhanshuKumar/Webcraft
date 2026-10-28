import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const Metadata = {
  title: "Sudhu Dev Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Your name" className={styles.input} />
          <input
            type="text"
            placeholder="Your email"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            placeholder="Tell us about your project"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
