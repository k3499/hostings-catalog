import styles from "./singleHead.module.css"
import utils from "../../styles/utils.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
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
  return (
    <div className={styles.singleHead}>
      <div className={styles.swiper}>
        <Swiper {...swiperParameters}>
          {slides.data.map((slide) => {
            console.log(slide)
            return (
              <SwiperSlide key={slide.id}>
                <Image
                  className={styles.swiperSlideImage}
                  loading="lazy"
                  loader={() => urlBuilder(slide)}
                  src={urlBuilder(slide)}
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
            loading="lazy"
            loader={() => urlBuilder(logo.data)}
            src={urlBuilder(logo.data)}
            alt={siteName + "промокод"}
            fill
          />
        </div>
        {promocode ? (
          <div className={styles.code}>
            {promocode}
            <button className={styles.promoCopy}>
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faCopy}
              ></FontAwesomeIcon>
            </button>
          </div>
        ) : (
          ""
        )}
        {money ? <p className={styles.money}>{money}</p> : ""}
        <a
          href={link}
          target="_blank"
          className={`${styles.link} ${utils.button}`}
        >
          Получить бонус
        </a>
      </div>
    </div>
  )
}
