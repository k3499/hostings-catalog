import styles from "./menu.module.css";
import Link from "next/link";

export default function Menu({ slug, catList=[] }) {
  const menuList = ["jackpot", "crash"];
  console.log(catList)
  return (
    <nav>
    <ul className={styles.menu__list}>

      {catList.map((cat) => {
        return (
        <li key={cat.id} className={styles.menu__listItem}>
          <Link
            className={`${styles.menu__link}  ${"menu__" + cat.attributes.slug} ${"menu__" + cat.attributes.slug}${ slug === cat.attributes.slug ? "Active" : "" }`}
            href="/category/jackpot"
          >
            {" "}
            {cat.attributes.title}
          </Link>
        </li>
        );
      })}


      <li className={styles.menu__listItem}>
        <Link
          className={`${styles.menu__link}  ${styles.crashLink} ${styles.crashLinkActive}`}
          href="/category/jackpot"
        >
          {" "}
          Краш
        </Link>
      </li>
      <li className={styles.menu__listItem}>
        <a className={`${styles.menu__link}  ${styles.jackpot}`} href="/category/jackpot">
          {" "}
          Джекпот
        </a>
      </li>
      <li className={styles.menu__listItem}>
        <a
          className={`${styles.menu__link}  ${styles.threeColor}`}
          href="#"
        >
          {" "}
          Три цвета
        </a>
      </li>
      <li className={styles.menu__listItem}>
        <a className={`${styles.menu__link}  ${styles.fourColor}`} href="#">
          {" "}
          Четыре цвета
        </a>
      </li>
      <li className={styles.menu__listItem}>
        <a className={`${styles.menu__link}  ${styles.box}`} href="#">
          {" "}
          Кейсы
        </a>
      </li>
      <li className={styles.menu__listItem}>
        <a className={`${styles.menu__link}  ${styles.slots}`} href="#">
          {" "}
          Слоты
        </a>
      </li>
      <li className={styles.menu__listItem}>
        <a className={`${styles.menu__link}  ${styles.sportBet}`} href="#">
          {" "}
          Ставки на спорт
        </a>
      </li>
      <li className={styles.menu__listItem}>
        <a className={`${styles.menu__link}  ${styles.sportBet}`} href="#">
          {" "}
          Маркеты
        </a>
      </li>
    </ul>
  </nav>
  )
}
