import styles from "./footer.module.css"

export default function Footer({description}) {
  console.log(description)
  return (
    <footer>
      <div className={styles.footerWrapper}>
        {description}
      </div>
    </footer>
  )
}
