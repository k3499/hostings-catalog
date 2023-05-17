import styles from "./singleBody.module.css"
import { Open_Sans } from 'next/font/google'
import { MDXRemote } from 'next-mdx-remote'

const open = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400', '600'] })

export default function SingleHead({ title, pageText }) {
  return (
    <div className={styles.singleBody}>
      <meta itemprop="description" content={ "Статья на тему " + title }></meta>
      <h1 className={styles.title} itemprop="headline">{title}</h1>
      <div className={`${styles.text}  ${open.className}`} itemprop="articleBody">
          <MDXRemote {...pageText}  />
      </div>
    </div>
  )
}
