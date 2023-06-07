import styles from "./popup.module.css";

export default function Popup({
  closePopup,
  isOpen,
  message,
  onClick,
}) {

  return (
    <section className={`${styles.popup} ${isOpen && styles.opened}`} onClick={onClick}>
      <div className={styles.container}>
        <button className={styles.close} type="button" onClick={closePopup}></button>
        <p className={styles.message}>{message}</p>
      </div>
    </section>
  )
}