import styles from "./sideBanner.module.css"

export default function SideBanner() {
  return (
    <a className={styles.wrapper} target="_blank">
      <span className={styles.label}>СТАВКИ</span>
      <div className={styles.icon}></div>
    </a>
  )
}
