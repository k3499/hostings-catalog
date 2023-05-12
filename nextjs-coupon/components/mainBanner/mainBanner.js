import styles from './mainBanner.module.css';
import { Russo_One } from 'next/font/google';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";

const russo = Russo_One({ subsets: ['latin', 'cyrillic'], weight: ['400'], });

export default function MainBanner({ mainSlider }) {
    console.log(mainSlider)
    const swiperParameters = {
        modules: [A11y, Autoplay],
        loop: true,
        autoplay: { 
            enabled: true,
            delay: 6000, 
            pauseOnMouseEnter: true,
        }
    };
    return (
        
            <Swiper {...swiperParameters}>
                {mainSlider.map((element) => {
                    return (
                    <SwiperSlide key={element.id}>
                        <div className={styles.banner}>
                            <div className={styles.wrapper}>
                                <p className={`${styles.title}  ${russo.className} `}>{element.attributes.title}</p>
                                {element.attributes.bonus 
                                ?<p className={`${styles.secondTitle} ${russo.className}`}>{element.attributes.bonus}</p>
                                : ""
                                }
                                <p className={styles.subtitle}>{element.attributes.description}</p>
                                <div className={styles.codeWrapper}>
                                    <a className={styles.link} href={element.attributes.link} target='_blank' >Получить Бонус</a>
                                </div>
                            </div>
                            <div className={`${styles.bannerImg} ${styles.bannerKerambitBg}`}></div>
                        </div>
                    </SwiperSlide>
                    );
                })}
            </Swiper>
    );
}