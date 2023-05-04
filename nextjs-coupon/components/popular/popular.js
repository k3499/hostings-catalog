import styles from './popular.module.css';
import Card from '../card/card';
export default function Popular({ siteList }) {
    return (
        <section className={styles.popular}>
           {/* <h1 className={styles.popular__title}>Популярные сайты</h1> 
           <div className={styles.popular__hr}></div> */}
           <div className={styles.popular__wrapper}>
           {siteList.map((element) => {
            return (<Card key={element.id} site={element.attributes}/>);
           })}
           </div>
        </section>
    );
}