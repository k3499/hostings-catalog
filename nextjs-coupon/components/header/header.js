import styles from "./header.module.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MobileMenu from "../mobileMenu/mobileMenu";
import Menu from "../menu/menu";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  // const spoilerLink = document.querySelector('.spoiler__link');
  // const spoiler = document.querySelector('.spoiler');
  // const swiperBlock = document.querySelector('.slider__wrapper');

  function handleMobileMenuClick(e) {
    e.preventDefault()
    const burgerLink = document.querySelector("#header__burger")
    const mobileMenuBlock = document.querySelector("#mobileMenu")

    if (mobileMenu){
      setMobileMenu(false);

      setTimeout(() => {
        mobileMenuBlock.style.display = 'none';
      }, 250);

      mobileMenuBlock.classList.remove('fadeIn');
      mobileMenuBlock.classList.add('fadeOut');
  }else{
      mobileMenuBlock.style.display = 'block';
      mobileMenuBlock.style.height = 'fit-content';

      setMobileMenu(true);

      setTimeout(() => {
          mobileMenuBlock.classList.remove('fadeOut');
          mobileMenuBlock.classList.add('fadeIn');
      }, 50);

  }
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link className={styles.logo} href="/">
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
            id="header__burger"
          >
            {mobileMenu 
            ? <FontAwesomeIcon
              style={{ fontSize: "32px" }}
              icon={faXmark}
            ></FontAwesomeIcon> 
            : <FontAwesomeIcon 
            icon={faBars} 
            style={{ fontSize: "32px" }} 
          ></FontAwesomeIcon>}
          </a>
        </nav>
      </div>
      <div className={styles.header__mobileMenu} id="mobileMenu">
        <Menu/>
      </div>
    </header>
  )
}
