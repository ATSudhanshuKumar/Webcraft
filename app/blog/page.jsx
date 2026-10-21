import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { posts } from "./data.js";

export const metadata = {
  title: "Blog",
  description:
    "Practical notes on web design, performance and working with clients.",
};

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      {posts.map((post) => (
        <Link
          href={`/blog/${post.id}`}
          className={styles.container}
          key={post.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt={post.imgAlt}
              width={400}
              height={250}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.description}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
