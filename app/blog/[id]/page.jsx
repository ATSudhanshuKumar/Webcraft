import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { posts } from "../data.js";

export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

const BlogPost = async ({ params }) => {
  const { id } = await params;
  const post = posts.find((item) => item.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt="Webcraft Team"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span>Webcraft Team</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={post.img}
            alt={post.imgAlt}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <p>{post.intro}</p>

        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
