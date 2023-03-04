import styles from "./faq.module.css";
import { Collapse, Text } from "@nextui-org/react";

export default function Faq() {
  const collapse = [
    {
      title: "Что делать, если капер обманул?",
      text: "Несмотря на то, что такого еще никогда не было, вы в любой момент можете обратиться в поддержку.",
    },
    {
      title: "Почему у вас не много каперов?",
      text: "Все наши каперы проходят тщательную проверку нашей командой. Сюда попадают лишь на 100% проверены каперы.",
    },
    {
      title: "Какой капер из предложенных лучше выбрать?",
      text: "Абсолютно все каперы хороши, выбирайте того, кто вам больше импонирует.",
    },
    {
      title: "Почему я должен верить вам?",
      text: "Не обязательно верить именно нам. Лучше верьте отзывам реальных пользователей на нашем сайте.",
    },
  ];

  return (
    <section className="container">
      <h2 className="title">Faq</h2>
      <Collapse.Group className={styles.wrap}>
        {collapse.map((item, key) => (
          <Collapse key={key} title={item.title}>
            <Text>
              {item.text}
            </Text>
          </Collapse>
        ))}
      </Collapse.Group>
    </section>
  );
}
