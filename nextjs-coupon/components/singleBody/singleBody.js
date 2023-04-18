import styles from "./singleBody.module.css"
import { Open_Sans } from 'next/font/google'

const open = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400', '600'] })

export default function SingleHead({ title, text }) {
  return (
    <div className={styles.singleBody}>
      <h1 className={styles.singleBody__title}>{title}</h1>
      <div className={`${styles.singleBody__text}  ${open.className}`}>
        <p>
          {text}
        </p>
        {/* <figure class = "frog">
          <Image
            className={styles.swiperSlideImage}
            loading="lazy"
            src={scrin}
            placeholder="blur"
          />
          <figcaption>Промокод кс го феил</figcaption>
        </figure> */}
      </div>
    </div>
  )
}
