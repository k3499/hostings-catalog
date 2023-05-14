import styles from './related.module.css';
import Card from '../card/card';
export default function Related({ related }) {
    console.log(related)
    return (
        <section className={styles.related}>
           <div className={styles.wrapper}>
           {related.map((element) => {
            return (<Card key={element.id} site={element.attributes}/>);
           })}
           </div>
        </section>
    );
}