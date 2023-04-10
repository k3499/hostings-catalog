import Link from "next/link"
import styles from "./header.module.css"

export default function Header({data, handleMobileMenu}) {
  console.log(handleMobileMenu)
  function handleMobileMenuClick(){
    handleMobileMenu()
  }
  return (
    <header>
      <div className={styles.header__wrapper}>
        <Link 
          className={styles.logo} 
          href="/"
          onClick={handleMobileMenuClick}
        >
          Promokoders
        </Link>
        <a href="#" className={styles.button}>
          Добавить сайт
        </a>
      </div>
    </header>
  )
}
