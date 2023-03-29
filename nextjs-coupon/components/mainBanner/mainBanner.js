import styles from './mainBanner.module.css';

export default function MainBanner() {
    return (
        <div className={styles.main__banner}>
            <div className={styles.main__wrapper}>
                <p className={styles.main__title}>CSFAIL</p>
                <p className={styles.main__secondTitle}>Бонус 0.05$</p>
                <p className={styles.main__subtitle}>Промокод на баланс на одном из лучших Crash сайтов</p>
            </div>
            <div className={styles.main__bannerKerambitBg}></div>
        </div>
    );
}