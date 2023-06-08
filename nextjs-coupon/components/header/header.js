import styles from "./header.module.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Menu from "../menu/menu";

export default function Header({ slug, catList }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  //клик по пункту меню
  function handleMobileMenuChose(){
    const mobileMenuBlock = document.querySelector("#mobileMenu");
    
      setMobileMenu(false);
      mobileMenuBlock.style.display = 'none';
      mobileMenuBlock.classList.remove(styles.fadeIn);
      mobileMenuBlock.classList.add(styles.fadeOut);
  }

  //клик по открыть меню
  function handleMobileMenuClick(e) {
    e.preventDefault()
    const mobileMenuBlock = document.querySelector("#mobileMenu");
    
    if (mobileMenu){
      setMobileMenu(false);

      setTimeout(() => {
        mobileMenuBlock.style.display = 'none';
      }, 250);

      mobileMenuBlock.classList.remove(styles.fadeIn);
      mobileMenuBlock.classList.add(styles.fadeOut);
  }else{
      mobileMenuBlock.style.display = 'block';
      mobileMenuBlock.style.height = 'fit-content';

      setMobileMenu(true);

      setTimeout(() => {
          mobileMenuBlock.classList.remove(styles.fadeOut);
          mobileMenuBlock.classList.add(styles.fadeIn);
      }, 50);

  }
  }
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href="/">
          Be Skin
        </Link>
        <nav className={styles.topMenu}>
          <Link className={styles.button} href="/form-owner">
            Добавить сайт
          </Link>
          <a
            onClick={handleMobileMenuClick}
            href="/"
            className={styles.burger}
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
      <div className={styles.mobileMenu} id="mobileMenu">
        <Menu slug={slug} catList={catList} handleMobileMenuChose={handleMobileMenuChose}/>
      </div>
    </header>
  )
}
