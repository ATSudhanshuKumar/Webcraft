import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© {new Date().getFullYear()} Webcraft by Sudhanshu. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" alt="Facebook" width={15} height={15} className={styles.icon} />
        <Image src="/2.png" alt="Instagram" width={15} height={15} className={styles.icon} />
        <Image src="/3.png" alt="Twitter" width={15} height={15} className={styles.icon} />
        <Image src="/4.png" alt="LinkedIn" width={15} height={15} className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
