import styles from './header.module.css';

export default function Header() {
    return (
        <header>
            <div className={styles.header__wrapper}>
                <a className={styles.logo} href="/">Promokoders</a>
                <a href="#" className={styles.button}>Добавить сайт</a>
            </div>
        </header>
    );
}