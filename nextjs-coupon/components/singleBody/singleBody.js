import styles from "./singleBody.module.css"
import { Open_Sans } from 'next/font/google'
import { MDXRemote } from 'next-mdx-remote'

const open = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400', '600'] })

export default function SingleHead({ title, pageText }) {
  console.log(pageText)
  return (
    <div className={styles.singleBody}>
      <h1 className={styles.title}>{title}</h1>
      <div className={`${styles.text}  ${open.className}`}>
          <MDXRemote {...pageText}  />
      </div>
    </div>
  )
}
