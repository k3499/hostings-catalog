import styles from './sidebar.module.css';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__list-item"><a class="menu__link crash-link crash-link-active" href="#"> Краш</a></li>
                    <li class="menu__list-item"><a class="menu__link jackpot" href="#"> Джекпот</a></li>
                    <li class="menu__list-item"><a class="menu__link three-color" href="#"> Три цвета</a></li>
                    <li class="menu__list-item"><a class="menu__link four-color" href="#"> Четыре цвета</a></li>
                    <li class="menu__list-item"><a class="menu__link box" href="#"> Кейсы</a></li>
                    <li class="menu__list-item"><a class="menu__link slots" href="#"> Слоты</a></li>
                    <li class="menu__list-item"><a class="menu__link sport-bet" href="#"> Ставки на спорт</a></li>
                    <li class="menu__list-item"><a class="menu__link sport-bet" href="#"> Маркеты</a></li>
                </ul>
            </nav>
        </aside>
    );
}