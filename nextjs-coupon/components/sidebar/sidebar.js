import styles from "./sidebar.module.css"
import Menu from "../menu/menu";
import SideBanner from "../sideBanner/sideBanner";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Menu/>
      <SideBanner/>
    </aside>
  )
}
