import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.wrap}>
      <div className="container">
        <h1 className={styles.title}>лучшие каперы в одном месте</h1>
        <p className={styles.subtilte}>Зарабатывай с лучшими каперами на всем СНГ рынке</p>
        <Link className={`${styles.btn} btn`} href="/capers">
          Узнать больше
        </Link>
      </div>
    </header>
  );
}
