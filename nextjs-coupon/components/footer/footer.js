import styles from "./footer.module.css"
import { MDXRemote } from 'next-mdx-remote'

export default function Footer({description}) {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <MDXRemote {...description}  />
      </div>
    </footer>
  )
}
