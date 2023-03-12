import styles from "./nav.module.css";
import Link from "next/link";
import logo from "./../../../public/logo.svg";
import Image from 'next/Image';

export default function Nav() {
  return (
    <nav className={`${styles.wrap}`}>
      <div className="container  d-flex a-center j-space-between">
        <div className="">
          <Link href="/">
            <Image className="logo" src={logo} alt="logo" />
          </Link>
        </div>
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
