import Link from 'next/link'
import styles from "./benefits.module.css";

export default function Benefits() {
    const benefits = [
        {
            num: '1',
            subtitle: 'Мы вручную проверяем всех каперов и трейдеров, при этом делая вклады и оплачивая все последующие затраты, чтобы выявить лучших.'
        },
        {
            num: '2',
            subtitle: 'Наши специалисты 24/7 отслеживают торговлю каждого трейдера, и ставки на спорт от капперов, подводя анализы и выявляя мошенников. '
        },
        {
            num: '3',
            subtitle: 'RoyalInvest помогает разобраться в ставках на спорт. Оценивает прогнозистов и аналитиков помогая игрокам из России и ближнего зарубежья не ошибиться с выбором каппера. '
        },
        {
            num: '4',
            subtitle: 'Любой желающий может повлиять на данный рейтинг, оставив жалобу на того или иного аналитика, если он был замечен и уличен в мошеннической деятельности.'
        },
    ]

  return (
    <section className={`container ${styles.container}`}>
      <h2 className="title">Наши преимущества</h2>
      <div className={styles.wrap}>
        {benefits.map((item, key) => (
            <div key={key} className={styles.block}>
                <p className={styles.num}>{item.num}</p>
                <p className="subtitle">{item.subtitle}</p>
            </div>
        ))}
      </div>
      <Link href='/capers' className={`btn ${styles.btn}`}>Начать зарабатывать</Link>
    </section>
  );
}
