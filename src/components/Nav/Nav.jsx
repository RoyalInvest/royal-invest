import styles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={`${styles.wrap}`}>
      <div className="container  d-flex a-center j-space-between">
          <Link href='/' className="logo"></Link>
        <div className={styles.linksWrap}>
          <Link href="/" className={styles.links}>
            Главная
          </Link>
          <Link href="/capers" className={styles.links}>
            Каперы
          </Link>
          <a
            target="__blank"
            className={styles.links}
            href="https://t.me/Aditya_Manager_01_original"
          >
            Поддержка
          </a>
          <Link href="/capers" className={`${styles.btnLink} btn`}>
            Заработать
          </Link>
        </div>
      </div>
    </nav>
  );
}
