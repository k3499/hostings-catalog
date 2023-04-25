import Image from 'next/image'
import { Russo_One } from 'next/font/google';
import styles from './catHead.module.css'

const russo = Russo_One({ subsets: ['latin', 'cyrillic'], weight: ['400'], });

export default function CatHead({title}) {
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.wrapper}>
                <p className={`${styles.title}  ${russo.className}`}>Ставки на спорт</p>
                <h1 className={`${styles.secondTitle} ${russo.className}`}>Лучшие краш сайты КС ГО с промокодами и бонусами</h1>
            </div>
            <div className={styles.bannerImg}></div>
        </div>
    );
}