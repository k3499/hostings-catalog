import styles from './mainBanner.module.css';
import { Russo_One } from 'next/font/google';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";

const russo = Russo_One({ subsets: ['latin', 'cyrillic'], weight: ['400'], });

export default function MainBanner() {
    const swiperParameters = {
        modules: [A11y, Autoplay],
        loop: true,
        autoplay: { 
            enabled: true,
            delay: 6000, 
            pauseOnMouseEnter: true,
        },
        lazy: { enabled: true },
    };
    return (
        
            <Swiper {...swiperParameters}>
                <SwiperSlide>
                <div className={styles.banner}>
                    <div className={styles.wrapper}>
                        <p className={`${styles.title}  ${russo.className}`}>CSFAIL</p>
                        <p className={`${styles.secondTitle} ${russo.className}`}>Бонус 0.05$</p>
                        <p className={styles.subtitle}>Промокод на баланс на популярном Crash сайте</p>
                        <div className={styles.codeWrapper}>
                            <a className={styles.link} href="/" target='_blank' >Получить Бонус</a>
                        </div>
                    </div>
                    <div className={`${styles.bannerImg} ${styles.bannerKerambitBg}`}></div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.banner}>
                    <div className={styles.wrapper}>
                        <p className={`${styles.title}  ${russo.className}`}>CSFAIL</p>
                        <p className={`${styles.secondTitle} ${russo.className}`}>Бонус 0.05$</p>
                        <p className={styles.subtitle}>Промокод на баланс на одном из лучших Crash сайтов</p>
                        <div className={styles.codeWrapper}>
                            <a className={styles.link} href="/" target='_blank' >Получить Бонус</a>
                        </div>
                    </div>
                    <div className={`${styles.bannerImg} ${styles.bannerAk}`}></div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.banner}>
                    <div className={styles.wrapper}>
                        <p className={`${styles.title}  ${russo.className}`}>CSFAIL</p>
                        <p className={`${styles.secondTitle} ${russo.className}`}>Бонус 0.05$</p>
                        <p className={styles.subtitle}>Промокод на баланс на одном из лучших Crash сайтов</p>
                    </div>
                    <div className={styles.bannerKerambitBg}></div>
                </div>
                </SwiperSlide>
            </Swiper>


    );
}