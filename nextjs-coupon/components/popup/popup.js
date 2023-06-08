import styles from "./popup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Popup({
  closePopup,
  isOpen,
  message,
  onClick,
}) {

  return (
    <section className={`${styles.popup} ${isOpen && styles.opened}`} onClick={onClick}>
      <div className={styles.container}>
        <button className={styles.close} type="button" onClick={closePopup}><FontAwesomeIcon style={{fontSize:"15px"}} icon={faXmark}></FontAwesomeIcon></button>
        <p className={styles.message}>{message}</p>
      </div>
    </section>
  )
}