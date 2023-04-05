import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header>
      <div className={styles.header__wrapper}>
        <Link className={styles.logo} href="/">
          Promokoders
        </Link>
        <a href="#" className={styles.button}>
          Добавить сайт
        </a>
      </div>
    </header>
  )
}
