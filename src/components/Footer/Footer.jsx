import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrap}>
          <Link href="/">Logo</Link>
          <div>
            <Link className={styles.links} href="/">Главная</Link>
            <Link className={styles.links} href="/capers">Каперы</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
