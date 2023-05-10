import styles from "./menu.module.css";
import Link from "next/link";

export default function Menu({ slug, catList=[] }) {
  return (
    <nav>
    <ul className={styles.menu__list}>
      {catList.map((cat) => {
        return (
        <li key={cat.id} className={styles.menu__listItem}>
          <Link
            className={`${styles.menu__link} ${"menu__link"} ${"menu__" + cat.attributes.slug} ${ slug === cat.attributes.slug ? "menu__" + cat.attributes.slug + "-active" : "" }`}
            href={"/category/" + cat.attributes.slug}
          >
            {" "}
            {cat.attributes.title}
          </Link>
        </li>
        );
      })}
    </ul>
  </nav>
  )
}
