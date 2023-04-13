import styles from "./header.module.css";
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MobileMenu from "../mobileMenu/mobileMenu";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  // const spoilerLink = document.querySelector('.spoiler__link');
  // const spoiler = document.querySelector('.spoiler');
  // const swiperBlock = document.querySelector('.slider__wrapper');

  function handleMobileMenuClick(e) {
    e.preventDefault();
    const burgerLink = document.querySelector('#header__burger');
    const mobileMenuBlock = document.querySelector('#mobileMenu');

    if (mobileMenu){
      mobileMenuBlock.style.display = 'none';
      setMobileMenu(false);
      console.log(mobileMenu)
    //   setTimeout(() => {
    //     swiperBlock.style.display = 'block'
    //     spoiler.style.display = 'none'
    //     slider.style.height = '33px';
    // }, 550);
    // spoilerStatus = 0;
    // spoiler.classList.remove('fadeIn');
    // spoiler.classList.add('fadeOut');
  }else{
    mobileMenuBlock.style.display = 'block';
    setMobileMenu(true);
    console.log(mobileMenu)
    // swiperBlock.style.display = 'none';
    //   spoiler.style.display = 'block';
    //   setTimeout(() => {
    //       slider.style.height = 'auto';
    //       spoiler.classList.remove('fadeOut');
    //       spoiler.classList.add('fadeIn');
    //   }, 50);
    //   spoiler.style.height = 'fit-content';
    //   spoilerStatus = 1;
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
            {" "}
            <FontAwesomeIcon
              style={{ fontSize: "32px" }}
              icon={faBars}
            ></FontAwesomeIcon>
          </a>
        </nav>
      </div>
      <div className={styles.header__mobileMenu} id="mobileMenu">222</div>
    </header>
  )
}
