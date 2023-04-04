import styles from './singleHead.module.css';
import utils from '../../styles/utils.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import Image from 'next/image'
import scrin from '/public/images/csgofail.jpg';
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";

export default function SingleHead() {
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
        <div className={styles.singleHead}>
            <div className={styles.singleHead__swiper}>
                <Swiper {...swiperParameters}>
                    <SwiperSlide>
                    <Image
                        className={styles.swiperSlideImage}
                        loading="lazy"
                        src={scrin}
                        placeholder="blur"
                        fill="true"
                    />
                    </SwiperSlide>                    
                    <SwiperSlide>
                        <div className={styles.main__banner}>
                            <div className={styles.main__wrapper}>
                                <p className={styles.main__subtitle}>Промокод на баланс на одном из лучших Crash сайтов</p>
                                <div className={styles.main__codeWrapper}>
                                    <a className={styles.main__link} href="/" target='_blank' >Получить Бонус</a>
                                </div>
                            </div>
                            <div className={styles.main__bannerKerambitBg}></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={styles.singleHead__codeWrap}>
                <div className={styles.singleHead__code}>DATAGAME
                    <button className={styles.singleHead__promoCopy}><FontAwesomeIcon style={{fontSize:"20px"}} icon={faCopy}></FontAwesomeIcon></button>
                </div>
                <p className={styles.singleHead__money}>$0.50</p>
                <a href="" target='_blank' className={`${styles.singleHead__link} ${utils.button}`}>Получить бонус</a>
            </div>
        </div>
    );
}