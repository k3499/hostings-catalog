import styles from './sidebar.module.css';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.menu__list}>
                    <li className={styles.menu__listItem}><a className={`${styles.menu__link}  ${styles.crashLink} ${styles.crashLinkActive}`} href="#"> Краш</a></li>
                    <li className={styles.menu__listItem}><a className={`${styles.menu__link}  ${styles.jackpot}`} href="#"> Джекпот</a></li>
                    <li className={styles.menu__listItem}><a className={`${styles.menu__link}  ${styles.threeColor}`} href="#"> Три цвета</a></li>
                    <li className={styles.menu__listItem}><a className={`${styles.menu__link}  ${styles.fourColor}`} href="#"> Четыре цвета</a></li>
                    <li className={styles.menu__listItem}><a className={`${styles.menu__link}  ${styles.box}`} href="#"> Кейсы</a></li>
                    <li className={styles.menu__listItem}><a className={`${styles.menu__link}  ${styles.slots}`} href="#"> Слоты</a></li>
                    <li className={styles.menu__listItem}><a className={`${styles.menu__link}  ${styles.sportBet}`} href="#"> Ставки на спорт</a></li>
                    <li className={styles.menu__listItem}><a className={`${styles.menu__link}  ${styles.sportBet}`} href="#"> Маркеты</a></li>
                </ul>
            </nav>
        </aside>
    );
}