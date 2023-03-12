import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/Image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrap}>
            <Link href='/' className="logo"></Link>
          <div>
            <Link className={styles.links} href="/">
              Главная
            </Link>
            <Link className={styles.links} href="/capers">
              Каперы
            </Link>
            <a
              target="__blank"
              className={styles.links}
              href="https://t.me/Aditya_Manager_01_original"
            >
              Поддержка
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
