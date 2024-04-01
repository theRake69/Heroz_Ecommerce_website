import styles from "./page.module.css";
import Marketing from "@/components/Marketing/Marketing";

export default function Home() {
  return (
    <main className={styles.main}>
      <Marketing />
    </main>
  );
}
