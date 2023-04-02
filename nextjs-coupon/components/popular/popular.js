import styles from './popular.module.css';
import Card from '../card/card';

export default function Popular() {
    return (
        <section className={styles.popular}>
           <h1 className={styles.popular__title}>Популярные сайты</h1> 
           <div className={styles.popular__hr}></div>
           <div className={styles.popular__wrapper}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
           </div>
        </section>
    );
}