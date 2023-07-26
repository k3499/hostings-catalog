import styles from "./popular.module.css";
import Card from "../card/card";
export default function Popular({ siteList }) {
  return (
    <section className={styles.popular}>
      <div className={styles.wrapper}>
        {siteList.map((element) => {
          return <Card key={element.id} site={element.attributes} />;
        })}
      </div>
    </section>
  );
}
