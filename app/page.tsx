import { getPages } from "@/sanity/sanity-utils";
import styles from "./page.module.css";

export default async function Home() {
  const data = await getPages();
  console.log(data);
  return (
    <div className={styles.page}>
      <main className={styles.container}></main>
    </div>
  );
}
