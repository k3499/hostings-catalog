import styles from "./header.module.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import MobileMenu from "../mobileMenu/mobileMenu"

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  // const spoilerLink = document.querySelector('.spoiler__link');
  // const spoiler = document.querySelector('.spoiler');
  // const swiperBlock = document.querySelector('.slider__wrapper');

  function handleMobileMenuClick(e) {
    e.preventDefault()
    const burgerLink = document.querySelector("#header__burger")
    const mobileMenuBlock = document.querySelector("#mobileMenu")

    if (mobileMenu) {
      //mobileMenuBlock.style.display = "none"
      setMobileMenu(false)
      console.log(mobileMenu)
      setTimeout(() => {
        mobileMenuBlock.style.display = "none"
      }, 550)
      //spoilerStatus = 0;
      mobileMenuBlock.classList.remove("fadeIn")
      mobileMenuBlock.classList.add("fadeOut")
    } else {
      mobileMenuBlock.style.display = "block"
      setMobileMenu(true)
      console.log(mobileMenu)
      setTimeout(() => {
        mobileMenuBlock.classList.remove("fadeOut")
        mobileMenuBlock.classList.add("fadeIn")
      }, 50)
      mobileMenuBlock.style.height = "fit-content"
      //spoilerStatus = 1;
    }
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link className={styles.logo} href="/" onClick={handleMobileMenuClick}>
          PrKDR
        </Link>
        <nav className={styles.header__topMenu}>
          <a href="#" className={styles.button}>
            Добавить сайт
          </a>
          <a
            onClick={handleMobileMenuClick}
            href="/"
            className={styles.header__burger}
            id="header__burger"
          >
            {" "}
            <FontAwesomeIcon
              style={{ fontSize: "32px" }}
              icon={faBars}
            ></FontAwesomeIcon>
          </a>
        </nav>
      </div>
      <div className={styles.header__mobileMenu} id="mobileMenu">
        <div className={styles.header__mobileMenuWrapper}>aafafaf</div>
      </div>
    </header>
  )
}
