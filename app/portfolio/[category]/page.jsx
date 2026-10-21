import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items, categories } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

export function generateStaticParams() {
  return Object.keys(items).map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const info = categories[category];

  return info ? { title: info.title, description: info.desc } : {};
}

const Category = async ({ params }) => {
  const { category } = await params;
  const data = getData(category);
  const info = categories[category];
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{info.title}</h1>
      <p className={styles.intro}>{info.desc}</p>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="Start a similar project" url="/contact" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;