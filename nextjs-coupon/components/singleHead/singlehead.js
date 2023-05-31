import { useRef, useState } from 'react';
import styles from "./singleHead.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay } from "swiper"
import { urlBuilder} from "../../utils/utils"
import Image from "next/image"
import "swiper/css"
import "swiper/css/a11y"
import "swiper/css/autoplay"

export default function SingleHead({
  slides,
  logo,
  siteName,
  promocode,
  money,
  link,
}) {
  const swiperParameters = {
    modules: [A11y, Autoplay],
    loop: true,
    autoplay: {
      enabled: true,
      delay: 6000,
      pauseOnMouseEnter: true,
    },
    lazy: { enabled: true },
  }

  const inputRef = useRef(null);
  const [copyingStatus, setCopyingStatus] = useState(false)

  const copyToClipboard = (evt) => {
    let textToCopy = inputRef.current.value;
    navigator.clipboard.writeText(textToCopy)
    .then(() => {
        console.log('Текст скопирован в буфер обмена:', textToCopy);
        setCopyingStatus(true);
        setTimeout(() => {
            setCopyingStatus(false);
          }, 600);        
    })
    .catch((err) => {
        console.error('Ошибка при копировании текста в буфер обмена:', err);
    });
};
  return (
    <div className={styles.singleHead}>
      <div className={styles.swiper}>
        <Swiper {...swiperParameters}>
          {slides.data.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <Image
                  className={styles.swiperSlideImage}
                  loader={() => urlBuilder(slide)}
                  src={urlBuilder(slide)}
                  alt={slide.attributes.alternativeText}
                  title={slide.attributes.caption ? slide.attributes.caption: ""}
                  fill
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className={styles.codeWrap}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            loader={() => urlBuilder(logo.data)}
            src={urlBuilder(logo.data)}
            alt={siteName + " промокод"}
            fill
          />
        </div>
        {promocode ? (
          <div className={styles.code}>
            <input className={styles.promoCode} type="text" value={promocode} readOnly ref={inputRef}/>
            <button className={styles.promoCopy} onClick={copyToClipboard}>
              {copyingStatus 
                ?<FontAwesomeIcon style={{fontSize:"20px"}} icon={faCheck}></FontAwesomeIcon>
                :<FontAwesomeIcon style={{fontSize:"20px"}} icon={faCopy}></FontAwesomeIcon>
              }
            </button>
          </div>
        ) : (
          ""
        )}
        {money ? <p className={styles.money}>{money}</p> : ""}
        <a
          href={link}
          target="_blank"
          className={`${styles.link} ${styles.button}`}
        >
          Получить бонус
        </a>
      </div>
    </div>
  )
}
