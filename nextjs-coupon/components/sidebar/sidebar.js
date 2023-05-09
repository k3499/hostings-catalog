import styles from "./sidebar.module.css"
import Menu from "../menu/menu";
import SideBanner from "../sideBanner/sideBanner";

export default function Sidebar({ slug, catList }) {
  return (
    <aside className={styles.sidebar}>
      <Menu slug={slug} catList={catList}/>
      <SideBanner/>
    </aside>
  )
}
