import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Header(globalProps) {
    console.log(globalProps);
    return (
        <header>
            <div className={styles.header__wrapper}>
                <a className={styles.logo} href="/">Promokoders</a>
                <nav className={styles.header__topMenu}>
                    <a href="#" className={styles.button}>Добавить сайт</a>
                    <a href="/" className={styles.header__burger}> <FontAwesomeIcon style={{fontSize:"32px"}} icon={faBars}></FontAwesomeIcon></a>
                </nav>
            </div>
        </header>
    );
}