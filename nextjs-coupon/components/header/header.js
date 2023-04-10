import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

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