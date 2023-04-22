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
                <div className={styles.main__banner}>
                    <div className={styles.main__wrapper}>
                        <p className={`${styles.main__title}  ${russo.className}`}>CSFAIL</p>
                        <p className={`${styles.main__secondTitle} ${russo.className}`}>Бонус 0.05$</p>
                        <p className={styles.main__subtitle}>Промокод на баланс на популярном Crash сайте</p>
                        <div className={styles.main__codeWrapper}>
                            <a className={styles.main__link} href="/" target='_blank' >Получить Бонус</a>
                        </div>
                    </div>
                    <div className={styles.main__bannerKerambitBg}></div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.main__banner}>
                    <div className={styles.main__wrapper}>
                        <p className={`${styles.main__title}  ${russo.className}`}>CSFAIL</p>
                        <p className={`${styles.main__secondTitle} ${russo.className}`}>Бонус 0.05$</p>
                        <p className={styles.main__subtitle}>Промокод на баланс на одном из лучших Crash сайтов</p>
                    </div>
                    <div className={styles.main__bannerKerambitBg}></div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.main__banner}>
                    <div className={styles.main__wrapper}>
                        <p className={`${styles.main__title}  ${russo.className}`}>CSFAIL</p>
                        <p className={`${styles.main__secondTitle} ${russo.className}`}>Бонус 0.05$</p>
                        <p className={styles.main__subtitle}>Промокод на баланс на одном из лучших Crash сайтов</p>
                    </div>
                    <div className={styles.main__bannerKerambitBg}></div>
                </div>
                </SwiperSlide>
            </Swiper>


    );
}