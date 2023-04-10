import styles from "./header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function Header({ data, handleMobileMenu }) {
  //console.log(handleMobileMenu)
  function handleMobileMenuClick(e) {
    //e.preventDefault();
    handleMobileMenu()
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link className={styles.logo} href="/" onClick={handleMobileMenuClick}>
          Promokoders
        </Link>
        <nav className={styles.header__topMenu}>
          <a href="#" className={styles.button}>
            Добавить сайт
          </a>
          <a
            onClick={handleMobileMenuClick}
            href="/"
            className={styles.header__burger}
          >
            {" "}
            <FontAwesomeIcon
              style={{ fontSize: "32px" }}
              icon={faBars}
            ></FontAwesomeIcon>
          </a>
        </nav>
      </div>
    </header>
  )
}
