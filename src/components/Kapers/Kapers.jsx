import styles from "./kapers.module.css";
import Image from "next/image";
import LitvinImg from "./../../../public/Kapers/litvin.jpg";
import AlexImg from "./../../../public/Kapers/leonov.jpg";
import SobolevImg from "./../../../public/Kapers/sobolev.jpg";
import KomandaImg from "./../../../public/Kapers/komanda.jpg";
import SergeyImg from "./../../../public/Kapers/sergey.jpg";
import KaringImg from "./../../../public/Kapers/karina.jpg";
import OlgaImg from "./../../../public/Kapers/olga.jpg";
import CryptoImg from "./../../../public/Kapers/crypto.jpg";

export default function Kapers() {
  const kapers = [
    {
      img: LitvinImg,
      title: "ЛИТВИН | INVEST💵",
      link: "https://t.me/litvin_inv",
    },
    {
      img: AlexImg,
      title: "Alexander Leonov",
      link: "https://t.me/alexandtleonov",
    },
    {
      img: SobolevImg,
      title: "Саша Соболев",
      link: "https://t.me/sashasobolew",
    },
    {
      img: KomandaImg,
      title: "Команда Айжан",
      link: "https://t.me/komandaaizhann",
    },
    {
      img: SergeyImg,
      title: "🪐🪐🪐👨‍💻🔥",
      link: "https://t.me/Sergeykuznetcow",
    },
    {
      img: KaringImg,
      title: "Карина | Халяль🕍💡",
      link: "https://t.me/karina_khalyal",
    },
    {
      img: OlgaImg,
      title: "Ольга Гогаладзе | Время денег",
      link: "https://t.me/Officiall_Gogaladze1",
    },
    {
      img: CryptoImg,
      title: "Crypto📈",
      link: "https://t.me/nikola34535",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
      <h2 className="title">Список каперов</h2>
        <div className={styles.wrap}>
          {kapers.map((item, key) => (
            <div item={item} className={styles.block}>
              <div className="d-flex a-center">
                <Image
                  src={item.img}
                  className={styles.blockImg}
                  alt="KaperImg"
                />
                <h3 className={styles.blockTitle}>{item.title}</h3>
              </div>

              <a className={`btn ${styles.btn}`} href={item.link}>
                Подробнее
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
