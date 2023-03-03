import styles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={`${styles.wrap}`}>
      <div className="container  d-flex a-center j-space-between">
        <div className="">
          <Link href="/">Logo</Link>
        </div>
        <div className={styles.linksWrap}>
          <Link href="/" className={styles.links}>
            Главная
          </Link>
          <Link href="/capers" className={styles.links}>
            Каперы
          </Link>
          <Link href="/capers" className={`${styles.btnLink} btn`}>
            Заработать
          </Link>
        </div>
      </div>
    </nav>
  );
}
