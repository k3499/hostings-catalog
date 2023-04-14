import styles from "./sidebar.module.css"
import Menu from "../menu/menu";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Menu/>
    </aside>
  )
}
