import styles from "./singleBody.module.css"
import { Open_Sans } from 'next/font/google'
import { MDXRemote } from 'next-mdx-remote'

const open = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400', '600'] })

export default function SingleHead({ title, pageText }) {
  return (
    <div className={styles.singleBody}>
      <h1 className={styles.singleBody__title}>{title}</h1>
      <div className={`${styles.singleBody__text}  ${open.className}`}>
          <MDXRemote {...pageText}  />
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
