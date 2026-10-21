import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Blog Post Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget
            aliquam nunc nisl euismod nunc. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt,
            nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc
          nisl euismod nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl,
          eget aliquam nunc nisl euismod nunc. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt,
          nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc
          ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl
          euismod nunc.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
